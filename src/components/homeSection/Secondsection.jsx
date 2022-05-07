import React from "react";
import { ArrowSmRightIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";

import puc from "../../assets/uni/puc.webp";
import gndu from "../../assets/uni/gndu.webp";
import pup from "../../assets/uni/pu_p.webp";
import { Fade } from "react-reveal";

const unidata = [
  {
    id: "0",
    uniId: "28",
    title: "Panjab University Chandigarh",
    describe:
      "Previous years paper of both UG & PG Courses under PANJAB UNIVERSITY (PU CHANDIGARH) are provided. Just click the link below.",
    link: "/",
    image: puc,
  },

  {
    id: "2",
    uniId: "44",
    title: "Guru Nanak Dev University (GNDU)",
    describe:
      "Previous years paper of both UG & PG Courses under GURU NANAK DEV UNIVERSITY AMRITSAR are provided. Just click the link below.",
    link: "/",
    image: gndu,
  },
  {
    id: "3",
    uniId: "43",
    title: "Punjabi University Patiala",
    describe:
      "Previous years paper of both UG & PG Courses under PUNJABI UNIVERSITY (PU PATIALA) are provided. Just click the link below.",
    link: "/",
    image: pup,
  },
];

const Secondsection = () => {
  // const [uniData, setUniData] = useState(null);

  // async function api() {
  //   try {
  //     await axios
  //       .post(`${process.env.REACT_APP_ALL_UNIVERSITY}`)
  //       .then((res) => {
  //         return res.data;
  //       })
  //       .then((data) => {
  //         setUniData(data.responseData.universityList);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

  // useEffect(() => {
  //   api();
  // }, []);

  return (
    <>
      <section id="university" className="max-w-screen-lg mx-auto p-8 my-20">
        <h1 className="text-3xl md:text-4xl max-w-[450px] w-auto">
          We are happy to Say that we work with
        </h1>
        <Fade bottom cascade>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-28 justify-items-center mt-24">
            {unidata.map((index) => (
              <div key={index.id}>
                <UniCols
                  title={index.title}
                  desc={index.describe}
                  to={`/${index.title.trim()}/${index.uniId}`}
                  image={index.image}
                />
              </div>
            ))}
          </div>
        </Fade>
      </section>
    </>
  );
};

export default Secondsection;

const UniCols = ({ title, desc, to, image, state }) => {
  return (
    <div className="bg-white drop-shadow-lg rounded-[30px] relative max-w-[450px] h-full p-4">
      <div className="absolute -top-24 left-3">
        <img src={image} alt="uni" className="w-[250px] h-[250px]" />
      </div>

      <div className="flex flex-col mt-36 items-start text-left">
        <h1 className="text-xl md:text-3xl text-zinc-800">{title}</h1>
        <p className="text-sm md:text-md text-gray-400 mt-2 md:mt-4">{desc}</p>
        <Link
          to={to}
          // state={state}
          className="p-1 hover:ring-2 ring-gray-600 rounded-full transition duration-300 mt-6"
        >
          <div className="flex items-center gap-5 bg-white rounded-full drop-shadow-md px-5 py-3 md:px-8 md:py-4">
            <h1 className="text-lg">Visit Course</h1>
            <ArrowSmRightIcon className="h-6 w-6 -rotate-[32deg]" />
          </div>
        </Link>
      </div>
    </div>
  );
};
