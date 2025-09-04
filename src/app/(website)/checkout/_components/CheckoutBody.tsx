// "use client";

// import { useEffect, useState } from "react";
// import Image from "next/image";
// import { Button } from "@/components/ui/button";

// interface CartItem {
//     id: string;
//     name: string;
//     vendor: string;
//     images: string[];
//     price: number;
//     quantity: number;
// }

// const getCartFromStorage = (): CartItem[] => {
//     if (typeof window === "undefined") return [];
//     const stored = localStorage.getItem("cart");
//     return stored ? JSON.parse(stored) : [];
// };

// export default function CheckoutPage() {
//     const [cart, setCart] = useState<CartItem[]>([]);
//     const [mounted, setMounted] = useState(false);
//     const [goPayment, setGoPayment] = useState(false);
//     const shippingCost = 0;
//     const taxRate = 0.1;

//     useEffect(() => {
//         setCart(getCartFromStorage());
//         setMounted(true);
//     }, []);

//     if (!mounted) return null;

//     const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
//     const tax = subtotal * taxRate;
//     const total = subtotal + shippingCost + tax;

//     return (
//         <div className="container mx-auto px-4 py-10">
//             <h1 className="text-2xl sm:text-3xl font-semibold text-center mb-6">
//                 Checkout
//             </h1>
//             <p className="text-center text-gray-500 mb-10">
//                 Browse our catalog of hundreds of product styles and color combinations to find the perfect type.
//             </p>

//             <div className="flex flex-col items-center justify-center lg:flex-row gap-10">
//                 {/* Left: Order Summary */}
//                 {!goPayment && cart.length > 0 && (
//                     <div className="w-full border border-dashed p-6 rounded-lg">
//                         <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
//                         {cart.map((item) => (
//                             <div key={item.id} className="flex items-center justify-between border-b py-3">
//                                 <div className="flex items-center gap-3">
//                                     <Image
//                                         src={item.images[0]}
//                                         alt={item.name}
//                                         width={60}
//                                         height={60}
//                                         className="rounded-md object-contain"
//                                     />
//                                     <div>
//                                         <p className="font-medium">{item.name}</p>
//                                         <p className="text-sm text-gray-500">
//                                             {item.quantity} × ${item.price.toFixed(2)}
//                                         </p>
//                                     </div>
//                                 </div>
//                                 <span className="font-medium">
//                                     ${(item.price * item.quantity).toFixed(2)}
//                                 </span>
//                             </div>
//                         ))}

//                         <div className="mt-4 space-y-1">
//                             <div className="flex justify-between">
//                                 <span>Subtotal</span>
//                                 <span>${subtotal.toFixed(2)}</span>
//                             </div>
//                             <div className="flex justify-between">
//                                 <span>Shipping</span>
//                                 <span>${shippingCost.toFixed(2)}</span>
//                             </div>
//                             <div className="flex justify-between">
//                                 <span>Tax</span>
//                                 <span>${tax.toFixed(2)}</span>
//                             </div>
//                             <div className="flex justify-between font-semibold border-t pt-2 mt-2">
//                                 <span>Total</span>
//                                 <span>${total.toFixed(2)}</span>
//                             </div>
//                         </div>

//                         <Button onClick={() => setGoPayment(true)} className="w-full mt-6">
//                             Go To Payment
//                         </Button>
//                     </div>
//                 )}

//                 {/* Right: Checkout Form */}
//                 {goPayment && (
//                     <div className="w-full   p-6 rounded-lg space-y-6">
//                         <h2 className="text-lg font-semibold">1. Personal Information</h2>
//                         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                             <input placeholder="First Name" className="border p-2 rounded w-full" />
//                             <input placeholder="Last Name" className="border p-2 rounded w-full" />
//                         </div>
//                         <input placeholder="Email" className="border p-2 rounded w-full" />
//                         <input placeholder="Phone" className="border p-2 rounded w-full" />

//                         <h2 className="text-lg font-semibold">2. Payment Method</h2>
//                         <input placeholder="Card Number" className="border p-2 rounded w-full" />

//                         <h2 className="text-lg font-semibold">3. Shipping Address</h2>
//                         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                             <input placeholder="Country" className="border p-2 rounded w-full" />
//                             <input placeholder="City" className="border p-2 rounded w-full" />
//                             <input placeholder="State" className="border p-2 rounded w-full" />
//                             <input placeholder="Zip Code" className="border p-2 rounded w-full" />
//                         </div>

//                         <Button className="w-full mt-6">Continue To Payment</Button>
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// }

"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface CartItem {
    id: string;
    name: string;
    vendor: string;
    images: string[];
    price: number;
    quantity: number;
}

// Load either cart or wishlist selection
const getCheckoutItems = (): CartItem[] => {
    if (typeof window === "undefined") return [];
    const wishlistItems = localStorage.getItem("checkoutCart");
    if (wishlistItems) return JSON.parse(wishlistItems);

    const cartItems = localStorage.getItem("cart");
    if (cartItems) return JSON.parse(cartItems);

    return [];
};

export default function CheckoutPage() {
    const [cart, setCart] = useState<CartItem[]>([]);
    const [mounted, setMounted] = useState(false);
    const [goPayment, setGoPayment] = useState(false);

    const shippingCost = 0;
    const taxRate = 0;

    useEffect(() => {
        setCart(getCheckoutItems());
        setMounted(true);
    }, []);

    if (!mounted) return null;

    const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const tax = subtotal * taxRate;
    const total = subtotal + shippingCost + tax;

    return (
        <div className="container mx-auto px-4 py-10">
            <h1 className="text-2xl sm:text-3xl font-semibold text-center mb-6">
                Checkout
            </h1>
            <p className="text-center text-gray-500 mb-10">
                Review your order and fill in your details to complete the purchase.
            </p>

            <div className="flex flex-col items-center justify-center lg:flex-row gap-10">
                {/* Order Summary */}
                {!goPayment && cart.length > 0 && (
                    <div className="w-full border border-dashed p-6 rounded-lg">
                        <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
                        {cart.map((item) => (
                            <div key={item.id} className="flex items-center justify-between border-b py-3">
                                <div className="flex items-center gap-3">
                                    <Image
                                        src={item.images[0]}
                                        alt={item.name}
                                        width={60}
                                        height={60}
                                        className="rounded-md object-contain"
                                    />
                                    <div>
                                        <p className="font-medium">{item.name}</p>
                                        <p className="text-sm text-gray-500">
                                            {item.quantity} × ${item.price.toFixed(2)}
                                        </p>
                                    </div>
                                </div>
                                <span className="font-medium">
                                    ${(item.price * item.quantity).toFixed(2)}
                                </span>
                            </div>
                        ))}

                        <div className="mt-4 space-y-1">
                            <div className="flex justify-between">
                                <span>Subtotal</span>
                                <span>${subtotal.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Shipping</span>
                                <span>${shippingCost.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Tax</span>
                                <span>${tax.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between font-semibold border-t pt-2 mt-2">
                                <span>Total</span>
                                <span>${total.toFixed(2)}</span>
                            </div>
                        </div>

                        <Button onClick={() => setGoPayment(true)} className="w-full mt-6">
                            Go To Payment
                        </Button>
                    </div>
                )}

                {/* Checkout Form */}
                {goPayment && (
                    <div className="w-full  p-6 rounded-lg space-y-6">
                        <h2 className="text-lg font-semibold">1. Personal Information</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <input placeholder="First Name" className="border p-2 rounded w-full" />
                            <input placeholder="Last Name" className="border p-2 rounded w-full" />
                        </div>
                        <input placeholder="Email" className="border p-2 rounded w-full" />
                        <input placeholder="Phone" className="border p-2 rounded w-full" />

                        <h2 className="text-lg font-semibold">2. Payment Method</h2>
                        <input placeholder="Card Number" className="border p-2 rounded w-full" />

                        <h2 className="text-lg font-semibold">3. Shipping Address</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <input placeholder="Country" className="border p-2 rounded w-full" />
                            <input placeholder="City" className="border p-2 rounded w-full" />
                            <input placeholder="State" className="border p-2 rounded w-full" />
                            <input placeholder="Zip Code" className="border p-2 rounded w-full" />
                        </div>

                        <Button
                            className="w-full mt-6"
                            onClick={() => console.log("Checkout data submitted:", cart)}
                        >
                            Continue To Payment
                        </Button>
                    </div>
                )}
            </div>
        </div>
    );
}
