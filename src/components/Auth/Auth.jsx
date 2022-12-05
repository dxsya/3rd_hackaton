import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useAuth } from '../../contexts/AuthContextProvider';
import { useNavigate } from 'react-router-dom';
// import AuthRightForm from "./AuthRightForm";

const theme = createTheme();

export default function Auth() {
    const navigate = useNavigate();
    const {
        email,
        password,
        emailError,
        passwordError,
        hasAccount,
        setPassword,
        setEmail,
        setHasAccount,
        handleLogin,
        handleSignup,
    } = useAuth();

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };

    return (
        <Box>
            <ThemeProvider theme={theme}>
                <Container component="main" maxWidth="lg">
                    <Box>
                        <Box
                            sx={{
                                mt: 3,
                                width: '50%',
                                // display: "flex",
                                // justifyContent: "center",
                                // width: { xs: "90%", sm: "100%" },
                            }}
                        >
                            <Box
                                component="form"
                                onSubmit={handleSubmit}
                                noValidate
                                sx={{ mt: 3, pb: 4 }}
                            >
                                <Typography
                                    sx={{
                                        fontWeight: 700,
                                        fontSize: 26,
                                    }}
                                    variant="h5"
                                >
                                    Вход
                                </Typography>
                                <Typography
                                    sx={{
                                        fontWeight: 600,
                                        fontSize: { xs: 14, sm: 16 },
                                    }}
                                >
                                    Почта
                                </Typography>
                                <TextField
                                    className="input-email"
                                    required
                                    fullWidth
                                    id="email"
                                    name="email"
                                    autoComplete="email"
                                    autoFocus
                                    // ===========
                                    helperText={emailError}
                                    value={email}
                                    onChange={(e) => {
                                        setEmail(e.target.value);
                                    }}
                                />

                                <Box sx={{ mt: 2 }}>
                                    <Typography
                                        sx={{ fontWeight: 600, fontSize: 14 }}
                                    >
                                        Пароль
                                    </Typography>
                                    <TextField
                                        className="input-password"
                                        required
                                        fullWidth
                                        name="password"
                                        type="password"
                                        id="password"
                                        autoComplete="current-password"
                                        // ===============
                                        helperText={passwordError}
                                        value={password}
                                        onChange={(e) => {
                                            setPassword(e.target.value);
                                        }}
                                        sx={{ borderRadius: '0' }}
                                    />
                                </Box>

                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                    }}
                                ></Box>
                                {hasAccount ? (
                                    <Button
                                        className="button_sign_in"
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        sx={{
                                            mt: 3,
                                            fontWeight: 600,
                                            backgroundColor: '#0c6',
                                            height: '55px',
                                            marginBottom: '20px',
                                        }}
                                        onClick={() => {
                                            handleLogin();
                                            navigate('/');
                                        }}
                                    >
                                        Войти
                                    </Button>
                                ) : (
                                    <Button
                                        className="button_register"
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        sx={{
                                            mt: 3,
                                            fontWeight: 600,
                                            backgroundColor: '#0c6',
                                            height: '55px',
                                            marginBottom: '20px',
                                        }}
                                        onClick={() => {
                                            handleSignup();
                                            navigate('/products');
                                        }}
                                    >
                                        Зарегистрироваться
                                    </Button>
                                )}

                                <Grid
                                    container
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                    }}
                                >
                                    <Grid item>
                                        {hasAccount ? (
                                            <Link
                                                className="links"
                                                sx={{
                                                    color: 'black',
                                                    marginBottom: '100px',
                                                }}
                                                href="#"
                                                variant="body2"
                                                onClick={() =>
                                                    setHasAccount(!hasAccount)
                                                }
                                            >
                                                {
                                                    'Нет аккаунта? Зарегистрируйтесь прямо сейчас'
                                                }
                                            </Link>
                                        ) : (
                                            <Link
                                                className="links"
                                                sx={{
                                                    color: 'black',
                                                    marginBottom: '100px',
                                                }}
                                                href="#"
                                                variant="body2"
                                                onClick={() =>
                                                    setHasAccount(!hasAccount)
                                                }
                                            >
                                                {'Уже есть аккаунт? Войдите'}
                                            </Link>
                                        )}
                                    </Grid>
                                </Grid>
                            </Box>
                        </Box>
                    </Box>
                </Container>
            </ThemeProvider>
        </Box>
    );
}
