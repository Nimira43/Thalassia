import { Navbar, Nav, Container } from 'react-bootstrap'
import { PiShoppingCart, PiUser } from 'react-icons/pi'
import { LinkContainer } from 'react-router-bootstrap'

const Header = () => {
  return ( 
    <header>
      <Navbar
        className='bg-grey-4 text-main'
        expand='lg'
        collapseOnSelect
      >
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand className='logo no-hover'>
              Thalassia
            </Navbar.Brand>
          </LinkContainer>          
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
              <LinkContainer to='/cart'>
                <Nav.Link className='nav-link-custom'>
                  <PiShoppingCart /> Cart
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to='/login'>
                <Nav.Link className='nav-link-custom'>
                  <PiUser /> Login
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}
 
export default Header