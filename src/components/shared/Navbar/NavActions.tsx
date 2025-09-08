'use client'

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Heart, ShoppingCart, User, LogOut, Package } from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const NavActions = () => {
  const [cartCount, setCartCount] = useState(0);
  const [wishlistCount, setWishlistCount] = useState(0);
  // Fetch cart & wishlist from localStorage on mount
  const sesseion = useSession()

  useEffect(() => {
    if (typeof window !== "undefined") {
      const cart = JSON.parse(localStorage.getItem("cart") || "[]");
      const wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");

      setCartCount(cart.length);
      setWishlistCount(wishlist.length);
    }
  }, []);

  return (
    <div className="flex items-center space-x-6">
      {/* Wishlist */}
      <Link href={"/wishlist"} className="relative bg-white text-black p-1 rounded-full cursor-pointer">
        <Heart />
        <Badge className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center p-0">
          {wishlistCount}
        </Badge>
      </Link>

      {/* Cart */}
      <Link href={"/cart"} className="relative cursor-pointer">
        <ShoppingCart className="w-6 h-6 hover:text-gray-300 transition-colors" />
        <Badge className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center p-0">
          {cartCount}
        </Badge>
      </Link>

      {/* Avatar Dropdown */}
      {sesseion.status === "authenticated" &&
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar className="cursor-pointer">
              <AvatarImage src="https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?w=500&auto=format&fit=crop&q=60" />
              <AvatarFallback>NA</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-48" align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <Link href="/my-account">
              <DropdownMenuItem className="cursor-pointer">
                <User className="mr-2 h-4 w-4" /> Profile
              </DropdownMenuItem>
            </Link>
            <Link href="/order">
              <DropdownMenuItem className="cursor-pointer">
                <Package className="mr-2 h-4 w-4" /> Order History
              </DropdownMenuItem>
            </Link>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              className="cursor-pointer text-red-600"
              onClick={() => signOut({ callbackUrl: "/" })}
            >
              <LogOut className="mr-2 h-4 w-4" /> Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      }

      {/* Sign In Button (only for larger screens) */}
      {sesseion.status !== "authenticated" && <Link href="/login" >
        <Button size="lg" className="hidden lg:block ">
          Sign In 
        </Button>
      </Link>

      }
    </div>
  );
};

export default NavActions;
