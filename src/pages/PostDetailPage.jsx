import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSinglePost } from '../features/posts/postsSlice';
import { fetchComments } from '../features/comments/commentsSlice';
import { fetchAllUsers } from '../features/users/usersSlice';
import Comment from '../components/Comment';
import CommentForm from '../components/CommentForm';

const PostDetailPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  
  const { currentPost, status: postStatus, error: postError } = useSelector(state => state.posts);
  const { comments, status: commentsStatus } = useSelector(state => state.comments);
  const { users, status: usersStatus } = useSelector(state => state.users);
  
  useEffect(() => {
    // Assurez-vous que l'ID est correctement traité
    if (id) {
      dispatch(fetchSinglePost(id));
      dispatch(fetchComments(id));
    }
    
    if (usersStatus === 'idle') {
      dispatch(fetchAllUsers());
    }
  }, [dispatch, id, usersStatus]);
  
  if (postStatus === 'loading' || commentsStatus === 'loading') {
    return <div style={{ textAlign: 'center', marginTop: '2rem' }}>Chargement du post...</div>;
  }
  
  if (postError) {
    return <div style={{ textAlign: 'center', marginTop: '2rem', color: 'red' }}>Erreur: {postError}</div>;
  }
  
  if (!currentPost) {
    return <div style={{ textAlign: 'center', marginTop: '2rem' }}>Post non trouvé</div>;
  }
  
  const author = users.find(user => user.id === currentPost.userId) || { name: 'Auteur inconnu' };
  
  return (
    <div style={{
      maxWidth: '800px',
      margin: '0 auto',
      padding: '1rem'
    }}>
      <div style={{
        border: '1px solid #dee2e6',
        borderRadius: '0.25rem',
        padding: '1.5rem',
        marginBottom: '2rem'
      }}>
        <h1 style={{ marginTop: 0 }}>{currentPost.title}</h1>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>{currentPost.body}</p>
        <div style={{ 
          color: '#6c757d',
          marginTop: '1rem',
          borderTop: '1px solid #dee2e6',
          paddingTop: '0.5rem'
        }}>
          Publié par: {author.name}
        </div>
      </div>
      
      <div>
        <h3 style={{ marginBottom: '1rem' }}>Commentaires ({comments.length})</h3>
        {comments.length > 0 ? (
          comments.map(comment => (
            <Comment key={comment.id} comment={comment} />
          ))
        ) : (
          <p>Aucun commentaire pour le moment.</p>
        )}
        
        <CommentForm postId={id} />
      </div>
    </div>
  );
};

export default PostDetailPage;
