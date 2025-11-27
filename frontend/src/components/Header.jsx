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
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
              <Nav.Link
                href='/cart'
                className='nav-link-custom'
              >
                <PiShoppingCart /> Cart
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div>
        <button className='dark-btn btn'>Test</button>
      </div>
      <div>
        <button className='dark-btn-outline btn'>Test</button>
      </div>
      <div>
        <button className='main-btn btn'>Test</button>
      </div>
      <div>
        <button className='main-btn-outline btn'>Test</button>
      </div>

    </header>
  )
}
 
export default Header