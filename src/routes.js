import React from 'react'

import Home from './views/Home'
import BlogListing from './views/BlogsListing'

const Detail = props => <div>Detail {props.match.params.id}</div>

export default [
    {
        path: '/',
        component: Home,
        exact: true
    },
    {
        path: '/blogs',
        component: BlogListing
    },
    {
        path: '/blog/:id',
        component: Detail
    }
]