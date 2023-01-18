import "bootstrap/dist/css/bootstrap-grid.min.css";
import './assets/css/App.min.css';
import "./assets/css/Navigation.min.css";

import Content from './assets/pages/Content';
import ProgressBar from "./assets/components/ProgressBar";

function App () {


  return (
    <>
      <ProgressBar />
      <Content />
    </>


  )
}

export default App;
