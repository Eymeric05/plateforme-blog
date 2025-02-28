import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Post = ({ post }) => {
  const { users } = useSelector(state => state.users);
  const author = users.find(user => user.id === post.userId) || { name: 'Auteur inconnu' };
  
  return (
    <div style={{
      border: '1px solid #dee2e6',
      borderRadius: '0.25rem',
      padding: '1rem',
      marginBottom: '1rem'
    }}>
      <h2 style={{ marginTop: 0 }}>
        <Link to={`/posts/${post.id}`} style={{ color: '#0066cc', textDecoration: 'none' }}>
          {post.title}
        </Link>
      </h2>
      <p>{post.body}</p>
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        marginTop: '1rem',
        borderTop: '1px solid #dee2e6',
        paddingTop: '0.5rem'
      }}>
        <span style={{ color: '#6c757d' }}>Par: {author.name}</span>
        <Link to={`/posts/${post.id}`} style={{
          background: '#0066cc',
          color: 'white',
          padding: '0.5rem 1rem',
          borderRadius: '0.25rem',
          textDecoration: 'none'
        }}>
          Lire plus
        </Link>
      </div>
    </div>
  );
};

export default Post;
