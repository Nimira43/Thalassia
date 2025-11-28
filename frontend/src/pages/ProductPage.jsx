import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap'
import Rating from '../components/Rating'
import products from '../products'

const ProductPage = () => {
  const { id: productId } = useParams()
  const product = products.find((p) => p._id === productId)
  
  return ( 
    <>
      <Link
        to='/'
        className='btn dark-btn-outline my-3'
      >
        Go Back
      </Link>
      <Row>
        <Col md={5}>
          <Image
            src={product.image}
            alt={product.name}
            fluid
          />
        </Col>
        <Col md={4}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
              />
            </ListGroup.Item>
            <ListGroup.Item className='fw-bold text-main'>
              £{product.price}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
        </Col>
      </Row>
    </>
  )
}
 
export default ProductPage