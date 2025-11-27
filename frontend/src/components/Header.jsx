import { Navbar, Nav, Container } from 'react-bootstrap'
import { PiShoppingCart, PiUser } from 'react-icons/pi'

const Header = () => {
  return ( 
    <header>
      <Navbar
        className='bg-grey-light-extra text-main'
        expand='lg'
        collapseOnSelect
      >
        <Container>
          <Navbar.Brand
            href='/'
            className='logo no-hover'
          >
            Thalassia
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
        </Container>
      </Navbar>
    </header>
  )
}
 
export default Header