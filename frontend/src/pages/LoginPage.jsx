import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import FormContainer from '../components/FormContainer'

const LoginPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    console.log('submit')
  }

  return (  
    <FormContainer
    >
      <h1 className='text-center my-4 text-uppercase'>
        Login
      </h1>
      <Form onSubmit={submitHandler}>
        <Form.Group
          controlId='email'
          className='my-3'
        >
          <Form.Label>
            Email Address
          </Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group
          controlId='password'
          className='my-3'
        >
          <Form.Label>
            Password
          </Form.Label>
          <Form.Control
            type='password'
            placeholder='Enter password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <button
          className='btn main-btn mt-2 w-100'
          type='button'
        >
          Login
        </button>
        <Row className='py-3'>
          <Col className='d-flex align-items-center justify-content-center'>
            <span className='me-2'>
              Not registered?
            </span>
            <Link
              to='/register'
              className='register-link'
            >
              Register
            </Link>
          </Col>
        </Row>
      </Form>
    </FormContainer>
  )
}
 
export default LoginPage