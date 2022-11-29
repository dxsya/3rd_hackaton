import { Button, FormControl, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useProducts } from '../../contexts/ProductContextProvider';

const AddProduct = () => {
    const navigate = useNavigate();

    const { addProduct } = useProducts();

    const [product, setProduct] = useState({
        title: '',
        description: '',
        price: 0,
        picture: '',
        type: '',
    });

    const handleInput = (e) => {
        if (e.target.name === 'price') {
            let obj = { ...product, [e.target.name]: Number(e.target.value) };
            setProduct(obj);
        } else {
            let obj = { ...product, [e.target.name]: e.target.value };
            setProduct(obj);
        }
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
                    />
                    <TextField
                        onChange={handleInput}
                        label="Picture"
                        size="small"
                        name="picture"
                        sx={{ margin: '1%' }}
                    />
                    <TextField
                        onChange={handleInput}
                        label="Price"
                        size="small"
                        name="price"
                        sx={{ margin: '1%' }}
                    />
                    <TextField
                        onChange={handleInput}
                        label="Descripton"
                        size="small"
                        name="description"
                        sx={{ margin: '1%' }}
                    />
                    <TextField
                        onChange={handleInput}
                        label="Type"
                        size="small"
                        name="type"
                        sx={{ margin: '1%' }}
                    />
                    <Button
                        onClick={() => {
                            addProduct(product);
                            navigate('/products');
                        }}
                        variant="outlined"
                        sx={{ margin: '1%' }}
                    >
                        Добавить Товар
                    </Button>
                </FormControl>
            </Box>
        </>
    );
};

export default AddProduct;
