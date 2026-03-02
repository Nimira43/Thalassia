import { Alert } from 'react-bootstrap'

const Message = ({ variant = 'message', children }) => {
  return (
    <Alert variant={variant}>
      {children}
    </Alert>
  )
}

export default Message
