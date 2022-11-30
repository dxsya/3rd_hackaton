import React from 'react';
import { useProducts } from '../../contexts/ProductContextProvider';
import Recomendations from '../Recomendations/Recomendations';

const Home = () => {
    return (
        <div>
            <Recomendations />
        </div>
    );
};

export default Home;
