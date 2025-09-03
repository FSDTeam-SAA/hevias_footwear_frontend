'use client'

import React from 'react'
import { blogPosts } from '../../_components/AllBlog'
import Image from 'next/image'

interface BlogDetailsProps {
  id: string
}

const BlogDetails = ({ id }: BlogDetailsProps) => {
  // Find the blog post by id
  const blog = blogPosts.find((post) => post.id === Number(id))

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-gray-500">Blog post not found.</p>
      </div>
    )
  }

  return (
    <main className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <header className="text-center mb-28">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Blogs Datils
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
          Our team is always ready to assist you with any questions or concerns you might have. Fill out the form below and we&apoch;ll get back to you as soon as possible
        </p>
      </header>
      <div className="container mx-auto  rounded-lg overflow-hidden">
        {/* Main Image */}
        <div className="w-full h-64 sm:h-80 lg:h-[720px] relative">
          <Image
            width={900}
            height={900}
            src={blog.image}
            alt={blog.title}
            className="w-full h-full rounded-lg object-cover"
          />
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {blog.title}
          </h1>
          <p className="text-sm text-gray-500 mb-6">{blog.date}</p>

          {/* Rich Text Content */}
          <div
            className="prose prose-sm sm:prose lg:prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: blog.description }}
          />
        </div>
      </div>
    </main>
  )
}

export default BlogDetails
