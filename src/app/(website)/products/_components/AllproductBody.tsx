import ProductCard from '@/components/reusebale/ProductCard'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import React from 'react'

import product1 from '/public/product1.png'
import product2 from '/public/product2.png'
import product3 from '/public/product3.png'
import product5 from '/public/product5.png'
const AllproductBody = () => {

    const products = [
        {
            id: "1",
            name: "Classic Strip Shirt",
            image: product1,
            price: 95,
            discount: 70,
            rating: 4.8,
            description: "Lorem Ipsum",
            moq: 6,
        },
        {
            id: "2",
            name: "Classic Strip Shirt",
            image: product2,
            price: 95,
            discount: 70,
            rating: 4.8,
            description: "Lorem Ipsum",
            moq: 6,
        },
        {
            id: "3",
            name: "Classic Strip Shirt",
            image: product3,
            price: 95,
            discount: 70,
            rating: 4.8,
            description: "Lorem Ipsum",
            moq: 6,
        },

        {
            id: "5",
            name: "Smart Watch",
            image: product5,
            price: 95,
            discount: 70,
            rating: 4.8,
            description: "Lorem Ipsum",
            moq: 6,
        },
        {
            id: "2",
            name: "Classic Strip Shirt",
            image: product2,
            price: 95,
            discount: 70,
            rating: 4.8,
            description: "Lorem Ipsum",
            moq: 6,
        },
        {
            id: "1",
            name: "Classic Strip Shirt",
            image: product1,
            price: 95,
            discount: 70,
            rating: 4.8,
            description: "Lorem Ipsum",
            moq: 6,
        },

        {
            id: "5",
            name: "Smart Watch",
            image: product5,
            price: 95,
            discount: 70,
            rating: 4.8,
            description: "Lorem Ipsum",
            moq: 6,
        },
         {
            id: "2",
            name: "Classic Strip Shirt",
            image: product2,
            price: 95,
            discount: 70,
            rating: 4.8,
            description: "Lorem Ipsum",
            moq: 6,
        },
    ];

    return (
        <div className='container'>
            <div className='mt-24 flex flex-col md:flex-row justify-between items-center md:items-start gap-6 md:gap-0 '>
                <div className='space-y-5'>
                    <p>15,000+ Results</p>
                    <h2 className='mt-2  font-semibold text-[#131313] text-4xl'>Best Sellers</h2>
                    <div className="flex gap-4">
                        <Select>
                            <SelectTrigger className="w-[140px] bg-[#F2F1F0]">
                                <SelectValue placeholder="Price" />
                            </SelectTrigger>
                            <SelectContent className="w-[140px]">
                                <SelectItem value="low">Low to High</SelectItem>
                                <SelectItem value="high">High to Low</SelectItem>
                                <SelectItem value="default">Default</SelectItem>
                            </SelectContent>
                        </Select>

                        <Select>
                            <SelectTrigger className="w-[140px] bg-[#F2F1F0]">
                                <SelectValue placeholder="Category" />
                            </SelectTrigger>
                            <SelectContent className="w-[140px]">
                                <SelectItem value="mobile">Mobile</SelectItem>
                                <SelectItem value="computer">Computer</SelectItem>
                                <SelectItem value="ac">Ac</SelectItem>
                                <SelectItem value="camera">Camera</SelectItem>
                                <SelectItem value="tablet">Tablet</SelectItem>
                            </SelectContent>
                        </Select>

                        <Select>
                            <SelectTrigger className="w-[140px] bg-[#F2F1F0]">
                                <SelectValue placeholder="Brand" />
                            </SelectTrigger>
                            <SelectContent className="w-[140px]">
                                <SelectItem value="puma">Puma</SelectItem>
                                <SelectItem value="netflix">Netflix</SelectItem>
                                <SelectItem value="walton">Walton</SelectItem>
                                <SelectItem value="bata">Bata</SelectItem>
                                <SelectItem value="apex">Apex</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>


                </div>
                <div className='flex gap-4 items-center justify-center'>
                    short by:  <Select>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="best sellers" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="best sellers">Best sellers</SelectItem>
                            <SelectItem value="new arrivals">new arrivals</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>
            <div>
                {/* product card  */}
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10 mb-20'>
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default AllproductBody