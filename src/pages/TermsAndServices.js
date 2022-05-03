import axios from "axios";
import React, { useEffect, useState } from "react";

const TermsAndServices = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .post("/user/getPages")
      .then((res) => {
        return res.data;
      })
      .then((data) => {
        setData(data.responseData.pages[0].termsCondition);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="max-w-screen-lg mx-auto p-8 my-20">
        <div
          dangerouslySetInnerHTML={{ __html: data && data }}
          className="policies"
        />
      </div>
    </>
  );
};

export default TermsAndServices;
