import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchPosts, fetchPostById, addPost } from '../../services/api';

export const fetchAllPosts = createAsyncThunk(
  'posts/fetchAllPosts',
  async () => {
    return await fetchPosts();
  }
);

export const fetchSinglePost = createAsyncThunk(
  'posts/fetchSinglePost',
  async (id) => {
    return await fetchPostById(id);
  }
);

export const createPost = createAsyncThunk(
  'posts/createPost',
  async (post) => {
    return await addPost(post);
  }
);

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [],
    currentPost: null,
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllPosts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAllPosts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.posts = action.payload;
      })
      .addCase(fetchAllPosts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchSinglePost.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchSinglePost.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.currentPost = action.payload;
      })
      .addCase(fetchSinglePost.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.posts.unshift(action.payload);
      });
  },
});

export default postsSlice.reducer;
