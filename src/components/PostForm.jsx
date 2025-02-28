import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createPost } from '../features/posts/postsSlice';

const PostForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if(!title || !body) return;
    
    try {
      await dispatch(createPost({
        title,
        body,
        userId: 1
      })).unwrap();
      
      navigate('/');
    } catch (err) {
      console.error('Échec de la création du post: ', err);
    }
  };

  return (
    <div style={{
      maxWidth: '800px',
      margin: '0 auto',
      padding: '1rem'
    }}>
      <h2>Créer un nouveau post</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="title" style={{ display: 'block', marginBottom: '0.5rem' }}>Titre:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            style={{ width: '100%', padding: '0.5rem', borderRadius: '0.25rem', border: '1px solid #ced4da' }}
          />
        </div>
        
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="body" style={{ display: 'block', marginBottom: '0.5rem' }}>Contenu:</label>
          <textarea
            id="body"
            rows="8"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            required
            style={{ width: '100%', padding: '0.5rem', borderRadius: '0.25rem', border: '1px solid #ced4da' }}
          ></textarea>
        </div>
        
        <button 
          type="submit"
          style={{
            background: '#0066cc',
            color: 'white',
            border: 'none',
            padding: '0.5rem 1rem',
            borderRadius: '0.25rem',
            cursor: 'pointer'
          }}
        >
          Publier
        </button>
      </form>
    </div>
  );
};

export default PostForm;
