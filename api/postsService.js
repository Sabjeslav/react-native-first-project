import axiosInstance from "./axiosInstance";

export const fetchPosts = async () => {
  return axiosInstance({
    method: "get",
    url: "/posts",
  })
};
