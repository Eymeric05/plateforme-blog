import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createComment } from '../features/comments/commentsSlice';

const CommentForm = ({ postId }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if(!name || !email || !body) return;
    
    dispatch(createComment({
      postId,
      name,
      email,
      body
    }));
    
    setName('');
    setEmail('');
    setBody('');
  };

  return (
    <div style={{
      border: '1px solid #dee2e6',
      borderRadius: '0.25rem',
      padding: '1rem',
      marginTop: '2rem'
    }}>
      <h3 style={{ marginTop: 0 }}>Ajouter un commentaire</h3>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="name" style={{ display: 'block', marginBottom: '0.5rem' }}>Nom:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={{ width: '100%', padding: '0.5rem', borderRadius: '0.25rem', border: '1px solid #ced4da' }}
          />
        </div>
        
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem' }}>Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ width: '100%', padding: '0.5rem', borderRadius: '0.25rem', border: '1px solid #ced4da' }}
          />
        </div>
        
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="body" style={{ display: 'block', marginBottom: '0.5rem' }}>Commentaire:</label>
          <textarea
            id="body"
            rows="4"
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

export default CommentForm;
