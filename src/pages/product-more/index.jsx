import React, { useEffect } from 'react'
import ProductMoreComponent from '../../components/product-more/index'

const ProductMore = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (

        <>
            <ProductMoreComponent />
        </>
    )
}

export default ProductMore