import axios from "axios";
import React, { createContext, useContext, useReducer } from "react";
import { ACTIONS_BLOGS, JSON_API_BLOGS } from "../helpers/consts";

export const blogContext = createContext();

export const useBlog = () => {
    return useContext(blogContext);
};

const INIT_STATE_BLOG = {
    blogs: [],
};
const reducer = (state = INIT_STATE_BLOG, action) => {
    switch (action.type) {
        case ACTIONS_BLOGS.GET_BLOGS:
            return { ...state, blogs: action.payload };
        default:
            return state;
    }
};

const BlogContextProvaider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE_BLOG);

    async function getBlog() {
        const { data } = await axios(JSON_API_BLOGS);
        dispatch({
            type: ACTIONS_BLOGS.GET_BLOGS,
            payload: data,
        });
    }

    async function addBlog(newblog) {
        await axios.post(JSON_API_BLOGS, newblog);
        getBlog();
    }

    async function deleteBlog(id) {
        await axios.delete(`${JSON_API_BLOGS}/${id}`);
        getBlog();
    }

    const values = {
        addBlog,
        blogs: state.blogs,
        getBlog,
        deleteBlog,
    };
    return (
        <blogContext.Provider value={values}>{children}</blogContext.Provider>
    );
};

export default BlogContextProvaider;
