
import { Badge, List, ListItem } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import StarOutlineOutlinedIcon from '@mui/icons-material/StarOutlineOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';


const Navbar = () => {
    const navigate = useNavigate();
    return (
        <>

            <List
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    backgroundColor: 'white',
                    boxShadow: '1px 1px 5px 0px rgba(0,0,0,0.61)',
                }}
            >
                <ListItem sx={{ width: '10%' }}>
                    {' '}
                    <img
                        src="https://static.insales-cdn.com/assets/1/762/3212026/1669721932/logo.png"
                        alt="logo"
                        onClick={() => navigate('/')}
                    />
                </ListItem>
                <Box
                    sx={{
                        display: 'flex',
                        width: '60%',
                        justifyContent: 'center',
                    }}
                >
                    <ListItem
                        onClick={() => navigate('/addProduct')}
                        sx={{ padding: '1% 0', width: '15%' }}
                    >
                        Add product
                    </ListItem>
                    <ListItem
                        sx={{ padding: '1% 0', width: '10%' }}
                        onClick={() => navigate('/products')}
                    >
                        магазин
                    </ListItem>
                    <ListItem sx={{ padding: '1% 0', width: '10%' }}>
                        оплата
                    </ListItem>
                    <ListItem sx={{ padding: '1% 0', width: '10%' }}>
                        блоги
                    </ListItem>
                    <ListItem sx={{ padding: '1% 0', width: '10%' }}>
                        что-то
                    </ListItem>
                </Box>
                <Box sx={{ display: 'flex' }}>
                    <ListItem>
                        <StarOutlineOutlinedIcon />
                    </ListItem>
                    <ListItem>
                        <Badge badgeContent={98} color="secondary">
                            <ShoppingCartOutlinedIcon />
                        </Badge>
                    </ListItem>
                    <ListItem onClick={() => navigate('/auth')}>
                        <PersonOutlineOutlinedIcon />
                    </ListItem>
                </Box>
            </List>
        </>
    );
};

export default Navbar;
