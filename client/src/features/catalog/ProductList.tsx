import React from 'react'
import { Product } from '../../app/models/products'
import { Grid } from '@mui/material'
import ProductCard from './ProductCard'

interface IProductList {
  products: Product[]
}

const ProductList: React.FC<IProductList> = ({ products }) => {
  return (
    <Grid
      container
      spacing={4}
    >
      {products.map(product => (
        <Grid
          item
          xs={3}
          key={product.id}
        >
          <ProductCard product={product} />
        </Grid>
      ))}
    </Grid>
  )
}

export default ProductList
