'use client'
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingCart } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const NavActions = () => {
  const [cartCount, setCartCount] = useState(0);
  const [wishlistCount, setWishlistCount] = useState(0);

  // Fetch cart & wishlist from localStorage on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const cart = JSON.parse(localStorage.getItem("cart") || "[]");
      const wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");

      setCartCount(cart.length);
      setWishlistCount(wishlist.length);
    }
  }, []);


  return (
    <div className="flex items-center space-x-4">
      <div className="relative bg-white text-black p-1 rounded-full">
        <Heart />
        <Badge className="absolute -top-2 -right-2 bg-red-500 hover:bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center p-0">
          {wishlistCount}
        </Badge>
      </div>

      <div className="relative">
        <ShoppingCart className="w-6 h-6 hover:text-gray-300 cursor-pointer transition-colors" />
        <Badge className="absolute -top-2 -right-2 bg-red-500 hover:bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center p-0">
          {cartCount}
        </Badge>
      </div>

      <Link href={'/login'}>
        <Button size="sm" className="hidden lg:block">
          Sign In
        </Button>
      </Link>
    </div>
  );
};

export default NavActions;
