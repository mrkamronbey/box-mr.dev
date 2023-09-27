import React from 'react'
import styles from './style.module.css'
import ProductMoreHero from './productmore-hero'
import ProductDetails from './product-details'
import { Form } from '../form/index'
import ProductFactory from './product-factory'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { ProductGet } from '../../redux/products'

const ProductMoreComponent = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const productGetState = useSelector(
        (state) => state.product.productGet?.data
      );
      useEffect(() => {
        dispatch(ProductGet());
      }, []);
      const filterProduct =  productGetState.filter(elem => elem.id == id)
    return (
        <>
            <ProductMoreHero  filterProduct={filterProduct} />
            <ProductDetails />
            <ProductFactory />
            <Form />
        </>
    )
}

export default ProductMoreComponent