import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useBlog } from "../../contexts/BlogContextProvaider";
import BlogCard from "./BlogCard";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const BlogList = () => {
    const { blogs, getBlog } = useBlog();
    const { count, setCount } = useState();

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
            <Stack spacing={2}>
                <Pagination count={10} variant="outlined" shape="rounded" />
            </Stack>

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
