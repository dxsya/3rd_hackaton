import { Button, Typography, Link, createTheme } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useBlog } from "../../contexts/BlogContextProvaider";

const BlogCard = ({ item, id }) => {
    const navigate = useNavigate();
    const { deleteBlog } = useBlog();

    // useEffect(() => {
    //     getBlog();
    // }, []);
    const theme = createTheme({
        breakpoints: {
            values: {
                xs: 650,
                sm: 813,
                md: 957,
                lg: 1277,
            },
        },
    });
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
                    [theme.breakpoints.down("sm")]: {
                        width: "30%",
                    },
                    [theme.breakpoints.down("xs")]: {
                        width: "35%",
                    },
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
                            [theme.breakpoints.down("lg")]: {
                                fontSize: "15px",
                            },
                            [theme.breakpoints.down("md")]: {
                                fontSize: "15px",
                                lineHeight: "15px",
                            },
                            [theme.breakpoints.down("xs")]: {
                                lineHeight: "20px",
                                fontSize: "15px",
                            },
                        }}
                    >
                        {item.title}
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: " 14px",
                            color: "black",
                            fontWeight: 300,
                            [theme.breakpoints.down("lg")]: {
                                fontSize: "12px",
                            },
                            [theme.breakpoints.down("md")]: {
                                fontSize: "15px",
                                display: "none",
                            },
                            [theme.breakpoints.down("sm")]: {
                                fontSize: "15px",
                                display: "none",
                            },
                        }}
                    >
                        {item.description.slice(0, 100) + "..."}
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: " 14px",
                            color: "black",
                            fontWeight: 300,
                            [theme.breakpoints.down("lg")]: {
                                fontSize: "12px",
                                display: "none",
                            },
                            [theme.breakpoints.down("md")]: {
                                fontSize: "12px",
                                display: "flex",
                            },
                            [theme.breakpoints.down("sm")]: {
                                fontSize: "15px",
                                display: "flex",
                            },
                        }}
                    >
                        {item.description.slice(0, 70) + "..."}
                    </Typography>
                </Link>
                <Button
                    onClick={() => {
                        deleteBlog(id);
                        navigate("/blog");
                    }}
                    sx={{
                        width: "100%",
                        backgroundColor: "black",
                        color: "white",
                    }}
                >
                    Delete
                </Button>
            </Box>
        </>
    );
};

export default BlogCard;
