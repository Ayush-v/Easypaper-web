import React, { useEffect, useState, Fragment } from "react";
import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Tab } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const UniversityPage = () => {
  // const location = useLocation();

  // const { title, image } = location.state;

  const { id, university } = useParams();
  const [coursesData, setCoursedData] = useState(null);
  const [type, setType] = useState("");

  const parameters = {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      uniId: id,
      type: type,
    }),
  };

  const api = async () => {
    try {
      await fetch("/user/getAllCourses", parameters)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log(data.responseData.courseList[0].background_color);
          setCoursedData(data.responseData);
        });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    api();
  }, [type]);

  return (
    <>
      <Helmet>
        <title> {university} | Easypaper</title>
      </Helmet>
      <section className="max-w-screen-lg mx-auto px-8 mt-20">
        <h1 className="text-5xl md:text-5xl lg:text-6xl text-center">
          {university}
        </h1>
        <h3 className="text-3xl md:text-4xl lg:text-5xl mt-5">
          Select Your Course
        </h3>
        <div className="mt-6">
          <Tab.Group>
            <Tab.List className="flex space-x-1 rounded-xl bg-white drop-shadow-lg overflow-hidden px-5">
              {coursesData &&
                coursesData.course_types.map((index) => (
                  <Tab
                    as={Fragment}
                    key={index.id}
                    className={({ selected }) =>
                      classNames(
                        "w-full py-4 text-sm font-medium text-black",
                        "focus:outline-none",
                        selected
                          ? "border-b-4 border-[#314BD5]"
                          : "text-black/[0.4] hover:border-b-4 hover:border-[#314BD5]/[0.4] hover:text-black/[0.6]"
                      )
                    }
                  >
                    {({ selected }) => (
                      <button
                        className={selected ? " text-white" : " text-black"}
                        onClick={() => setType(index.id)}
                      >
                        {index.name}
                      </button>
                    )}
                  </Tab>
                ))}
            </Tab.List>
            <Tab.Panels className="mt-8">
              {coursesData &&
                coursesData.course_types.map((index) => (
                  <Tab.Panel key={index.id}>
                    {coursesData &&
                      coursesData.courseList.map((index) => (
                        <Link
                          key={index.courseId}
                          to={`/${university}/${id}/${index.name}/${index.courseId}`}
                        >
                          <div
                            className={`border-l-4 mb-5 rounded-[2px] border-[${index.background_color}]`}
                          >
                            <div className="bg-white drop-shadow-md px-4 py-4 ml-4 flex rounded-lg items-center gap-4">
                              <img
                                src={index.small_icon}
                                alt="icon"
                                className="max-w-[60px] h-auto"
                              />
                              <div>
                                <h1 className="text-xl md:text-2xl">
                                  {index.name}
                                </h1>
                                <p className="text-black/[0.55]">
                                  rating: {index.rating}/5
                                </p>
                              </div>
                            </div>
                          </div>
                        </Link>
                      ))}
                  </Tab.Panel>
                ))}
            </Tab.Panels>
          </Tab.Group>
        </div>
      </section>
    </>
  );
};

export default UniversityPage;
