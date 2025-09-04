import React from 'react'
import SingelVendor from './_components/SingelVendor'

const page = ({params}:{params:{id:string}}) => {
  return (
    <div>
        <SingelVendor id={params.id}/>
    </div>
  )
}

export default page