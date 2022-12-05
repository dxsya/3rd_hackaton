import React, { createContext, useContext } from 'react';
import { WISH } from '../helpers/consts';

const wishContext = createContext();

export const useWish = () => {
    return useContext(wishContext);
};

const INIT_STATE = {
    wish: JSON.parse(localStorage.getItem('wish')),
};

function reducer(state = INIT_STATE, action) {
    switch (action.type) {
        case WISH.GET_WISH:
            return { ...state, wish: action.payload };
        default:
            return state;
    }
}

const WishlistContextProvider = ({ children }) => {
    const values = {};
    return (
        <wishContext.Provider value={values}> {children}</wishContext.Provider>
    );
};

export default WishlistContextProvider;
