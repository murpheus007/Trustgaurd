import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { InputsProvider } from './contexts/InputContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
   <React.StrictMode>
      <InputsProvider>
         <App />
      </InputsProvider>
   </React.StrictMode>,
);
