"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Grid3x3, Heart, PawPrint, Dumbbell, Shirt, Gem, Sofa, Home, Package, Briefcase, Car, BookA } from "lucide-react";

const categories = [
    { title: "Apparel & Accessories", icon: Shirt },
    { title: "Beauty", icon: Heart },
    { title: "Pets & Accessories", icon: PawPrint },
    { title: "Sports & Entertainment", icon: Dumbbell },
    { title: "Footwear & Accessories", icon: Grid3x3 },
    { title: "Jewelry", icon: Gem },
    { title: "Furniture", icon: Sofa },
    { title: "Home & Accessories", icon: Home },
    { title: "Packaging & Printing", icon: Package },
    { title: "Business Services", icon: Briefcase },
    { title: "Vehicle Parts & Accessories", icon: Car },
     { title: "Business Services", icon: BookA },
];

const stats = [
    { number: "250k+", label: "Products" },
    { number: "1000+", label: "Suppliers and Growing" },
    { number: "2000+", label: "Satisfied Brands and Retailers" },
    { number: "8", label: "Latin American Countries" },
];

export default function Businessneeds() {
    return (
        <section className="container  py-16 px-6 ">
            {/* Categories Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
                {categories.map((cat, i) => (
                    <Card key={i} className="hover:shadow-md transition">
                        <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                            <cat.icon className="w-8 h-8 mb-3 text-gray-700" />
                            <p className="text-sm font-medium text-gray-800">{cat.title}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
                {stats.map((stat, i) => (
                    <div
                        key={i}
                        className="bg-btnPrimary text-white rounded-lg p-6 flex flex-col items-center justify-center"
                    >
                        <h3 className="text-2xl font-bold">{stat.number}</h3>
                        <p className="text-sm">{stat.label}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
