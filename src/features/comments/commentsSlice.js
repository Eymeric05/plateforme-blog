import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchCommentsByPostId, addComment } from '../../services/api';

export const fetchComments = createAsyncThunk(
  'comments/fetchComments',
  async (postId) => {
    return await fetchCommentsByPostId(postId);
  }
);

export const createComment = createAsyncThunk(
  'comments/createComment',
  async (comment) => {
    return await addComment(comment);
  }
);

const commentsSlice = createSlice({
  name: 'comments',
  initialState: {
    comments: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchComments.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchComments.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.comments = action.payload;
      })
      .addCase(fetchComments.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(createComment.fulfilled, (state, action) => {
        state.comments.push(action.payload);
      });
  },
});

export default commentsSlice.reducer;
