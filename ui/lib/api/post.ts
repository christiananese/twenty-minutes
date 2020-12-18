import axios from 'axios';

const SERVER_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

const PostAPI = {
  findAll: () => axios.get(`${SERVER_BASE_URL}/posts`),
  findOne: (slug: string) => axios.get(`${SERVER_BASE_URL}/posts/${slug}`)
};

export default PostAPI;
