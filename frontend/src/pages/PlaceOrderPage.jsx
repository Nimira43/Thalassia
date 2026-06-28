import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Row, Col, ListGroup, Image, Card } from 'react-bootstrap'
import CheckoutSteps from '../components/CheckoutSteps'

const PlaceOrderPage = () => {
  const navigate = useNavigate()
  const cart = useSelector((state) => state.cart)

  useEffect(() => {
    if (!cart.shippingAddress.address) {
      navigate('/shipping')
    } else if (!cart.paymentMethod) {
      navigate('/payment')
    }
  }, [cart.paymentMethod, cart.shippingAddress.address, navigate])
  
  return (
    <>
      <CheckoutSteps step1 step2 step3 step4 />
      <Row>
        <Col md={8}>
          Column 1
        </Col>
        <Col md={4}>
          Column 2
        </Col>
      </Row>
      <button
        className='btn main-btn'
        type='button' 
        // disabled={cartItems.length === 0}
        // onClick={checkoutHandler}
      >
        Place Order
      </button>              
    </>
  )
}

export default PlaceOrderPage
