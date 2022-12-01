import { Button, FormControl, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useBlog } from "../../contexts/BlogContextProvaider";

const AddBlog = () => {
    const [blog, setBlog] = useState({
        image: "",
        title: "",
        description: "",
        link: "",
    });

    const handleInput = (e) => {
        if (e.target.name) {
            let obj = { ...blog, [e.target.name]: e.target.value };
            setBlog(obj);
        }
    };

    const { addBlog } = useBlog();

    return (
        <>
            <h1 style={{ display: "flex", justifyContent: "center" }}>
                ADD BLOG
            </h1>
            <Box align="center">
                <FormControl sx={{ width: "40%" }}>
                    <TextField
                        onChange={handleInput}
                        label="Image"
                        size="small"
                        name="image"
                        sx={{ margin: "1%" }}
                    />
                    <TextField
                        onChange={handleInput}
                        label="Title"
                        size="small"
                        name="title"
                        sx={{ margin: "1%" }}
                    />
                    <TextField
                        onChange={handleInput}
                        label="description"
                        size="small"
                        name="description"
                        sx={{ margin: "1%" }}
                    />

                    <TextField
                        onChange={handleInput}
                        label="add link"
                        size="small"
                        name="link"
                        sx={{ margin: "1%" }}
                    />
                    <Button
                        onClick={() => addBlog(blog)}
                        variant="outlined"
                        sx={{ margin: "1%" }}
                    >
                        Add Blog
                    </Button>
                </FormControl>
            </Box>
        </>
    );
};

export default AddBlog;
