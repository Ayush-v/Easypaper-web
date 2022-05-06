import { useState, useEffect } from "react";

const useFetch = ({ url, method, body }) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const parameters = {
      method: method,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams(body),
    };

    console.log(url, body, method);

    async function apiFunc() {
      try {
        await fetch(url, parameters)
          .then((res) => {
            if (!res.ok) {
              throw Error("something went wrong while getting the resources");
            }
            return res.json();
          })
          .then((data) => {
            setData(data.responseData);
            setIsPending(false);
            setError(null);
          });
      } catch (err) {
        console.log(err);
        setError(err.message);
        setIsPending(false);
      }
    }

    apiFunc();

    return () => console.log("cleanup");
  }, [url, method, body]);

  return { data, isPending, error };
};

export default useFetch;
