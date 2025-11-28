import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Rating from './Rating'

const Product = ({ product }) => {
  return ( 
    <Card className='my-3 p-3 rounded'>
      <Link to={`/product/${product._id}`}>
        <Card.Img
          src={product.image}
          variant='top'
        />
      </Link>
      <Card.Body>
        <Link
          className='text-decoration-none'
          to={`/product/${product._id}`}
        >
          <Card.Title
            className='text-dark fw-normal product-title'
            as='div'
          >
            {product.name}
          </Card.Title>
        </Link>
        <Card.Text as='div'>
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card.Text>

        <Card.Text
          className='text-main fw-normal'
          as='h3'
        >
          £{product.price}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}
 
export default Product