import { Button, FormControl, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const AddBlog = () => {
    return (
        <>
            <Box align="center">
                <FormControl sx={{ width: "40%" }}>
                    <TextField
                        label="Image"
                        size="small"
                        name="image"
                        sx={{ margin: "1%" }}
                    />
                    <TextField
                        label="Title"
                        size="small"
                        name="title"
                        sx={{ margin: "1%" }}
                    />
                    <TextField
                        label="description"
                        size="small"
                        name="description"
                        sx={{ margin: "1%" }}
                    />
                    <TextField
                        label="Type"
                        size="small"
                        name="type"
                        sx={{ margin: "1%" }}
                    />
                    <TextField
                        label="Type"
                        size="small"
                        name="add link"
                        sx={{ margin: "1%" }}
                    />
                    <Button variant="outlined" sx={{ margin: "1%" }}>
                        Add Blog
                    </Button>
                </FormControl>
            </Box>
        </>
    );
};

export default AddBlog;
