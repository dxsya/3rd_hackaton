import { Button, Divider, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../contexts/CartContextProvider';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import Recomendations from '../Recomendantions/Recomendations';

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
            <Typography
                variant="h4"
                sx={{ margin: '2% 0 0 6%', fontWeight: 600 }}
            >
                Корзина
            </Typography>
            {cart.products.length == 0 ? (
                <Box
                    sx={{
                        textAlign: 'center',
                        margin: '4%',
                    }}
                >
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
                <>
                    <Box
                        sx={{
                            margin: '4%',
                            boxShadow: '0px 0px 8px 5px rgba(34, 60, 80, 0.2)',
                        }}
                    >
                        {cart.products.map((product, index) => (
                            <Box
                                key={index}
                                sx={{
                                    display: 'flex',
                                    alignContent: 'center',
                                    alignItems: 'center',
                                    justifyContent: 'space-around',
                                    borderBottom: '1px solid #aeaeae',
                                    width: '90%',
                                    margin: '0 auto',
                                    p: 2,
                                }}
                            >
                                <img
                                    src={product.item.picture}
                                    alt=""
                                    width={'10%'}
                                />
                                <Typography
                                    sx={{
                                        textAlign: 'left',
                                        width: '20%',
                                        fontWeight: 600,
                                        fontSize: {
                                            xs: '10px',
                                            sm: '14px',
                                            md: '18px',
                                            lg: '20px',
                                            xl: '20px',
                                        },
                                    }}
                                >
                                    {product.item.title}
                                </Typography>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        width: '50%',
                                        justifyContent: 'space-between',
                                    }}
                                >
                                    <TextField
                                        type={'number'}
                                        value={product.count}
                                        onChange={(e) =>
                                            changeProductCount(
                                                e.target.value,
                                                product.item.id
                                            )
                                        }
                                        sx={{
                                            width: {
                                                xs: '30%',
                                                sm: '30%',
                                                md: '25%',
                                                lg: '25%',
                                                xl: '25%',
                                            },
                                        }}
                                    />
                                    <Box sx={{ textAlign: 'center' }}>
                                        <Typography
                                            sx={{
                                                fontSize: {
                                                    xs: '16px',
                                                    sm: '20px',
                                                    md: '22px',
                                                    lg: '24px',
                                                    xl: '26px',
                                                },
                                                color: 'red',
                                                fontWeight: 800,
                                            }}
                                        >
                                            {product.subPrice}p
                                        </Typography>
                                        <Typography
                                            sx={{
                                                color: 'gray',
                                                fontSize: {
                                                    xs: '12px',
                                                    sm: '14px',
                                                    md: '14px',
                                                    lg: '16px',
                                                    xl: '16px',
                                                },
                                            }}
                                        >
                                            <s>
                                                {Math.floor(
                                                    product.subPrice * 1.4
                                                )}
                                                p
                                            </s>
                                        </Typography>
                                    </Box>
                                    <Button
                                        onClick={() =>
                                            deleteCartProduct(product.item.id)
                                        }
                                    >
                                        <DeleteOutlinedIcon />
                                    </Button>
                                </Box>
                            </Box>
                        ))}
                    </Box>
                    <Box
                        sx={{
                            margin: '4%',
                            boxShadow: '0px 0px 6px 4px rgba(34, 60, 80, 0.2)',
                            pb: 4,
                        }}
                    >
                        {' '}
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                width: '80%',
                                margin: '0 auto',
                                alignItems: 'center',
                            }}
                        >
                            <Typography variant="h5" sx={{ fontWeight: 800 }}>
                                ИТОГ:
                            </Typography>
                            <Box
                                sx={{
                                    display: 'flex',
                                    m: 4,
                                    alignItems: 'center',
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontSize: '36px',
                                        color: 'red',
                                        fontWeight: 800,
                                        mr: 4,
                                    }}
                                >
                                    {cart.totalPrice}p
                                </Typography>
                                <Typography
                                    sx={{ color: 'gray', fontSize: '20px' }}
                                >
                                    <s>{Math.floor(cart.totalPrice * 1.4)}p</s>
                                </Typography>
                            </Box>
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                width: '80%',
                                margin: '0 auto',
                                alignItems: 'center',
                            }}
                        >
                            <TextField
                                blurOnSelect="mouse"
                                placeholder="Введите промокод"
                                sx={{ width: '40%', border: '1px solid #0c6' }}
                            />
                            <Button
                                sx={{
                                    fontSize: {
                                        xs: '10px',
                                        sm: '12px',
                                        md: '14px',
                                    },
                                    backgroundColor: '#0c6',
                                    color: 'white',
                                    borderRadius: 0,
                                    padding: '15px 18px',
                                    fontWeight: 600,
                                    width: {
                                        xs: '40%',
                                        sm: '40%',
                                        md: '40%',
                                        lg: '30%',
                                        xl: '30%',
                                    },
                                    borderRadius: '6px',
                                }}
                            >
                                Оформить заказ
                            </Button>
                        </Box>
                    </Box>
                </>
            )}

            <Recomendations />
        </>
    );
};

export default Cart;
