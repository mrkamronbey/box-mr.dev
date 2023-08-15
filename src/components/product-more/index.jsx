import React from 'react'
import styles from './style.module.css'
import ProductMoreHero from './productmore-hero'
import ProductDetails from './product-details'
import { Form } from '../form/index'
import ProductFactory from './product-factory'

const ProductMoreComponent = () => {
    return (
        <>
            <ProductMoreHero />
            <ProductDetails />
            <ProductFactory />
            <Form />
        </>
    )
}

export default ProductMoreComponent