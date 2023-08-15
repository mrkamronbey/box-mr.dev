import React from 'react'
import NewsMoreHero from './newsmore-hero/index'
import NewsMoreInfo from './newsmore-info'
import { Form } from '../form'

const NewsMoreComponent = () => {
  return (
    <>
      <NewsMoreHero />
      <NewsMoreInfo />
      <Form />
    </>
  )
}

export default NewsMoreComponent