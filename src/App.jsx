import "bootstrap/dist/css/bootstrap-grid.min.css";
import './assets/css/App.min.css';

import Content from './assets/pages/Content';
import Navbar from './assets/components/Navbar';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  

  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Content />} />
      </Routes>
    </Router>
  )
}

export default App;
