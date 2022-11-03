import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./components/app";
import ServicesApi from "./services-api";



const root = ReactDOM.createRoot(document.getElementById('root'));

const service = new ServicesApi()

service.getStarships('5')

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);



