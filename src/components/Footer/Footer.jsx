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

const Footer = () => {
    const navigate = useNavigate();
    return (
        <>
            <Box sx={{ background: 'black' }}>
                <List
                    sx={{
                        display: 'flex',
                        padding: '1%',
                        color: 'gray',
                        width: '95%',
                        margin: '0 auto',
                        fontSize: '1.1em',
                        fontWeight: 500,
                    }}
                >
                    <ListItem
                        onClick={() => navigate('/')}
                        sx={{ cursor: 'pointer', justifyContent: 'center' }}
                    >
                        Главная
                    </ListItem>
                    <ListItem
                        onClick={() => navigate('/products')}
                        sx={{ cursor: 'pointer', justifyContent: 'center' }}
                    >
                        Магазин
                    </ListItem>
                    <ListItem
                        onClick={() => navigate('/delivery')}
                        sx={{ cursor: 'pointer', justifyContent: 'center' }}
                    >
                        Доставка
                    </ListItem>
                    <ListItem
                        onClick={() => navigate('/contacts')}
                        sx={{ cursor: 'pointer', justifyContent: 'center' }}
                    >
                        Контакты
                    </ListItem>
                    <ListItem
                        onClick={() => navigate('/blog')}
                        sx={{ cursor: 'pointer', justifyContent: 'center' }}
                    >
                        Блог
                    </ListItem>
                    <ListItem
                        onClick={() => navigate('/cart')}
                        sx={{ cursor: 'pointer', justifyContent: 'center' }}
                    >
                        Корзина
                    </ListItem>
                    <ListItem
                        onClick={() => navigate('/cart')}
                        sx={{ cursor: 'pointer', justifyContent: 'center' }}
                    >
                        Оптовые цены
                    </ListItem>
                    <ListItem
                        onClick={() => navigate('/cart')}
                        sx={{ cursor: 'pointer', justifyContent: 'center' }}
                    >
                        Исследования
                    </ListItem>
                </List>
                <Divider sx={{ backgroundColor: 'white' }} />
                <Box
                    sx={{
                        color: 'white',
                        width: '90%',
                        margin: '0 auto',
                        display: 'flex',
                        justifyContent: 'space-between',
                    }}
                >
                    <List>
                        <ListItem>
                            <img
                                src="https://static.insales-cdn.com/assets/1/762/3212026/1669721932/logo-footer.svg"
                                alt=""
                            />
                        </ListItem>
                    </List>
                    <List>
                        <ListItem sx={{ fontSize: '1.3em', fontWeight: 800 }}>
                            Контакты
                        </ListItem>
                        <ListItem>info@imba.shop</ListItem>
                        <ListItem>8 800 777 96 80</ListItem>
                        <ListItem>(ПН - ПТ) 10:00 -19:00</ListItem>
                    </List>
                    <List>
                        <ListItem sx={{ fontSize: '1.3em', fontWeight: 800 }}>
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
                        <ListItem sx={{ fontSize: '1.3em', fontWeight: 800 }}>
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
                    <List>
                        <ListItem sx={{ fontSize: '1.3em', fontWeight: 800 }}>
                            IMBA.SHOP
                        </ListItem>
                        {imbashop.map((item) => (
                            <ListItem
                                sx={{
                                    lineHeight: '75%',
                                    textDecoration: 'underline',
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
