import { Button, createTheme, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContextProvider';
import { useBlog } from '../../contexts/BlogContextProvaider';
import { ADMIN } from '../../helpers/consts';
import BlogCard from './BlogCard';
import BlogPagination from './BlogPagination';

const BlogList = () => {
    const { blogs, getBlog } = useBlog();
    const { user } = useAuth();
    const navigate = useNavigate();
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

                    display: 'flex',
                    justifyContent: 'center',
                    fontWeight: '600',
                    mt: '3%',
                    [theme.breakpoints.down('sm')]: {},

                }}
            >
                Блог Imba Shop
            </Typography>
            {user.email == ADMIN ? (
                <Box sx={{ width: '90%', margin: '20px auto 0 auto' }}>
                    {' '}
                    <Button
                        onClick={() => navigate('/addBlog')}
                        sx={{ backgroundColor: '#0c6', color: 'white' }}
                    >
                        добавить блог
                    </Button>
                </Box>
            ) : (
                <></>
            )}
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-evenly',
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
