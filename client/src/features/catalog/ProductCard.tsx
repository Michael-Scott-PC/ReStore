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
import { Product } from '../../app/models/products'
import { Link } from 'react-router-dom'

interface IProductCard {
  product: Product
}
const ProductCard: React.FC<IProductCard> = ({ product }) => {
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
          ${(product.price / 100).toFixed(2)}
        </Typography>
        <Typography
          variant='body2'
          color='text.secondary'
        >
          {product.brand} / {product.type}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size='small'>Add to cart</Button>
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
