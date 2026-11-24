import { Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Menu from './components/Menu.jsx';
import Sidebar from './components/Sidebar.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import Books from './pages/Books.jsx';
import Stationery from './pages/Stationery.jsx';
import Uniforms from './pages/Uniforms.jsx';
import Contact from './pages/Contact.jsx';

export default function App() {
  return (
    <>
      <Header />
      <Menu />
      <div className="container">
        <Sidebar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/books" element={<Books />} />
            <Route path="/stationery" element={<Stationery />} />
            <Route path="/uniforms" element={<Uniforms />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<h2>Page not found</h2>} />
          </Routes>
        </main>
      </div>
      <Footer />
    </>
  );
}
