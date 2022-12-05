
import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../contexts/CartContextProvider';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { useWish } from '../../contexts/WishlistContextProvider';


const ProductCard = ({ item }) => {
    const { addProductToCart, checkProductInCart } = useCart();
    const { addProductToWish, checkProductInWish } = useWish();
    const navigate = useNavigate();
    function titleShow(item) {
        if (item.title.length > 30) {
            return (item.title = item.title.slice(0, 27) + "...");
        } else {
            return item.title;
        }
    }

    return (
        <>
            <Box
                sx={{
                    backgroundColor: "white",
                    width: {
                        xs: "90%",
                        sm: "45%",
                        md: "30%",
                        lg: "23%",
                        xl: "23%",
                    },
                    margin: "10px",
                    display: "flex",
                    flexDirection: "column",
                    alignContent: "center",
                    alignItems: "center",
                    p: "2% 0",
                    borderRadius: "8px",
                    boxShadow: "0px 0px 15px 3px rgba(0,0,0,0.2)",
                }}
            >
                <ListItem
                    sx={{
                        padding: {
                            xs: "0 2px",
                            sm: "0 4px",
                            md: "0 8px",
                            lg: "0 12px",
                            xl: "0 14px",
                        },
                    }}
                >
                    <StarOutlineOutlinedIcon sx={{ color: "black" }} />
                </ListItem>{" "}
                <Box
                    onClick={() => navigate(`/productDetails/${item.id}`)}
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignContent: "center",
                        alignItems: "center",
                        cursor: "pointer",
                    }}
                >
                    <img src={item.picture} alt={item.title} width={"70%"} />

                    <Typography
                        sx={{
                            fontSize: "19px",
                            fontWeight: 700,
                            width: "80%",
                            height: "50px",
                            textAlign: "center",
                            cursor: "pointer",
                        }}
                    >
                        {titleShow(item)}
                    </Typography>
                    <Typography
                        sx={{ fontSize: "30px", color: "red", fontWeight: 800 }}
                    >
                        {item.price}р
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: "20px",
                            color: "gray",
                            fontWeight: 800,
                        }}
                    >
                        <s>{Math.floor(item.price * 1.4)}р</s>
                    </Typography>
                </Box>
                {checkProductInCart(item.id) ? (
                    <Button
                        onClick={() => {
                            addProductToCart(item);
                        }}
                        sx={{
                            width: "90%",
                            backgroundColor: "#01cc65",
                            padding: "8px 4px",
                            fontSize: "16px",
                            color: "white",
                            fontWeight: 600,
                            mt: 2,
                        }}
                    >
                        убери из Корзины
                    </Button>
                ) : (
                    <Button
                        onClick={() => addProductToCart(item)}
                        sx={{
                            width: "90%",
                            backgroundColor: "#01cc65",
                            padding: "8px 4px",
                            fontSize: "16px",
                            color: "white",
                            fontWeight: 600,
                            mt: 2,
                        }}
                    >
                        добавь в Корзину
                    </Button>
                )}
                {checkProductInWish(item.id) ? (
                    <Button
                        sx={{ color: 'black' }}
                        onClick={() => addProductToWish(item)}
                    >
                        <StarIcon />
                    </Button>
                ) : (
                    <Button
                        sx={{ color: 'black' }}
                        onClick={() => addProductToWish(item)}
                    >
                        <StarBorderIcon />
                    </Button>
                )}
            </Box>
        </>
    );
};

export default ProductCard;
