import { Padding } from '@mui/icons-material';
import { createTheme, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Delevery = () => {
    const theme = createTheme({
        breakpoints: {
            values: {
                lp: 320,

                xl: 800,
                xs: 900,
                ud: 1050,
                sm: 1150,
                md: 1200,
                ds: 1250,
                lg: 1300,
                dp: 1350,
                gx: 1405,
                dl: 1440,
            },
        },
    });
    return (
        <div>
            <Box
                sx={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    boxSizing: 'border-box',
                    margin: '0',
                }}
            >
                <Box
                    sx={{
                        width: '50%',
                        [theme.breakpoints.up('sm')]: { width: '55%' },
                        [theme.breakpoints.down('lg')]: { width: '60%' },

                        [theme.breakpoints.down('ds')]: { width: '63%' },
                        [theme.breakpoints.down('md')]: { width: '67%' },
                        [theme.breakpoints.down('ud')]: { width: '72%' },
                        [theme.breakpoints.down('xs')]: { width: '97%' },
                    }}
                >
                    <Typography
                        variant="h1"
                        sx={{
                            fontWeight: '600',
                            fontSize: '18px',
                            mt: '7%',
                        }}
                    >
                        ДОСТАВКА ПРОДУКЦИИ ДЛЯ ГЕЙМЕРОВ IMBA GAME ENERGY
                    </Typography>
                    <Box
                        sx={{
                            mt: '30px',
                            backgroundColor: 'rgb(1, 204, 101)',
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-evenly',
                                [theme.breakpoints.down('xs')]: {
                                    display: 'block',
                                },
                            }}
                        >
                            <Box
                                sx={{
                                    width: '100%',
                                    [theme.breakpoints.down('xs')]: {
                                        textAlign: 'center',
                                    },
                                }}
                            >
                                <img
                                    src="https://static.insales-cdn.com/files/1/1815/11691799/original/image-delivery.png"
                                    alt=""
                                    style={{
                                        margin: '5%',
                                    }}
                                />
                            </Box>
                            <Box
                                sx={{
                                    color: 'white',
                                    [theme.breakpoints.down('xs')]: {
                                        padding: '3%',
                                    },
                                    [theme.breakpoints.up('xs')]: {
                                        mb: '2%',
                                    },
                                    [theme.breakpoints.down('dl')]: {
                                        width: '100%',
                                    },
                                    [theme.breakpoints.up('dl')]: {
                                        width: '100%',
                                    },
                                    [theme.breakpoints.down('ud')]: {
                                        width: '100%',
                                    },
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontWeight: '600',
                                        fontSize: '28px',
                                        mt: '3%',
                                        [theme.breakpoints.down('dl')]: {
                                            fontSize: '30px',
                                        },
                                        [theme.breakpoints.up('dl')]: {
                                            fontSize: '30px',
                                        },
                                        [theme.breakpoints.down('md')]: {
                                            fontSize: '31px',
                                        },
                                        [theme.breakpoints.down('sm')]: {
                                            fontSize: '34px',
                                        },
                                        [theme.breakpoints.down('xs')]: {
                                            fontSize: '200%',
                                            width: '76%',
                                        },
                                        [theme.breakpoints.down('lp')]: {
                                            fontSize: '20px',
                                        },
                                        [theme.breakpoints.up('lp')]: {
                                            fontSize: '20px',
                                        },
                                    }}
                                >
                                    БЕСКОНТАКТНАЯ ДОСТАВКА
                                </Typography>
                                <Typography
                                    sx={{
                                        fontWeight: '600',
                                        fontSize: '13px',
                                        width: '90%',
                                        mt: '3%',
                                        [theme.breakpoints.down('gx')]: {
                                            fontSize: '13px',
                                        },
                                        [theme.breakpoints.down('dp')]: {
                                            fontSize: '13px',
                                        },
                                        [theme.breakpoints.down('lg')]: {
                                            fontSize: '12px',
                                        },
                                        [theme.breakpoints.down('sm')]: {
                                            fontSize: '13px',
                                        },
                                        [theme.breakpoints.down('xs')]: {
                                            width: '100%',
                                        },
                                        [theme.breakpoints.down('lp')]: {
                                            fontSize: '12px',
                                        },
                                        [theme.breakpoints.up('lp')]: {
                                            fontSize: '12px',
                                        },
                                    }}
                                >
                                    Уважаемые клиенты, в связи с ситуацией в
                                    стране рекомендуем вам использовать
                                    бесконтактный способ курьерской доставки от
                                    Boxberry. Он возможен только для
                                    предоплаченных заказов.
                                </Typography>
                                <Typography
                                    sx={{
                                        fontWeight: '600',
                                        fontSize: '13px',
                                        width: '90%',
                                        marginTop: '3%',
                                        [theme.breakpoints.down('gx')]: {
                                            fontSize: '12px',
                                        },
                                        [theme.breakpoints.down('lg')]: {
                                            fontSize: '11px',
                                        },
                                        [theme.breakpoints.down('sm')]: {
                                            fontSize: '13px',
                                        },
                                        [theme.breakpoints.down('xs')]: {
                                            width: '76%',
                                        },
                                        [theme.breakpoints.down('lp')]: {
                                            fontSize: '12px',
                                        },
                                        [theme.breakpoints.up('lp')]: {
                                            fontSize: '12px',
                                        },
                                    }}
                                >
                                    Если вы живете в Москве или Московской
                                    области, курьер в установленное время
                                    оставит заказ у двери, позвонит и будет
                                    ждать на расстоянии не менее 1 метра. Если
                                    за товаром никто не выйдет, курьер вернет
                                    посылку на склад.
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            mt: '11%',
                            border: '1px solid black',
                            padding: '4%',
                        }}
                    >
                        <Typography sx={{ fontSize: '13px' }}>
                            Мы доставляем заказы в любую точку России. Стоимость
                            и сроки доставки зависят от региона, веса посылки и
                            способа доставки. Стоимость рассчитывается
                            автоматически и сразу включается в счет заказа.
                        </Typography>
                    </Box>
                    <Typography
                        variant="h1"
                        sx={{ fontWeight: '600', fontSize: '18px', mt: '4%' }}
                    >
                        ПОДРОБНЕЕ О СПОСОБАХ ДОСТАВКИ:
                    </Typography>
                    <Box sx={{ mt: '6%' }}>
                        <Typography
                            variant="h1"
                            sx={{
                                fontWeight: '600',
                                fontSize: '15px',
                                display: 'flex',
                            }}
                        >
                            Курьерская доставка Boxberry
                            <img
                                src="https://static.insales-cdn.com/files/1/2026/9078762/original/boxbery_c9185de45f3bddbbf6594384375659c5.png"
                                alt="err"
                                style={{ marginLeft: '2%' }}
                            />
                        </Typography>
                        <Typography sx={{ fontSize: '13px' }}>
                            -Посылку доставят до двери квартиры или офиса
                        </Typography>
                        <Typography sx={{ fontSize: '13px' }}>
                            {' '}
                            -Сроки: 4-6 рабочих дней
                        </Typography>

                        <Box sx={{ mt: '5%' }}>
                            <Typography
                                sx={{
                                    fontWeight: '600',
                                    fontSize: '15px',
                                }}
                                variant="h1"
                            >
                                Самовывоз из пункта Boxberry
                            </Typography>
                            <Typography sx={{ mt: '3%', fontSize: '14px' }}>
                                Хотите забрать заказ самостоятельно? Вы можете
                                посмотреть доступные для вашего города пункты
                                выдачи на сайте
                                https://boxberry.ru/find_an_office или при
                                оформлении заказа.
                            </Typography>

                            <Typography
                                sx={{
                                    fontWeight: '600',
                                    fontSize: '15px',
                                    mt: '5%',
                                }}
                                variant="h1"
                            >
                                Почта России
                                <Typography sx={{ mt: '2%', fontSize: '14px' }}>
                                    Мы работаем с Почтой России, чтобы отправить
                                    заказы в самые отдаленные регионы страны, а
                                    также в города, где отсутствует курьерская
                                    служба boxberry. Сроки: 6-8 рабочих дней
                                </Typography>
                            </Typography>
                            <Typography
                                sx={{
                                    color: 'grey',
                                    fontSize: '14px',
                                    mt: '2%',
                                }}
                            >
                                - Сроки доставки зависят от отдаленности вашего
                                региона
                            </Typography>
                            <Typography
                                sx={{
                                    fontWeight: '600',
                                    fontSize: '15px',
                                    mt: '5%',
                                }}
                                variant="h1"
                            >
                                Пункт выдачи Via.Delivery
                                <Typography sx={{ mt: '2%', fontSize: '14px' }}>
                                    Доставка осуществляется только до пункта
                                    выдачи. Вы можете посмотреть доступные для
                                    вашего города пункты выдачи на сайте
                                    https://viadelivery.ru/map или при
                                    оформлении заказа.
                                </Typography>
                            </Typography>
                            <Typography
                                sx={{
                                    fontWeight: '600',
                                    fontSize: '15px',
                                    mt: '5%',
                                }}
                                variant="h1"
                            >
                                Самовывоз из офиса в Нижнем Новгороде
                                <Typography
                                    sx={{
                                        mt: '2%',
                                        fontSize: '14px',
                                    }}
                                >
                                    Стоимость: бесплатно от любой суммы
                                    <br />
                                    Адрес: Ульянова 7, 4ый этаж
                                    <br />
                                    Забрать заказ можно после прихода смс с
                                    кодом получения заказа (это означает что
                                    весь товар есть в наличии и мы собрали
                                    заказ)
                                </Typography>
                            </Typography>
                        </Box>
                        <Typography
                            variant="h1"
                            sx={{
                                fontWeight: '600',
                                fontSize: '18px',
                                mt: '4%',
                            }}
                        >
                            ОПЛАТА:
                        </Typography>
                        <Typography
                            sx={{
                                fontWeight: '600',
                                fontSize: '15px',
                                mt: '5%',
                            }}
                            variant="h1"
                        >
                            Оплата картой
                            <Typography
                                sx={{
                                    mt: '2%',
                                    fontSize: '14px',
                                }}
                            >
                                - Бесплатная доставка при заказе от 3490 р
                                <br />
                                - Отправка заказа после онлайн оплаты на сайте
                                <br />- Оплата с помощью карт:{' '}
                                <img
                                    src="https://static.insales-cdn.com/files/1/2029/9078765/original/bank.png"
                                    alt=""
                                />
                            </Typography>
                        </Typography>
                        <Typography
                            sx={{
                                fontWeight: '600',
                                fontSize: '15px',
                                mt: '5%',
                            }}
                            variant="h1"
                        >
                            СКИДКИ И АКЦИИ
                            <Typography
                                sx={{
                                    mt: '2%',
                                    fontSize: '14px',
                                    mb: '10%',
                                }}
                            >
                                * скидка по промокоду действует только на товары
                                и не распространяется на доставку.
                                <br />
                                ** скидки по промокоду не суммируются
                            </Typography>
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </div>
    );
};

export default Delevery;
