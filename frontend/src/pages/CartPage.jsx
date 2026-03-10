import { Link, useNavigate } from 'react-router-dom'
import { Row, Col, ListGroup, Image, Form, Card } from 'react-bootstrap' 
import { VscTrash } from "react-icons/vsc"
import Message from '../components/Message'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeFromCart } from '../slices/cartSlice'

const CartPage = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const cart = useSelector((state) => state.cart)
  const { cartItems } = cart

  const addToCartHandler = async (product, qty) => {
    dispatch(addToCart({...product, qty}))
  }
  
  const removeFromCartHandler = async (id) => {
    dispatch(removeFromCart(id))
  }

  const checkoutHandler = () => {
    navigate('/login?redirect=/shipping')
  }

  return (  
    <Row>
      <Col md={8}>
        <h1 style={{ marginBottom: '20px' }}>Cart</h1>
        {cartItems.length === 0 ? (
          <Message>
            Your cart is currently empty.{' '}
            <Link to='/'>Go Back</Link>
          </Message>
        ) : (
          <ListGroup variant='flush'>
            {cartItems.map((item) => (
              <ListGroup.Item key={item._id}>
                <Row className='align-items-center py-2'>
                  <Col xs={4} md={2} className='mb-3 mb-md-0'>
                    <Image
                      src={item.image}
                      alt={item.name}
                      fluid
                      rounded
                    />
                  </Col>
                  <Col xs={8} md={3} className='mb-2 mb-md-0'>
                    <Link to={`/product/${item._id}`} className='cart-link'>
                      {item.name}
                    </Link>
                  </Col>
                  <Col xs={5} md={2} className='mb-2 mb-md-0'>
                    £{item.price}
                  </Col>
                  <Col xs={5} md={2} className='mb-2 mb-md-0'>
                    <Form.Control
                      as='select'
                      value={item.qty}
                      onChange={(e) => addToCartHandler(item, Number(e.target.value))}
                    >
                      {[...Array(item.countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </Form.Control>
                  </Col>
                  <Col xs={2} md={2} className='mb-2 mb-md-0'>
                    <button
                      className='btn main-btn w-100 w-md-auto'
                      type='button'
                      onClick={() => removeFromCartHandler(item._id)}
                    >
                      <VscTrash />
                    </button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </Col>
      <Col md={4}>
        <Card className='p-2'>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h2>
                Subtotal:{' '}
                {cartItems
                  .reduce((acc, item) => acc + item.qty, 0)
                }
                {' '} items
              </h2>
              £{cartItems
                .reduce((acc, item) => acc + item.qty * item.price, 0)
                .toFixed(2)
              }
            </ListGroup.Item>
            <ListGroup.Item>
            <button
              className='btn dark-btn-outline'
              type='button' 
              disabled={cartItems.length === 0}
              onClick={checkoutHandler}
            >
              Proceed to Checkout
            </button>
          </ListGroup.Item>
          </ListGroup>
          
        </Card>
      </Col>
    </Row>
  )
}
 
export default CartPage