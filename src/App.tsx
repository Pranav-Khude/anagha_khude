import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header, ScrollToTop } from './components';
import { HomePage, ProjectDetailPage, BlogPage, WorkPage, CVPage, ContactPage, ObservationsPage, AboutPage } from './pages';
import { PlacesPage } from './pages/PlacesPage';
import './styles/globals.css';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/project/:id" element={<ProjectDetailPage />} />
        <Route path="/places" element={<PlacesPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/observations" element={<ObservationsPage />} />
        <Route path="/cv" element={<CVPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;