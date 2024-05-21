import React from 'react'
import GuestLayout from '../../layouts/GuestLayout'
import Product from '../../components/Product/product'

const Makanan = () => {
  const id = "1"
  return (
    <GuestLayout>
        <Product id={id} title={"Makanan"}/>
    </GuestLayout>
  )
}

export default Makanan