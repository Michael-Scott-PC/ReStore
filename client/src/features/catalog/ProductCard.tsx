import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from '@mui/material'
import { LoadingButton } from '@mui/lab'
import { Product } from '../../app/models/products'
import { Link } from 'react-router-dom'
import { currencyFormatter } from '../../app/util/util'
import { useAppDispatch, useAppSelector } from '../../app/store/configureStore'
import { addBasketItemAsync } from '../basket/basketSlice'

interface IProductCard {
  product: Product
}
const ProductCard: React.FC<IProductCard> = ({ product }) => {
  const { status } = useAppSelector(state => state.basket)
  const dispatch = useAppDispatch()

  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: 'secondary.main' }}>
            {product.name.charAt(0).toUpperCase()}
          </Avatar>
        }
        title={product.name}
        titleTypographyProps={{
          fontWeight: 'bold',
          color: 'primary.main',
        }}
      />
      <CardMedia
        sx={{
          height: 140,
          backgroundSize: 'contain',
          bgcolor: 'primary.light',
        }}
        image={product.pictureUrl}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant='h5'
          color='secondary'
        >
          {currencyFormatter(product.price)}
        </Typography>
        <Typography
          variant='body2'
          color='text.secondary'
        >
          {product.brand} / {product.type}
        </Typography>
      </CardContent>
      <CardActions>
        <LoadingButton
          loading={status.includes('pendingAddItem' + product.id)}
          size='small'
          onClick={() =>
            dispatch(addBasketItemAsync({ productId: product.id }))
          }
        >
          Add to cart
        </LoadingButton>
        <Button
          component={Link}
          to={`/catalog/${product.id}`}
          size='small'
        >
          View
        </Button>
      </CardActions>
    </Card>
  )
}

export default ProductCard
