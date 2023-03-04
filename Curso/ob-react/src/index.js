import React from 'react';
import ReactDOM from 'react-dom/client';

// Añadimos Bootstrap a nuestro proyecto
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
// ! Importante: Los estilos propios, deben ir debajo de Bootstrap para que no lo pise.
import './index.css';
// eslint-disable-next-line no-unused-vars
import App from './App';
import reportWebVitals from './reportWebVitals';
// eslint-disable-next-line no-unused-vars
import AppRoutingOne from './AppRoutingOne';
import AppRoutingFinal from './AppRoutingFinal';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <AppRoutingFinal />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
