import useFetch from "@/hooks/useFetch";
import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "x-CSRFToken";
axios.defaults.baseURL = "http://localhost:5000";

if (process.env.NODE_DEV === "production") {
  axios.defaults.baseURL = BASE_URL;
}

/**쿠키를 싣고가야하는 요청 axios */
export const axiosPrivate = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export default axios.create({
  headers: { "Content-Type": "application/json" },
});
