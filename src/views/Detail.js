import React, { useEffect } from 'react'
import {connect} from 'react-redux'
import AppLayout from './layouts/AppLayout';
import { getBlogById } from '../actions/blogAction';

const Detail = props =>  {
    let {blog, dispatch} = props
    useEffect(() => {
        if(props.match.params.id !== blog.id){
            dispatch(getBlogById(props.match.params.id))
        }
    })
    let {title, thumbnail, desc} = blog
    return (
        <AppLayout>
            <section id="detail">
                <h1>{title}</h1>
                <img src={thumbnail} alt={title}/>
                <div>{desc}</div>
            </section>
        </AppLayout>
    )
}

const mapStateToProps = state => {
    return{
        blog: state.blogs.single
    }
}

export default connect(mapStateToProps)(Detail)