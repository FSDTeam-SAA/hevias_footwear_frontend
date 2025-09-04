// "use client";

// import { useEffect, useState } from "react";
// import Image from "next/image";
// import { Button } from "@/components/ui/button";
// import { Trash } from "lucide-react";

// interface WishlistItem {
//     id: string;
//     name: string;
//     vendor: string;
//     images: string[];
//     price: number;
//     rating: number;
//     quantity: number;
// }

// // --- LocalStorage Helpers ---
// const getWishlistFromStorage = (): WishlistItem[] => {
//     if (typeof window === "undefined") return [];
//     const stored = localStorage.getItem("wishlist");
//     return stored ? JSON.parse(stored) : [];
// };

// const saveWishlistToStorage = (wishlist: WishlistItem[]) => {
//     if (typeof window === "undefined") return;
//     localStorage.setItem("wishlist", JSON.stringify(wishlist));
// };

// export default function WishlistPage() {
//     const [wishlist, setWishlist] = useState<WishlistItem[]>([]);
//     const [selectedIds, setSelectedIds] = useState<string[]>([]);
//     const [mounted, setMounted] = useState(false);
//     const shippingCost = 0;

//     // Load wishlist from localStorage
//     useEffect(() => {
//         setMounted(true);
//         const items = getWishlistFromStorage();
//         setWishlist(items);
//         setSelectedIds(items.map((item) => item.id)); // default: all selected
//     }, []);

//     // Sync wishlist to localStorage whenever it changes
//     useEffect(() => {
//         if (mounted) saveWishlistToStorage(wishlist);
//     }, [wishlist, mounted]);

//     // Quantity increment/decrement
//     const handleQuantityChange = (id: string, qty: number) => {
//         if (qty < 1) return; // minimum 1
//         const updated = wishlist.map((item) =>
//             item.id === id ? { ...item, quantity: qty } : item
//         );
//         setWishlist(updated);
//     };

//     // Remove item
//     const handleRemove = (id: string) => {
//         setWishlist((prev) => prev.filter((item) => item.id !== id));
//         setSelectedIds((prev) => prev.filter((selId) => selId !== id));
//     };

//     // Select/deselect item
//     const handleSelectChange = (id: string) => {
//         setSelectedIds((prev) =>
//             prev.includes(id)
//                 ? prev.filter((selId) => selId !== id)
//                 : [...prev, id]
//         );
//     };

//     // Totals based on selected items
//     const selectedItems = wishlist.filter((item) => selectedIds.includes(item.id));
//     const subtotal = selectedItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
//     const total = subtotal + shippingCost;

//     if (!mounted) return null;

//     return (
//         <div className="">
//             {/* Header */}
//             <div className="bg-[#D8F4FA] py-24 text-center mb-10">
//                 <h1 className="text-2xl sm:text-3xl font-semibold">Wishlist</h1>
//                 <p className="text-gray-600 max-w-2xl mx-auto mt-2 text-sm sm:text-base">
//                     Our team is always ready to assist you with any questions or concerns you
//                     might have. Fill out the form below and we&apos;ll get back to you as soon as
//                     possible
//                 </p>
//             </div>

//             <div className="flex container mx-auto px-4 py-10 flex-col lg:flex-row gap-8">
//                 {/* Wishlist Items */}
//                 <div className="flex-1 space-y-4">
//                     {wishlist.length > 0 ? (
//                         wishlist.map((item) => (
//                             <div
//                                 key={item.id}
//                                 className="flex justify-between items-center border p-4 rounded-md"
//                             >
//                                 <div className="flex items-center gap-4">
//                                     <input
//                                         type="checkbox"
//                                         checked={selectedIds.includes(item.id)}
//                                         onChange={() => handleSelectChange(item.id)}
//                                     />
//                                     <Image
//                                         src={item.images[0]}
//                                         alt={item.name}
//                                         width={80}
//                                         height={80}
//                                         className="rounded-md object-contain"
//                                     />
//                                     <div>
//                                         <p className="font-medium">{item.name}</p>
//                                         <p className="text-xs text-gray-500">Rating {item.rating} ★</p>
//                                     </div>
//                                 </div>
//                                 <div className="flex flex-col items-center gap-2">

//                                     <p className="text-[#00B4D8] font-medium">${item.price.toFixed(2)}</p>
//                                     <button
//                                         onClick={() => handleRemove(item.id)}
//                                         className="text-[#97999C] p-1"
//                                     >
//                                         <Trash className="w-5 h-5" />
//                                     </button>
//                                 </div>

//                                 {/* Quantity Controls */}
//                                 <div className="flex items-center gap-2">
//                                     <button
//                                         className="px-2 py-1 border rounded"
//                                         onClick={() =>
//                                             handleQuantityChange(item.id, item.quantity - 1)
//                                         }
//                                     >
//                                         -
//                                     </button>
//                                     <span>{item.quantity}</span>
//                                     <button
//                                         className="px-2 py-1 bg-black text-white border rounded"
//                                         onClick={() =>
//                                             handleQuantityChange(item.id, item.quantity + 1)
//                                         }
//                                     >
//                                         +
//                                     </button>
//                                 </div>
//                             </div>
//                         ))
//                     ) : (
//                         <p className="text-center text-gray-500">Your wishlist is empty.</p>
//                     )}
//                 </div>

//                 {/* Summary */}
//                 <div className="w-full lg:w-1/3 border p-6 rounded-lg h-fit">
//                     <h2 className="text-lg font-semibold mb-4">Cart Total</h2>
//                     <div className="flex justify-between mb-2">
//                         <span>Subtotal:</span>
//                         <span>${subtotal.toFixed(2)}</span>
//                     </div>
//                     <div className="flex justify-between mb-2">
//                         <span>Shipping:</span>
//                         <span>${shippingCost.toFixed(2)}</span>
//                     </div>
//                     <div className="flex justify-between font-semibold border-t pt-2">
//                         <span>Total Price:</span>
//                         <span>${total.toFixed(2)}</span>
//                     </div>

//                     <Button className="w-full mt-6" disabled={selectedItems.length === 0}>
//                         Proceed To Checkout
//                     </Button>
//                 </div>
//             </div>
//         </div>
//     );
// }

"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";

interface WishlistItem {
  id: string;
  name: string;
  vendor: string;
  images: string[];
  price: number;
  rating: number;
  quantity: number;
}

// --- LocalStorage Helpers ---
const getWishlistFromStorage = (): WishlistItem[] => {
  if (typeof window === "undefined") return [];
  const stored = localStorage.getItem("wishlist");
  return stored ? JSON.parse(stored) : [];
};

const saveWishlistToStorage = (wishlist: WishlistItem[]) => {
  if (typeof window === "undefined") return;
  localStorage.setItem("wishlist", JSON.stringify(wishlist));
};

export default function WishlistPage() {
  const [wishlist, setWishlist] = useState<WishlistItem[]>([]);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [mounted, setMounted] = useState(false);
  const shippingCost = 0;

  // Load wishlist from localStorage
  useEffect(() => {
    setMounted(true);
    const items = getWishlistFromStorage();
    setWishlist(items);
    setSelectedIds(items.map((item) => item.id)); // default: all selected
  }, []);

  // Sync wishlist to localStorage whenever it changes
  useEffect(() => {
    if (mounted) saveWishlistToStorage(wishlist);
  }, [wishlist, mounted]);

  // Quantity increment/decrement
  const handleQuantityChange = (id: string, qty: number) => {
    if (qty < 1) return;
    const updated = wishlist.map((item) =>
      item.id === id ? { ...item, quantity: qty } : item
    );
    setWishlist(updated);
  };

  // Remove item
  const handleRemove = (id: string) => {
    setWishlist((prev) => prev.filter((item) => item.id !== id));
    setSelectedIds((prev) => prev.filter((selId) => selId !== id));
  };

  // Select/deselect item
  const handleSelectChange = (id: string) => {
    setSelectedIds((prev) =>
      prev.includes(id)
        ? prev.filter((selId) => selId !== id)
        : [...prev, id]
    );
  };

  // Totals based on selected items
  const selectedItems = wishlist.filter((item) => selectedIds.includes(item.id));
  const subtotal = selectedItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const total = subtotal + shippingCost;

  if (!mounted) return null;

  return (
    <div>
      {/* Header */}
      <div className="bg-[#D8F4FA] py-24 text-center mb-10">
        <h1 className="text-2xl sm:text-3xl font-semibold">Wishlist</h1>
        <p className="text-gray-600 max-w-2xl mx-auto mt-2 text-sm sm:text-base">
          Our team is always ready to assist you with any questions or concerns you
          might have. Fill out the form below and we&apos;ll get back to you as soon as
          possible.
        </p>
      </div>

      <div className="flex container mx-auto px-4 py-10 flex-col lg:flex-row gap-8">
        {/* Wishlist Items */}
        <div className="flex-1 space-y-4">
          {wishlist.length > 0 ? (
            wishlist.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center border p-4 rounded-md"
              >
                <div className="flex items-center gap-4">
                  <input
                    type="checkbox"
                    checked={selectedIds.includes(item.id)}
                    onChange={() => handleSelectChange(item.id)}
                  />
                  <Image
                    src={item.images[0]}
                    alt={item.name}
                    width={80}
                    height={80}
                    className="rounded-md object-contain"
                  />
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-xs text-gray-500">Rating {item.rating} ★</p>
                  </div>
                </div>

                <div className="flex flex-col items-center gap-2">
                  <p className="text-[#00B4D8] font-medium">${item.price.toFixed(2)}</p>
                  <button
                    onClick={() => handleRemove(item.id)}
                    className="text-[#97999C] p-1"
                  >
                    <Trash className="w-5 h-5" />
                  </button>
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center gap-2">
                  <button
                    className="px-2 py-1 border rounded"
                    onClick={() =>
                      handleQuantityChange(item.id, item.quantity - 1)
                    }
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    className="px-2 py-1 bg-black text-white border rounded"
                    onClick={() =>
                      handleQuantityChange(item.id, item.quantity + 1)
                    }
                  >
                    +
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">Your wishlist is empty.</p>
          )}
        </div>

        {/* Summary */}
        <div className="w-full lg:w-1/3 border p-6 rounded-lg h-fit">
          <h2 className="text-lg font-semibold mb-4">Cart Total</h2>
          <div className="flex justify-between mb-2">
            <span>Subtotal:</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Shipping:</span>
            <span>${shippingCost.toFixed(2)}</span>
          </div>
          <div className="flex justify-between font-semibold border-t pt-2">
            <span>Total Price:</span>
            <span>${total.toFixed(2)}</span>
          </div>

          <Button
            className="w-full mt-6"
            disabled={selectedItems.length === 0}
            onClick={() => {
              // Save only selected wishlist items for checkout
              localStorage.setItem("checkoutCart", JSON.stringify(selectedItems));
              window.location.href = "/checkout"; // redirect
            }}
          >
            Proceed To Checkout
          </Button>
        </div>
      </div>
    </div>
  );
}
