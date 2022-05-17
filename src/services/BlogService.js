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
    return apiClient.get(
      "/pages/?type=timeline.Post&fields=intro,body,last_published_at"
    );
  },
  getIndexPages() {
    return apiClient.get("/pages/?type=timeline.IndexPage&fields=description");
  },
  getPostBySlug(slug) {
    return apiClient
      .get("/pages/?type=timeline.Post&slug=" + slug)
      .then((response) => {
        let post_id = response.data.items[0].id;
        return this.getPostById(post_id);
      })
      .catch((error) => console.log(error));
  },
  getPostById(post_id) {
    return apiClient.get("/pages/" + post_id);
  },
};
