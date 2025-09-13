"use client";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import React from "react";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Cta from "@/components/Home/Cta";

interface BlogDetailsResponse {
  statusCode: number;
  success: boolean;
  message: string;
  data: {
    _id: string;
    title: string;
    description: string;
    thumbnail: string;
    createdBy: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
  };
}

function BlogDetails() {
  const params = useParams();
  const id = params?.id as string;

  const {
    data: response,
    isLoading,
    isError,
    error,
  } = useQuery<BlogDetailsResponse>({
    queryKey: ["single-blog", id],
    queryFn: async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/blog/${id}`
      );

      if (!res.ok) {
        throw new Error("Failed to fetch blog");
      }

      return res.json();
    },
  });

  const renderHTMLContent = (htmlContent: string) => {
    return { __html: htmlContent };
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 text-lg mb-4">
            Error: {(error as Error).message}
          </p>
          <Link
            href="/blogs"
            className="inline-flex items-center text-blue-600 hover:text-blue-800"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blogs
          </Link>
        </div>
      </div>
    );
  }

  const blog = response?.data;

  if (!blog) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600 text-lg mb-4">Blog not found</p>
          <Link
            href="/blogs"
            className="inline-flex items-center text-blue-600 hover:text-blue-800"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blogs
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      <article className="min-h-screen container mx-auto">
        {/* Header Section */}
        <div className="py-14 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div>
              <h1 className="text-[40px] leading-[120%] font-semibold text-center">
                Blog Details
              </h1>
              <p className="text-base font-normal text-center">
                Our team is always ready to assist you with any questions or
                concerns you might have. Fill out the form below and we&apos;ll
                get back to you as soon as possible
              </p>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative w-full h-64 sm:h-80 lg:h-96 mb-[60px]">
          <Image
            src={blog.thumbnail}
            alt={blog.title}
            fill
            className="object-cover rounded-lg"
            quality={100}
            priority
            onError={(e) => {
              (e.target as HTMLImageElement).src =
                "/images/blog-placeholder.jpg";
            }}
          />
        </div>

        {/* Main Content */}
        <div className="">
          <div className="prose prose-lg prose-gray max-w-none">
            {/* Blog Content */}
            <div
              className="blog-content"
              dangerouslySetInnerHTML={renderHTMLContent(blog.description)}
            />
          </div>
        </div>
      </article>
      <Cta />
    </div>
  );
}

export default BlogDetails;
