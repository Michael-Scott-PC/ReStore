import { useEffect } from 'react'
import ProductList from './ProductList'
import LoadingComponent from '../../app/layout/LoadingComponents.tsx'
import {
  useAppDispatch,
  useAppSelector,
} from '../../app/store/configureStore.ts'
import { fetchProductsAsync, productSelectors } from './catalogSlice.ts'

export const Catalog = () => {
  const products = useAppSelector(productSelectors.selectAll)
  const { productsLoaded, status } = useAppSelector(state => state.catalog)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (!productsLoaded) dispatch(fetchProductsAsync())
  }, [productsLoaded, dispatch])

  if (status.includes('pending'))
    return <LoadingComponent message='Loading Products...' />

  return (
    <>
      <ProductList products={products} />
    </>
  )
}

export default Catalog
