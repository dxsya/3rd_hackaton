import { Button, FormControl, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const AddProduct = () => {
    return (
        <>
            <Box align="center">
                <FormControl sx={{ width: '40%' }}>
                    <TextField
                        label="Title"
                        size="small"
                        name="title"
                        sx={{ margin: '1%' }}
                    />
                    <TextField
                        label="Picture"
                        size="small"
                        name="picture"
                        sx={{ margin: '1%' }}
                    />
                    <TextField
                        label="Price"
                        size="small"
                        name="price"
                        sx={{ margin: '1%' }}
                    />
                    <TextField
                        label="Descripton"
                        size="small"
                        name="description"
                        sx={{ margin: '1%' }}
                    />
                    <TextField
                        label="Type"
                        size="small"
                        name="type"
                        sx={{ margin: '1%' }}
                    />
                    <Button variant="outlined" sx={{ margin: '1%' }}>
                        Добавить Товар
                    </Button>
                </FormControl>
            </Box>
        </>
    );
};

export default AddProduct;
