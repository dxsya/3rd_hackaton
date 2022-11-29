import { Button, FormControl, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useProducts } from '../../contexts/ProductContextProvider';

const AddProduct = () => {
    const { productDetails, getProductDetails, saveEditedProduct } =
        useProducts();

    const [product, setProduct] = useState(productDetails);
    const { id } = useParams();

    useEffect(() => {
        getProductDetails();
    }, []);

    useEffect(() => {
        setProduct(productDetails);
    }, [productDetails]);

    const navigate = useNavigate();

    const handleInput = (e) => {
        let obj = { ...product, [e.target.name]: e.target.value };
        setProduct(obj);
    };

    return (
        <>
            <Box align="center">
                <FormControl sx={{ width: '40%' }}>
                    <TextField
                        onChange={handleInput}
                        label="Title"
                        size="small"
                        name="title"
                        sx={{ margin: '1%' }}
                        value={product.title || ''}
                    />
                    <TextField
                        onChange={handleInput}
                        label="Picture"
                        size="small"
                        name="picture"
                        sx={{ margin: '1%' }}
                        value={product.picture || ''}
                    />
                    <TextField
                        onChange={handleInput}
                        label="Price"
                        size="small"
                        name="price"
                        sx={{ margin: '1%' }}
                        value={product.price || ''}
                    />
                    <TextField
                        onChange={handleInput}
                        label="Descripton"
                        size="small"
                        name="description"
                        sx={{ margin: '1%' }}
                        value={product.description || ''}
                    />
                    <TextField
                        onChange={handleInput}
                        label="Type"
                        size="small"
                        name="type"
                        sx={{ margin: '1%' }}
                        value={product.type || ''}
                    />
                    <Button
                        onClick={() => {
                            saveEditedProduct(product, id);
                            navigate('/products');
                        }}
                        variant="outlined"
                        sx={{ margin: '1%' }}
                    >
                        Изменить Товар
                    </Button>
                </FormControl>
            </Box>
        </>
    );
};

export default AddProduct;
