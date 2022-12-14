import React from 'react';
import Card from 'react-credit-cards';

import {
    formatCreditCardNumber,
    formatCVC,
    formatExpirationDate,
    formatFormData,
} from './utils';

import 'react-credit-cards/es/styles-compiled.css';
import {
    Box,
    Button,
    FormControl,
    Input,
    TextField,
    Typography,
} from '@mui/material';

export default class App extends React.Component {
    state = {
        number: '',
        name: '',
        expiry: '',
        cvc: '',
        issuer: '',
        focused: '',
        formData: null,
    };

    handleCallback = ({ issuer }, isValid) => {
        if (isValid) {
            this.setState({ issuer });
        }
    };

    handleInputFocus = ({ target }) => {
        this.setState({
            focused: target.name,
        });
    };

    handleInputChange = ({ target }) => {
        if (target.name === 'number') {
            target.value = formatCreditCardNumber(target.value);
        } else if (target.name === 'expiry') {
            target.value = formatExpirationDate(target.value);
        } else if (target.name === 'cvc') {
            target.value = formatCVC(target.value);
        }

        this.setState({ [target.name]: target.value });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const { issuer } = this.state;
        const formData = [...e.target.elements]
            .filter((d) => d.name)
            .reduce((acc, d) => {
                acc[d.name] = d.value;
                return acc;
            }, {});

        this.setState({ formData });
        this.form.reset();
    };

    render() {
        const { name, number, expiry, cvc, focused, issuer, formData } =
            this.state;

        return (
            <Box key="Payment">
                <Box sx={{ textAlign: 'center' }}>
                    <Typography sx={{ fontWeight: 600, fontSize: '30px' }}>
                        Оплата
                    </Typography>
                    <Card
                        number={number}
                        name={name}
                        expiry={expiry}
                        cvc={cvc}
                        focused={focused}
                        callback={this.handleCallback}
                    />
                    <FormControl
                        ref={(c) => (this.form = c)}
                        onSubmit={this.handleSubmit}
                        sx={{ marginY: 2 }}
                    >
                        <Box>
                            <TextField
                                type="tel"
                                name="number"
                                placeholder="Номер Карты"
                                pattern="[\d| ]{16,22}"
                                required
                                onChange={this.handleInputChange}
                                onFocus={this.handleInputFocus}
                                sx={{ width: '290px', mb: 1 }}
                            />
                        </Box>
                        <Box>
                            <TextField
                                type="text"
                                name="name"
                                placeholder="ФИО"
                                required
                                onChange={this.handleInputChange}
                                onFocus={this.handleInputFocus}
                                sx={{ width: '290px', mb: 1 }}
                            />
                        </Box>
                        <Box>
                            <Box>
                                <TextField
                                    type="tel"
                                    name="expiry"
                                    placeholder="До какого"
                                    pattern="\d\d/\d\d"
                                    required
                                    onChange={this.handleInputChange}
                                    onFocus={this.handleInputFocus}
                                    sx={{ width: '290px', mb: 1 }}
                                />
                            </Box>
                            <Box>
                                <TextField
                                    type="tel"
                                    name="cvc"
                                    placeholder="CVC"
                                    pattern="\d{3,4}"
                                    required
                                    onChange={this.handleInputChange}
                                    onFocus={this.handleInputFocus}
                                    sx={{ width: '290px', mb: 1 }}
                                />
                            </Box>
                        </Box>
                        <Box>
                            <Button
                                sx={{
                                    width: '290px',
                                    mb: 1,
                                    backgroundColor: '#0c6',
                                    color: 'white',
                                }}
                            >
                                Оплатить
                            </Button>
                        </Box>
                    </FormControl>
                    {formData && (
                        <Box>
                            {formatFormData(formData).map((d, i) => (
                                <Box key={i}>{d}</Box>
                            ))}
                        </Box>
                    )}
                </Box>
            </Box>
        );
    }
}
