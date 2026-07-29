
export interface Review {
  id: string;
  user: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Specification {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  categoryId: string;
  price: number;
  oldPrice?: number;
  rating: number;
  reviewsCount: number;
  image: string;
  bgColor: string;
  discount?: string;
  description: string;
  stock: number;
  isFeatured: boolean;
  isBestSelling: boolean;
  reviews?: Review[];
  specifications?: Specification[];
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  color: string;
  itemCount: number;
  description: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  imageEmoji: string;
  category: string;
}

export interface Offer {
  id: string;
  title: string;
  description: string;
  code: string;
  discount: string;
  validUntil: string;
  bgColor: string;
}

export const categories: Category[] = [
  { id: "fruits", name: "Fresh Fruits", icon: "🍎", color: "bg-red-50 text-red-500", itemCount: 124, description: "Farm fresh organic fruits directly from local orchards." },
  { id: "vegetables", name: "Vegetables", icon: "🥦", color: "bg-green-50 text-green-500", itemCount: 86, description: "Daily harvested vegetables for your healthy diet." },
  { id: "fish", name: "Fish & Seafood", icon: "🐟", color: "bg-blue-50 text-blue-500", itemCount: 45, description: "Freshly caught river and sea fish." },
  { id: "meat", name: "Fresh Meat", icon: "🥩", color: "bg-rose-50 text-rose-500", itemCount: 32, description: "Premium quality halal meat." },
  { id: "dairy", name: "Dairy & Eggs", icon: "🥛", color: "bg-yellow-50 text-yellow-500", itemCount: 56, description: "Farm fresh milk, cheese, and organic eggs." },
  { id: "bakery", name: "Bakery", icon: "🥐", color: "bg-amber-50 text-amber-500", itemCount: 42, description: "Freshly baked bread, pastries and more." },
  { id: "beverages", name: "Beverages", icon: "🧃", color: "bg-purple-50 text-purple-500", itemCount: 78, description: "Refreshing drinks, juices, and tea." },
  { id: "rice", name: "Rice & Pulses", icon: "🌾", color: "bg-orange-50 text-orange-500", itemCount: 95, description: "Premium quality rice and lentils." },
  { id: "oil", name: "Oil & Spices", icon: "🫙", color: "bg-stone-50 text-stone-500", itemCount: 112, description: "Essential cooking oils and aromatic spices." },
  { id: "frozen", name: "Frozen Food", icon: "🧊", color: "bg-cyan-50 text-cyan-500", itemCount: 64, description: "Convenient and ready-to-cook frozen items." },
];

const mockReviews = [
  { id: "r1", user: "Rahim U.", rating: 5, comment: "Absolutely fresh! Arrived very quickly.", date: "2026-07-20" },
  { id: "r2", user: "Sadia K.", rating: 4, comment: "Good quality, but packaging could be better.", date: "2026-07-18" },
  { id: "r3", user: "Kamrul H.", rating: 5, comment: "Best organic produce I have found online.", date: "2026-07-15" }
];

export const products: Product[] = [
  {
    id: "p1",
    name: "Organic Bananas (1 Dozen)",
    category: "Fruits",
    categoryId: "fruits",
    price: 120,
    oldPrice: 150,
    rating: 4.8,
    reviewsCount: 124,
    image: "🍌",
    bgColor: "bg-yellow-50",
    discount: "20%",
    description: "Sweet, ripe, and 100% organic bananas sourced directly from local farmers. Perfect for a healthy snack or smoothies.",
    stock: 50,
    isFeatured: true,
    isBestSelling: true,
    reviews: mockReviews,
    specifications: [{ label: "Weight", value: "Approx. 1.2kg" }, { label: "Origin", value: "Rangamati, Bangladesh" }, { label: "Type", value: "Organic" }]
  },
  {
    id: "p2",
    name: "Fresh Red Apples",
    category: "Fruits",
    categoryId: "fruits",
    price: 250,
    rating: 4.9,
    reviewsCount: 89,
    image: "🍎",
    bgColor: "bg-red-50",
    description: "Crisp and juicy red apples. Hand-picked for premium quality and sweetness.",
    stock: 120,
    isFeatured: true,
    isBestSelling: false,
    reviews: mockReviews,
    specifications: [{ label: "Weight", value: "1 kg" }, { label: "Origin", value: "Imported" }]
  },
  {
    id: "p3",
    name: "Green Broccoli",
    category: "Vegetables",
    categoryId: "vegetables",
    price: 80,
    oldPrice: 100,
    rating: 4.7,
    reviewsCount: 45,
    image: "🥦",
    bgColor: "bg-green-50",
    discount: "20%",
    description: "Farm fresh green broccoli. Rich in vitamins and perfect for healthy meals.",
    stock: 30,
    isFeatured: true,
    isBestSelling: true,
    reviews: mockReviews,
    specifications: [{ label: "Weight", value: "500g" }, { label: "Origin", value: "Savar, Bangladesh" }]
  },
  {
    id: "p4",
    name: "Fresh Carrots",
    category: "Vegetables",
    categoryId: "vegetables",
    price: 60,
    rating: 4.6,
    reviewsCount: 67,
    image: "🥕",
    bgColor: "bg-orange-50",
    description: "Crunchy and sweet organic carrots, ideal for salads and cooking.",
    stock: 200,
    isFeatured: false,
    isBestSelling: true,
    reviews: mockReviews,
    specifications: [{ label: "Weight", value: "1 kg" }, { label: "Origin", value: "Bogra, Bangladesh" }]
  },
  {
    id: "p5",
    name: "Organic Sweet Mangoes",
    category: "Fruits",
    categoryId: "fruits",
    price: 350,
    oldPrice: 400,
    rating: 4.9,
    reviewsCount: 210,
    image: "🥭",
    bgColor: "bg-amber-50",
    discount: "12%",
    description: "Famous Rajshahi sweet mangoes, naturally ripened without chemicals.",
    stock: 0,
    isFeatured: true,
    isBestSelling: true,
    reviews: mockReviews,
    specifications: [{ label: "Weight", value: "1 kg" }, { label: "Origin", value: "Rajshahi, Bangladesh" }]
  },
  {
    id: "p6",
    name: "Fresh Farm Eggs (1 Dozen)",
    category: "Dairy & Eggs",
    categoryId: "dairy",
    price: 140,
    rating: 4.8,
    reviewsCount: 156,
    image: "🥚",
    bgColor: "bg-stone-50",
    description: "Free-range farm eggs, rich in protein and nutrients.",
    stock: 80,
    isFeatured: false,
    isBestSelling: true,
    reviews: mockReviews,
    specifications: [{ label: "Quantity", value: "12 pcs" }, { label: "Type", value: "Free-range" }]
  },
  {
    id: "p7",
    name: "Rui Fish (Whole)",
    category: "Fish & Seafood",
    categoryId: "fish",
    price: 450,
    oldPrice: 500,
    rating: 4.7,
    reviewsCount: 92,
    image: "🐟",
    bgColor: "bg-blue-50",
    discount: "10%",
    description: "Freshly caught river Rui fish, cleaned and ready to cook.",
    stock: 15,
    isFeatured: true,
    isBestSelling: false,
    reviews: mockReviews,
    specifications: [{ label: "Weight", value: "Approx. 1.5kg" }, { label: "Origin", value: "Padma River" }]
  },
  {
    id: "p8",
    name: "Premium Miniket Rice",
    category: "Rice & Pulses",
    categoryId: "rice",
    price: 350,
    rating: 4.9,
    reviewsCount: 320,
    image: "🍚",
    bgColor: "bg-gray-100",
    description: "High-quality, long-grain Miniket rice for everyday meals.",
    stock: 100,
    isFeatured: false,
    isBestSelling: true,
    reviews: mockReviews,
    specifications: [{ label: "Weight", value: "5 kg" }, { label: "Type", value: "Miniket" }]
  },
  {
    id: "p9",
    name: "Pure Mustard Oil",
    category: "Oil & Spices",
    categoryId: "oil",
    price: 220,
    rating: 4.8,
    reviewsCount: 145,
    image: "🫙",
    bgColor: "bg-yellow-100",
    description: "Cold-pressed, 100% pure mustard oil for authentic cooking.",
    stock: 45,
    isFeatured: true,
    isBestSelling: true,
    reviews: mockReviews,
    specifications: [{ label: "Volume", value: "1 Liter" }, { label: "Type", value: "Cold-pressed" }]
  },
  {
    id: "p10",
    name: "Fresh Garlic",
    category: "Oil & Spices",
    categoryId: "oil",
    price: 180,
    oldPrice: 200,
    rating: 4.6,
    reviewsCount: 78,
    image: "🧄",
    bgColor: "bg-gray-50",
    discount: "10%",
    description: "Large, pungent garlic cloves. Essential for everyday cooking.",
    stock: 60,
    isFeatured: false,
    isBestSelling: false,
    reviews: mockReviews,
    specifications: [{ label: "Weight", value: "500g" }, { label: "Origin", value: "Local" }]
  },
  {
    id: "p11",
    name: "Whole Wheat Bread",
    category: "Bakery",
    categoryId: "bakery",
    price: 80,
    rating: 4.5,
    reviewsCount: 112,
    image: "🍞",
    bgColor: "bg-amber-100",
    description: "Freshly baked whole wheat bread, high in fiber.",
    stock: 25,
    isFeatured: false,
    isBestSelling: true,
    reviews: mockReviews,
    specifications: [{ label: "Weight", value: "400g" }, { label: "Type", value: "Whole Wheat" }]
  },
  {
    id: "p12",
    name: "Organic Honey",
    category: "Beverages",
    categoryId: "beverages",
    price: 450,
    rating: 5.0,
    reviewsCount: 289,
    image: "🍯",
    bgColor: "bg-orange-100",
    description: "Pure, raw organic honey collected from the Sundarbans.",
    stock: 40,
    isFeatured: true,
    isBestSelling: true,
    reviews: mockReviews,
    specifications: [{ label: "Weight", value: "500g" }, { label: "Origin", value: "Sundarbans, Bangladesh" }]
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: "b1",
    title: "10 Reasons to Switch to Organic Produce",
    slug: "10-reasons-organic-produce",
    excerpt: "Discover the amazing health and environmental benefits of choosing organic fruits and vegetables.",
    content: "Organic food has become very popular. But navigating the maze of organic food labels, benefits, and claims can be confusing. Is organic food really better for your mental and physical health? Do GMOs and pesticides cause cancer and other diseases? What do all the labels mean? This guide can help you make better choices about shopping organic... (Full content goes here)",
    author: "Dr. Farhana Amin",
    date: "July 15, 2026",
    readTime: "5 min read",
    imageEmoji: "🌱",
    category: "Health"
  },
  {
    id: "b2",
    title: "How to Store Vegetables to Keep Them Fresh",
    slug: "how-to-store-vegetables",
    excerpt: "Tired of your veggies going bad? Follow these simple storage tips to maximize freshness.",
    content: "Proper storage can add days or even weeks to the lifespan of your fresh produce. In this article, we'll break down the best ways to store common household vegetables, from leafy greens to root vegetables. Learn why keeping tomatoes out of the fridge is essential, and how a simple paper towel can save your spinach...",
    author: "Chef Kawsar",
    date: "July 10, 2026",
    readTime: "4 min read",
    imageEmoji: "🥬",
    category: "Tips & Tricks"
  },
  {
    id: "b3",
    title: "The Farm-to-Table Journey at GramBazar",
    slug: "farm-to-table-journey",
    excerpt: "Take a look behind the scenes at how we source our products directly from local farmers.",
    content: "At GramBazar, we believe in transparency. When you order a batch of fresh tomatoes or a dozen eggs, we want you to know exactly where they came from. We partner with over 500 local farmers across Bangladesh, ensuring fair trade practices and the highest quality standards...",
    author: "GramBazar Team",
    date: "July 05, 2026",
    readTime: "6 min read",
    imageEmoji: "🚜",
    category: "Inside GramBazar"
  }
];

export const offers: Offer[] = [
  {
    id: "o1",
    title: "First Order Discount",
    description: "Get 15% off on your first order. Use code at checkout.",
    code: "WELCOME15",
    discount: "15%",
    validUntil: "Dec 31, 2026",
    bgColor: "bg-green-500"
  },
  {
    id: "o2",
    title: "Free Shipping",
    description: "Free shipping on all orders over ৳1000.",
    code: "FREESHIP",
    discount: "Free Shipping",
    validUntil: "Oct 31, 2026",
    bgColor: "bg-blue-500"
  },
  {
    id: "o3",
    title: "Weekend Flash Sale",
    description: "Flat 20% off on all organic fruits this weekend.",
    code: "FRUIT20",
    discount: "20%",
    validUntil: "This Weekend",
    bgColor: "bg-orange-500"
  }
];
