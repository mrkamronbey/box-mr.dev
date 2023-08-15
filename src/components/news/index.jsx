import React from 'react'
import NewsHero from './news-hero'
import NewsCard from './news-card'
import { Form } from '../form/index'

const NewsComponent = () => {
  return (
    <>
      <NewsHero />
      <NewsCard />
      <Form />
    </>
  )
}

export default NewsComponent