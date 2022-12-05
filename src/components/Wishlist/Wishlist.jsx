import React, { useEffect } from 'react';
import { useWish } from '../../contexts/WishlistContextProvider';
import { Button, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

const Wishlist = () => {
    const { getWish, wish, deleteWishProduct } = useWish();
    useEffect(() => {
        getWish();
    }, []);

    if (!wish) return;

    return (
        <div>
            {wish.wishlist.map((product, index) => (
                <Box
                    key={index}
                    sx={{
                        display: {
                            xs: 'block',
                            sm: 'flex',
                            md: 'flex',
                            lg: 'flex',
                            xl: 'flex',
                        },
                        alignContent: 'center',
                        alignItems: 'center',
                        justifyContent: 'space-around',
                        borderBottom: '1px solid #aeaeae',
                        width: '90%',
                        margin: '0 auto',
                        p: 2,
                    }}
                >
                    <img src={product.item.picture} alt="" width={'10%'} />
                    <Typography
                        sx={{
                            textAlign: 'left',
                            width: '20%',
                            fontWeight: 600,
                            fontSize: {
                                xs: '10px',
                                sm: '14px',
                                md: '18px',
                                lg: '20px',
                                xl: '20px',
                            },
                        }}
                    >
                        {product.item.title}
                    </Typography>
                    <Box
                        sx={{
                            display: 'flex',
                            width: {
                                xs: '90%',
                                sm: '50%',
                                md: '50%',
                                lg: '50%',
                                xl: '50%',
                            },
                            justifyContent: 'space-between',
                        }}
                    >
                        <Button
                            sx={{
                                padding: 0,
                                display: 'block',
                                width: '20px',
                            }}
                        >
                            <DeleteOutlinedIcon
                                onClick={() =>
                                    deleteWishProduct(product.item.id)
                                }
                            />
                        </Button>
                    </Box>
                </Box>
            ))}
        </div>
    );
};

export default Wishlist;
