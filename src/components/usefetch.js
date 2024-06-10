import { useState, useEffect } from "react";
import fetch from "node-fetch";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MmRkNWVkYmExZmY1ZTRhMDAxODNjMWQ5NjFkNjQ2NCIsInN1YiI6IjY2NTc1ODcwNjQ1M2ViYjliNTBjOGE1ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yqucD4WyPgMRTzaBAddltKw_MDy_20HcGUf0j4Tbtt8",
    },
  };
  useEffect(() => {
    fetch(url, options)
      .then((response) => {
        if (!response.ok) {
          throw Error("could not fetch data for that resource");
        }
        return response.json();
      })
      .then((response) => {
        setData(response.results);
        setIsPending(false);
        // console.log(response.results);
      })
      .catch((err) => {
        setIsPending(false);
        setError(err.message);
      });
  }, [url]);
  return { data, isPending, error };
};

export default useFetch;
