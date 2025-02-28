import { Link } from 'react-router-dom';
import Header from '../components/Header';

const NotFoundPage = () => {
  return (
    <div className="page not-found-page">
      <Header />
      
      <div className="container">
        <div className="error-content">
          <div className="error-code">404</div>
          <h1>Page non trouvée</h1>
          <p>
            Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
          </p>
          <Link to="/" className="btn btn-primary">
            Retour à l'accueil
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
