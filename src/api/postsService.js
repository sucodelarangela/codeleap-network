import { api } from "./api";

const postsService = {
  get: async (currentPage) => {
    let offset = currentPage === 1 ? 0 : currentPage * 10 - 10;
    const response = await api.get(`?limit=10&offset=${offset}`);
    return response.data;
  },
  post: async (data) => {
    const response = await api.post('/', data);
    return response.data;
  },
  delete: async (id) => {
    const response = await api.delete(`${id}/`);
    return response.data;
  }
};

export default postsService;