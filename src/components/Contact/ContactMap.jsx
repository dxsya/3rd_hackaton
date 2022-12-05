import { createTheme } from "@mui/material";
import React from "react";

const ContactMap = () => {
    const theme = createTheme({
        breakpoints: {
            values: {
                sm: 600,
                lg: 900,
            },
        },
    });
    return (
        <div>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2212.229043966148!2d44.0105844!3d56.3258778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4151d445f393f1db%3A0x387d7d02806bace5!2z0YPQuy4g0KPQu9GM0Y_QvdC-0LLQsCwgNywg0J3QuNC20L3QuNC5INCd0L7QstCz0L7RgNC-0LQsINCd0LjQttC10LPQvtGA0L7QtNGB0LrQsNGPINC-0LHQuy4sINCg0L7RgdGB0LjRjywgNjAzMDA1!5e0!3m2!1sru!2skg!4v1670078656875!5m2!1sru!2skg"
                width="450"
                height="300"
                style={{
                    border: "none",
                    marginBottom: 20,
                    marginTop: 20,
                    width: "70%",
                    [theme.breakpoints.down("sm")]: {
                        width: "100%",
                    },
                    [theme.breakpoints.down("lg")]: {
                        width: "100%",
                    },
                }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
    );
};

export default ContactMap;
