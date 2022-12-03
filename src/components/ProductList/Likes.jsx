import React, { useEffect, useState } from 'react';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import { useProducts } from '../../contexts/ProductContextProvider';
import { useParams } from 'react-router-dom';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useAuth } from '../../contexts/AuthContextProvider';

const Likes = () => {
    const { user } = useAuth();
    const { id } = useParams();
    const { productDetails, getProductDetails, saveEditedProduct } =
        useProducts();
    const [product, setProduct] = useState({ ...productDetails });
    useEffect(() => {
        getProductDetails(id);
    }, []);
    useEffect(() => {
        setProduct({ ...productDetails });
    }, [productDetails]);

    const handleClick = () => {
        let obj = {
            ...productDetails,
        };
        if (user.uid == undefined) {
            return;
        }
        if (checkUser(obj) == 0) {
            obj.likes.push({ like: user.uid });
            setProduct(obj);
        } else {
            let slice = checkUser(obj);
            obj.likes.splice(slice, 1);
            setProduct(obj);
        }

        saveEditedProduct(product, productDetails.id);
    };

    function checkUser(obj) {
        let slice = 0;
        obj.likes.filter((item, index) => {
            if (item.like == user.uid) {
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

    // console.log(likesQty.length, user.uid);

    return (
        <Box sx={{ display: 'flex' }} onClick={() => handleClick()}>
            <ThumbUpOffAltIcon />
            <Box>
                <Typography>{likesQty.length}</Typography>
            </Box>
        </Box>
    );
};

export default Likes;
