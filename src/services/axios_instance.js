import axios from "axios";

export default function getAxiosInstance(link) {
  return axios.create({
    baseURL: `${import.meta.env.VITE_BASE_URL}`,
    params: {
      url: link,
    },
    headers: {
      Accept: "application/json",
    },
  });
}
