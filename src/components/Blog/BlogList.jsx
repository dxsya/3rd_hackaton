import { createTheme, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useBlog } from "../../contexts/BlogContextProvaider";
import BlogCard from "./BlogCard";
import BlogPagination from "./BlogPagination";

const BlogList = () => {
    const { blogs, getBlog, fetchByParams } = useBlog();

    useEffect(() => {
        getBlog();
    }, []);
    const theme = createTheme({
        breakpoints: {
            values: {
                xs: 500,
                sm: 813,
                md: 953,
                lg: 1277,
            },
        },
    });

    const [page, setPage] = useState(1);
    const blogPerPage = 8;
    const pagesQty = Math.ceil(blogs.length / blogPerPage);

    function currentBlog() {
        const begin = (page - 1) * blogPerPage;
        const end = begin + blogPerPage;
        return blogs.slice(begin, end);
    }
    const location = useLocation();

    useEffect(() => {
        getBlog();
    }, [location.search]);

    return (
        <>
            <Typography
                variant="h3"
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    fontWeight: "600",
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
                {currentBlog().map((item) => (
                    <BlogCard key={item.id} item={item} />
                ))}
            </Box>
            <BlogPagination page={page} setPage={setPage} pagesQty={pagesQty} />
        </>
    );
};

export default BlogList;
