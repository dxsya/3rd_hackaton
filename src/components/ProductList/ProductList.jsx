import { Button, ButtonGroup, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect } from 'react';
import { useProducts } from '../../contexts/ProductContextProvider';
import { JSON_API_PRODUCTS } from '../../helpers/consts';
import ProductCard from './ProductCard';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { getRandomProducts } from '../../helpers/functions';

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
                    backgroundImage: {
                        xs: `url(https://static.insales-cdn.com/assets/1/2446/3221902/1669823558/shopbg-mob.jpg)`,
                        sm: `url(https://static.insales-cdn.com/assets/1/2446/3221902/1669823558/shopbg-mob.jpg)`,
                        md: `url(https://static.insales-cdn.com/assets/1/2446/3221902/1669823558/shopbg.jpg)`,
                        lg: `url(https://static.insales-cdn.com/assets/1/2446/3221902/1669823558/shopbg.jpg)`,
                        xl: `url(https://static.insales-cdn.com/assets/1/2446/3221902/1669823558/shopbg.jpg)`,
                    },
                    height: {
                        xs: '500px',
                        sm: '500px',
                        md: '250px',
                        lg: '250px',
                        xl: '250px',
                    },
                    backgroundSize: '100% 100%',
                }}
            >
                {' '}
            </Box>
            <Box
                sx={{
                    m: 5,
                    display: {
                        xs: 'flex',
                        sm: 'block',
                        md: 'block',
                        lg: 'block',
                        xl: 'block',
                    },
                    flexDirection: { xs: 'column' },
                }}
            >
                <Button
                    sx={{
                        margin: '5px',
                        width: {
                            xs: '80%',
                            sm: '23%',
                            md: '20%',
                            lg: '15%',
                            xl: '15%',
                        },
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
                        width: {
                            xs: '80%',
                            sm: '23%',
                            md: '20%',
                            lg: '15%',
                            xl: '15%',
                        },
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
                        width: {
                            xs: '80%',
                            sm: '23%',
                            md: '20%',
                            lg: '15%',
                            xl: '15%',
                        },
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
                        width: {
                            xs: '80%',
                            sm: '23%',
                            md: '20%',
                            lg: '15%',
                            xl: '15%',
                        },
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
                    display: {
                        xs: 'none',
                        sm: 'none',
                        md: 'flex',
                        lg: 'flex',
                        xl: 'flex',
                    },
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
                    flexWrap: 'wrap',
                    justifyContent: 'space-around',
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
