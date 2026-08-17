import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components';
import { HomePage, ProjectDetailPage, BlogPage } from './pages';
import './styles/globals.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/project/:id" element={<ProjectDetailPage />} />
        <Route path="/blog" element={<BlogPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
