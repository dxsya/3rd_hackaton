import React from "react";
import Typography from "@mui/material/Typography";

import { Link } from "@mui/material";
import { createTheme, List, ListItem } from "@mui/material";
import { Box } from "@mui/system";
import ContactMap from "./ContactMap";

const Contact = () => {
    const theme = createTheme({
        breakpoints: {
            values: {
                sm: 600,
                lg: 900,
            },
        },
    });

    return (
        <>
            <Box
                sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    boxSizing: "border-box",
                    margin: "0",
                }}
            >
                <Box>
                    <Typography
                        sx={{
                            fontWeight: "600",
                            fontSize: "19px",

                            mt: "2%",
                        }}
                        component="h1"
                        variant="h5"
                    >
                        Контакты IMBA Game Energy{" "}
                    </Typography>
                    <Typography
                        sx={{
                            mt: "2%",
                            mb: "2%",
                        }}
                    >
                        Как с нами связаться
                    </Typography>
                    <Box
                        sx={{
                            display: "flex",
                            [theme.breakpoints.down("lg")]: {
                                display: "block",
                            },
                        }}
                    >
                        <Box
                            sx={{
                                border: "1px solid black",
                            }}
                        >
                            <Box
                                sx={{
                                    padding: "3%",
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontWeight: "600",
                                        fontSize: "14px",
                                        mt: "8%",
                                    }}
                                    component="h1"
                                    variant="h5"
                                >
                                    Телефон
                                </Typography>
                                <Link>8 800 777 96 80</Link>
                                <Typography
                                    sx={{
                                        fontWeight: "600",
                                        fontSize: "14px",
                                        mt: "8%",
                                    }}
                                    component="h1"
                                    variant="h5"
                                >
                                    Почта
                                </Typography>
                                <Link>info@imba.shop</Link>
                                <Typography
                                    sx={{
                                        fontWeight: "600",
                                        fontSize: "14px",
                                        mt: "8%",
                                    }}
                                    component="h1"
                                    variant="h5"
                                >
                                    По вопросам сотрудничества
                                </Typography>
                                <Link>partners@imba.shop</Link>
                                <Typography
                                    sx={{
                                        fontWeight: "600",
                                        fontSize: "14px",
                                        mt: "8%",
                                    }}
                                    component="h1"
                                    variant="h5"
                                >
                                    Адрес
                                    <Typography sx={{ mb: "8%", width: "80%" }}>
                                        603005, г. Нижний Новгород, ул Ульянова,
                                        д. 7, помещение 5
                                    </Typography>
                                </Typography>
                            </Box>
                        </Box>
                        <Box>
                            <Box
                                sx={{
                                    padding: "3%",
                                    ml: "18px",
                                    [theme.breakpoints.down("sm")]: {
                                        ml: "0",
                                    },
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontWeight: "600",
                                        fontSize: "15px",
                                        display: "flex",
                                    }}
                                    component="h1"
                                    variant="h5"
                                >
                                    Полное наименование организации
                                </Typography>
                                <Typography sx={{ width: "80%" }}>
                                    Общество с ограниченной ответственностью
                                    «ДМСК»
                                </Typography>
                                <Typography
                                    sx={{
                                        fontWeight: "600",
                                        fontSize: "15px",
                                        mt: "6%",
                                    }}
                                    component="h1"
                                    variant="h5"
                                >
                                    Юридический адрес
                                </Typography>
                                <Typography>
                                    603005, г.Нижний Новгород, ул Ульянова, д.
                                    7, помещение 5
                                </Typography>
                                <Typography
                                    sx={{
                                        fontWeight: "600",
                                        fontSize: "15px",
                                        mt: "6%",
                                    }}
                                    component="h1"
                                    variant="h5"
                                >
                                    ОГРН
                                </Typography>
                                <Typography>1187746169962</Typography>
                                <Typography
                                    sx={{
                                        fontWeight: "600",
                                        fontSize: "15px",
                                        mt: "6%",
                                    }}
                                    component="h1"
                                    variant="h5"
                                >
                                    ИНН / КПП
                                </Typography>
                                <Typography>7727339399 / 526001001</Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Typography
                        sx={{
                            fontWeight: "600",
                            fontSize: "15px",
                            display: "flex",
                            mt: "16px",
                        }}
                        component="h1"
                        variant="h5"
                    >
                        Карта и схема проезда
                    </Typography>
                    <Box>
                        <ContactMap />
                    </Box>
                </Box>
            </Box>
        </>
    );
};

export default Contact;
