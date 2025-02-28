import { configureStore } from '@reduxjs/toolkit';
import postsReducer from '../features/posts/postsSlice';
import commentsReducer from '../features/comments/commentsSlice';
import usersReducer from '../features/users/usersSlice';

export const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([]),
  reducer: {
    posts: postsReducer,
    comments: commentsReducer,
    users: usersReducer,
  },
});
