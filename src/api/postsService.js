import { api } from "./api";

const postsService = {
  get: async (currentPage) => {
    let offset = currentPage === 1 ? 0 : currentPage * 10;
    const response = await api.get(`?limit=10&offset=${offset}`);
    return response.data;
  },
  post: async (data) => {
    const request = await api.post('/', data);
    return request.data;
  }
};

export default postsService;