import { Padding } from "@mui/icons-material";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Delevery = () => {
    return (
        <div>
            <Box
                sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    boxSizing: "border-box",
                    margin: "0",
                }}
            >
                <Box sx={{ width: "50%" }}>
                    <Typography
                        variant="h1"
                        sx={{ fontWeight: "600", fontSize: "18px", mt: "7%" }}
                    >
                        ДОСТАВКА ПРОДУКЦИИ ДЛЯ ГЕЙМЕРОВ IMBA GAME ENERGY
                    </Typography>
                    <Box
                        sx={{
                            mt: "30px",
                            backgroundColor: "rgb(1, 204, 101)",
                        }}
                    >
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "space-evenly",
                            }}
                        >
                            <img
                                src="https://static.insales-cdn.com/files/1/1815/11691799/original/image-delivery.png"
                                alt=""
                                style={{ margin: "5%" }}
                            />
                            <Box sx={{ color: "white" }}>
                                <Typography
                                    sx={{
                                        fontWeight: "600",
                                        fontSize: "28px",

                                        mt: "3%",
                                    }}
                                >
                                    БЕСКОНТАКТНАЯ ДОСТАВКА
                                </Typography>
                                <Typography
                                    sx={{
                                        fontWeight: "600",
                                        fontSize: "13px",
                                        width: "90%",
                                        mt: "3%",
                                    }}
                                >
                                    Уважаемые клиенты, в связи с ситуацией в
                                    стране рекомендуем вам использовать
                                    бесконтактный способ курьерской доставки от
                                    Boxberry. Он возможен только для
                                    предоплаченных заказов.
                                </Typography>
                                <Typography
                                    sx={{
                                        fontWeight: "600",
                                        fontSize: "13px",
                                        width: "90%",
                                        marginTop: "3%",
                                    }}
                                >
                                    Если вы живете в Москве или Московской
                                    области, курьер в установленное время
                                    оставит заказ у двери, позвонит и будет
                                    ждать на расстоянии не менее 1 метра. Если
                                    за товаром никто не выйдет, курьер вернет
                                    посылку на склад.
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            mt: "11%",
                            border: "1px solid black",
                            padding: "4%",
                        }}
                    >
                        <Typography>
                            Мы доставляем заказы в любую точку России. Стоимость
                            и сроки доставки зависят от региона, веса посылки и
                            способа доставки. Стоимость рассчитывается
                            автоматически и сразу включается в счет заказа.
                        </Typography>
                    </Box>
                    <Typography
                        variant="h1"
                        sx={{ fontWeight: "600", fontSize: "18px", mt: "7%" }}
                    >
                        ПОДРОБНЕЕ О СПОСОБАХ ДОСТАВКИ:
                    </Typography>
                    <Box>
                        <Typography>Курьерская доставка Boxberry</Typography>{" "}
                    </Box>
                </Box>
            </Box>
        </div>
    );
};

export default Delevery;
