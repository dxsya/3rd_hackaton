import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useNavigate } from 'react-router-dom';
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
    const navigate = useNavigate();
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
                        justifyContent: 'space-between',
                        width: '90%',
                        margin: '0 auto',
                    }}
                >
                    {smi.map((item, index) => (
                        <Box
                            key={index}
                            sx={{
                                width: { xs: '46%', md: '32%' },
                                height: '180px',
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
        </div>
    );
};

export default Home;
