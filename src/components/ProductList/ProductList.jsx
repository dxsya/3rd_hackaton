import { Button, ButtonGroup, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect } from 'react';
import { useProducts } from '../../contexts/ProductContextProvider';
import { JSON_API_PRODUCTS } from '../../helpers/consts';
import ProductCard from './ProductCard';
import YouTubeIcon from '@mui/icons-material/YouTube';

const ProductList = () => {
    const { products, getProducts } = useProducts();

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <>
            {' '}
            <Box
                sx={{
                    backgroundImage: `url(https://static.insales-cdn.com/assets/1/762/3212026/1669721932/shopbg-mid.jpg)`,
                    height: '400px',
                    backgroundSize: 'cover',
                }}
            >
                {' '}
            </Box>
            <Box sx={{ m: 5 }}>
                <Button
                    sx={{
                        margin: '5px',
                        width: '15%',
                        backgroundColor: '#eff0f1',
                        borderRadius: '3px',
                        fontSize: '12px',
                        fontWeight: 600,
                        color: 'black',
                    }}
                >
                    Все товары
                </Button>
                <Button
                    sx={{
                        margin: '5px',
                        width: '15%',
                        backgroundColor: '#eff0f1',
                        borderRadius: '3px',
                        fontSize: '12px',
                        fontWeight: 600,
                        color: 'black',
                    }}
                >
                    Энергетики
                </Button>
                <Button
                    sx={{
                        margin: '5px',
                        width: '15%',
                        backgroundColor: '#eff0f1',
                        borderRadius: '3px',
                        fontSize: '12px',
                        fontWeight: 600,
                        color: 'black',
                    }}
                >
                    Шейкеры
                </Button>
                <Button
                    sx={{
                        margin: '5px',
                        width: '15%',
                        backgroundColor: '#eff0f1',
                        borderRadius: '3px',
                        fontSize: '12px',
                        fontWeight: 600,
                        color: 'black',
                    }}
                >
                    Аниме Коллекция
                </Button>
            </Box>
            <Box
                sx={{
                    width: '90%',
                    margin: '0 auto',
                    background:
                        'url(https://static.insales-cdn.com/assets/1/762/3212026/1669721932/collection-bg.png) bottom center no-repeat',
                    height: '220px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                    mt: '8%',
                }}
            >
                <Box sx={{ color: 'white' }}>
                    <Typography sx={{ fontSize: '36px', fontWeight: 600 }}>
                        MORF
                    </Typography>
                    <Typography sx={{ fontSize: '24px' }}>
                        148 тыс. подписчиков
                    </Typography>
                </Box>
                <Box>
                    <Button
                        sx={{
                            width: '100%',
                            border: '3px solid green',
                            color: 'green',
                            fontWeight: 800,
                            padding: '6% 20px',
                            fontSize: '14px',
                            color: 'white',
                        }}
                    >
                        <YouTubeIcon sx={{ color: 'white', mr: 1 }} />{' '}
                        Посмотреть канал
                    </Button>
                </Box>
                <Box sx={{ width: '20%', mb: 10 }}>
                    <img
                        src="https://static.insales-cdn.com/images/collections/1/5313/88626369/large_morf.jpg"
                        alt="morf"
                        width={'100%'}
                    />
                </Box>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    width: '85%',
                    margin: '0 auto',
                    mt: 8,
                }}
            >
                {products.map((item) => (
                    <ProductCard key={item.id} item={item} />
                ))}
            </Box>
        </>
    );
};

export default ProductList;
