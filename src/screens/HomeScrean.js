import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'

// import products from '../products'           this is used for importing data from local file
import Product from '../components/Product'

import axios from 'axios'

function HomeScrean() {
  const [products, setProducts] = useState([])


  // here we are fetching data from django
  useEffect(()=>{
      async function fetchProducts(){
        const { data } = await axios.get('/api/products/')    
        setProducts(data)
      }
      fetchProducts()
  }, [])

  return (
    <div>
        <h1>Latest products</h1>
        <Row>
            {products.map(product => (
                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                    <Product product={product} />
                </Col>
            ))}
        </Row>
    </div>
  )
}

export default HomeScrean

