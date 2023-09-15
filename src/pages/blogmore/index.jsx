import React, { useEffect } from 'react'
import BlogMoreComponent from '../../components/blogmore';

const BlogMore = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <BlogMoreComponent />
        </>
    )
}

export default BlogMore