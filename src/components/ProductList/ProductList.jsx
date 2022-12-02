import { Button, Input, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useProducts } from '../../contexts/ProductContextProvider';
import ProductCard from './ProductCard';
import YouTubeIcon from '@mui/icons-material/YouTube';
import ProductPagination from './ProductPagination';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';

const ProductList = () => {
    const { products, getProducts, fetchByParams } = useProducts();

    const navigate = useNavigate();

    useEffect(() => {
        getProducts();
    }, []);

    const [page, setPage] = useState(1);
    const productPerPage = 8;
    const pagesQty = Math.ceil(products.length / productPerPage);

    function currentProducts() {
        const begin = (page - 1) * productPerPage;
        const end = begin + productPerPage;
        return products.slice(begin, end);
    }
    const location = useLocation();

    useEffect(() => {
        getProducts();
    }, [location.search]);

    const [searchParams, setSearchParams] = useSearchParams();
    const [search, setSearch] = useState(searchParams.get('q') || '');

    useEffect(() => {
        setSearchParams({
            q: search,
        });
    }, [search]);

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
                            md: '17%',
                            lg: '15%',
                            xl: '15%',
                        },
                        backgroundColor: '#eff0f1',
                        borderRadius: '3px',
                        fontSize: '12px',
                        fontWeight: 600,
                        color: 'black',
                    }}
                    onClick={() => {
                        navigate('/products');
                    }}
                >
                    Все товары
                </Button>
                {location.search.includes('energy') ? (
                    <>
                        {' '}
                        <Button
                            sx={{
                                margin: '5px',
                                width: {
                                    xs: '80%',
                                    sm: '23%',
                                    md: '17%',
                                    lg: '15%',
                                    xl: '15%',
                                },
                                backgroundColor: '#0c6',
                                borderRadius: '3px',
                                fontSize: '12px',
                                fontWeight: 600,
                                color: 'black',
                            }}
                            onClick={() => {
                                if (location.search.includes('energy')) {
                                    return fetchByParams('type', '');
                                }
                                fetchByParams('type', 'energy');
                            }}
                        >
                            Энергетики
                        </Button>
                    </>
                ) : (
                    <>
                        {' '}
                        <Button
                            sx={{
                                margin: '5px',
                                width: {
                                    xs: '80%',
                                    sm: '23%',
                                    md: '17%',
                                    lg: '15%',
                                    xl: '15%',
                                },
                                backgroundColor: '#eff0f1',
                                borderRadius: '3px',
                                fontSize: '12px',
                                fontWeight: 600,
                                color: 'black',
                            }}
                            onClick={() => {
                                if (location.search.includes('energy')) {
                                    return fetchByParams('type', '');
                                }
                                fetchByParams('type', 'energy');
                            }}
                        >
                            Энергетики
                        </Button>
                    </>
                )}
                {location.search.includes('shaker') ? (
                    <>
                        {' '}
                        <Button
                            sx={{
                                margin: '5px',
                                width: {
                                    xs: '80%',
                                    sm: '23%',
                                    md: '17%',
                                    lg: '15%',
                                    xl: '15%',
                                },
                                backgroundColor: '#0c6',
                                borderRadius: '3px',
                                fontSize: '12px',
                                fontWeight: 600,
                                color: 'black',
                            }}
                            onClick={() => {
                                if (location.search.includes('shaker')) {
                                    return fetchByParams('type', '');
                                }
                                fetchByParams('type', 'shaker');
                            }}
                        >
                            Шейкеры
                        </Button>
                    </>
                ) : (
                    <>
                        {' '}
                        <Button
                            sx={{
                                margin: '5px',
                                width: {
                                    xs: '80%',
                                    sm: '23%',
                                    md: '17%',
                                    lg: '15%',
                                    xl: '15%',
                                },
                                backgroundColor: '#eff0f1',
                                borderRadius: '3px',
                                fontSize: '12px',
                                fontWeight: 600,
                                color: 'black',
                            }}
                            onClick={() => {
                                if (location.search.includes('shaker')) {
                                    return fetchByParams('type', '');
                                }
                                fetchByParams('type', 'shaker');
                            }}
                        >
                            Шейкеры
                        </Button>
                    </>
                )}
                {location.search.includes('anime') ? (
                    <>
                        {' '}
                        <Button
                            sx={{
                                margin: '5px',
                                width: {
                                    xs: '80%',
                                    sm: '23%',
                                    md: '17%',
                                    lg: '15%',
                                    xl: '15%',
                                },
                                backgroundColor: '#0c6',
                                borderRadius: '3px',
                                fontSize: '12px',
                                fontWeight: 600,
                                color: 'black',
                            }}
                            onClick={() => {
                                if (location.search.includes('true')) {
                                    return fetchByParams('anime', '');
                                }
                                fetchByParams('anime', true);
                            }}
                        >
                            Аниме коллекция
                        </Button>
                    </>
                ) : (
                    <>
                        {' '}
                        <Button
                            sx={{
                                margin: '5px',
                                width: {
                                    xs: '80%',
                                    sm: '23%',
                                    md: '17%',
                                    lg: '15%',
                                    xl: '15%',
                                },
                                backgroundColor: '#eff0f1',
                                borderRadius: '3px',
                                fontSize: '12px',
                                fontWeight: 600,
                                color: 'black',
                            }}
                            onClick={() => {
                                if (location.search.includes('true')) {
                                    return fetchByParams('anime', '');
                                }
                                fetchByParams('anime', true);
                            }}
                        >
                            Аниме коллекция
                        </Button>
                    </>
                )}
                {location.search.includes('asc') &&
                location.search.includes('_sort') ? (
                    <>
                        {' '}
                        <Button
                            sx={{
                                margin: '5px',
                                width: {
                                    xs: '80%',
                                    sm: '23%',
                                    md: '17%',
                                    lg: '15%',
                                    xl: '15%',
                                },
                                backgroundColor: '#0c6',
                                borderRadius: '3px',
                                fontSize: '12px',
                                fontWeight: 600,
                                color: 'black',
                            }}
                            onClick={() => {
                                if (
                                    location.search.includes('_sort') &&
                                    location.search.includes('desc')
                                ) {
                                    fetchByParams('_order', 'asc');
                                } else if (location.search.includes('_sort')) {
                                    fetchByParams('_sort', '');
                                } else {
                                    fetchByParams('_sort', 'asc');
                                }
                            }}
                        >
                            Дешевле
                        </Button>
                    </>
                ) : (
                    <>
                        {' '}
                        <Button
                            sx={{
                                margin: '5px',
                                width: {
                                    xs: '80%',
                                    sm: '23%',
                                    md: '17%',
                                    lg: '15%',
                                    xl: '15%',
                                },
                                backgroundColor: '#eff0f1',
                                borderRadius: '3px',
                                fontSize: '12px',
                                fontWeight: 600,
                                color: 'black',
                            }}
                            onClick={() => {
                                if (
                                    location.search.includes('_sort') &&
                                    location.search.includes('desc')
                                ) {
                                    fetchByParams('_order', 'asc');
                                } else if (location.search.includes('_sort')) {
                                    fetchByParams('_sort', '');
                                } else {
                                    fetchByParams('_sort', 'asc');
                                }
                            }}
                        >
                            Дешевле
                        </Button>
                    </>
                )}
                {location.search.includes('desc') &&
                location.search.includes('_sort') ? (
                    <>
                        {' '}
                        <Button
                            sx={{
                                margin: '5px',
                                width: {
                                    xs: '80%',
                                    sm: '23%',
                                    md: '17%',
                                    lg: '15%',
                                    xl: '15%',
                                },
                                backgroundColor: '#0c6',
                                borderRadius: '3px',
                                fontSize: '12px',
                                fontWeight: 600,
                                color: 'black',
                            }}
                            onClick={() => {
                                if (
                                    location.search.includes('_sort') &&
                                    location.search.includes('asc')
                                ) {
                                    fetchByParams('_order', 'desc');
                                } else if (location.search.includes('_sort')) {
                                    fetchByParams('_sort', '');
                                } else {
                                    fetchByParams('_sort', 'desc');
                                }
                            }}
                        >
                            Дороже
                        </Button>
                    </>
                ) : (
                    <>
                        {' '}
                        <Button
                            sx={{
                                margin: '5px',
                                width: {
                                    xs: '80%',
                                    sm: '23%',
                                    md: '17%',
                                    lg: '15%',
                                    xl: '15%',
                                },
                                backgroundColor: '#eff0f1',
                                borderRadius: '3px',
                                fontSize: '12px',
                                fontWeight: 600,
                                color: 'black',
                            }}
                            onClick={() => {
                                if (
                                    location.search.includes('_sort') &&
                                    location.search.includes('asc')
                                ) {
                                    fetchByParams('_order', 'desc');
                                } else if (location.search.includes('_sort')) {
                                    fetchByParams('_sort', '');
                                } else {
                                    fetchByParams('_sort', 'desc');
                                }
                            }}
                        >
                            Дороже
                        </Button>
                    </>
                )}
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
            <Box sx={{ width: '83%', margin: '40px auto 0 auto' }}>
                <Input
                    placeholder="Поиск"
                    sx={{ width: '20%', padding: 1 }}
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
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
                {products ? (
                    currentProducts().map((item) => (
                        <ProductCard key={item.id} item={item} />
                    ))
                ) : (
                    <></>
                )}
            </Box>
            <ProductPagination
                page={page}
                setPage={setPage}
                pagesQty={pagesQty}
            />
        </>
    );
};

export default ProductList;
