import React, { useEffect, useState } from 'react';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import { useProducts } from '../../contexts/ProductContextProvider';
import { useParams } from 'react-router-dom';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useAuth } from '../../contexts/AuthContextProvider';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';

const Likes = () => {
    const { user } = useAuth();
    const { id } = useParams();
    const { productDetails, getProductDetails, saveEditedProduct } =
        useProducts();

    useEffect(() => {
        getProductDetails(id);
    }, []);
    useEffect(() => {
        setProduct({ ...productDetails });
    }, [productDetails]);
    const [product, setProduct] = useState({ ...productDetails });
    const handleClick = () => {
        let obj = {
            ...productDetails,
        };
        if (user.email == undefined) {
            return;
        }
        if (checkUser(obj) == 0) {
            obj.likes.push({ like: user.email });
            setProduct(obj);
        } else {
            let slice = checkUser(obj);
            obj.likes.splice(slice, 1);
            setProduct(obj);
        }

        saveEditedProduct(product, productDetails.id);
    };

    const [like, setLike] = useState(false);

    function checkUser(obj) {
        let slice = 0;
        obj.likes.filter((item, index) => {
            if (item.like == user.email) {
                if (index == 0) {
                    slice = -1;
                } else {
                    slice = index;
                }
            }
        });
        return slice;
    }

    let likesQty = [];
    if (!productDetails.likes) {
        likesQty = [];
    } else {
        likesQty = [...productDetails.likes];
    }

    return (
        <Box
            sx={{ display: 'flex' }}
            onClick={() => {
                handleClick();
                setLike(!like);
            }}
        >
            {' '}
            {like ? (
                <FavoriteOutlinedIcon sx={{ color: 'red' }} />
            ) : (
                <FavoriteBorderOutlinedIcon />
            )}
            <Box>
                <Typography>{likesQty.length}</Typography>
            </Box>
        </Box>
    );
};

export default Likes;
