import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const navigate = useNavigate();
    return (
        <>
            <Box sx={{ textAlign: 'center', margin: '4%' }}>
                <Typography sx={{ fontSize: '20px' }}>
                    Ваша корзина пуста
                </Typography>
                <Typography>Самое время добавить в нее что-нибудь</Typography>
                <Box sx={{ margin: '5%', ml: '50px' }}>
                    <img
                        src="https://static.insales-cdn.com/assets/1/762/3212026/1669721932/korzina.svg"
                        alt="cart"
                        width={'120px'}
                    />
                </Box>
                <Button onClick={() => navigate('/products')}>
                    Перейти к выбору{' '}
                </Button>
            </Box>
        </>
    );
};

export default Cart;
