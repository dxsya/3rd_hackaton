import { Box, Button, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useCart } from '../../contexts/CartContextProvider';
import { useProducts } from '../../contexts/ProductContextProvider';

const ProductDetails = () => {
    const { productDetails, getProductDetails, deleteProduct } = useProducts();
    const { addProductToCart, checkProductInCart } = useCart();
    const { id } = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        getProductDetails(id);
    }, []);
    return (
        <div>
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
                <Button onClick={() => navigate(`edit/${id}`)}>Edit</Button>
                {checkProductInCart(productDetails.id) ? (
                    <Button
                        onClick={() => {
                            addProductToCart(productDetails);
                        }}
                        sx={{
                            width: '30%',
                            backgroundColor: '#01cc65',
                            padding: '8px',
                            fontSize: '18px',
                            color: 'white',
                            fontWeight: 600,
                            mt: 2,
                        }}
                    >
                        in cart
                    </Button>
                ) : (
                    <Button
                        onClick={() => addProductToCart(productDetails)}
                        sx={{
                            width: '30%',
                            backgroundColor: '#01cc65',
                            padding: '8px',
                            fontSize: '18px',
                            color: 'white',
                            fontWeight: 600,
                            mt: 2,
                        }}
                    >
                        add to cart
                    </Button>
                )}
            </Box>
        </div>
    );
};

export default ProductDetails;
