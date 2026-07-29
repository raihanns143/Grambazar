"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogPosts } from "@/lib/data";
import { Clock, User, Calendar, ArrowRight, Share2 } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function BlogDetails({ params }: { params: { slug: string } }) {
  const router = useRouter();
  const post = blogPosts.find(p => p.slug === params.slug);
  
  if (!post) {
    return (
      <main className="min-h-screen bg-gray-50 flex flex-col">
        <Navbar />
        <div className="flex-1 flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Post Not Found</h1>
          <Link href="/blog" className="text-primary hover:underline font-medium">Back to Blog</Link>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="bg-gray-50/30 min-h-screen">
      <Navbar />
      
      <div className="pt-32 pb-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-8 font-medium">
          <Link href="/" className="hover:text-primary">Home</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-primary">Blog</Link>
          <span>/</span>
          <span className="text-gray-900 font-bold truncate max-w-[200px]">{post.title}</span>
        </div>

        <article className="bg-white rounded-[2.5rem] border border-gray-100 shadow-sm overflow-hidden">
          {/* Header Image */}
          <div className="h-64 md:h-96 bg-gray-50 flex items-center justify-center relative overflow-hidden">
            <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-xl text-sm font-bold text-primary z-20 shadow-sm">
              {post.category}
            </div>
            <div className="text-[10rem] md:text-[14rem] drop-shadow-2xl">
              {post.imageEmoji}
            </div>
          </div>
          
          <div className="p-8 md:p-12 lg:p-16">
            <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-8 leading-tight">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-sm font-semibold text-gray-500 mb-12 border-b border-gray-100 pb-8">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                  <User className="w-5 h-5 text-gray-400" />
                </div>
                <span>By {post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>{post.readTime}</span>
              </div>
            </div>
            
            <div className="prose prose-lg prose-green max-w-none text-gray-600 mb-12">
              <p className="lead text-xl text-gray-700 font-medium mb-8">
                {post.excerpt}
              </p>
              <p>
                {post.content}
              </p>
              <p className="mt-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <h3 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Why It Matters</h3>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-between border-t border-gray-100 pt-8 gap-4">
              <div className="flex items-center gap-4">
                <span className="font-bold text-gray-900 flex items-center gap-2">
                  <Share2 className="w-5 h-5" /> Share:
                </span>
                <button className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors font-bold">
                  f
                </button>
                <button className="w-10 h-10 rounded-full bg-sky-50 text-sky-500 flex items-center justify-center hover:bg-sky-500 hover:text-white transition-colors font-bold">
                  t
                </button>
                <button className="w-10 h-10 rounded-full bg-blue-50 text-blue-800 flex items-center justify-center hover:bg-blue-800 hover:text-white transition-colors font-bold">
                  in
                </button>
              </div>
              <Link href="/blog" className="text-primary font-bold hover:underline flex items-center gap-2">
                Back to all posts <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </article>
      </div>
      
      <Footer />
    </main>
  );
}