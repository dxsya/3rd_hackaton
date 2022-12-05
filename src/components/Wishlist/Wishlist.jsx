import React, { useEffect } from 'react';
import { useWish } from '../../contexts/WishlistContextProvider';
import { Button, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import Recomendations from '../Recomendantions/Recomendations';
import { useNavigate } from 'react-router-dom';
import StarPurple500Icon from '@mui/icons-material/StarPurple500';

const Wishlist = () => {
    const { getWish, wish, deleteWishProduct } = useWish();
    useEffect(() => {
        getWish();
    }, []);

    const navigate = useNavigate();
    if (!wish) return;

    return (
        <div>
            <Typography
                variant="h4"
                sx={{ margin: '2% 0 0 6%', fontWeight: 600 }}
            >
                Избранное
            </Typography>
            {wish.wishlist.length == 0 ? (
                <Box
                    sx={{
                        textAlign: 'center',
                        margin: '4%',
                    }}
                >
                    <Typography sx={{ fontSize: '20px', fontWeight: 600 }}>
                        У вас нет любимых товаров
                    </Typography>
                    <Typography sx={{ color: 'gray' }}>
                        Самое время выбрать их
                    </Typography>
                    <Box sx={{ margin: '5%', ml: '50px' }}>
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/6438/6438714.png"
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
                        {wish.wishlist.map((product, index) => (
                            <Box
                                key={index}
                                sx={{
                                    display: {
                                        xs: 'flex',
                                        sm: 'flex',
                                        md: 'flex',
                                        lg: 'flex',
                                        xl: 'flex',
                                    },
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
                                    width={'20%'}
                                />
                                <Typography
                                    sx={{
                                        textAlign: 'left',
                                        width: '40%',
                                        fontWeight: 600,
                                        fontSize: '20px',
                                    }}
                                >
                                    {product.item.title}
                                </Typography>
                                <Box
                                    sx={{
                                        display: 'flex',

                                        justifyContent: 'space-between',
                                    }}
                                >
                                    <Button
                                        sx={{
                                            padding: 0,
                                            display: 'block',
                                            width: '20px',
                                        }}
                                    >
                                        <DeleteOutlinedIcon
                                            onClick={() =>
                                                deleteWishProduct(
                                                    product.item.id
                                                )
                                            }
                                        />
                                    </Button>
                                </Box>
                            </Box>
                        ))}
                    </Box>
                </>
            )}

            <Recomendations />
        </div>
    );
};

export default Wishlist;
