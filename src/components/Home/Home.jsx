import React from 'react';
import { useProducts } from '../../contexts/ProductContextProvider';
import Recomendations from '../Recomendantions/Recomendations';

const Home = () => {
    return (
        <div>
            <Recomendations />
        </div>
    );
};

export default Home;
