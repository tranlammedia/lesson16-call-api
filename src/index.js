import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import HomePage from './pages/HomePage/HomePage';
import ProductListPage from './pages/ProductsPage/ProductListPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App />}>
                    <Route path='/' element={<HomePage />}></Route>
                    <Route path='products' element={<ProductListPage />}></Route>
                    <Route path='*' element={<NotFoundPage />}></Route>
                </Route>

            </Routes>

        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);


reportWebVitals();
