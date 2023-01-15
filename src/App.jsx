import "bootstrap/dist/css/bootstrap-grid.min.css";
import './assets/css/App.min.css';
import "./assets/css/Navigation.min.css";

import Content from './assets/pages/Content';
import Navbar from './assets/components/Navigation/Navbar';

// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App () {


  return (
    // <Router >

    //   <Navbar />

    //   <div className="mainContainer" id="mainContainer">


    //   </div>

    //   <Routes>
    //     <Route path="/" element={ <Content /> } />
    //   </Routes>

    //   <Footer />

    // </Router>
    <>
      <Navbar />
      <Content />
    </>


  )
}

export default App;
