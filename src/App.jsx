import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './app/store';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import PostDetailPage from './pages/PostDetailPage';
import AddPostPage from './pages/AddPostPage';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/posts/:id" element={<PostDetailPage />} />
          <Route path="/add-post" element={<AddPostPage />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
