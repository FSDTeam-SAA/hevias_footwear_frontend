"use client";

import { Heart, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import type { StaticImageData } from "next/image";
import Link from "next/link";

export interface Product {
    id: string;
    name: string;
    images: (string | StaticImageData)[]; // multiple images
    price: number;
    discount: number; // percentage off
    rating: number;
    description: string;
    moq: number; // Minimum Order Quantity
    stock_quantity: number; // for quantity selector
}
export default function ProductCard({ product }: { product: Product }) {
    console.log(product.images[0])
    return (
        <Card className="w-full sm:w-[260px] md:w-[280px] lg:w-[310px] border shadow-none rounded-2xl overflow-hidden group">
            {/* Image + Wishlist Button */}
            <CardHeader className="relative p-0 overflow-hidden">
                <Link href={`/products/${product.id}`}>
                    <Image
                        width={900}
                        height={900}
                        src={product.images[0]}
                        alt={product.name}
                        className="w-full h-[180px] cursor-pointer sm:h-[200px] md:h-[220px] lg:h-[250px] object-contain bg-[#E9DDD366] transition-transform duration-300 ease-in-out hover:scale-105"
                    />
                </Link>
                <button className="absolute top-3 right-3 bg-white rounded-full p-2 shadow-md hover:bg-red-100 hover:scale-110 transition-transform duration-300">
                    <Heart className="h-5 w-5 text-red-500" />
                </button>
            </CardHeader>

            {/* Content */}
            <CardContent className="space-y-2 px-3 py-3">
                <div className="flex justify-between items-center">
                    <p className="font-medium text-gray-800 text-sm sm:text-base truncate">
                        {product.name}
                    </p>
                    <span className="text-xs sm:text-sm text-yellow-500">
                        {product.rating} ★
                    </span>
                </div>

                <p className="text-xs text-red-500 truncate">{product.description}</p>

                <div className="flex justify-between items-center text-xs sm:text-sm font-medium">
                    <p>
                        FastLane Price:{" "}
                        <span className="text-red-600">${product.price}</span>
                    </p>
                    <span className="text-gray-500">{product.discount}% Off</span>
                </div>

                <p className="text-xs text-gray-500">(MOQ): {product.moq} pairs</p>

                <Button className="w-full mt-2 flex items-center justify-center gap-2 text-sm sm:text-base">
                    Add To Cart <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5" />
                </Button>
            </CardContent>
        </Card>
    );
}
