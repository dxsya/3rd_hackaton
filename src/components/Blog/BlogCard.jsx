import { Button, Typography, Link } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const BlogCard = ({ item }) => {
    return (
        <>
            <Link
                href={item.link}
                sx={{
                    textDecoration: "none",
                }}
            >
                <Box
                    sx={{
                        backgroundColor: "pink",
                        width: "80%",
                        margin: "10px",
                        display: "flex",
                        flexDirection: "column",
                        alignContent: "center",
                        alignItems: "center",
                        p: "2% 0",
                    }}
                >
                    <img src={item.image} alt={item.title} width={"80%"} />

                    <Typography
                        sx={{ fontSize: "30px", color: "red", fontWeight: 500 }}
                    >
                        {item.title}
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: "20px",
                            color: "gray",
                            fontWeight: 300,
                        }}
                    >
                        {item.description.slice(0, 100) + "..."}
                    </Typography>
                </Box>
            </Link>
        </>
    );
};

export default BlogCard;
