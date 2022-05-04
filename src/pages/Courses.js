import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useParams, Link } from "react-router-dom";
import { LocationMarkerIcon } from "@heroicons/react/outline";

const Courses = () => {
  const { university, courseid, id, coursename } = useParams();
  const [data, setData] = useState(null);

  const parameters = {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      uniId: id,
      cId: courseid,
    }),
  };

  const api = async () => {
    try {
      await fetch("/user/getCoursesDetailNew", parameters)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setData(data.responseData);
        });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    api();
  }, []);

  return (
    <>
      <Helmet>
        <title> {coursename} | Easypaper</title>
      </Helmet>
      <div className="max-w-screen-lg mx-auto px-8 mt-20 py-16">
        <div>
          <h1 className="text-5xl md:text-5xl lg:text-6xl">
            {data && data.courseDetail.name}
          </h1>
          <div className="flex items-center gap-1">
            <LocationMarkerIcon className="w-4 h-4 text-yellow-400" />
            <h3>
              {data && data.courseDetail.university_name}
              {","}
              {data && data.courseDetail.university_address}
            </h3>
          </div>
        </div>
        <div className="mt-6">
          {data &&
            data.courseModules.map((index) => (
              <Link
                key={index.id}
                to={`/${university}/${id}/${coursename}/${courseid}/${index.name}/${index.id}`}
                className="cursor-pointer"
              >
                <div className="bg-white drop-shadow-md rounded-lg mb-3 p-8 flex items-center gap-3 hover:drop-shadow-lg hover:-translate-x-1 hover:-translate-y-1 transition duration-300 ease-in-out">
                  <img
                    src={index.icon}
                    alt="icon"
                    className="w-[80px] p-4 rounded-full"
                    style={{ background: `${index.background_color}` }}
                  />
                  <h3 className="text-xl">{index.name}</h3>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </>
  );
};

export default Courses;
