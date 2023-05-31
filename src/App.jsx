import './App.css';
import Header from './components/nav';
import Pagina1 from './components/landing';
import Portfolio from './components/portfolio';
import Libro from './components/libro';
import Footer from './components/footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Pixels from './components/pixelpag';
import ScrollToTop from './components/scrolltop'
import ContactForm from './components/contatti';


function App() {
  
  return (
    <Router>
  
      <ScrollToTop />
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/*" element={<Pagina1 />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/libro" element={<Libro />} />
          <Route path="/pixel" element={<Pixels />} />
          <Route path="/contatti" element={<ContactForm />} />
        </Routes>
        <Footer />

      </div>
    </Router>
  );
}

export default App;
