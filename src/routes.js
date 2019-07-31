import Home from './views/Home'
import BlogListing from './views/BlogsListing'
import Detail from './views/Detail'
import About from './views/About';

export default [
    {
        path: '/',
        component: Home,
        exact: true
    },
    {
        path: '/about',
        component: About,
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