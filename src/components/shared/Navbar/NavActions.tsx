import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingCart } from "lucide-react";
import React from "react";

const NavActions = () => {
  return (
    <div className="flex items-center space-x-4">
      <div className="relative bg-white text-black p-1 rounded-full">
        <Heart />
        <Badge className="absolute -top-2 -right-2 bg-red-500 hover:bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center p-0">
          2
        </Badge>
      </div>

      <div className="relative">
        <ShoppingCart className="w-6 h-6 hover:text-gray-300 cursor-pointer transition-colors" />
        <Badge className="absolute -top-2 -right-2 bg-red-500 hover:bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center p-0">
          2
        </Badge>
      </div>

      <Button size="sm" className="hidden lg:block">Sign In</Button>
    </div>
  );
};

export default NavActions;
