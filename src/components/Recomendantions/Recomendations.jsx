import { Box, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useProducts } from '../../contexts/ProductContextProvider';
import { getRandomProducts } from '../../helpers/functions';
import ProductCard from '../ProductList/ProductCard';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Recomendations = () => {
    const navigate = useNavigate();
    const { products, getProducts } = useProducts();

    const [random, setRandom] = useState(0);
    useEffect(() => {
        getProducts().then((data) => {
            console.log(data);
            let rand = getRandomProducts(data.length);
            setRandom(rand);
        });
    }, []);

    return (
        <Box
            sx={{
                background:
                    'linear-gradient(90deg, rgba(122,231,159,1) 0%, rgba(104,214,238,1) 25%, rgba(193,162,242,1) 60%, rgba(233,155,247,1) 74%, rgba(238,104,153,1) 96%)',
                paddingY: 2,
                boxShadow: '0px 0px 12px 1px rgba(0,0,0,0.75) inset',
            }}
        >
            <Typography
                variant="h5"
                sx={{ fontWeight: 600, margin: '1% 0 0 4%' }}
            >
                РЕКОМЕНДУЕМ КУПИТЬ
            </Typography>

            <Box
                sx={{
                    display: 'flex',
                    width: '90%',
                    margin: '0 auto',
                    flexWrap: 'wrap',
                    pb: 5,
                    justifyContent: 'space-around',
                }}
            >
                {products.slice(random[0], random[1]).map((item) => (
                    <ProductCard key={item.id} item={item} />
                ))}
            </Box>
            <Button
                onClick={() => navigate('/products')}
                sx={{
                    width: {
                        xs: '60%',
                        sm: '60%',
                        md: '40%',
                        lg: '25%',
                        xl: '20%',
                    },
                    backgroundColor: '#01cc65',
                    fontSize: '16px',
                    color: 'white',
                    fontWeight: 600,
                    padding: '8px',
                    m: '0 auto',
                    display: 'flex',
                }}
            >
                Все товары <ArrowForwardIosOutlinedIcon />
            </Button>
        </Box>
    );
};

export default Recomendations;
