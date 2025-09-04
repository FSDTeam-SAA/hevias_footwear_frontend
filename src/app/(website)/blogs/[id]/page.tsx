import React from 'react'
import BlogDetails from './_components/BlogDetails'

const Page = ({params}:{params:{id:string }}) => {

  return (
    <div>
      <BlogDetails id={params.id}/>
    </div>
  )
}

export default Page