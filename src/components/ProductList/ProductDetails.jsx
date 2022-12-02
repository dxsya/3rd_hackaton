import { Box, Button, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useCart } from '../../contexts/CartContextProvider';
import { useProducts } from '../../contexts/ProductContextProvider';
import Recomendations from '../Recomendantions/Recomendations';

const ProductDetails = () => {
    const {
        productDetails,
        getProductDetails,
        deleteProduct,
        saveEditedProduct,
    } = useProducts();
    useEffect(() => {
        getProductDetails(id);
    }, []);

    // console.log(productDetails);
    const { addProductToCart, checkProductInCart } = useCart();
    const { id } = useParams();
    const navigate = useNavigate();

    const [product, setProduct] = useState({ ...productDetails });
    const [comment, setComment] = useState({});

    const handleInput = (e) => {
        let newComment = { comment: e.target.value };
        setComment(newComment);
    };
    const handleClick = () => {
        let obj = {
            ...productDetails,
        };
        obj.comments.push(comment);
        setProduct(obj);
        saveEditedProduct(product, productDetails.id);
    };
    let com = [];
    if (!productDetails.comments) {
        com = [];
    } else {
        com = [...productDetails.comments];
    }

    if (!productDetails.comments) return;

    return (
        <div>
            <Box
                sx={{
                    m: 2,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <img src={productDetails.picture} alt="" width={'30%'} />

                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: '50%',
                        marginLeft: '5%',
                    }}
                >
                    <Typography sx={{ fontWeight: 600, fontSize: '30px' }}>
                        {productDetails.title}
                    </Typography>
                    <Typography>{productDetails.type}</Typography>
                    <Typography>
                        {JSON.stringify(productDetails.anime)}
                    </Typography>

                    <Typography
                        sx={{ fontSize: '30px', color: 'red', fontWeight: 800 }}
                    >
                        {productDetails.price}р
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: '20px',
                            color: 'gray',
                            fontWeight: 800,
                        }}
                    >
                        <s>{Math.floor(productDetails.price * 1.4)}р</s>
                    </Typography>
                    <Typography>{productDetails.description}</Typography>
                    {com.map((item) => (
                        <Typography>{item.comment}</Typography>
                    ))}
                    {checkProductInCart(productDetails.id) ? (
                        <Button
                            onClick={() => {
                                addProductToCart(productDetails);
                            }}
                            sx={{
                                width: '40%',
                                backgroundColor: '#01cc65',
                                padding: '8px',
                                fontSize: '18px',
                                color: 'white',
                                fontWeight: 600,
                                mt: 2,
                            }}
                        >
                            Убери из корзины
                        </Button>
                    ) : (
                        <Button
                            onClick={() => addProductToCart(productDetails)}
                            sx={{
                                width: '40%',
                                backgroundColor: '#01cc65',
                                padding: '8px',
                                fontSize: '18px',
                                color: 'white',
                                fontWeight: 600,
                                mt: 2,
                            }}
                        >
                            добавь в корзину
                        </Button>
                    )}
                    <Box>
                        <Button
                            onClick={() => {
                                deleteProduct(id);
                                navigate('/products');
                            }}
                        >
                            Delete
                        </Button>
                        <Button onClick={() => navigate(`edit/${id}`)}>
                            Edit
                        </Button>
                    </Box>
                    <TextField
                        onChange={handleInput}
                        name="comments"
                        inputProps={{ 'aria-label': 'controlled' }}
                    />
                    <Button onClick={() => handleClick()}>отзыв</Button>
                </Box>
            </Box>
            <Recomendations />
        </div>
    );
};

export default ProductDetails;
