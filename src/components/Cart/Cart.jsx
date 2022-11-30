import { Button, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../contexts/CartContextProvider';
import Recomendations from '../Recomendations/Recomendations';

const Cart = () => {
    const navigate = useNavigate();

    const { getCart, cart, changeProductCount, deleteCartProduct } = useCart();

    useEffect(() => {
        getCart();
    }, []);
    const cartCleaner = () => {
        localStorage.removeItem('cart');
        getCart();
    };
    if (!cart) return;
    return (
        <>
            {cart.products.length == 0 ? (
                <Box sx={{ textAlign: 'center', margin: '4%' }}>
                    <Typography sx={{ fontSize: '20px', fontWeight: 600 }}>
                        Ваша корзина пуста
                    </Typography>
                    <Typography sx={{ color: 'gray' }}>
                        Самое время добавить в нее что-нибудь
                    </Typography>
                    <Box sx={{ margin: '5%', ml: '50px' }}>
                        <img
                            src="https://static.insales-cdn.com/assets/1/762/3212026/1669721932/korzina.svg"
                            alt="cart"
                            width={'120px'}
                        />
                    </Box>
                    <Button
                        onClick={() => navigate('/products')}
                        sx={{
                            backgroundColor: '#0c6',
                            color: 'white',
                            borderRadius: 0,
                            padding: '10px 18px',
                            fontWeight: 500,
                        }}
                    >
                        Перейти к выбору{' '}
                    </Button>
                </Box>
            ) : (
                <Box sx={{ textAlign: 'center', margin: '4%' }}>
                    {cart.products.map((product, index) => (
                        <Box key={index}>
                            <Typography>{product.item.title}</Typography>
                            <Typography>{product.item.count}</Typography>
                            <Typography>{product.subPrice}</Typography>

                            <TextField
                                type={'number'}
                                value={product.count}
                                onChange={(e) =>
                                    changeProductCount(
                                        e.target.value,
                                        product.item.id
                                    )
                                }
                            />
                            <Button
                                onClick={() =>
                                    deleteCartProduct(product.item.id)
                                }
                            >
                                remove
                            </Button>
                            <Typography>
                                subtotal: {product.subPrice}
                            </Typography>
                        </Box>
                    ))}
                </Box>
            )}
            <Recomendations />
        </>
    );
};

export default Cart;
