import { useState,useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer'
import Loader from '../components/Loader'
import { useLoginMutation } from '../slices/userApiSlice'
import { setCredentials } from '../slices/authSlice'
import { toast } from 'react-toastify'

const LoginPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [login, { isLoading }] = useLoginMutation()
  const { userInfo } = useSelector((state) => state.auth)
  const { search } = useLocation()
  const sp = new URLSearchParams(search)
  const redirect = sp.get('redirect') || '/'

  useEffect(() => {
    if (userInfo) {
      navigate(redirect)
    }
  }, [userInfo, redirect, navigate])

  const submitHandler = async (e) => {
    e.preventDefault()
    try {
      const res = await login({ email, password}).unwrap()
      dispatch(setCredentials({ ...res }))
      navigate(redirect)
    } catch (err) {
      toast.error(err?.data?.message) || err.error
    }
  }

  return (  
    <FormContainer>
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
            autoComplete='email'
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
            autoComplete='password'
          ></Form.Control>
        </Form.Group>
        <button
          className='btn main-btn mt-2 w-100'
          type='submit'
          disabled={isLoading}
        >
          Login
        </button>
        {isLoading  && <Loader />}
        <Row className='py-3'>
          <Col className='d-flex align-items-center justify-content-center'>
            <span className='me-2'>
              Not registered?
            </span>
            <Link
              to={
                redirect
                  ? `/register?redirect=${redirect}` 
                  : `/register`
              }
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