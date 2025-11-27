import { Navbar, Nav, Container } from 'react-bootstrap'
import { PiShoppingCart, PiUser } from 'react-icons/pi'

const Header = () => {
  return ( 
    <header>
      <Navbar
        className='bg-grey-4 text-main'
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
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
              <Nav.Link
                href='/cart'
                className='nav-link-custom'
              >
                <PiShoppingCart /> Cart
              </Nav.Link>
              <Nav.Link
                href='/login'
                className='nav-link-custom'
              >
                <PiUser /> Login
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}
 
export default Header