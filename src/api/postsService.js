import { api } from "./api";

const postsService = {
  get: async (currentPage) => {
    let offset = currentPage === 1 ? 0 : currentPage * 10;
    console.log(offset);
    const response = await api.get(`?limit=10&offset=${offset}`);
    return response.data;
  }
};

export default postsService;