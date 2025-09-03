"use client";

import ProductCard from "../reusebale/ProductCard";

export const products = [
    {
        id: "1",
        name: "Classic Strip Shirt",
        images: [
            "https://plus.unsplash.com/premium_photo-1664202525979-80d1da46b34b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njh8fGZhc2hpb258ZW58MHx8MHx8fDA%3D",
            "https://images.unsplash.com/photo-1625204614387-6509254d5b02?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzh8fGZhc2hpb258ZW58MHx8MHx8fDA%3D"
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
        images: [
            "https://plus.unsplash.com/premium_photo-1675186049563-000f7ac02c44?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjR8fGZhc2hpb258ZW58MHx8MHx8fDA%3D",
            "https://images.unsplash.com/photo-1484327973588-c31f829103fe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fGZhc2hpb258ZW58MHx8MHx8fDA%3D"
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
        images: [
            "https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fGZhc2hpb258ZW58MHx8MHx8fDA%3D",
            "https://images.unsplash.com/photo-1603400521630-9f2de124b33b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGZhc2hpb258ZW58MHx8MHx8fDA%3D"
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
        images: [
            "https://images.unsplash.com/photo-1485125639709-a60c3a500bf1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fGZhc2hpb258ZW58MHx8MHx8fDA%3D",
            "https://plus.unsplash.com/premium_photo-1675186049406-3fabe5f387eb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fGZhc2hpb258ZW58MHx8MHx8fDA%3D"
        ],
        price: 250,
        discount: 30,
        rating: 4.7,
        description: "Lorem Ipsum - modern smartwatch with features.",
        moq: 2,
        stock_quantity: 20,
    },
];

export default function NewArrivals() {
    return (
        <section className="container py-8">
            <h2 className="text-xl font-bold mb-4">New Arrivals</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </section>
    );
}
