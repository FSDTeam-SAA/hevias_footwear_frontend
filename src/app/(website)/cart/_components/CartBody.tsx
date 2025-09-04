
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

interface CartItem {
    id: string;
    name: string;
    vendor: string;
    images: string[];
    price: number;
    quantity: number;
}

export const getCartFromStorage = (): CartItem[] => {
    if (typeof window === "undefined") return [];
    const stored = localStorage.getItem("cart");
    return stored ? JSON.parse(stored) : [];
};

const saveCartToStorage = (cart: CartItem[]) => {
    if (typeof window === "undefined") return;
    localStorage.setItem("cart", JSON.stringify(cart));
};

export default function CartPage() {
    const [cart, setCart] = useState<CartItem[]>([]);
    const [mounted, setMounted] = useState(false);
    const router = useRouter();
    const shippingCost = 0;

    useEffect(() => {
        setCart(getCartFromStorage());
        setMounted(true);
    }, []);

    useEffect(() => {
        if (mounted) saveCartToStorage(cart);
    }, [cart, mounted]);

    const handleQuantityChange = (id: string, qty: number) => {
        if (qty < 1) return;
        setCart(cart.map(item => (item.id === id ? { ...item, quantity: qty } : item)));
    };

    const handleRemove = (id: string) => {
        setCart(cart.filter(item => item.id !== id));
    };

    const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const total = subtotal + shippingCost;

    const handleProceedToCheckout = () => {
        // Save current cart to a temporary key for checkout
        localStorage.setItem("checkoutCart", JSON.stringify(cart));
        // Navigate to checkout page
        router.push("/checkout");
    };

    if (!mounted) return null;

    return (
        <div className="container mx-auto px-4 py-10">
            <h1 className="text-2xl sm:text-3xl font-semibold text-center mb-6">Shopping Cart</h1>
            <p className="text-center text-gray-500 mb-10">
                Browse our catalog of thousands of product styles and colors to find the perfect fit.
            </p>

            <div className="flex flex-col lg:flex-row gap-8">
                {/* Cart Items */}
                <div className="flex-1 overflow-x-auto">
                    {cart.length > 0 ? (
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="border-b text-left">
                                    <th className="p-3">Product</th>
                                    <th className="p-3">Price</th>
                                    <th className="p-3">Quantity</th>
                                    <th className="p-3">Subtotal</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cart.map(item => (
                                    <tr key={item.id} className="border-b text-sm sm:text-base">
                                        <td className="p-3 flex items-center gap-3">
                                            <Image
                                                src={item.images[0]}
                                                alt={item.name}
                                                width={80}
                                                height={80}
                                                className="rounded-md object-contain"
                                            />
                                            <div>
                                                <p className="font-medium">{item.name}</p>
                                                <p className="text-xs text-gray-500">Vendor: {item.vendor}</p>
                                                <button
                                                    onClick={() => handleRemove(item.id)}
                                                    className="text-red-500 text-xs mt-1"
                                                >
                                                    Remove
                                                </button>
                                            </div>
                                        </td>
                                        <td className="p-3">${item.price.toFixed(2)}</td>
                                        <td className="p-3">
                                            <div className="flex items-center gap-2">
                                                <button
                                                    className="px-2 py-1 border rounded"
                                                    onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                                                >
                                                    -
                                                </button>
                                                <span>{item.quantity}</span>
                                                <button
                                                    className="px-2 py-1 border rounded"
                                                    onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </td>
                                        <td className="p-3 font-medium">
                                            ${(item.price * item.quantity).toFixed(2)}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) : (
                        <p className="text-center py-10 text-gray-500">Your cart is empty.</p>
                    )}

                    <div className="mt-6">
                        <Button variant="secondary" onClick={() => router.push("/products")}>
                            Continue Shopping
                        </Button>
                    </div>
                </div>

                {/* Cart Summary */}
                <div className="w-full lg:w-1/3 border p-6 rounded-lg h-fit">
                    <h2 className="text-lg font-semibold mb-4">Cart Total</h2>
                    <div className="flex justify-between mb-2">
                        <span>Subtotal</span>
                        <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between mb-2">
                        <span>Shipping</span>
                        <span>${shippingCost.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between font-semibold border-t pt-2">
                        <span>Total Price</span>
                        <span>${total.toFixed(2)}</span>
                    </div>

                    <Button className="w-full mt-6" onClick={handleProceedToCheckout}>
                        Proceed To Checkout
                    </Button>
                </div>
            </div>
        </div>
    );
}
