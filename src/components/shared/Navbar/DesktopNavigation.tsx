import React from "react";
import { navigationItems } from "../../../../utils/navigationItems";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

const DesktopNavigation = () => {
  return (
    <nav className="hidden lg:flex items-center space-x-8">
      {navigationItems.map((item, index) => (
        <div key={index}>
          {item.hasDropdown ? (
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 text-sm font-medium hover:text-gray-300 transition-colors">
                <span>{item.label}</span>
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-[#1c2228] border-slate-700">
                <DropdownMenuItem className="text-white hover:bg-slate-700">
                  Electronics
                </DropdownMenuItem>
                <DropdownMenuItem className="text-white hover:bg-slate-700">
                  Fashion
                </DropdownMenuItem>
                <DropdownMenuItem className="text-white hover:bg-slate-700">
                  Home & Garden
                </DropdownMenuItem>
                <DropdownMenuItem className="text-white hover:bg-slate-700">
                  Sports
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <a
              href={item.href}
              className="text-sm font-medium hover:text-gray-300 transition-colors"
            >
              {item.label}
            </a>
          )}
        </div>
      ))}
    </nav>
  );
};

export default DesktopNavigation;
