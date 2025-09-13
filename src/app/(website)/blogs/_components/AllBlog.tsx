'use client'

import { useState } from 'react'
import { BlogCard } from './BlogCard'
import { Pagination } from '@/components/Pagination'
import { useQuery } from '@tanstack/react-query'

// Updated BlogPost type to match API response
interface BlogPost {
  _id: string
  title: string
  description: string
  thumbnail: string
  createdBy: string
  createdAt: string
  updatedAt: string
  __v: number
}

interface ApiResponse {
  statusCode: number
  success: boolean
  message: string
  meta: {
    total: number
    page: number
    limit: number
  }
  data: BlogPost[]
}

const POSTS_PER_PAGE = 5

export default function AllBlog() {
  const [currentPage, setCurrentPage] = useState(1)

  const {
    data: apiResponse,
    isLoading,
    isError,
    error,
  } = useQuery<ApiResponse>({
    queryKey: ["blogs"], 
    queryFn: async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/blog/all-blogs`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!res.ok) {
        throw new Error("Failed to fetch blogs");
      }

      return res.json(); 
    },
  });

  if (isLoading) {
    return (
      <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
          </div>
        </div>
      </main>
    )
  }

  if (isError) {
    return (
      <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <p className="text-red-600 text-lg">Error: {(error as Error).message}</p>
            <p className="text-gray-600 mt-2">Please try refreshing the page.</p>
          </div>
        </div>
      </main>
    )
  }

  const blogs = apiResponse?.data || []
  
  // Transform API data to match your BlogCard component expectations
  const transformedBlogs = blogs.map(blog => ({
    id: blog._id,
    title: blog.title,
    description: blog.description,
    date: new Date(blog.createdAt).toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: '2-digit' 
    }),
    image: blog.thumbnail,
    // Include original fields in case you need them
    _id: blog._id,
    createdBy: blog.createdBy,
    createdAt: blog.createdAt,
    updatedAt: blog.updatedAt
  }))

  const totalPages = Math.ceil(transformedBlogs.length / POSTS_PER_PAGE)
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE
  const endIndex = startIndex + POSTS_PER_PAGE
  const currentPosts = transformedBlogs.slice(startIndex, endIndex)

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <main className="min-h-screen bg-gray-50 lg:py-12 py-[40px] sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <header className="text-center mb-[60px]">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            All Blog Posts
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Discover insights, tutorials, and the latest trends in web development. 
            Our team shares expertise to help you stay ahead in the digital world.
          </p>
        </header>

        {transformedBlogs.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No blog posts available at the moment.</p>
            <p className="text-gray-500 mt-2">Check back later for new content!</p>
          </div>
        ) : (
          <>
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[38px] mb-8">
              {currentPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </section>

            {totalPages > 1 && (
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            )}
          </>
        )}
      </div>
    </main>
  )
}