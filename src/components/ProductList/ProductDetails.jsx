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
                    display: {
                        xs: 'block',
                        sm: 'block',
                        md: 'flex',
                        lg: 'flex',
                        xl: 'flex',
                    },
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <img src={productDetails.picture} alt="" width={'30%'} />

                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: {
                            xs: '80%',
                            sm: '80%',
                            md: '50%',
                            lg: '50%',
                            xl: '50%',
                        },
                        marginLeft: '5%',
                    }}
                >
                    <Typography sx={{ fontWeight: 600, fontSize: '30px' }}>
                        {productDetails.title}
                    </Typography>
                    {productDetails.type == 'energy' ? (
                        <Typography>Тип: Энергетик</Typography>
                    ) : (
                        <Typography>Тип: Шейкер</Typography>
                    )}
                    {productDetails.anime == true ? (
                        <Typography>Аниме Коллекция</Typography>
                    ) : (
                        <></>
                    )}

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

                    {checkProductInCart(productDetails.id) ? (
                        <Button
                            onClick={() => {
                                addProductToCart(productDetails);
                            }}
                            sx={{
                                width: {
                                    xs: '80%',
                                    sm: '80%',
                                    md: '40%',
                                    lg: '40%',
                                    xl: '40%',
                                },
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
                                width: {
                                    xs: '80%',
                                    sm: '80%',
                                    md: '40%',
                                    lg: '40%',
                                    xl: '40%',
                                },
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
                </Box>
            </Box>
            <Box
                sx={{
                    backgroundColor: '#F5F5F5',
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <TextField
                    onChange={handleInput}
                    name="comments"
                    placeholder="Оставить отзыв"
                    inputProps={{ 'aria-label': 'controlled' }}
                    sx={{
                        padding: 1,
                        width: {
                            xs: '80%',
                            sm: '80%',
                            md: '40%',
                            lg: '40%',
                            xl: '40%',
                        },
                    }}
                />
                <Button
                    sx={{
                        width: {
                            xs: '80%',
                            sm: '80%',
                            md: '40%',
                            lg: '40%',
                            xl: '40%',
                        },
                        backgroundColor: '#01cc65',
                        padding: '8px',
                        fontSize: '18px',
                        color: 'white',
                        fontWeight: 600,
                    }}
                    onClick={() => handleClick()}
                >
                    Добавить
                </Button>
            </Box>
            <Typography
                variant="h6"
                sx={{
                    padding: '2% 0 0 6%',
                    fontWeight: 600,
                }}
            >
                Отзывы
            </Typography>
            <Box
                sx={{
                    width: '87%',
                    margin: '10px auto',
                    boxShadow: '0px 0px 10px 7px rgba(34, 60, 80, 0.2)',
                    paddingY: '2%',
                }}
            >
                {' '}
                {com.map((item) => (
                    <Box
                        sx={{
                            width: '80%',
                            marginLeft: '8%',
                            paddingY: '10px',
                            fontSize: '18px',
                            fontWeight: 600,
                            borderBottom: '1px solid #aeaeae',
                        }}
                    >
                        {item.comment}
                    </Box>
                ))}
            </Box>
            <Recomendations />
        </div>
    );
};

export default ProductDetails;
