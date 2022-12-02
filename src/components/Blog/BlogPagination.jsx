import { Box, Pagination, Stack } from "@mui/material";
import React from "react";

const BlogPagination = ({ page, setPage, pagesQty }) => {
    const handleChange = (e, p) => {
        setPage(p);
    };
    return (
        <div>
            <Box>
                <Stack spacing={2}>
                    <Pagination
                        sx={{ m: 5, display: "flex", justifyContent: "center" }}
                        page={page}
                        onChange={handleChange}
                        count={pagesQty}
                        color="success"
                        size="large"
                        variant="outlined"
                        shape="rounded"
                    />
                </Stack>
            </Box>
        </div>
    );
};

export default BlogPagination;
