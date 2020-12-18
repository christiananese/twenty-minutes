import axios from 'axios';

const SERVER_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

const CommentAPI = {
  findAll: (slug: string) => axios.get(`${SERVER_BASE_URL}/posts/${slug}/comments`).then((response) => response.data),
  create: async (slug: string, comment: object) => {
    try {
      const response = await axios.post(`${SERVER_BASE_URL}/posts/${slug}/comments`, comment);
      return response;
    } catch (error) {
      return error.response;
    }
  }
};

export default CommentAPI;
