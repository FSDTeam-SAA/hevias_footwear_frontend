"use client";

import Link from "next/link";
import ProductCard from "../reusebale/ProductCard";

import product1 from '/public/product1.png'
import product2 from '/public/product2.png'
import product3 from '/public/product3.png'
import product5 from '/public/product5.png'
import { ArrowRight } from "lucide-react";

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
];

export default function BestSellers() {
    return (
        <section className="container py-8">
            <div className="flex justify-between items-center ">
                <h2 className="text-xl font-bold mb-4 ">Best Sellers</h2>
                <Link href="/products" className="text-sm flex items-center justify-center gap-2 text-[#797068] hover:underline mb-4 ">
                    See All <ArrowRight width={20} hanging={20} />
                </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </section>
    );
}
