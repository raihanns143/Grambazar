import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
export default function NotFound() {
  return (
    <main><Navbar/>
      <div className="py-32 max-w-7xl mx-auto px-4 text-center">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-8">Oops! Page not found.</p>
        <Link href="/" className="bg-primary text-white px-8 py-3 rounded-full font-bold hover:bg-green-700 transition-colors">
          Return Home
        </Link>
      </div>
    <Footer/></main>
  );
}