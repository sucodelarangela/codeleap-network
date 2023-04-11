import axios from "axios";
import { api } from "./api";

const postsService = {
  get: async () => {
    const response = await api.get();
    return response.data;
  }
};

export default postsService;