import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { darkMode } from './theme';
import { ThemeProvider } from '@mui/material/styles'
import { BrowserRouter } from 'react-router-dom';
import { store } from './redux/store'
import { Provider } from 'react-redux';
import "./styles/theme-main.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store = {store}>
    <BrowserRouter>
      <ThemeProvider theme={darkMode}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </Provider>

);