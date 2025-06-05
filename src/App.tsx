import Header from './components/Navigation/Header';
import Footer from './components/Navigation/Footer';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Sponsors from './pages/Sponsors';

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="sticky top-0 z-50">
        <Header />
      </div>
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/patrocinadores" element={<Sponsors />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}