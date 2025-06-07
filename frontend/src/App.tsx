import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import VerifyTenant from './pages/VerifyTenant';
import Dashboard from './pages/Dashboard';
import NotFound from './pages/NotFound';
import ProtectedRoute from './components/auth/ProtectedRoute';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
        <Route path="verify" element={<ProtectedRoute><VerifyTenant /></ProtectedRoute>} />
      </Route>
      <Route path="admin" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
    </Routes>
  );
}
