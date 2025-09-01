import React from "react";
import { navigationItems } from "../../../../utils/navigationItems";
import { ChevronDown } from "lucide-react";
import { useShardStore } from "@/zustand/shared";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const MobileNavigation = () => {
  const { setIsOpen } = useShardStore();

  return (
    <nav className="flex flex-col space-y-4">
      {navigationItems.map((item, index) => (
        <div key={index}>
          {item.hasDropdown ? (
            <div className="space-y-2">
              <div className="flex items-center justify-between text-base font-medium">
                <span>{item.label}</span>
                <ChevronDown className="w-4 h-4" />
              </div>
              <div className="pl-4 space-y-2 text-sm text-gray-300">
                <div className="hover:text-white cursor-pointer">
                  Electronics
                </div>
                <div className="hover:text-white cursor-pointer">Fashion</div>
                <div className="hover:text-white cursor-pointer">
                  Home & Garden
                </div>
                <div className="hover:text-white cursor-pointer">Sports</div>
              </div>
            </div>
          ) : (
            <a
              href={item.href}
              className="text-base font-medium hover:text-gray-300 transition-colors block"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          )}
        </div>
      ))}

      <Link href={'/login'}>
        <Button>Sign in</Button>
      </Link>
    </nav>
  );
};

export default MobileNavigation;
