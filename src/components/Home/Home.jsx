import { YouTube, YoutubeSearchedForOutlined } from '@mui/icons-material';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useBlog } from '../../contexts/BlogContextProvaider';
import { useCart } from '../../contexts/CartContextProvider';
import BlogCard from '../Blog/BlogCard';
import Recomendations from '../Recomendantions/Recomendations';

const clan = [
    {
        link: 'https://static.insales-cdn.com/assets/1/2446/3221902/1669973951/quadrat-img.jpg',
    },
    {
        link: 'https://static.insales-cdn.com/assets/1/2446/3221902/1669973951/joe-img.jpg',
    },
    {
        link: 'https://static.insales-cdn.com/assets/1/2446/3221902/1669973951/soda-img.jpg',
    },
    {
        link: 'https://static.insales-cdn.com/assets/1/2446/3221902/1669973951/faus-img.jpg',
    },
];

const smi = [
    {
        link: 'https://static.insales-cdn.com/assets/1/2446/3221902/1669973951/mania.png',
    },
    {
        link: 'https://static.insales-cdn.com/assets/1/2446/3221902/1669973951/gameru.png',
    },
    {
        link: 'https://static.insales-cdn.com/assets/1/2446/3221902/1669973951/brodude.svg',
    },
    {
        link: 'https://static.insales-cdn.com/assets/1/2446/3221902/1669973951/gameguru.svg',
    },
    {
        link: 'https://static.insales-cdn.com/assets/1/2446/3221902/1669973951/sostav.png',
    },
    {
        link: 'https://static.insales-cdn.com/assets/1/2446/3221902/1669973951/progamer.png',
    },
];

const Home = () => {
    const { blogs, getBlog } = useBlog();
    const { getCart } = useCart();
    useEffect(() => {
        getBlog();
        getCart();
    }, []);
    return (
        <div>
            <Recomendations />
            <Box sx={{ marginY: '5%' }}>
                <Typography
                    sx={{
                        textAlign: 'center',
                        fontSize: '30px',
                        fontWeight: 600,
                        mb: 2,
                    }}
                >
                    IMBA ENERGY CLAN
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    {clan.map((item, index) => (
                        <Box key={index}>
                            <img src={item.link} alt="" width={'100%'} />
                        </Box>
                    ))}
                </Box>
            </Box>
            <Box sx={{ marginY: '5%' }}>
                <Typography
                    sx={{
                        textAlign: 'center',
                        fontSize: '30px',
                        fontWeight: 600,
                        mb: 2,
                    }}
                >
                    CМИ О НАС
                </Typography>
                <Box
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: {
                            md: 'space-between',
                            xs: 'center',
                        },

                        width: '90%',
                        margin: '0 auto',
                    }}
                >
                    {smi.map((item, index) => (
                        <Box
                            key={index}
                            sx={{
                                width: { xs: '80%', md: '32%' },
                                height: {
                                    xs: '100px',
                                    md: '180px',
                                    lg: '220px',
                                },
                                border: '1px solid #aeaeae',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                mb: 3,
                            }}
                        >
                            <img
                                src={item.link}
                                alt=""
                                width={'60%'}
                                height={'40%'}
                            />
                        </Box>
                    ))}
                </Box>
            </Box>
            <Box sx={{ paddingY: '5%', backgroundColor: '#f3f3f3' }}>
                <Typography
                    sx={{
                        textAlign: 'center',
                        fontSize: '30px',
                        fontWeight: 600,
                        mb: 2,
                    }}
                >
                    БЛОГЕРЫ О НАС
                </Typography>
                <Box
                    sx={{
                        display: { md: 'flex', xs: 'block' },
                        width: '80%',
                        margin: '0 auto',
                        justifyContent: 'center',
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            alignContent: 'center',
                            border: '1px solid #aeaeae',
                            height: '100%',
                        }}
                    >
                        <img
                            src="https://static.insales-cdn.com/assets/1/2446/3221902/1669973951/u9.jpg"
                            alt=""
                            width={'40%'}
                        />
                        <Box sx={{ ml: 1, width: '70%' }}>
                            <Box sx={{ display: 'flex' }}>
                                <Typography
                                    sx={{
                                        fontWeight: 600,
                                        fontSize: '18px',
                                        mr: 2,
                                    }}
                                >
                                    КУЛЬТАС
                                </Typography>
                                <YouTube sx={{ color: 'black' }} />
                            </Box>
                            <Typography sx={{ width: '100%' }}>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Ea aliquid, quas non ratione
                                voluptatem quae sequi tempora perferendis?
                                Aliquam assumenda asperiores nam est dolore
                                quisquam.
                            </Typography>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            display: { md: 'flex', xs: 'none' },
                            alignItems: 'center',
                            alignContent: 'center',
                            ml: 4,
                            border: '1px solid #aeaeae',
                            height: '100%',
                        }}
                    >
                        <img
                            src="https://static.insales-cdn.com/assets/1/2446/3221902/1669973951/u10.jpg"
                            alt=""
                            width={'40%'}
                        />
                        <Box sx={{ ml: 1, width: '70%' }}>
                            <Box sx={{ display: 'flex' }}>
                                <Typography
                                    sx={{
                                        fontWeight: 600,
                                        fontSize: '18px',
                                        mr: 2,
                                    }}
                                >
                                    POLEZNYIBES
                                </Typography>
                                <YouTube sx={{ color: 'black' }} />
                            </Box>
                            <Typography sx={{ width: '100%' }}>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Ea aliquid, quas non ratione
                                voluptatem quae sequi tempora perferendis?
                                Aliquam assumenda asperiores nam est dolore
                                quisquam.
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box sx={{ marginY: '5%' }}>
                <Typography
                    sx={{
                        textAlign: 'center',
                        fontSize: '30px',
                        fontWeight: 600,
                        mb: 2,
                    }}
                >
                    БЛОГ
                </Typography>
                <Box
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'space-evenly',
                    }}
                >
                    {' '}
                    {blogs.slice(0, 4).map((item) => (
                        <BlogCard key={item.id} item={item} />
                    ))}
                </Box>
            </Box>
        </div>
    );
};

export default Home;
