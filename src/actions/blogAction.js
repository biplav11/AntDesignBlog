import Axios from "axios";

export const getAllBlogs = () => dispatch => {
    return Axios.get('/blogs')
    .then(data=> {
        // console.log(data.data);
        dispatch({type:'GET_BLOGS', payload: data.data})
    })
}