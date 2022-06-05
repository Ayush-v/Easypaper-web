import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useParams, Link } from "react-router-dom";
import { LocationMarkerIcon } from "@heroicons/react/outline";
import Spinner from "../components/Spinner";
import { motion } from "framer-motion";

const container = {
  hidden: {
    opacity: 0,
    translateY: 30,
  },
  show: {
    opacity: 1,
    translateY: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.2,
      when: "beforeChildren",
    },
  },
};

const item = {
  hidden: { opacity: 0, translateY: 30 },
  show: { opacity: 1, translateY: 0 },
};

const Courses = () => {
  const { university, courseid, id, coursename } = useParams();
  const [data, setData] = useState(null);
  const [loading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
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
            if (!res.ok) {
              throw Error("something went wrong while getting the resources");
            }
            return res.json();
          })
          .then((data) => {
            setData(data.responseData);
            setIsLoading(false);
            setError(null);
          });
      } catch (err) {
        setError(err.message);
        setIsLoading(false);
      }
    };

    api();
  }, [courseid, id]);

  return (
    <>
      <Helmet>
        <title> {coursename} | Easypaper</title>
      </Helmet>
      <div className="max-w-screen-lg mx-auto px-8 mt-20 py-16">
        <div>
          <h1 className="text-5xl md:text-5xl lg:text-6xl">{coursename}</h1>

          <div className="flex items-center gap-1">
            <LocationMarkerIcon className="w-4 h-4 text-yellow-400" />
            <h3 className="text-gray-600">
              {data && data.courseDetail.university_name}
              {","}
              {data && data.courseDetail.university_address}
            </h3>
          </div>
        </div>
        {error && error}
        {loading ? (
          <Loading />
        ) : (
          <motion.div
            className="mt-6"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {data &&
              data.courseModules.map((index) => (
                <Link
                  key={index.id}
                  to={`/${university}/${id}/${coursename}/${courseid}/${index.name}/${index.id}/${index.layout_type}`}
                  className="cursor-pointer"
                >
                  <motion.div
                    variants={item}
                    className="bg-white shadow-md rounded-lg mb-3 p-8 flex items-center gap-3 hover:shadow-lg hover:-translate-x-1 hover:-translate-y-1 transition duration-300 ease-in-out"
                  >
                    <img
                      src={index.icon}
                      alt="icon"
                      className="w-[80px] p-4 rounded-full"
                      style={{ background: `${index.background_color}` }}
                    />
                    <h3 className="text-xl">{index.name}</h3>
                  </motion.div>
                </Link>
              ))}
          </motion.div>
        )}
      </div>
    </>
  );
};

export default Courses;

function Loading() {
  return (
    <div className="flex justify-center mt-44 sm:mt-28">
      <Spinner />
    </div>
  );
}
