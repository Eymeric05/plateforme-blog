import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllPosts } from '../features/posts/postsSlice';
import { fetchAllUsers } from '../features/users/usersSlice';
import Post from '../components/Post';

const HomePage = () => {
  const dispatch = useDispatch();
  const { posts, status: postsStatus, error: postsError } = useSelector(state => state.posts);
  const { status: usersStatus } = useSelector(state => state.users);

  useEffect(() => {
    if (postsStatus === 'idle') {
      dispatch(fetchAllPosts());
    }
    if (usersStatus === 'idle') {
      dispatch(fetchAllUsers());
    }
  }, [dispatch, postsStatus, usersStatus]);

  if (postsStatus === 'loading' || usersStatus === 'loading') {
    return <div style={{ textAlign: 'center', marginTop: '2rem' }}>Chargement des posts...</div>;
  }

  if (postsError) {
    return <div style={{ textAlign: 'center', marginTop: '2rem', color: 'red' }}>Erreur: {postsError}</div>;
  }

  return (
    <div style={{
      maxWidth: '800px',
      margin: '0 auto',
      padding: '1rem'
    }}>
      <h1 style={{ marginBottom: '2rem' }}>Actualités</h1>
      {posts.map(post => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default HomePage;
