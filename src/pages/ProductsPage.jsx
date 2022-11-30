import { Box } from '@mui/material';
import React from 'react';
import ProductList from '../components/ProductList/ProductList';

const ProductsPage = () => {
    return (
        <Box
            sx={{
                backgroundColor: '#f3f3f3',
            }}
        >
            <ProductList />
        </Box>
    );
};

export default ProductsPage;
