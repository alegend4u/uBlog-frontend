import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:8000/api/v2",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  getAllPosts() {
    return apiClient.get("/pages/?type=timeline.Post&fields=intro,body,date");
  },
  getIndexPages() {
    return apiClient.get("/pages/?type=timeline.IndexPage&fields=description");
  },
  getPost(slug) {
    return apiClient.get(
      "/pages/?fields=intro,date,body&type=timeline.Post&slug=" + slug
    );
  },
};
