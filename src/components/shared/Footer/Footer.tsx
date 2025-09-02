import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <div className="bg-[#1c2228] text-white mt-24">
      <div className="container py-12">
        <div className="grid grid-cols-1 lg:grid-cols-6">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <Link href={"/"}>
              <div className="mb-4">
                <Image
                  src={"/shared/logo.png"}
                  alt="logo.png"
                  width={1000}
                  height={1000}
                  className="md:h-[64px] h-[40px] md:w-[299px] w-[200px]"
                />
              </div>
            </Link>

            <p className="text-gray-300 text-sm leading-relaxed mb-6 max-w-sm">
              Connecting real-time through meaningful applications, fostering
              deeper bonds, creating lasting memories, and celebrating the
              beauty of shared experiences.
            </p>
            <div className="flex gap-3 text-primary">
              <div className="w-8 h-8 rounded-full flex items-center justify-center cursor-pointer bg-white">
                <Twitter className="w-4 h-8" />
              </div>
              <div className="w-8 h-8 rounded-full flex items-center justify-center cursor-pointer bg-white">
                <Instagram className="w-4 h-8" />
              </div>
              <div className="w-8 h-8 rounded-full flex items-center justify-center cursor-pointer bg-white">
                <Linkedin className="w-4 h-8" />
              </div>
              <div className="w-8 h-8 rounded-full flex items-center justify-center cursor-pointer bg-white">
                <Facebook className="w-4 h-8" />
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Press
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Impact
                </a>
              </li>
            </ul>
          </div>

          {/* Help Links */}
          <div>
            <h3 className="font-semibold mb-4">Help</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Terms Of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Suppliers Links */}
          <div>
            <h3 className="font-semibold mb-4">Suppliers</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Upload Products
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Become a Supplier
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Supplier Terms
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Guidelines
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div>
            <div>
              <h3 className="font-semibold">
                Subscribe To Our{" "}
                <span className="text-primary">NEWSLETTER</span>
              </h3>
              <p className="text-sm text-gray-300 my-3">
                Connect with us on social media and stay in the loop.
              </p>
            </div>
            <div className="flex gap-2 max-w-lg lg:w-auto">
              <Input
                type="email"
                placeholder="Enter Your Email"
                className="bg-gray-800 border-gray-600 text-white placeholder:text-gray-400"
              />
              <Button className="bg-white text-slate-900 hover:bg-gray-100 px-6">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-primary text-center">
          <p className="text-sm ">© 2023 Fastlane. All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
}
