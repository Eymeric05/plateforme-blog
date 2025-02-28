const Comment = ({ comment }) => {
    return (
      <div style={{
        border: '1px solid #dee2e6',
        borderRadius: '0.25rem',
        padding: '1rem',
        marginBottom: '1rem',
        background: '#f8f9fa'
      }}>
        <h4 style={{ marginTop: 0, color: '#343a40' }}>{comment.name}</h4>
        <p style={{ marginBottom: '0.5rem' }}>{comment.body}</p>
        <div style={{ color: '#6c757d', fontSize: '0.875rem' }}>
          Email: {comment.email}
        </div>
      </div>
    );
  };
  
  export default Comment;
  