"use client";

import Link from "next/link";
import ProductCard from "../reusebale/ProductCard";
import { ArrowRight } from "lucide-react";

export const products = [
    {
        id: "1",
        name: "Classic Strip Shirt",
        vendor: "Hevias",
        images: [
            "https://images.unsplash.com/photo-1579820010410-c10411aaaa88?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHJlYWN0fGVufDB8fDB8fHww",
            "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D"
        ],
        price: 95,
        discount: 70,
        rating: 4.8,
        description: "Lorem Ipsum - high-quality classic striped shirt.",
        moq: 6,
        stock_quantity: 10,
    },
    {
        id: "2",
        name: "Casual Blue Shirt",
        vendor: "Hevias",
        images: [
            "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D",
            "https://images.unsplash.com/photo-1603189343302-e603f7add05a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D"
        ],
        price: 85,
        discount: 60,
        rating: 4.5,
        description: "Lorem Ipsum - comfortable casual blue shirt.",
        moq: 5,
        stock_quantity: 15,
    },
    {
        id: "3",
        name: "Formal White Shirt",
        vendor: "Hevias",
        images: [
            "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGZhc2hpb258ZW58MHx8MHx8fDA%3D",
            "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGZhc2hpb258ZW58MHx8MHx8fDA%3D"
        ],
        price: 120,
        discount: 50,
        rating: 4.9,
        description: "Lorem Ipsum - elegant formal white shirt.",
        moq: 3,
        stock_quantity: 8,
    },
    {
        id: "5",
        name: "Smart Watch",
        vendor: "Hevias",
        images: [
            "https://images.unsplash.com/photo-1544957992-20514f595d6f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGZhc2hpb258ZW58MHx8MHx8fDA%3D",
            "https://images.unsplash.com/photo-1445205170230-053b83016050?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fGZhc2hpb258ZW58MHx8MHx8fDA%3D"
        ],
        price: 250,
        discount: 30,
        rating: 4.7,
        description: "Lorem Ipsum - modern smartwatch with features.",
        moq: 2,
        stock_quantity: 20,
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
