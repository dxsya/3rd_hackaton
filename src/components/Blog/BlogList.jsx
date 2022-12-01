import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import { useBlog } from "../../contexts/BlogContextProvaider";
import BlogCard from "./BlogCard";

const BlogList = () => {
    const { blogs, getBlog } = useBlog();

    useEffect(() => {
        getBlog();
    }, []);

    return (
        <>
            <Typography
                variant="h3"
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    fontWeight: "900",
                    mt: "3%",
                }}
            >
                Блог Imba Shop
            </Typography>

            <Box
                sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-evenly",
                }}
            >
                {blogs.map((item) => (
                    <BlogCard key={item.id} item={item} />
                ))}
            </Box>
        </>
    );
};

export default BlogList;
