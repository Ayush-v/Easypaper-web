import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";

const Courses = () => {
  const { courseid, id, coursename } = useParams();
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
          console.log(data.responseData);
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
      <div className="mt-16">
        <div>
          <h1>Courses - {data && data.courseDetail.name}</h1>
          <h1>university - {data && data.courseDetail.university_name}</h1>
        </div>
        <div>
          {data &&
            data.courseModules.map((index) => (
              <div key={index.id}>
                <p style={{ color: `${index.background_color}` }}>
                  {index.name}
                </p>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Courses;
