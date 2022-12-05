import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import AuthContextProvider from './contexts/AuthContextProvider';
import BlogContextProvaider from './contexts/BlogContextProvaider';
import CartContextProvider from './contexts/CartContextProvider';
import ProductContextProvider from './contexts/ProductContextProvider';
import WishlistContextProvider from './contexts/WishlistContextProvider';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <BlogContextProvaider>
            <AuthContextProvider>
                <ProductContextProvider>
                    <CartContextProvider>
                        <WishlistContextProvider>
                            <App />
                        </WishlistContextProvider>
                    </CartContextProvider>
                </ProductContextProvider>
            </AuthContextProvider>
        </BlogContextProvaider>
    </BrowserRouter>
);
