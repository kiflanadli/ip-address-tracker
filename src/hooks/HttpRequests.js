import axios from "axios";
import { useEffect, useState } from "react";

export default function useAxiosGet(url) {
  const [request, setRequest] = useState({
    loading: false,
    data: null,
    error: false,
  });
  // cached data (if any) is a client's ip data
  let cachedData;
  if (sessionStorage) cachedData = JSON.parse(sessionStorage.getItem("data"));

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
    // use cached data (if any) if there is no ip or domain being inputted
    if (
      url ===
        "https://geo.ipify.org/api/v2/country,city?apiKey=at_1Xtc0uUHqQCcBsS6UNLaHhNjJ2SeO&ipAddress=&domain=" &&
      cachedData
    ) {
      setRequest(() => ({ loading: false, data: cachedData, error: false }));
    } else {
      fetchData();
    }
  }, [url]);

  return request;
}
