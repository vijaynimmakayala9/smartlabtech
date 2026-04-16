// import React, { useState, useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import { CATEGORIES } from "./ProductsPage";

// const CategoryProductsPage = () => {
//   const { categoryName } = useParams();
//   const navigate = useNavigate();
//   const [products, setProducts] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [sortBy, setSortBy] = useState("name");

//   useEffect(() => {
//     // Decode URL parameter and find category
//     const decodedCategory = decodeURIComponent(categoryName);
//     const categoryProducts = CATEGORIES[decodedCategory] || [];
//     setProducts(categoryProducts);
//   }, [categoryName]);

//   // Filter and sort products
//   const filteredProducts = products
//     .filter(product => 
//       product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       product.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       product.description.toLowerCase().includes(searchTerm.toLowerCase())
//     )
//     .sort((a, b) => {
//       if (sortBy === "name") return a.name.localeCompare(b.name);
//       if (sortBy === "brand") return a.brand.localeCompare(b.brand);
//       return 0;
//     });

//   const categoryTitle = categoryName?.replace(/-/g, ' ') || '';
//   const categoryIcon = products[0]?.icon || "📦";

//   // Get all categories for sidebar
//   const allCategories = Object.keys(CATEGORIES);

//   return (
//     <>
//       <Navbar />
//       <div className="bg-gray-50 min-h-screen">
//         {/* Hero Section */}
//         <div className="bg-gradient-to-r from-[#0f2b3d] to-[#1a4a6f] text-white py-16 px-6">
//           <div className="max-w-7xl mx-auto">
//             <div className="flex items-center gap-4 mb-4">
//               <span className="text-6xl">{categoryIcon}</span>
//               <div>
//                 <h1 className="text-4xl md:text-5xl font-bold">{categoryTitle}</h1>
//                 <p className="text-blue-100 mt-2">
//                   Explore our complete range of {categoryTitle.toLowerCase()} products
//                 </p>
//               </div>
//             </div>
//             <div className="flex items-center gap-2 text-sm text-blue-200 mt-4">
//               <button onClick={() => navigate('/')} className="hover:text-white">Home</button>
//               <span>/</span>
//               <button onClick={() => navigate('/products')} className="hover:text-white">Products</button>
//               <span>/</span>
//               <span className="text-white">{categoryTitle}</span>
//             </div>
//           </div>
//         </div>

//         <div className="max-w-7xl mx-auto px-6 py-12">
//           <div className="flex flex-col lg:flex-row gap-8">
//             {/* Sidebar */}
//             <div className="lg:w-80 flex-shrink-0">
//               <div className="bg-white rounded-xl shadow-md p-6 sticky top-24">
//                 <h3 className="font-bold text-lg text-gray-800 mb-4 flex items-center gap-2">
//                   <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//                   </svg>
//                   Categories
//                 </h3>
//                 <div className="space-y-2">
//                   {allCategories.map((category) => (
//                     <button
//                       key={category}
//                       onClick={() => navigate(`/category/${encodeURIComponent(category)}`)}
//                       className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
//                         category === categoryTitle
//                           ? "bg-[#1a4a6f] text-white"
//                           : "text-gray-600 hover:bg-gray-50"
//                       }`}
//                     >
//                       {category}
//                     </button>
//                   ))}
//                 </div>

//                 <div className="mt-6 pt-6 border-t border-gray-200">
//                   <h3 className="font-bold text-lg text-gray-800 mb-4">Need Help?</h3>
//                   <p className="text-sm text-gray-500 mb-4">
//                     Can't find what you're looking for? Our experts are here to help.
//                   </p>
//                   <button className="w-full bg-[#1a4a6f] text-white px-4 py-2 rounded-lg text-sm hover:bg-[#0f2b3d] transition">
//                     Contact Support
//                   </button>
//                 </div>
//               </div>
//             </div>

//             {/* Main Content */}
//             <div className="flex-1">
//               {/* Search and Sort */}
//               <div className="bg-white rounded-xl shadow-md p-6 mb-6">
//                 <div className="flex flex-col md:flex-row gap-4">
//                   <div className="flex-1 relative">
//                     <input
//                       type="text"
//                       placeholder="Search products in this category..."
//                       value={searchTerm}
//                       onChange={(e) => setSearchTerm(e.target.value)}
//                       className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1a4a6f]"
//                     />
//                     <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//                     </svg>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <span className="text-sm text-gray-500">Sort by:</span>
//                     <select
//                       value={sortBy}
//                       onChange={(e) => setSortBy(e.target.value)}
//                       className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1a4a6f]"
//                     >
//                       <option value="name">Product Name</option>
//                       <option value="brand">Brand</option>
//                     </select>
//                   </div>
//                 </div>
//               </div>

//               {/* Results */}
//               {filteredProducts.length === 0 ? (
//                 <div className="bg-white rounded-xl shadow-md p-12 text-center">
//                   <div className="text-6xl mb-4">🔍</div>
//                   <h3 className="text-xl font-semibold text-gray-800 mb-2">No products found</h3>
//                   <p className="text-gray-500">Try adjusting your search or browse other categories</p>
//                 </div>
//               ) : (
//                 <>
//                   <div className="mb-4">
//                     <p className="text-gray-600">
//                       Showing <span className="font-semibold">{filteredProducts.length}</span> products
//                     </p>
//                   </div>
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     {filteredProducts.map((product, index) => (
//                       <div
//                         key={index}
//                         onClick={() => navigate(product.link)}
//                         className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer hover:shadow-xl transition-all transform hover:-translate-y-1 group"
//                       >
//                         <div className="flex h-40">
//                           <div className="w-32 bg-gradient-to-br from-[#0f2b3d] to-[#1a4a6f] flex items-center justify-center">
//                             <span className="text-4xl">{product.icon}</span>
//                           </div>
//                           <div className="flex-1 p-4">
//                             <div className="flex items-center justify-between mb-2">
//                               <span className="text-xs text-[#1a4a6f] font-semibold bg-blue-50 px-2 py-1 rounded">
//                                 {product.brand}
//                               </span>
//                             </div>
//                             <h3 className="font-bold text-gray-800 mb-2 group-hover:text-[#1a4a6f] transition line-clamp-2">
//                               {product.name}
//                             </h3>
//                             <p className="text-gray-500 text-sm mb-3 line-clamp-2">{product.description}</p>
//                             <button className="text-[#1a4a6f] font-semibold text-sm hover:underline">
//                               View Details →
//                             </button>
//                           </div>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </>
//               )}

//               {/* Category Features */}
//               {products.length > 0 && (
//                 <div className="mt-12 bg-white rounded-xl shadow-md p-6">
//                   <h3 className="font-bold text-xl text-gray-800 mb-4">Why Choose Our {categoryTitle}?</h3>
//                   <div className="grid md:grid-cols-3 gap-4">
//                     <div className="flex items-start gap-3">
//                       <span className="text-2xl">✓</span>
//                       <div>
//                         <h4 className="font-semibold text-gray-800">Certified Quality</h4>
//                         <p className="text-sm text-gray-500">All products meet international standards</p>
//                       </div>
//                     </div>
//                     <div className="flex items-start gap-3">
//                       <span className="text-2xl">✓</span>
//                       <div>
//                         <h4 className="font-semibold text-gray-800">Expert Support</h4>
//                         <p className="text-sm text-gray-500">Technical assistance from qualified engineers</p>
//                       </div>
//                     </div>
//                     <div className="flex items-start gap-3">
//                       <span className="text-2xl">✓</span>
//                       <div>
//                         <h4 className="font-semibold text-gray-800">Warranty Included</h4>
//                         <p className="text-sm text-gray-500">Comprehensive warranty on all equipment</p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default CategoryProductsPage;


import React, { useState, useEffect, useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useParams, useNavigate } from "react-router-dom";
import { 
  Search, Filter, ChevronDown, ArrowRight, 
  MapPin, Phone, Mail, Star, CheckCircle,
  SlidersHorizontal, Grid3x3, List, X
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { CATEGORIES } from "./ProductsPage";

/* ─── Google Fonts (only font import, no custom CSS classes) ─────────── */
const FontLink = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,600&family=Outfit:wght@300;400;500;600;700&display=swap');
  `}</style>
);

function Reveal({ children, delay = 0, className = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Flatten all products from all categories
const getAllProducts = () => {
  const allProducts = [];
  Object.keys(CATEGORIES).forEach(category => {
    CATEGORIES[category].forEach(product => {
      allProducts.push({
        ...product,
        category: category
      });
    });
  });
  return allProducts;
};

const CategoryProductsPage = () => {
  const { categoryName } = useParams();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("name");
  const [selectedBrand, setSelectedBrand] = useState("All");
  const [selectedCategory, setSelectedCategory] = useState(categoryName || "All");

  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  useEffect(() => {
    // Get all products
    const allProductsData = getAllProducts();
    setAllProducts(allProductsData);
    
    // If categoryName exists, filter products by that category
    if (categoryName) {
      const decodedCategory = decodeURIComponent(categoryName);
      const categoryProducts = CATEGORIES[decodedCategory] || [];
      setProducts(categoryProducts);
      setSelectedCategory(decodedCategory);
    } else {
      // Show all products when no category is selected
      setProducts(allProductsData);
      setSelectedCategory("All");
    }
  }, [categoryName]);

  // Get unique brands for filter
  const brands = ["All", ...new Set(products.map(p => p.brand))];
  const allCategories = Object.keys(CATEGORIES);

  // Filter and sort products
  const filteredProducts = products
    .filter(product => 
      (selectedBrand === "All" || product.brand === selectedBrand) &&
      (product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
       product.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
       product.description.toLowerCase().includes(searchTerm.toLowerCase()))
    )
    .sort((a, b) => {
      if (sortBy === "name") return a.name.localeCompare(b.name);
      if (sortBy === "brand") return a.brand.localeCompare(b.brand);
      return 0;
    });

  const categoryTitle = categoryName ? categoryName?.replace(/-/g, ' ') : "All Products";
  const categoryIcon = products[0]?.icon || (categoryName ? "🔬" : "📦");

  const handleCategoryClick = (category) => {
    if (category === "All") {
      navigate('/category');
      setSelectedCategory("All");
    } else {
      navigate(`/category/${encodeURIComponent(category)}`);
      setSelectedCategory(category);
    }
  };

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedBrand("All");
  };

  return (
    <>
      <FontLink />
      <Navbar />

      {/* Hero Section with Background Image */}
      <section ref={heroRef} className="relative overflow-hidden" style={{ minHeight: 'clamp(400px, 60vh, 550px)' }}>
        <motion.div className="absolute inset-0" style={{ y: imgY }}>
          <img
            src="https://images.pexels.com/photos/256263/pexels-photo-256263.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Laboratory Equipment"
            className="w-full h-full object-cover object-center scale-110"
          />
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(15,35,86,0.88)_0%,rgba(30,58,138,0.72)_50%,rgba(14,165,233,0.82)_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_top,#0f2356_0%,transparent_55%)]" />
        </motion.div>

        <div className="absolute inset-0 opacity-30 pointer-events-none" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
          backgroundSize: '64px 64px'
        }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-20 flex flex-col justify-center h-full"
          style={{ paddingTop: 'clamp(60px,10vw,100px)', paddingBottom: 'clamp(40px,8vw,80px)' }}>

          <div className="flex flex-col md:flex-row items-center md:items-start gap-4 mb-4">
            <span className="text-5xl md:text-6xl lg:text-7xl">{categoryIcon}</span>
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                <div className="w-8 h-px bg-sky-400" />
                <span className="text-[10px] font-semibold tracking-[0.3em] uppercase text-sky-300" style={{ fontFamily: "'Outfit', sans-serif" }}>
                  {categoryName ? "Product Category" : "All Products"}
                </span>
                <div className="w-8 h-px bg-sky-400" />
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                {categoryTitle}
              </h1>
              <p className="text-white/70 mt-2 text-sm sm:text-base" style={{ fontFamily: "'Outfit', sans-serif" }}>
                {categoryName 
                  ? `Explore our complete range of ${categoryTitle.toLowerCase()} products`
                  : `Discover our complete range of laboratory equipment and instruments`}
              </p>
            </div>
          </div>

          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-white/60 mt-6 flex-wrap justify-center md:justify-start">
            <button onClick={() => navigate('/')} className="hover:text-white transition">Home</button>
            <span>/</span>
            <button onClick={() => navigate('/products')} className="hover:text-white transition">Products</button>
            {categoryName && (
              <>
                <span>/</span>
                <span className="text-white">{categoryTitle}</span>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-20 py-12 lg:py-16 bg-slate-50">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Sidebar - Categories */}
          <div className="lg:w-80 flex-shrink-0">
            <div className="bg-white rounded-2xl shadow-lg p-5 sticky top-24 border border-slate-100">
              <h3 className="font-bold text-lg text-slate-800 mb-4 flex items-center gap-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                <Filter size={18} className="text-blue-600" />
                Categories
              </h3>
              <div className="space-y-1">
                <button
                  onClick={() => handleCategoryClick("All")}
                  className={`w-full text-left px-3 py-2 rounded-xl text-sm transition-all duration-200 ${
                    selectedCategory === "All"
                      ? "bg-[linear-gradient(135deg,rgba(15,35,86,0.95)_0%,rgba(30,58,138,0.9)_50%,rgba(14,165,233,0.95)_100%)] text-white"
                      : "text-slate-600 hover:bg-slate-50 hover:text-blue-600"
                  }`}
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  All Products
                </button>
                {allCategories.map((category) => (
                  <button
                    key={category}
                    onClick={() => handleCategoryClick(category)}
                    className={`w-full text-left px-3 py-2 rounded-xl text-sm transition-all duration-200 ${
                      selectedCategory === category
                        ? "bg-[linear-gradient(135deg,rgba(15,35,86,0.95)_0%,rgba(30,58,138,0.9)_50%,rgba(14,165,233,0.95)_100%)] text-white"
                        : "text-slate-600 hover:bg-slate-50 hover:text-blue-600"
                    }`}
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Brand Filter */}
              {products.length > 0 && (
                <div className="mt-6 pt-6 border-t border-slate-100">
                  <h3 className="font-semibold text-sm text-slate-700 mb-3" style={{ fontFamily: "'Outfit', sans-serif" }}>Filter by Brand</h3>
                  <div className="space-y-1">
                    {brands.map((brand) => (
                      <button
                        key={brand}
                        onClick={() => setSelectedBrand(brand)}
                        className={`w-full text-left px-3 py-1.5 rounded-lg text-sm transition-all ${
                          selectedBrand === brand
                            ? "text-blue-600 font-semibold bg-blue-50"
                            : "text-slate-500 hover:text-blue-600"
                        }`}
                        style={{ fontFamily: "'Outfit', sans-serif" }}
                      >
                        {brand}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Need Help */}
              <div className="mt-6 pt-6 border-t border-slate-100">
                <div className="bg-[linear-gradient(135deg,rgba(15,35,86,0.05)_0%,rgba(30,58,138,0.03)_50%,rgba(14,165,233,0.05)_100%)] rounded-xl p-4">
                  <h4 className="font-semibold text-slate-800 text-sm mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>Need Help?</h4>
                  <p className="text-xs text-slate-500 mb-3" style={{ fontFamily: "'Outfit', sans-serif" }}>
                    Can't find what you're looking for? Our experts are here to help.
                  </p>
                  <button 
                    onClick={() => navigate('/contact')}
                    className="w-full bg-[linear-gradient(135deg,rgba(15,35,86,0.95)_0%,rgba(30,58,138,0.9)_50%,rgba(14,165,233,0.95)_100%)] text-white px-3 py-2 rounded-xl text-xs font-semibold hover:shadow-lg transition-all"
                  >
                    Contact Support
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Search and Sort Bar */}
            <div className="bg-white rounded-2xl shadow-lg p-5 mb-6 border border-slate-100">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-11 pr-4 py-2.5 border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all bg-slate-50 focus:bg-white"
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                  />
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm text-slate-500" style={{ fontFamily: "'Outfit', sans-serif" }}>Sort by:</span>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-4 py-2.5 border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500 bg-slate-50 text-slate-700 text-sm"
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                  >
                    <option value="name">Product Name</option>
                    <option value="brand">Brand</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Active Filters */}
            {(searchTerm || selectedBrand !== "All") && (
              <div className="flex flex-wrap gap-2 mb-4">
                {searchTerm && (
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-700 bg-blue-50 border border-blue-200 px-3 py-1.5 rounded-full">
                    Search: "{searchTerm}"
                    <button onClick={() => setSearchTerm("")} className="hover:text-blue-900">
                      <X size={12} />
                    </button>
                  </span>
                )}
                {selectedBrand !== "All" && (
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 bg-slate-100 border border-slate-200 px-3 py-1.5 rounded-full">
                    Brand: {selectedBrand}
                    <button onClick={() => setSelectedBrand("All")} className="hover:text-slate-900">
                      <X size={12} />
                    </button>
                  </span>
                )}
                {(searchTerm || selectedBrand !== "All") && (
                  <button
                    onClick={clearFilters}
                    className="text-xs text-red-500 hover:text-red-700 underline"
                  >
                    Clear all
                  </button>
                )}
              </div>
            )}

            {/* Results Count */}
            {filteredProducts.length > 0 && (
              <div className="mb-4">
                <p className="text-sm text-slate-500" style={{ fontFamily: "'Outfit', sans-serif" }}>
                  Showing <span className="font-semibold text-slate-700">{filteredProducts.length}</span> product{filteredProducts.length !== 1 ? 's' : ''}
                </p>
              </div>
            )}

            {/* Products Grid */}
            {filteredProducts.length === 0 ? (
              <div className="bg-white rounded-2xl shadow-lg p-12 text-center border border-slate-100">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>No products found</h3>
                <p className="text-slate-500 text-sm" style={{ fontFamily: "'Outfit', sans-serif" }}>Try adjusting your search or browse other categories</p>
                <button 
                  onClick={clearFilters}
                  className="mt-4 px-5 py-2 rounded-xl text-sm font-semibold text-white bg-[linear-gradient(135deg,rgba(15,35,86,0.95)_0%,rgba(30,58,138,0.9)_50%,rgba(14,165,233,0.95)_100%)] hover:shadow-lg transition-all"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredProducts.map((product, index) => (
                  <Reveal key={index} delay={index * 0.05}>
                    <div 
                      onClick={() => navigate(product.link)}
                      className="group bg-white rounded-2xl overflow-hidden cursor-pointer hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100"
                    >
                      <div className="flex h-36 sm:h-40">
                        <div className="w-28 sm:w-32 bg-[linear-gradient(135deg,rgba(15,35,86,0.08)_0%,rgba(30,58,138,0.05)_50%,rgba(14,165,233,0.08)_100%)] flex items-center justify-center">
                          <span className="text-3xl sm:text-4xl">{product.icon}</span>
                        </div>
                        <div className="flex-1 p-4">
                          <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                            <span className="text-[10px] font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">
                              {product.brand}
                            </span>
                            {product.category && !categoryName && (
                              <span className="text-[10px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">
                                {product.category}
                              </span>
                            )}
                          </div>
                          <h3 className="font-bold text-slate-800 mb-1 group-hover:text-blue-600 transition line-clamp-2 text-sm sm:text-base" style={{ fontFamily: "'Playfair Display', serif" }}>
                            {product.name}
                          </h3>
                          <p className="text-slate-500 text-xs mb-3 line-clamp-2" style={{ fontFamily: "'Outfit', sans-serif" }}>
                            {product.description}
                          </p>
                          <button className="text-blue-600 font-semibold text-xs hover:gap-2 transition-all inline-flex items-center gap-1 group-hover:gap-2">
                            View Details <ArrowRight size={12} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            )}

            {/* Category Features */}
            {products.length > 0 && !categoryName && (
              <Reveal>
                <div className="mt-12 bg-white rounded-2xl shadow-lg p-6 border border-slate-100">
                  <h3 className="font-bold text-xl text-slate-800 mb-5 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>
                    Why Choose <span className="bg-gradient-to-r from-blue-700 to-sky-500 bg-clip-text text-transparent">SmartLabtech</span>?
                  </h3>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    <div className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 transition">
                      <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center flex-shrink-0">
                        <CheckCircle size={18} className="text-emerald-500" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-800 text-sm" style={{ fontFamily: "'Outfit', sans-serif" }}>Certified Quality</h4>
                        <p className="text-xs text-slate-500">All products meet international standards</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 transition">
                      <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-800 text-sm" style={{ fontFamily: "'Outfit', sans-serif" }}>Expert Support</h4>
                        <p className="text-xs text-slate-500">Technical assistance from qualified engineers</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 transition">
                      <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-800 text-sm" style={{ fontFamily: "'Outfit', sans-serif" }}>Warranty Included</h4>
                        <p className="text-xs text-slate-500">Comprehensive warranty on all equipment</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            )}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <Reveal>
        <div className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-20">
            <div className="rounded-2xl p-8 sm:p-12 flex flex-wrap items-center justify-between gap-6 bg-[linear-gradient(135deg,rgba(15,35,86,0.95)_0%,rgba(30,58,138,0.9)_50%,rgba(14,165,233,0.95)_100%)] shadow-xl">
              <div>
                <p className="text-[11px] font-bold text-sky-200 tracking-widest uppercase mb-2" style={{ fontFamily: "'Outfit', sans-serif" }}>Need Assistance?</p>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>Get Expert Advice</h3>
                <p className="text-sm text-white/70 max-w-sm" style={{ fontFamily: "'Outfit', sans-serif" }}>
                  Our technical experts can help you select the right equipment for your application.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <button 
                  onClick={() => navigate('/contact')}
                  className="relative overflow-hidden inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-blue-900 bg-white hover:shadow-lg hover:-translate-y-0.5 transition-all before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-blue-100 before:to-transparent before:transition-transform before:duration-500 hover:before:translate-x-0"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  Contact Us <ArrowRight size={15} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      <Footer />
    </>
  );
};

export default CategoryProductsPage;