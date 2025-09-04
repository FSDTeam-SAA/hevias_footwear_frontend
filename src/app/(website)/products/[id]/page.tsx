import React from 'react'
import ProductDetails from './_components/ProductDetails'

const Page = ({params}:{params:{id:string }}) => {
  return (
    <ProductDetails id={params.id}/>
  )
}

export default Page