import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Service from './pages/Service';
import Contact from './pages/Contact';
import Quote from './pages/Quote';
import Pricing from './pages/Pricing';
import Features from './pages/Features';
import Team from './pages/Team';
import Testimonial from './pages/Testimonial';
import Blog from './pages/Blog';
import Detail from './pages/Detail';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Carousel />
            <Home />
          </>
        } />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/quote" element={<Quote />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/features" element={<Features />} />
        <Route path="/team" element={<Team />} />
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
      <Footer />
      <BackToTop />
    </Router>
  );
}

export default App;
