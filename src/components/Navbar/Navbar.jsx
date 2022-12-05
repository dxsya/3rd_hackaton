import { Badge, List, ListItem } from '@mui/material';

import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import StarOutlineOutlinedIcon from '@mui/icons-material/StarOutlineOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { useCart } from '../../contexts/CartContextProvider';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContextProvider';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { useEffect } from 'react';
import { useWish } from '../../contexts/WishlistContextProvider';
import { getProductCountInCart } from '../../helpers/functions';

const pages = [
    { name: 'Магазин', link: '/products' },
    { name: 'Блоги', link: '/blog' },
    { name: 'О нас', link: '/aboutUs' },
];

function ResponsiveAppBar() {
    const {
        user: { email },
        handleLogout,
    } = useAuth();

    const location = useLocation();

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };
    const [count, setCount] = React.useState(0);
    const { addProductToCart } = useCart();

    React.useEffect(() => {
        setCount(getProductCountInCart);
    }, [addProductToCart]);
    const navigate = useNavigate();

    return (
        <AppBar position="static" sx={{ backgroundColor: 'white' }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box
                        sx={{
                            width: '10%',
                            ml: 10,
                            display: { xs: 'none', md: 'flex' },
                            mr: 1,
                        }}
                    >
                        {' '}
                        <img
                            src="https://static.insales-cdn.com/assets/1/762/3212026/1669721932/logo.png"
                            alt="logo"
                            onClick={() => navigate('/')}
                        />
                    </Box>

                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: 'flex', md: 'none' },
                        }}
                    >
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            sx={{ color: 'black' }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem
                                    key={page.name}
                                    onClick={() => {
                                        handleCloseNavMenu();
                                        navigate(page.link);
                                    }}
                                >
                                    <Typography textAlign="center">
                                        {page.name}
                                    </Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                    <Box
                        sx={{
                            ml: 10,
                            display: { xs: 'flex', md: 'none' },
                            mr: 1,
                            width: '30%',
                        }}
                    >
                        {' '}
                        <img
                            src="https://static.insales-cdn.com/assets/1/762/3212026/1669721932/logo.png"
                            alt="logo"
                            onClick={() => navigate('/')}
                        />
                    </Box>
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: 'none', md: 'flex' },
                        }}
                    >
                        {pages.map((page) =>
                            location.pathname === page.link ? (
                                <Button
                                    key={page.name}
                                    onClick={() => {
                                        handleCloseNavMenu();
                                        navigate(page.link);
                                    }}
                                    sx={{
                                        my: 2,
                                        color: 'black',
                                        display: 'block',
                                        backgroundColor: '#e5e5e5',
                                    }}
                                >
                                    {page.name}
                                </Button>
                            ) : (
                                <Button
                                    key={page.name}
                                    onClick={() => {
                                        handleCloseNavMenu();
                                        navigate(page.link);
                                    }}
                                    sx={{
                                        my: 2,
                                        color: 'black',
                                        display: 'block',
                                    }}
                                >
                                    {page.name}
                                </Button>
                            )
                        )}
                    </Box>

                    <Box sx={{ display: 'flex' }}>
                        <ListItem
                            sx={{
                                padding: {
                                    xs: '0 2px',
                                    sm: '0 4px',
                                    md: '0 8px',
                                    lg: '0 12px',
                                    xl: '0 14px',
                                },
                                cursor: 'pointer',
                            }}
                            onClick={() => navigate('/wishlist')}
                        >
                            <StarOutlineOutlinedIcon sx={{ color: 'black' }} />
                        </ListItem>
                        <ListItem
                            onClick={() => {
                                navigate('/cart');
                            }}
                            sx={{
                                padding: {
                                    xs: '0 2px',
                                    sm: '0 4px',
                                    md: '0 8px',
                                    lg: '0 12px',
                                    xl: '0 14px',
                                },
                                cursor: 'pointer',
                            }}
                        >
                            <Badge badgeContent={count} color="error">
                                <ShoppingCartOutlinedIcon
                                    sx={{ color: 'black' }}
                                />
                            </Badge>
                        </ListItem>
                        <ListItem
                            sx={{
                                padding: {
                                    xs: '0 2px',
                                    sm: '0 4px',
                                    md: '0 8px',
                                    lg: '0 12px',
                                    xl: '0 14px',
                                },
                            }}
                        >
                            {email ? (
                                <Box
                                    onClick={handleLogout}
                                    sx={{
                                        cursor: 'pointer',
                                        width: '24px',
                                        height: '24px',
                                    }}
                                >
                                    <LogoutOutlinedIcon
                                        sx={{ color: 'black' }}
                                    />
                                </Box>
                            ) : (
                                <Link to="/auth">
                                    <Box
                                        onClick={handleLogout}
                                        sx={{
                                            cursor: 'pointer',
                                            width: '24px',
                                            height: '24px',
                                        }}
                                    >
                                        <PersonOutlineOutlinedIcon
                                            sx={{ color: 'black' }}
                                        />
                                    </Box>
                                </Link>
                            )}
                        </ListItem>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default ResponsiveAppBar;
