import { Box, Divider, Link, List, ListItem } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const imbashop = [
    'Возврат',
    'Программа лояльности',
    'Политика Конфидициальности',
    'Оферта',
    'Сертификаты',
    'Карта сайта',
];

const pages = [
    {
        name: 'Главная',
        link: '/',
    },
    {
        name: 'Магазин',
        link: '/products',
    },
    {
        name: 'Доставка',
        link: '/delivery',
    },
    {
        name: 'Контакты',
        link: '/contacts',
    },
    {
        name: 'Блог',
        link: '/blog',
    },
    {
        name: 'Корзина',
        link: '/cart',
    },
    {
        name: 'Оптовые цены',
        link: '/products',
    },
];
const Footer = () => {
    const navigate = useNavigate();
    return (
        <>
            <Box sx={{ background: 'black' }}>
                <List
                    sx={{
                        display: {
                            xs: 'none',
                            sm: 'none',
                            md: 'none',
                            lg: 'flex',
                            xl: 'flex',
                        },

                        padding: '1%',
                        color: 'gray',
                        width: '95%',
                        margin: '0 auto',
                        fontSize: '1.1em',
                        fontWeight: 500,
                    }}
                >
                    {pages.map((page, index) => (
                        <ListItem
                            key={index}
                            onClick={() => navigate(page.link)}
                            sx={{ cursor: 'pointer', justifyContent: 'center' }}
                        >
                            {page.name}
                        </ListItem>
                    ))}
                </List>
                <Divider
                    sx={{
                        backgroundColor: 'white',
                        display: {
                            xs: 'none',
                            sm: 'none',
                            md: 'none',
                            lg: 'flex',
                            xl: 'flex',
                        },
                    }}
                />
                <Box
                    sx={{
                        color: 'gray',
                        width: '90%',
                        margin: '0 auto',
                        display: 'flex',
                        justifyContent: 'space-between',
                    }}
                >
                    <List>
                        <ListItem
                            sx={{
                                cursor: 'pointer',
                            }}
                        >
                            <img
                                src="https://static.insales-cdn.com/assets/1/762/3212026/1669721932/logo-footer.svg"
                                alt=""
                                onClick={() => navigate('/')}
                            />
                        </ListItem>
                    </List>
                    <List
                        sx={{
                            display: {
                                xs: 'none',
                                sm: 'none',
                                md: 'none',
                                lg: 'block',
                                xl: 'block',
                            },
                        }}
                    >
                        <ListItem
                            sx={{
                                fontSize: '1.3em',
                                fontWeight: 800,
                                color: 'white',
                                cursor: 'pointer',
                            }}
                            onClick={() => navigate('/contacts')}
                        >
                            Контакты
                        </ListItem>
                        <ListItem>info@imba.shop</ListItem>
                        <ListItem>8 800 777 96 80</ListItem>
                        <ListItem>(ПН - ПТ) 10:00 -19:00</ListItem>
                    </List>
                    <List
                        sx={{
                            display: {
                                xs: 'none',
                                sm: 'none',
                                md: 'none',
                                lg: 'block',
                                xl: 'block',
                            },
                        }}
                    >
                        <ListItem
                            sx={{
                                fontSize: '1.3em',
                                fontWeight: 800,
                                color: 'white',
                                cursor: 'pointer',
                            }}
                            onClick={() => navigate('/delivery')}
                        >
                            Оплата
                        </ListItem>
                        <ListItem>
                            <img
                                src="https://static.insales-cdn.com/assets/1/762/3212026/1669721932/visa.svg"
                                alt=""
                            />
                            <Box sx={{ width: '10px' }}></Box>
                            <img
                                src="https://static.insales-cdn.com/assets/1/762/3212026/1669721932/mir.svg"
                                alt=""
                            />
                        </ListItem>
                        <ListItem>
                            <img
                                src="https://static.insales-cdn.com/assets/1/762/3212026/1669721932/google.svg"
                                alt=""
                            />
                            <Box sx={{ width: '10px' }}></Box>
                            <img
                                src="https://static.insales-cdn.com/assets/1/762/3212026/1669721932/apple.svg"
                                alt=""
                            />
                        </ListItem>
                    </List>
                    <List>
                        <ListItem
                            sx={{
                                fontSize: {
                                    xs: '15px',
                                    sm: '1.3em',
                                    md: '1.3em',
                                    lg: '1.3em',
                                    xl: '1.3em',
                                },
                                fontWeight: 800,
                                color: 'white',
                                cursor: 'default',
                            }}
                        >
                            {' '}
                            Социальные сети
                        </ListItem>
                        <ListItem>
                            <Link href="https://t.me/+g9WQM9l3pCBmOTVi">
                                <img
                                    src="https://static.insales-cdn.com/assets/1/762/3212026/1669721932/telegram_logo.svg"
                                    alt=""
                                    width={'25px'}
                                />
                            </Link>
                            <Box sx={{ width: '10px' }}></Box>
                            <Link href="https://vk.com/imba_energy">
                                <img
                                    src="https://static.insales-cdn.com/assets/1/762/3212026/1669721932/vk.svg"
                                    alt=""
                                />
                            </Link>
                        </ListItem>
                    </List>
                    <List
                        sx={{
                            display: {
                                xs: 'none',
                                sm: 'none',
                                md: 'none',
                                lg: 'block',
                                xl: 'block',
                            },
                        }}
                    >
                        <ListItem
                            sx={{
                                fontSize: '1.3em',
                                fontWeight: 800,
                                color: 'white',
                                cursor: 'default',
                            }}
                        >
                            IMBA.SHOP
                        </ListItem>
                        {imbashop.map((item, index) => (
                            <ListItem
                                key={index}
                                sx={{
                                    lineHeight: '75%',
                                    textDecoration: 'underline',
                                    cursor: 'pointer',
                                }}
                            >
                                {item}
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Box>
        </>
    );
};

export default Footer;
