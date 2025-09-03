"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, } from "lucide-react";
import { products } from "../../_components/AllproductBody";
import RatingStars from "@/components/RatingStars";
import { Button } from "@/components/ui/button";
import CoustomerReview from "./CoustomerReview";

interface ProductDetailsProps {
    id: string;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ id }) => {
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);


    const product = products.find((p) => p.id === id);
    if (!product) return <div>Product not found</div>;


    return (
        <section>
            <div className="container mx-auto px-4 py-8">
                <Link
                    href="/products"
                    className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-6"
                >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Products
                </Link>

                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                    {/* Image Gallery */}
                    <div className="space-y-4">
                        {/* Main Image */}
                        <div className="aspect-square rounded-lg overflow-hidden">
                            <Image
                                src={product.images[selectedImageIndex]}
                                alt={product.name}
                                width={900}
                                height={900}
                                className="w-[627px] h-[684px] rounded-lg object-cover"
                            />
                        </div>

                        {/* Thumbnails */}
                        <div className="flex gap-2 overflow-x-auto">
                            {product.images.map((image, index) => (
                                <button
                                    key={index}
                                    onClick={() => setSelectedImageIndex(index)}
                                    className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-colors ${selectedImageIndex === index ? "border-gray-900" : "border-gray-200"
                                        }`}
                                >
                                    <Image
                                        src={image}
                                        alt={`${product.name} view ${index + 1}`}
                                        width={64}
                                        height={64}
                                        className="w-full h-full object-cover"
                                    />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Product Info */}
                    <div className="flex flex-col justify-between space-y-6 h-full">
                        <div className="space-y-4">
                            <h1 className="text-2xl lg:text-3xl font-bold mb-2">{product.name}</h1>

                            <div className="flex items-center gap-1 mb-4">
                                <RatingStars rating={product.rating} />
                            </div>

                            <p className="text-[#FF7F50]">Vendor name</p>

                            <div className="flex items-center gap-3">
                                <span className="text-3xl font-bold">
                                    <span className="text-[16px]">AED</span> {product.price.toFixed(2)}
                                </span>
                                {product.discount > 0 && (
                                    <span className="text-sm text-green-600 font-medium">
                                        Save {product.discount}% right now
                                    </span>
                                )}
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-lg font-semibold">Descriptions:</h3>
                                <p className="text-gray-700">{product.description}</p>
                            </div>
                        </div>

                        {/* Add to Cart Button */}
                        <Button className="w-full mt-4">Add to Cart</Button>
                    </div>
                </div>
                <CoustomerReview/>
            </div>
        </section>

    );
};

export default ProductDetails;
