import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import FeaturedProducts from "@/components/FeaturedProducts";
import WhyChooseUs from "@/components/WhyChooseUs";
import BestSellingProducts from "@/components/BestSellingProducts";
import Testimonials from "@/components/Testimonials";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      
      <div className="flex-1">
        <Hero />
        <Categories />
        <FeaturedProducts />
        <WhyChooseUs />
        <BestSellingProducts />
        <Testimonials />
        <Newsletter />
      </div>

      <Footer />
    </main>
  );
}
