"use client";
import React from "react";
import TopBar from "./TopBar";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import DesktopNavigation from "./DesktopNavigation";
import NavActions from "./NavActions";
import MobileNavigation from "./MobileNavigation";
import { useShardStore } from "@/zustand/shared";

const Navbar = () => {
  const { isOpen, setIsOpen } = useShardStore();

  return (
    <div>
      <div>
        <TopBar />
      </div>

      <div className="bg-[#1c2228] text-white">
        <div className="container">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href={"/"}>
              <div>
                <Image
                  src={"/shared/logo.png"}
                  alt="logo.png"
                  width={1000}
                  height={1000}
                  className="md:h-[64px] h-[40px] md:w-[299px] w-[200px]"
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <DesktopNavigation />

            {/* Right Side Actions */}
            <div className="flex items-center space-x-4">
              {/* Desktop Actions */}
              <NavActions />

              {/* Mobile Menu Button */}
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild className="lg:hidden">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-white hover:bg-slate-800"
                  >
                    <Menu className="w-6 h-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent
                  side="right"
                  className="bg-[#1c2228] text-white w-80"
                >
                  <div className="mt-8">
                    {/* Mobile Navigation */}
                    <MobileNavigation />
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
