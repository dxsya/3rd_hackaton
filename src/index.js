import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import AuthContextProvider from "./contexts/AuthContextProvider";
import BlogContextProvaider from "./contexts/BlogContextProvaider";
import ProductContextProvider from "./contexts/ProductContextProvider";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <BlogContextProvaider>
            <AuthContextProvider>
                <ProductContextProvider>
                    <App />
                </ProductContextProvider>
            </AuthContextProvider>
        </BlogContextProvaider>
    </BrowserRouter>
);
