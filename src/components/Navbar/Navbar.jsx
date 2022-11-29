import { List, ListItem } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    return (
        <>
            <List sx={{ display: 'flex', backgroundColor: 'green' }}>
                <ListItem onClick={() => navigate('/')}>Logo</ListItem>
                <ListItem onClick={() => navigate('/auth')}>Auth</ListItem>
                <ListItem onClick={() => navigate('/addProduct')}>
                    Add product
                </ListItem>
            </List>
        </>
    );
};

export default Navbar;
