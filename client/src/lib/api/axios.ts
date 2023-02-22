import useFetch from "@/hooks/useFetch";
import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;
axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "x-CSRFToken";

/**쿠키를 싣고가야하는 요청 axios */
export const axiosPrivate = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export default axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
});
