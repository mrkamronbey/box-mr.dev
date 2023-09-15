import React from 'react'
import BlogMoreHero from './blogmore-hero/index'
import BlogMoreInfo from './blogmore-info'
import { Form } from '../form'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { BlogGet } from '../../redux/blog/index';
import { useEffect } from 'react'

const BlogMoreComponent = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const bloggetState = useSelector((state) => state.blog.BlogGets?.data)
  const filterBlog = bloggetState.filter(elem => elem.id == id)
  useEffect(() => {
    dispatch(BlogGet())
  }, [])
  return (
    <>
      <BlogMoreHero filterBlog={filterBlog}/>
      <BlogMoreInfo />
      <Form />
    </>
  )
}

export default BlogMoreComponent