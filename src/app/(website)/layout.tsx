import { Footer } from "@/components/shared/Footer/Footer";
import "../globals.css";
import Navbar from "@/components/shared/Navbar/Navbar";
import TopBar from "@/components/shared/Navbar/TopBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <TopBar />
      <header className="sticky top-0 z-50 transition-all">
        <Navbar />
      </header>
      <main className="min-h-[calc(100vh-120px)]">{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
