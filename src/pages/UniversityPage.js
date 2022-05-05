import React, { useEffect, useState, Fragment } from "react";
import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Tab } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const UniversityPage = () => {
  const { id, university } = useParams();
  const [coursesData, setCoursedData] = useState(null);
  const [type, setType] = useState("");

  useEffect(() => {
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
            setCoursedData(data.responseData);
          });
      } catch (err) {
        console.log(err);
      }
    };

    api();
  }, [type]);

  return (
    <>
      <Helmet>
        <title> {university} | Easypaper</title>
      </Helmet>
      <div className="max-w-screen-lg mx-auto px-8 mt-20 py-16">
        <h1 className="text-5xl md:text-5xl lg:text-6xl text-center">
          {university}
        </h1>
        <h3 className="text-2xl md:text-3xl mt-8 text-center text-gray-600">
          Select Your Course
        </h3>
        <div className="mt-6">
          <Tab.Group>
            <Tab.List className="flex space-x-4 md:space-x-2 rounded-xl bg-white drop-shadow-lg px-5 transition duration-300 ease-in-out overflow-scroll scroll-hide">
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
                          : "text-black/[0.4] hover:border-b-4 hover:border-[#314BD5]/[0.4] hover:text-black/[0.6] transition duration-500 ease-in-out"
                      )
                    }
                  >
                    {({ selected }) => (
                      <button
                        className={selected ? "text-white" : "text-black"}
                        onClick={() => setType(index.id)}
                      >
                        <p className="min-w-[90px]">{index.name}</p>
                      </button>
                    )}
                  </Tab>
                ))}
            </Tab.List>
            <Tab.Panels className="my-8">
              {coursesData &&
                coursesData.course_types.map((index) => (
                  <Tab.Panel key={index.id}>
                    {coursesData &&
                      coursesData.courseList.map((index) => (
                        <Link
                          key={index.courseId}
                          to={`/${university}/${id}/${index.name}/${index.courseId}`}
                        >
                          <div className="border-l-4 mb-5 rounded-[2px] border-gray-200 hover:border-[#3E6ADB] hover:-translate-x-1 hover:-translate-y-1  group transition duration-500 ease-in-out">
                            <div className="bg-white drop-shadow-md group-hover:drop-shadow-lg px-4 py-4 ml-4 flex rounded-lg items-center gap-4">
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
      </div>
    </>
  );
};

export default UniversityPage;
