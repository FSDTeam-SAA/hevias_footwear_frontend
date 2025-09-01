import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Hero() {
  return (
    <section
      style={{
        backgroundImage: "url('/Home/hero.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundBlendMode: "overlay",
      }}
      className="relative min-h-[588px] flex items-center justify-start bg-[#111111b7]"
    >
      {/* Content */}
      <div className="relative z-10 text-white container">
        {/* Top tagline */}
        <p className="text-sm font-medium tracking-wider uppercase mb-6 opacity-90">
          Source and Manufacture Your Product in Latin America
        </p>

        {/* Main headline */}
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance leading-tight text-white/90">
          Factory-Direct Goods from Latin America
        </h1>

        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance leading-tight text-white/90">—Curated for U.S. Buyers</h1>

        {/* Subtext */}
        <p className="text-lg md:text-xl mb-12 opacity-60 text-pretty">
          Transparent pricing. Shorter lead times. Exceptional quality.
        </p>

        {/* Search Bar */}
        <div className="max-w-md">
          <div className="flex rounded-3xl overflow-hidden bg-[#80808031] backdrop-blur-sm">
            <Input
              type="text"
              placeholder="Search here..."
              className="flex-1 border-0 bg-transparent text-gray-900 placeholder:text-gray-500 focus-visible:ring-0 focus-visible:ring-offset-0 h-12 px-4"
            />
            <Button
              size="sm"
              className="bg-[#b2644a] hover:bg-[#bb684c] text-white px-6 h-12 rounded-none"
            >
              <Search className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
