import React from 'react'

import Home from './views/Home'
const BlogListing = () => <div>BlogListing</div>
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