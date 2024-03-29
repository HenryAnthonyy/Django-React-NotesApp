import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { HashRouter as Router } from 'react-router-dom'
import { AppProvider } from './context/AppContext';

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
   <Router> 
     <AppProvider>
     <  App />
     </AppProvider>
     </Router>
  </React.StrictMode>,

);


