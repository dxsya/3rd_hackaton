import { Box } from '@mui/system';
import React, { useEffect } from 'react';
import { useProducts } from '../../contexts/ProductContextProvider';
import { JSON_API_PRODUCTS } from '../../helpers/consts';
import ProductCard from './ProductCard';

const ProductList = () => {
    const { products, getProducts } = useProducts();

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <>
            <Box sx={{ display: 'flex' }}>
                {products.map((item) => (
                    <ProductCard key={item.id} item={item} />
                ))}
            </Box>
        </>
    );
};

export default ProductList;
