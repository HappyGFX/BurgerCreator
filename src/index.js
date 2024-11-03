import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/main.css';
import BurgerBuilder from './components/BurgerBuilder/BurgerBuilder';
import reportWebVitals from './reportWebVitals';
import Menu from "./components/Menu/Menu";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Menu/>
        <BurgerBuilder/>
    </React.StrictMode>
);

reportWebVitals();
