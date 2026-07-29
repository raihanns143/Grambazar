import { MapPin, Phone, Mail, Clock, Globe, MessageSquare, Camera, Briefcase } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Info */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
                FM
              </div>
              <span className="font-bold text-2xl tracking-tight text-white">
                গ্রাম<span className="text-primary">বাজার</span>
              </span>
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed text-sm">
              GramBazar is your premium organic grocery destination in Bangladesh, delivering farm-fresh, chemical-free food directly to your doorstep.
            </p>
            <div className="flex gap-4">
              <a href="https://facebook.com" target="_blank" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Globe className="w-5 h-5" />
              </a>
              <a href="https://facebook.com" target="_blank" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <MessageSquare className="w-5 h-5" />
              </a>
              <a href="https://facebook.com" target="_blank" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Camera className="w-5 h-5" />
              </a>
              <a href="https://facebook.com" target="_blank" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Briefcase className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/shop" className="hover:text-primary transition-colors">Shop</Link></li>
              <li><Link href="/categories" className="hover:text-primary transition-colors">Categories</Link></li>
              <li><Link href="/blog" className="hover:text-primary transition-colors">Blog & News</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
              <li><Link href="/about" className="hover:text-primary transition-colors">Careers</Link></li>
            </ul>
          </div>

          {/* Customer Support */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Customer Support</h4>
            <ul className="space-y-4 text-sm">
              <li><Link href="/faq" className="hover:text-primary transition-colors">FAQ</Link></li>
              <li><Link href="/shipping" className="hover:text-primary transition-colors">Shipping Policy</Link></li>
              <li><Link href="/refund" className="hover:text-primary transition-colors">Returns & Refunds</Link></li>
              <li><Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3 items-start">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span>123 Organic Avenue, Banani<br/>Dhaka 1213, Bangladesh</span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span>+880 1234 567 890</span>
              </li>
              <li className="flex gap-3 items-center">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span>support@grambazar.com</span>
              </li>
              <li className="flex gap-3 items-center">
                <Clock className="w-5 h-5 text-primary shrink-0" />
                <span>Mon - Sun: 8:00 AM - 10:00 PM</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} GramBazar. All rights reserved.
          </p>
          <div className="flex gap-2">
            {/* Payment Icons Simulation */}
            <div className="w-10 h-6 bg-gray-800 rounded flex items-center justify-center text-[10px] font-bold text-white">VISA</div>
            <div className="w-10 h-6 bg-gray-800 rounded flex items-center justify-center text-[10px] font-bold text-white">MC</div>
            <div className="w-10 h-6 bg-gray-800 rounded flex items-center justify-center text-[10px] font-bold text-white">BKASH</div>
          </div>
        </div>

      </div>
    </footer>
  );
}
