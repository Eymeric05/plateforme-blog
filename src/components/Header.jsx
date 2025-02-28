import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header style={{
      background: '#f8f9fa',
      padding: '1rem',
      marginBottom: '2rem'
    }}>
      <nav style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <Link to="/" style={{ fontSize: '1.5rem', fontWeight: 'bold', textDecoration: 'none', color: '#212529' }}>
          Plateforme de Posts
        </Link>
        <div>
          <Link to="/" style={{ marginRight: '1rem', textDecoration: 'none', color: '#495057' }}>
            Accueil
          </Link>
          <Link to="/add-post" style={{ textDecoration: 'none', color: '#495057' }}>
            Ajouter un post
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
