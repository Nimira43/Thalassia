import { useParams } from 'react-router-dom'
import products from '../products'

const ProductPage = () => {
  const { id: productId } = useParams()
  const product = [products.find((p) => p._id === productId)]
  
  return ( 
    <div>ProductPage</div>
  )
}
 
export default ProductPage