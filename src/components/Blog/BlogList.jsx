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
            <Box sx={{ display: "flex" }}>
                {blogs.map((item) => (
                    <BlogCard key={item.id} item={item} />
                ))}
            </Box>
        </>
    );
};

export default BlogList;
