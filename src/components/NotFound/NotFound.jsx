import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Recomendations from '../Recomendantions/Recomendations';

const NotFound = () => {
    const navigate = useNavigate();
    return (
        <>
            <Box
                sx={{
                    textAlign: 'center',
                    marginY: 3,
                }}
            >
                <img
                    src="https://static.insales-cdn.com/assets/1/2446/3221902/1669973951/404bite.png"
                    alt=""
                    width={'320px'}
                />
                <Typography sx={{ fontWeight: 600, fontSize: '22px' }}>
                    Упс, на этой странице пусто.
                </Typography>
                <Typography>
                    Keep calm and recharge with IMBA GAME ENERGY.
                </Typography>
                <Button
                    onClick={() => navigate('/')}
                    sx={{
                        backgroundColor: '#0c6',
                        color: 'white',
                        borderRadius: 0,
                        padding: '10px 18px',
                        fontWeight: 500,
                        mt: 5,
                        width: '200px',
                    }}
                >
                    На главную
                </Button>
            </Box>
            <Recomendations />
        </>
    );
};

export default NotFound;
