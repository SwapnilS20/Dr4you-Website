import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {

      setLoading(true);

      try {

        const res = await fetch(url ,{
          headers:{
            "Content-Type": "application/json",
            "Authorization": `Bearer ${import.meta.env.VITE_STRAPI_API_KEY}` // Ensure you have the correct token set in your environment variables
          }
        } );
        const json = await res.json();
        setData(json);
        
        setLoading(false);
        
      } catch (error) {

        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { loading, data, error };
};

export default useFetch;
