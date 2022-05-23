import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:8000/api",
  withCredentials: false,
  headers: {
    "Content-Type": "application/json",
  },
});

export default {
  submitFeedback(feedback) {
    return apiClient.post("/feedback", feedback);
  },
};
