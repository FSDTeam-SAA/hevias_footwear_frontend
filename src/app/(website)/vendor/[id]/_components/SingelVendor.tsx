"use client"
import { products } from '@/components/Home/NewArrivals'
import ProductCard from '@/components/reusebale/ProductCard'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { MapPin } from 'lucide-react'
import React from 'react'

const SingelVendor = ({ id }: { id: string }) => {
    console.log(id)
    return (
        <div className='container mx-auto py-20 space-y-28'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                <div>
                    <div className='flex items-center gap-5 mb-5'>
                        <Avatar className='w-20 h-20'>
                            <AvatarImage src='/prp.jpg' />
                            <AvatarFallback />
                        </Avatar>
                        <div className='space-y-1'>
                            <h2 className='text-[#272727] font-medium text-xl'>Lorem Ipsum</h2>
                            <p className='flex items-center gap-1 text-[#595959] text-[16px]'><MapPin className='w-3 h-3 text-primary' /> Sacramento, CA 95814</p>
                        </div>
                    </div>
                    <div>
                        <p className='text-[#4B5563] font-normal text-sm'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apoch;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} isVenbor={true} />
                ))}
            </div>
        </div>
    )
}

export default SingelVendor