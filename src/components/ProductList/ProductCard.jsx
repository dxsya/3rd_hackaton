import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ item }) => {
    const navigate = useNavigate();
    return (
        <>
            <Box
                sx={{
                    backgroundColor: 'white',
                    width: '23%',
                    margin: '10px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignContent: 'center',
                    alignItems: 'center',
                    p: '2% 0',
                    borderRadius: '8px',
                    boxShadow: '0px 0px 15px 3px rgba(0,0,0,0.2)',
                }}
            >
                <img src={item.picture} alt={item.title} width={'200px'} />

                <Typography
                    sx={{
                        fontSize: '19px',
                        fontWeight: 700,
                        width: '80%',
                        textAlign: 'center',
                    }}
                >
                    {item.title}
                </Typography>
                <Typography
                    sx={{ fontSize: '30px', color: 'red', fontWeight: 800 }}
                >
                    {item.price}р
                </Typography>
                <Typography
                    sx={{ fontSize: '20px', color: 'gray', fontWeight: 800 }}
                >
                    <s>{item.price * 1.4}р</s>
                </Typography>
                <Button
                    onClick={() => navigate(`/productDetails/${item.id}`)}
                    sx={{
                        width: '90%',
                        backgroundColor: '#01cc65',
                        padding: '8px',
                        fontSize: '18px',
                        color: 'white',
                        fontWeight: 600,
                        mt: 2,
                    }}
                >
                    details
                </Button>
            </Box>
        </>
    );
};

export default ProductCard;
