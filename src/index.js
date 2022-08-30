import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';

import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons

import App from './App';

import { 
  BrowserRouter as Router,
  Routes ,Route 
} from 'react-router-dom';

import Disponibilite from './Pages/Disponibilite/Disponibilite';

const Routing = () => {
  return(
    <Router>
      <Routes>
          <Route exact path="*" element={<App/>} />
          <Route path="/home" element={<Disponibilite/>} />
      </Routes>

    </Router>
  )
}

ReactDOM.render(
  <React.StrictMode>
   <Routing /> 
 </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
