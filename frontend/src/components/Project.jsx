import { Card } from 'react-bootstrap'

const Product = ({ product }) => {
  return ( 
    <Card className='my-3 p-3 rounded'>
      <a href={`/product/${product._id}`}>
        <Card.Img
          src={product.image}
          variant='top'
        />
      </a>
      <Card.Body>
        <a
          className='text-decoration-none'
          href={`/product/${product._id}`}
        >
          <Card.Title
            className='text-dark fw-normal'
            as='div'
          >
              {product.name}
          </Card.Title>
        </a>
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