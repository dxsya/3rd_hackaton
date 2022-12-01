import { Button, Typography, Link } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const BlogCard = ({ item }) => {
    return (
        <>
            <Box
                sx={{
                    width: "21%",
                    mt: "2%",
                    display: "flex",
                    flexDirection: "column",
                    alignContent: "center",
                    alignItems: "center",
                }}
            >
                <Link
                    href={item.link}
                    sx={{
                        textDecoration: "none",
                    }}
                >
                    <img src={item.image} alt={item.title} width={"100%"} />

                    <Typography
                        sx={{
                            fontSize: "20px",
                            color: "black",
                            fontWeight: 600,
                            height: "45px",
                            lineHeight: "20px",
                        }}
                    >
                        {item.title}
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: " 14px",
                            color: "black",
                            fontWeight: 300,
                        }}
                    >
                        {item.description.slice(0, 100) + "..."}
                    </Typography>
                </Link>
            </Box>
        </>
    );
};

export default BlogCard;
