import axios from 'axios';
import React, { createContext, useContext, useReducer } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ACTIONS_PRODUCTS, JSON_API_PRODUCTS } from '../helpers/consts';

export const productContext = createContext();

export const useProducts = () => {
    return useContext(productContext);
};

const INIT_STATE = {
    products: [],
    productDetails: {},
};

const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case ACTIONS_PRODUCTS.GET_PRODUCTS:
            return { ...state, products: action.payload };
        case ACTIONS_PRODUCTS.GET_PRODUCT_DETAILS:
            return { ...state, productDetails: action.payload };
        default:
            return state;
    }
};

const ProductContextProvider = ({ children }) => {
    const location = useLocation();

    const [state, dispatch] = useReducer(reducer, INIT_STATE);

    async function addProduct(newProduct) {
        await axios.post(JSON_API_PRODUCTS, newProduct);
        getProducts();
    }

    async function getProducts() {
        const { data } = await axios(`${JSON_API_PRODUCTS}${location.search}`);
        dispatch({
            type: ACTIONS_PRODUCTS.GET_PRODUCTS,
            payload: data,
        });
        return data;
    }

    async function getProductDetails(id) {
        const { data } = await axios(`${JSON_API_PRODUCTS}/${id}`);
        dispatch({
            type: ACTIONS_PRODUCTS.GET_PRODUCT_DETAILS,
            payload: data,
        });
    }

    async function deleteProduct(id) {
        await axios.delete(`${JSON_API_PRODUCTS}/${id}`);
        getProducts();
    }

    async function saveEditedProduct(newProduct, id) {
        await axios.patch(`${JSON_API_PRODUCTS}/${id}`, newProduct);
        getProducts();
    }

    const navigate = useNavigate();
    const fetchByParams = async (query, value) => {
        const search = new URLSearchParams(location.search);
        if (value === 'All') {
            search.delete(query);
        } else if (value == false) {
            search.delete(query, value);
        } else if (query == '_sort') {
            search.set(query, 'price');
            search.set('_order', value);
        } else {
            search.set(query, value);
        }
        const url = `${location.pathname}?${search.toString()}`;
        navigate(url);
    };

    const values = {
        fetchByParams,
        addProduct,
        products: state.products,
        getProducts,
        getProductDetails,
        productDetails: state.productDetails,
        deleteProduct,
        saveEditedProduct,
    };
    return (
        <productContext.Provider value={values}>
            {' '}
            {children}
        </productContext.Provider>
    );
};

export default ProductContextProvider;
