import axios from "axios";
import { useEffect, useState } from "react";

export default function useAxiosGet(url) {
  const [request, setRequest] = useState({
    loading: false,
    data: null,
    error: false,
  });
  const cachedData = JSON.parse(localStorage.getItem("data"));

  useEffect(() => {
    const fetchData = async () => {
      setRequest(() => ({
        loading: true,
        data: null,
        error: false,
      }));
      try {
        console.log("fetching data...");
        const response = await axios.get(url);
        const data = response.data;
        setRequest(() => ({
          loading: false,
          data,
          error: false,
        }));
      } catch (error) {
        setRequest(() => ({
          loading: false,
          data: null,
          error,
        }));
      }
    };
    if (
      url ===
        "https://geo.ipify.org/api/v2/country,city?apiKey=at_sky8VeFQENaUN22Jf8beDQPhvka9Y&ipAddress=&domain=" &&
      cachedData
    ) {
      setRequest(() => ({ loading: false, data: cachedData, error: false }));
    } else {
      fetchData();
    }
  }, [url]);

  return request;
}