import React from 'react'
import GuestLayout from '../../layouts/GuestLayout'
import Product from '../../components/Product/product'

const Makanan = () => {
  const getAllMakanan = 'http://localhost:5000/getAllMakanan'
  return (
    <GuestLayout>
        <Product URL={"/detail/makanan/"} apiURL={getAllMakanan} title={"Makanan"}/>
    </GuestLayout>
  )
}

export default Makanan