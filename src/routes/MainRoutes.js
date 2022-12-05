import React from 'react';
import HomePage from '../pages/HomePage';
import AuthPage from '../pages/AuthPage';
import { Route, Routes } from 'react-router-dom';
import AddProductPage from '../pages/AddProductPage';
import ProductsPage from '../pages/ProductsPage';
import ProductDetailsPage from '../pages/ProductDetailsPage';
import EditProductPage from '../pages/EditProductPage';
import CartPage from '../pages/CartPage';
import AddBlogPage from '../pages/AddBlogPage';
import BlogListPage from '../pages/BlogListPage';
import WishlistPage from '../pages/WishlistPage';
import PaymentPage from '../pages/PaymentPage';
import NotFoundPage from '../pages/NotFoundPage';
import ContactPage from '../pages/ContactPage';
import DeliveryPage from '../pages/DeliveryPage';

const MainRoutes = () => {
    const PUBLIC_ROUTES = [
        { link: '/', element: <HomePage />, id: 1 },
        { link: '/auth', element: <AuthPage />, id: 2 },
        { link: '/addProduct', element: <AddProductPage />, id: 3 },
        { link: '/products', element: <ProductsPage />, id: 5 },
        { link: '/productDetails/:id', element: <ProductDetailsPage />, id: 6 },

        {
            link: 'productDetails/:id/edit/:id',
            element: <EditProductPage />,
            id: 7,
        },

        { link: '/cart', element: <CartPage />, id: 8 },
        { link: '/addBlog', element: <AddBlogPage />, id: 9 },
        { link: '/blog', element: <BlogListPage />, id: 10 },
        { link: '/wishlist', element: <WishlistPage />, id: 11 },
        { link: '*', element: <NotFoundPage />, id: 12 },
        { link: '/payment', element: <PaymentPage />, id: 13 },
        { link: '/contacts', element: <ContactPage />, id: 14 },
        { link: '/delivery', element: <DeliveryPage />, id: 15 },
    ];

    return (
        <>
            <Routes>
                {PUBLIC_ROUTES.map((item) => (
                    <Route
                        path={item.link}
                        element={item.element}
                        key={item.id}
                    />
                ))}
            </Routes>
        </>
    );
};

export default MainRoutes;
