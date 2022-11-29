import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ item }) => {
    const navigate = useNavigate();
    return (
        <>
            <Box
                sx={{
                    border: '1px solid black',
                    height: '200px',
                    width: '300px',
                    margin: '10px',
                }}
            >
                <Typography>{item.title}</Typography>
                <Typography>{item.description}</Typography>
                <Typography>{item.price}</Typography>
                <Typography>{item.type}</Typography>
                <Typography>{item.pirture}</Typography>
                <Button onClick={() => navigate(`/productDetails/${item.id}`)}>
                    details
                </Button>
            </Box>
        </>
    );
};

export default ProductCard;
