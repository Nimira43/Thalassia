import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card } from 'react-bootstrap'
import Rating from '../components/Rating'
import { useGetProductDetailsQuery } from '../slices/productsApiSlice'

const ProductPage = () => {
  const { id: productId } = useParams()

  const { data: product, isLoading, error } = useGetProductDetailsQuery(productId)

  return ( 
    <>
      <Link
        to='/'
        className='btn dark-btn-outline my-3'
      >
        Go Back
      </Link>

      {isLoading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <div>
          {error?.data?.message || error.error}
        </div>
      ) : (
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
              <ListGroup.Item>
                {product.description}
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={3}>
            <Card>
              <ListGroup variant='flush'>
                <ListGroup.Item>
                  <Row>
                    <Col>Price:</Col>
                    <Col className='fw-bold text-main'>
                      £{product.price}
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Status:</Col>
                    <Col className='fw-bold text-main'>
                      {product.countInStock > 0
                        ? 'In Stock'
                        : 'Out of Stock'
                      }
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <button
                    className='btn dark-btn-outline'
                    type='button'
                    disabled={product.countInStock === 0}
                  >
                    Add to Cart
                  </button>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
        )
      }
    </>
  )
}
 
export default ProductPage