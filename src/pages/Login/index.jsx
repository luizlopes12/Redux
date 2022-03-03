import React from 'react'
import { Title, Paragraph } from './style'
import { Container } from '../../styles/globalStyles'
const Login = () => {
  return (
    <Container>
        <Title isRed={false}>Login <small>Opa</small></Title>
        <Paragraph>Mussum Ipsum, cacilds vidis litro abertis.</Paragraph>
        <button type='button'>Enviar</button>
    </Container>
  )
}

export default Login