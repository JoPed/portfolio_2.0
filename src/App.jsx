import "bootstrap/dist/css/bootstrap-grid.min.css";
import './assets/css/App.min.css';
import "./assets/css/Navigation.min.css";

import Content from './assets/pages/Content';
import Navbar from './assets/components/Navigation/Navbar';
import ProgressBar from "./assets/components/ProgressBar";

function App () {


  return (
    <>
      <Navbar />
      <ProgressBar />
      <Content />
    </>


  )
}

export default App;
