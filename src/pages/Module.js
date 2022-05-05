import React, { useEffect, useState, Fragment } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import { Tab, Disclosure, Transition } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Module = () => {
  const { module, moduleid, coursename } = useParams();
  const [data, setData] = useState(null);
  const [selectedTab, setSelectedTab] = useState("");

  const parameters = {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      module_id: moduleid,
      semester_id: selectedTab,
    }),
  };

  async function Api() {
    try {
      await fetch("/user/ModuleContent", parameters)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log(data.responseData.subject_listing);
          setData(data.responseData);
        });
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    Api();
  }, [selectedTab]);

  return (
    <>
      <Helmet>
        <title>{module} | Easypaper</title>
      </Helmet>
      <div className="max-w-screen-lg mx-auto px-8 mt-20 py-16">
        <div>
          <h1 className="text-5xl md:text-5xl lg:text-6xl">{coursename}</h1>
          <h3 className="text-2xl md:text-3xl mt-8 text-gray-600">{module}</h3>
        </div>
        <div className="mt-6">
          <Tab.Group>
            <Tab.List className="flex space-x-4 rounded-xl bg-white drop-shadow-lg px-5 transition duration-300 ease-in-out overflow-scroll scroll-hide">
              {data &&
                data.semesters.map((index) => (
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
                    onClick={() => setSelectedTab(index.id)}
                  >
                    {({ selected }) => (
                      <button
                        className={selected ? "text-white" : "text-black"}
                      >
                        <p className="w-[90px] md:w-auto">{index.SemName}</p>
                      </button>
                    )}
                  </Tab>
                ))}
            </Tab.List>
            <Tab.Panels className="my-8">
              {data &&
                data.semesters.map((index) => (
                  <Tab.Panel key={index.id}>
                    <Disclosure>
                      {data &&
                        data.subject_listing.map((index) => (
                          <div
                            key={index.id}
                            className="border-l-4 mb-5 rounded-[2px] border-gray-200 hover:border-[#3E6ADB] hover:-translate-x-1 hover:-translate-y-1  group transition duration-500 ease-in-out"
                          >
                            <div className="bg-white drop-shadow-md group-hover:drop-shadow-lg px-4 py-4 ml-4 flex rounded-lg items-center gap-4">
                              <Disclosure.Button>
                                <h1>{index.subject_name}</h1>
                              </Disclosure.Button>
                              <Transition
                                enter="transition duration-100 ease-out"
                                enterFrom="transform scale-95 opacity-0"
                                enterTo="transform scale-100 opacity-100"
                                leave="transition duration-75 ease-out"
                                leaveFrom="transform scale-100 opacity-100"
                                leaveTo="transform scale-95 opacity-0"
                              >
                                <Disclosure.Panel>
                                  {index.content.map((i) => (
                                    <div key={i.id}>
                                      <a
                                        href={i.pdf_file}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="cursor-pointer"
                                      >
                                        {i.year}
                                      </a>
                                    </div>
                                  ))}
                                </Disclosure.Panel>
                              </Transition>
                            </div>
                          </div>
                        ))}
                    </Disclosure>
                  </Tab.Panel>
                ))}
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
    </>
  );
};

export default Module;
