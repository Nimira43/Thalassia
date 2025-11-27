import { Container } from 'react-bootstrap'
import Header from './components/Header'

const App = () => {
  return ( 
    <>
      <Header />
      <main className='py-3'>
        <Container>
          Welcome to Thalassia
        </Container>
      </main>
    </>   
  )
}
 
export default App