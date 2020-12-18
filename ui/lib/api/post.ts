import axios from 'axios';

const SERVER_BASE_URL = 'http://localhost:5000/api';

const PostAPI = {
  findAll: () => axios.get(`${SERVER_BASE_URL}/posts`),
  findOne: (slug: string) => axios.get(`${SERVER_BASE_URL}/posts/${slug}`)
};

export default PostAPI;
