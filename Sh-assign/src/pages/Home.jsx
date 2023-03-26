import { Container } from '@mui/system'
import React, { useEffect } from 'react'
import ProductCards from '../components/ProductCards'
import { fetchAllProducts } from '../feature/Product-slice';
import { useDispatch, useSelector } from 'react-redux';

const Home = () => {

    const dispatch = useDispatch();
    const {allProducts, loading, searchedTerm} = useSelector((state) => state.products)
    // console.log(allProducts)

    // useEffect(() => {
    //     dispatch(fetchAllProducts());
    // }, [])

    if(!allProducts.length) {
        dispatch(fetchAllProducts());
    }
    

  return (
    <>
    <Container maxWidth='lg' sx={{pt: '80px'}} >
        <ProductCards allProducts={allProducts} loading={loading} searchedTerm={searchedTerm} />
    </Container>
    </>
  )
}

export default Home