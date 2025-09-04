import React from 'react'
import Image from 'next/image'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { BlogPost } from '../../../../../types/blog'
import Link from 'next/link'

interface BlogCardProps {
  post: BlogPost
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg shadow-none border-none cursor-pointer transition-shadow duration-300">
      <div className="relative h-60 w-full">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <CardContent className="p-4">
        <p className="text-sm text-muted-foreground mb-2">{post.date}</p>
        <h3 className="text-base font-medium leading-tight mb-2 line-clamp-2">
          {post.title}
        </h3>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Link href={`/blogs/${post.id}`}>
          <Button variant="outline" size="sm" className="text-sm text-[#333333] font-normal text-[16px] border border-[#333333] py-2 px-3">
            View Details
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}
