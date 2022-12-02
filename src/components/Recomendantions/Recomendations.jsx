import { Box, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useProducts } from '../../contexts/ProductContextProvider';
import { getRandomProducts } from '../../helpers/functions';
import ProductCard from '../ProductList/ProductCard';

const Recomendations = () => {
    const { products, getProducts } = useProducts();

    const [random, setRandom] = useState(0);
    useEffect(() => {
        getProducts().then((data) => {
            let rand = getRandomProducts(data.length);
            setRandom(rand);
        });
    }, []);

    return (
        <Box
            sx={{
                background:
                    'linear-gradient(90deg, rgba(122,231,159,1) 0%, rgba(104,214,238,1) 25%, rgba(193,162,242,1) 60%, rgba(233,155,247,1) 74%, rgba(238,104,153,1) 96%)',
                pt: 2,
                boxShadow: '0px 0px 12px 1px rgba(0,0,0,0.75) inset',
            }}
        >
            <Typography
                variant="h5"
                sx={{ fontWeight: 600, margin: '1% 0 0 4%' }}
            >
                РЕКОМЕНДУЕМ КУПИТЬ
            </Typography>
            <Box
                sx={{
                    display: 'flex',
                    width: '90%',
                    margin: '0 auto',
                    flexWrap: 'wrap',
                    pb: 5,
                    justifyContent: 'space-around',
                }}
            >
                {products.slice(random[0], random[1]).map((item) => (
                    <ProductCard key={item.id} item={item} />
                ))}
            </Box>
        </Box>
    );
};

export default Recomendations;
