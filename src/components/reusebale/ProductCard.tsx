// "use client";

// import { Heart, ShoppingCart } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader } from "@/components/ui/card";
// import Image from "next/image";
// import type { StaticImageData } from "next/image";
// import Link from "next/link";
// import { useEffect, useState } from "react";
// import { toast } from "sonner";

// export interface Product {
//     id: string;
//     name: string;
//     vendor: string;
//     images: (string | StaticImageData)[];
//     price: number;
//     discount: number;
//     rating: number;
//     description: string;
//     moq: number;
//     stock_quantity: number;
//     quantity?: number;
// }

// export default function ProductCard({
//     product,
//     isVenbor,
// }: {
//     product: Product;
//     isVenbor?: boolean;
// }) {
//     const [isWishlisted, setIsWishlisted] = useState(false);

//     // Initialize wishlist state from localStorage
//     useEffect(() => {
//         const storedWishlist = localStorage.getItem("wishlist");
//         if (storedWishlist) {
//             const wishlist: Product[] = JSON.parse(storedWishlist);
//             setIsWishlisted(wishlist.some((item) => item.id === product.id));
//         }
//     }, [product.id]);

//     // --- ADD TO CART ---
//     const handleAddToCart = () => {
//         const storedCart = localStorage.getItem("cart");
//         const cart: Product[] = storedCart ? JSON.parse(storedCart) : [];

//         const existing = cart.find((item) => item.id === product.id);

//         if (!existing) {
//             cart.push({ ...product, quantity: 1 });
//         } else {
//             cart.forEach((item) => {
//                 if (item.id === product.id) {
//                     item.quantity = (item.quantity || 0) + 1;
//                 }
//             });
//         }

//         localStorage.setItem("cart", JSON.stringify(cart));
//         toast.success(`${product.name} added to cart!`);
//     };

//     // --- WISHLIST ---
//     const handleToggleWishlist = () => {
//         const storedWishlist = localStorage.getItem("wishlist");
//         const wishlist: Product[] = storedWishlist ? JSON.parse(storedWishlist) : [];

//         if (isWishlisted) {
//             const updated = wishlist.filter((item) => item.id !== product.id);
//             localStorage.setItem("wishlist", JSON.stringify(updated));
//             setIsWishlisted(false);
//             toast.success(`${product.name} removed from wishlist`);
//         } else {
//             wishlist.push(product);
//             localStorage.setItem("wishlist", JSON.stringify(wishlist));
//             setIsWishlisted(true);
//             toast.success(`${product.name} added to wishlist`);
//         }
//     };

//     return (
//         <Card className="w-full sm:w-[260px] md:w-[280px] lg:w-[310px] border shadow-none rounded-2xl overflow-hidden group">
//             <CardHeader className="relative p-0 overflow-hidden">
//                 <Link href={`/products/${product.id}`}>
//                     <Image
//                         width={900}
//                         height={900}
//                         src={product.images[0]}
//                         alt={product.name}
//                         className="w-full h-[180px] cursor-pointer sm:h-[200px] md:h-[220px] lg:h-[250px] object-contain bg-[#E9DDD366] transition-transform duration-300 ease-in-out hover:scale-105"
//                     />
//                 </Link>
//                 <button
//                     onClick={handleToggleWishlist}
//                     className={`absolute top-3 right-3 bg-white rounded-full p-2 shadow-md transition-transform duration-300 hover:scale-110 ${isWishlisted ? "bg-red-100" : ""
//                         }`}
//                 >
//                     <Heart className={`h-5 w-5 ${isWishlisted ? "text-red-500" : "text-gray-400"}`} />
//                 </button>
//             </CardHeader>

//             <CardContent className="space-y-2 px-3 py-3">
//                 <div className="flex justify-between items-center">
//                     <p className="font-medium text-gray-800 text-sm sm:text-base truncate">
//                         {product.name}
//                     </p>
//                     <span className="text-xs sm:text-sm text-yellow-500">{product.rating} ★</span>
//                 </div>

//                 {!isVenbor && (
//                     <Link href={`/vendor/${product.vendor}`} className="text-xs text-red-500 truncate">
//                         {product.vendor}
//                     </Link>
//                 )}

//                 <div className="flex justify-between items-center text-xs sm:text-sm font-medium">
//                     <p>
//                         FastLane Price: <span className="text-red-600">${product.price}</span>
//                     </p>
//                     <span className="text-gray-500">{product.discount}% Off</span>
//                 </div>

//                 <p className="text-xs text-gray-500">(MOQ): {product.moq} pairs</p>

//                 <Button
//                     onClick={handleAddToCart}
//                     className="w-full mt-2 flex items-center justify-center gap-2 text-sm sm:text-base"
//                 >
//                     Add To Cart <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5" />
//                 </Button>
//             </CardContent>
//         </Card>
//     );
// }

"use client";

import { Heart, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import type { StaticImageData } from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export interface Product {
    id: string;
    name: string;
    vendor: string;
    images: (string | StaticImageData)[];
    price: number;
    discount: number;
    rating: number;
    description: string;
    moq: number;
    stock_quantity: number;
    quantity?: number;
}

// Helper functions
const getWishlistFromStorage = (): Product[] => {
    if (typeof window === "undefined") return [];
    const stored = localStorage.getItem("wishlist");
    return stored ? JSON.parse(stored) : [];
};

const saveWishlistToStorage = (wishlist: Product[]) => {
    if (typeof window === "undefined") return;
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
};

export default function ProductCard({
    product,
    isVenbor,
}: {
    product: Product;
    isVenbor?: boolean;
}) {
    const [isWishlisted, setIsWishlisted] = useState(false);
    const [quantity, setQuantity] = useState(product.quantity || 1);

    // Load initial wishlist state and quantity
    useEffect(() => {
        const storedWishlist = getWishlistFromStorage();
        const inWishlist = storedWishlist.find((item) => item.id === product.id);
        if (inWishlist) {
            setIsWishlisted(true);
            setQuantity(inWishlist.quantity || 1);
        }
    }, [product.id]);

    // --- WISHLIST TOGGLE ---
    const handleToggleWishlist = () => {
        const wishlist = getWishlistFromStorage();

        if (isWishlisted) {
            const updated = wishlist.filter((item) => item.id !== product.id);
            saveWishlistToStorage(updated);
            setIsWishlisted(false);
            toast.success(`${product.name} removed from wishlist`);
        } else {
            wishlist.push({ ...product, quantity });
            saveWishlistToStorage(wishlist);
            setIsWishlisted(true);
            toast.success(`${product.name} added to wishlist`);
        }
    };

    // --- QUANTITY CHANGE ---
    const handleQuantityChange = (newQty: number) => {
        if (newQty < 1) return;
        setQuantity(newQty);

        if (isWishlisted) {
            const wishlist = getWishlistFromStorage();
            const updated = wishlist.map((item) =>
                item.id === product.id ? { ...item, quantity: newQty } : item
            );
            saveWishlistToStorage(updated);
        }
    };

    // --- ADD TO CART ---
    const handleAddToCart = () => {
        const storedCart = localStorage.getItem("cart");
        const cart: Product[] = storedCart ? JSON.parse(storedCart) : [];

        const existing = cart.find((item) => item.id === product.id);

        if (!existing) {
            cart.push({ ...product, quantity });
        } else {
            cart.forEach((item) => {
                if (item.id === product.id) {
                    item.quantity = (item.quantity || 0) + quantity;
                }
            });
        }

        localStorage.setItem("cart", JSON.stringify(cart));
        toast.success(`${product.name} added to cart!`);
    };

    return (
        <Card className="w-full sm:w-[260px] md:w-[280px] lg:w-[310px] border shadow-none rounded-2xl overflow-hidden group">
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
                <button
                    onClick={handleToggleWishlist}
                    className={`absolute top-3 right-3 bg-white rounded-full p-2 shadow-md transition-transform duration-300 hover:scale-110 ${isWishlisted ? "bg-red-100" : ""
                        }`}
                >
                    <Heart
                        className={`h-5 w-5 ${isWishlisted ? "text-red-500" : "text-gray-400"}`}
                    />
                </button>
            </CardHeader>

            <CardContent className="space-y-2 px-3 py-3">
                <div className="flex justify-between items-center">
                    <p className="font-medium text-gray-800 text-sm sm:text-base truncate">
                        {product.name}
                    </p>
                    <span className="text-xs sm:text-sm text-yellow-500">{product.rating} ★</span>
                </div>

                {!isVenbor && (
                    <Link href={`/vendor/${product.vendor}`} className="text-xs text-red-500 truncate">
                        {product.vendor}
                    </Link>
                )}

                <div className="flex justify-between items-center text-xs sm:text-sm font-medium">
                    <p>
                        FastLane Price: <span className="text-red-600">${product.price}</span>
                    </p>
                    <span className="text-gray-500">{product.discount}% Off</span>
                </div>

                <p className="text-xs text-gray-500">(MOQ): {product.moq} pairs</p>

                {/* Quantity Selector */}
                <div className="flex items-center gap-2 mt-1">
                    <button
                        className="px-2 py-1 border rounded"
                        onClick={() => handleQuantityChange(quantity - 1)}
                    >
                        -
                    </button>
                    <span>{quantity}</span>
                    <button
                        className="px-2 py-1 border rounded"
                        onClick={() => handleQuantityChange(quantity + 1)}
                    >
                        +
                    </button>
                </div>

                <Button
                    onClick={handleAddToCart}
                    className="w-full mt-2 flex items-center justify-center gap-2 text-sm sm:text-base"
                >
                    Add To Cart <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5" />
                </Button>
            </CardContent>
        </Card>
    );
}
