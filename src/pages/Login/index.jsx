import React from 'react'
import { Title, Paragraph } from './style'
import { Container } from '../../styles/globalStyles'
const Login = () => {
  return (
    <Container>
        <Title isRed={false}>Login <small>Opa</small></Title>
        <Paragraph>Mussum Ipsum, cacilds vidis litro abertis. Mauris nec dolor in eros commodo tempor.</Paragraph>
    </Container>
  )
}

export default Login