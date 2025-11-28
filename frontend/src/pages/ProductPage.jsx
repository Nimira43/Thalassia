import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap'
import Rating from '../components/Rating'
import products from '../products'

const ProductPage = () => {
  const { id: productId } = useParams()
  const product = [products.find((p) => p._id === productId)]
  
  return ( 
    <>
      <Link
        to='/'
        className='btn dark-btn-outline my-3'
      >
        Go Back
      </Link>
    </>
  )
}
 
export default ProductPage