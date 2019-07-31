import Axios from "axios";

export const getAllBlogs = () => dispatch => {
    return Axios.get('/blogs')
    .then(data=> {
        // console.log(data.data);
        dispatch({type:'GET_BLOGS', payload: data.data})
    })
}

export const getBlogById = id => dispatch => {
    return Axios.get(`/blogs/${id}`)
    .then(data => {
        dispatch({type: 'GET_BLOG_BY_ID', payload: data.data})
    })
}