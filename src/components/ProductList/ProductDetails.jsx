import { Box, Button, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useCart } from '../../contexts/CartContextProvider';
import { useProducts } from '../../contexts/ProductContextProvider';
import Recomendations from '../Recomendantions/Recomendations';

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
            <Box
                sx={{
                    m: 2,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <img src={productDetails.picture} alt="" width={'30%'} />

                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: '50%',
                        marginLeft: '5%',
                    }}
                >
                    <Typography sx={{ fontWeight: 600, fontSize: '30px' }}>
                        {productDetails.title}
                    </Typography>
                    <Typography>{productDetails.type}</Typography>
                    <Typography>{productDetails.anime}</Typography>

                    <Typography
                        sx={{ fontSize: '30px', color: 'red', fontWeight: 800 }}
                    >
                        {productDetails.price}р
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: '20px',
                            color: 'gray',
                            fontWeight: 800,
                        }}
                    >
                        <s>{Math.floor(productDetails.price * 1.4)}р</s>
                    </Typography>
                    <Typography>{productDetails.description}</Typography>
                    {checkProductInCart(productDetails.id) ? (
                        <Button
                            onClick={() => {
                                addProductToCart(productDetails);
                            }}
                            sx={{
                                width: '40%',
                                backgroundColor: '#01cc65',
                                padding: '8px',
                                fontSize: '18px',
                                color: 'white',
                                fontWeight: 600,
                                mt: 2,
                            }}
                        >
                            Убери из корзины
                        </Button>
                    ) : (
                        <Button
                            onClick={() => addProductToCart(productDetails)}
                            sx={{
                                width: '40%',
                                backgroundColor: '#01cc65',
                                padding: '8px',
                                fontSize: '18px',
                                color: 'white',
                                fontWeight: 600,
                                mt: 2,
                            }}
                        >
                            добавь в корзину
                        </Button>
                    )}
                    <Box>
                        <Button
                            onClick={() => {
                                deleteProduct(id);
                                navigate('/products');
                            }}
                        >
                            Delete
                        </Button>
                        <Button onClick={() => navigate(`edit/${id}`)}>
                            Edit
                        </Button>
                    </Box>
                </Box>
            </Box>
            <Recomendations />
        </div>
    );
};

export default ProductDetails;
