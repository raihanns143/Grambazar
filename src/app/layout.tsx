import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "গ্রামবাজার | Premium Organic Groceries",
  description: "Fresh fruits, vegetables and groceries delivered directly from trusted local farmers across Bangladesh.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-screen bg-[var(--background)] text-[var(--dark-text)] font-sans antialiased overflow-x-hidden" style={{ fontFamily: "'Inter', sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
