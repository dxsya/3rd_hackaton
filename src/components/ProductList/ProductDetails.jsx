import { Box, Button, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useProducts } from '../../contexts/ProductContextProvider';

const ProductDetails = () => {
    const { productDetails, getProductDetails, deleteProduct } = useProducts();
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        getProductDetails(id);
    }, []);
    console.log(productDetails);
    return (
        <div>
            zxc
            <Box>
                <Typography>{productDetails.title}</Typography>
                <Typography>{productDetails.picture}</Typography>
                <Typography>{productDetails.price}</Typography>
                <Typography>{productDetails.description}</Typography>
                <Typography>{productDetails.type}</Typography>
                <Button
                    onClick={() => {
                        deleteProduct(id);
                        navigate('/products');
                    }}
                >
                    Delete
                </Button>
                <Button>Edit</Button>
            </Box>
        </div>
    );
};

export default ProductDetails;
