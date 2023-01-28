import "bootstrap/dist/css/bootstrap-grid.min.css";
import './assets/css/App.min.css';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import About from './assets/components/content/About/About';
import Projects from './assets/components/content/Projects/Projects';
import Cv from './assets/components/content/Cv/Cv';
import Contactinfo from './assets/components/content/Contact/Contactinfo';
import Footer from './assets/components/Footer';
import Navbar from './assets/components/Navigation/Navbar';

function App () {


  return (
    <Router>

      <Navbar />
      <main className='container-fluid px-0' id="mainContent">

        <Routes>
          <Route index element={ <About /> } />
          <Route path="/about" element={ <About /> } />
          <Route path="/projects" element={ <Projects /> } />
          <Route path="/cv" element={ <Cv /> } />
          <Route path="/contact" element={ <Contactinfo /> } />
        </Routes>

      </main>
      <Footer />

    </Router>


  )
}

export default App;
