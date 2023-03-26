import { Container } from '@mui/system'
import React from 'react'
import ProductCards from '../components/ProductCards'

const Home = () => {
  return (
    <>
    <Container maxWidth='lg' >
        <ProductCards/>
    </Container>
    </>
  )
}

export default Home