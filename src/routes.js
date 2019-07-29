import React from 'react'

import Home from './views/Home'
import BlogListing from './views/BlogsListing'
const BlogDetail = () => <div>BlogDetail</div>

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
        component: BlogDetail
    }
]