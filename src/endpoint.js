import axios from 'axios';

export const getPosts = async () => {
  const posts = await axios.get(`${import.meta.env.VITE_BASE_URL}posts`);
  return posts.data;
};

export const getUsers = async () => {
  const users = await axios.get(`${import.meta.env.VITE_BASE_URL}users`);
  return users.data;
};

export const addPost = async (value) => {
  const res = await axios.post(`${import.meta.env.VITE_BASE_URL}posts`, {
    userId: 1,
    title: 'Testing',
    body: value
  });
  return res.data;
};
