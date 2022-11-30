import React from "react";
import HomePage from "../pages/HomePage";
import AuthPage from "../pages/AuthPage";
import { Route, Routes } from "react-router-dom";
import AddProductPage from "../pages/AddProductPage";
import ProductsPage from "../pages/ProductsPage";
import ProductDetailsPage from "../pages/ProductDetailsPage";
import AddBlogPage from "../pages/AddBlogPage";

const MainRoutes = () => {
    const PUBLIC_ROUTES = [
        { link: "/", element: <HomePage />, id: 1 },
        { link: "/auth", element: <AuthPage />, id: 2 },
        { link: "/addProduct", element: <AddProductPage />, id: 3 },
        { link: "/addBlog", element: <AddBlogPage />, id: 4 },
        { link: "/products", element: <ProductsPage />, id: 5 },
        { link: "/productDetails/:id", element: <ProductDetailsPage />, id: 6 },
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
