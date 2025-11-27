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
          <Navbar.Collapse ibasic-navbar-nav>
            <Nav className='ms-auto'>
              <Nav.Link
                href='/cart'
              >
                <PiShoppingCart /> Cart
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div>
        <h1 className='text-main hover-transition'>Test</h1>
      </div>
    </header>
  )
}
 
export default Header