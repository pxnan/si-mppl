import React from 'react'
import Card from '../Card/card'

const Product = ({title, id}) => {
  return (
    <div className="w-full bg-base-200 p-4 pb-20 pt-20">
      <h1 className="text-4xl font-bold text-center mb-8">{title}</h1>
      <div className="flex flex-wrap gap-4 justify-center pb-5">
        <Card id={id}/>
        <Card id={id}/>
        <Card id={id}/>
        <Card id={id}/>
        <Card id={id}/>
        <Card id={id}/>
        <Card id={id}/>
        <Card id={id}/>
        <Card id={id}/>
        <Card id={id}/>
        <Card id={id}/>
        <Card id={id}/>
      </div>
    </div>
  )
}

export default Product