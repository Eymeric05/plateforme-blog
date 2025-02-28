import axios from 'axios';

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
});

export const fetchPosts = async () => {
  const response = await api.get('/posts');
  return response.data;
};

export const fetchPostById = async (id) => {
  const response = await api.get(`/posts/${id}`);
  return response.data;
};

export const fetchCommentsByPostId = async (postId) => {
  const response = await api.get(`/posts/${postId}/comments`);
  return response.data;
};

export const fetchUsers = async () => {
  const response = await api.get('/users');
  return response.data;
};

export const addPost = async (post) => {
  const response = await api.post('/posts', post);
  return response.data;
};

export const addComment = async (comment) => {
  const response = await api.post('/comments', comment);
  return response.data;
};
