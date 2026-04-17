// pages/SearchResults.js
import { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Search, Star, Heart, Grid, List, 
  Filter, X, Package, ArrowRight, Sparkles 
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { CATEGORIES } from '../data/Categories';

// Get all products
const getAllProducts = () => {
  const products = [];
  Object.entries(CATEGORIES).forEach(([category, items]) => {
    items.forEach(item => {
      products.push({
        ...item,
        category
      });
    });
  });
  return products;
};

// Product Card Component
const ProductCard = ({ product, viewMode }) => {
  const navigate = useNavigate();
  const [isLiked, setIsLiked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  if (viewMode === 'list') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        onClick={() => navigate(product.link)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group relative bg-white rounded-2xl overflow-hidden cursor-pointer border border-slate-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300"
      >
        <div className="flex flex-col sm:flex-row">
          <div className="relative sm:w-64 h-44 sm:h-auto overflow-hidden bg-gradient-to-br from-slate-100 to-blue-50">
            <img 
              src={product.image || 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2'} 
              alt={product.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className={`absolute inset-0 bg-gradient-to-br from-blue-900/80 to-sky-600/80 flex items-center justify-center transition-all duration-300 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}>
              <button className="px-4 py-2 bg-white text-blue-600 font-semibold rounded-full text-sm">
                View Details
              </button>
            </div>
          </div>
          <div className="flex-1 p-5">
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1.5 bg-blue-50 text-blue-700 text-xs font-semibold rounded-lg">
                  {product.brand}
                </span>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className={i < Math.floor(product.rating || 4.5) ? "fill-amber-400 text-amber-400" : "fill-slate-200 text-slate-200"} />
                  ))}
                </div>
              </div>
              <button 
                onClick={(e) => { e.stopPropagation(); setIsLiked(!isLiked); }}
                className="p-2 rounded-full hover:bg-slate-100 transition"
              >
                <Heart size={18} className={`transition ${isLiked ? 'fill-red-500 text-red-500' : 'text-slate-400'}`} />
              </button>
            </div>
            <h3 className="font-serif text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition">
              {product.name}
            </h3>
            <p className="text-slate-500 text-sm mb-3">{product.description}</p>
            <div className="flex items-center justify-between">
              <span className="text-xl font-serif font-bold text-slate-900">{product.price || 'Contact for Price'}</span>
              <div className="flex items-center gap-1.5">
                <div className={`w-2 h-2 rounded-full ${product.inStock ? 'bg-green-500' : 'bg-amber-500'} animate-pulse`} />
                <span className="text-xs text-slate-500">{product.inStock ? 'In Stock' : 'Made to Order'}</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      onClick={() => navigate(product.link)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative bg-white rounded-2xl overflow-hidden cursor-pointer border border-slate-200 hover:border-blue-300 hover:shadow-2xl transition-all duration-300"
    >
      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-slate-100 to-blue-50">
        <img 
          src={product.image || 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2'} 
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className={`absolute inset-0 bg-gradient-to-br from-blue-900/80 to-sky-600/80 flex items-center justify-center transition-all duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          <button className="px-5 py-2.5 bg-white text-blue-600 font-semibold rounded-full text-sm">
            Quick View
          </button>
        </div>
        <button 
          onClick={(e) => { e.stopPropagation(); setIsLiked(!isLiked); }}
          className="absolute top-3 right-3 z-10 p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition shadow-md"
        >
          <Heart size={14} className={`transition ${isLiked ? 'fill-red-500 text-red-500' : 'text-slate-600'}`} />
        </button>
      </div>
      <div className="p-5">
        <div className="flex items-center gap-2 mb-2">
          <span className="px-2.5 py-1 bg-blue-50 text-blue-700 text-[10px] font-semibold rounded-full">
            {product.brand}
          </span>
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={12} className={i < Math.floor(product.rating || 4.5) ? "fill-amber-400 text-amber-400" : "fill-slate-200 text-slate-200"} />
            ))}
          </div>
        </div>
        <h3 className="font-serif text-base font-bold text-slate-900 mb-1.5 group-hover:text-blue-600 transition line-clamp-1">
          {product.name}
        </h3>
        <p className="text-slate-500 text-xs mb-4 line-clamp-2">{product.description}</p>
        <div className="flex items-end justify-between">
          <div>
            <p className="text-[10px] text-slate-400 uppercase tracking-wider">Starting from</p>
            <p className="text-lg font-serif font-bold text-slate-900">{product.price || 'Contact'}</p>
          </div>
          <div className="flex items-center gap-1.5">
            <div className={`w-2 h-2 rounded-full ${product.inStock ? 'bg-green-500' : 'bg-amber-500'} animate-pulse`} />
            <span className="text-[10px] text-slate-500">{product.inStock ? 'In Stock' : 'On Order'}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function SearchResults() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const query = searchParams.get('q') || '';
  
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [viewMode, setViewMode] = useState('grid');
  const [selectedCategory, setSelectedCategory] = useState('Category');
  const [selectedBrand, setSelectedBrand] = useState('Brand');
  const [sortBy, setSortBy] = useState('relevance');

  const allProducts = getAllProducts();

  useEffect(() => {
    setLoading(true);
    
    // Search through products
    const searchResults = allProducts.filter(product => {
      const searchLower = query.toLowerCase();
      return (
        product.name.toLowerCase().includes(searchLower) ||
        product.brand?.toLowerCase().includes(searchLower) ||
        product.category.toLowerCase().includes(searchLower) ||
        product.description?.toLowerCase().includes(searchLower)
      );
    });

    setResults(searchResults);
    setLoading(false);
  }, [query]);

  // Filter results
  const filteredResults = results.filter(product => {
    const matchesCategory = selectedCategory === 'Category' || product.category === selectedCategory;
    const matchesBrand = selectedBrand === 'Brand' || product.brand === selectedBrand;
    return matchesCategory && matchesBrand;
  });

  // Sort results
  const sortedResults = [...filteredResults].sort((a, b) => {
    if (sortBy === 'name-asc') return a.name.localeCompare(b.name);
    if (sortBy === 'name-desc') return b.name.localeCompare(a.name);
    if (sortBy === 'rating') return (b.rating || 0) - (a.rating || 0);
    return 0; // relevance - keep original order
  });

  const categories = ['Category', ...new Set(results.map(p => p.category))];
  const brands = ['Brand', ...new Set(results.map(p => p.brand).filter(Boolean))];

  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-b from-slate-50 via-white to-white font-sans min-h-screen">
        {/* Header */}
        <section className="pt-24 sm:pt-28 pb-8 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center">
                <Search size={16} className="text-blue-600" />
              </div>
              <h1 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">
                Search Results for "{query}"
              </h1>
            </div>
            <p className="text-slate-500">
              Found <span className="font-semibold text-slate-700">{results.length}</span> products
            </p>
          </div>
        </section>

        {/* Filters Bar */}
        <section className="sticky top-[106px] sm:top-[114px] lg:top-[122px] z-30 bg-white border-b border-slate-200 py-3 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap items-center gap-3">
              {/* Category Filter */}
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
              >
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>

              {/* Brand Filter */}
              <select
                value={selectedBrand}
                onChange={(e) => setSelectedBrand(e.target.value)}
                className="px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
              >
                {brands.map(brand => (
                  <option key={brand} value={brand}>{brand}</option>
                ))}
              </select>

              {/* Sort */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
              >
                <option value="relevance">Sort by: Relevance</option>
                <option value="name-asc">Name: A to Z</option>
                <option value="name-desc">Name: Z to A</option>
                <option value="rating">Highest Rated</option>
              </select>

              {/* View Toggle */}
              <div className="flex gap-1 ml-auto">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition ${
                    viewMode === 'grid' ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
                  }`}
                >
                  <Grid size={18} />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition ${
                    viewMode === 'list' ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
                  }`}
                >
                  <List size={18} />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {loading ? (
              <div className="flex items-center justify-center py-20">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
              </div>
            ) : sortedResults.length === 0 ? (
              <div className="text-center py-16 bg-white rounded-2xl border border-slate-200">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="font-serif text-xl font-semibold text-slate-800 mb-2">No products found</h3>
                <p className="text-slate-500 mb-4">Try adjusting your search or filters</p>
                <button
                  onClick={() => navigate('/products')}
                  className="px-6 py-2.5 bg-blue-600 text-white rounded-xl text-sm font-medium hover:bg-blue-700 transition"
                >
                  Browse All Products
                </button>
              </div>
            ) : (
              <div className={viewMode === 'grid' 
                ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5" 
                : "space-y-4"
              }>
                {sortedResults.map((product, index) => (
                  <ProductCard key={index} product={product} viewMode={viewMode} />
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Related Categories */}
        {results.length > 0 && (
          <section className="py-12 px-4 sm:px-6 lg:px-8 bg-slate-50">
            <div className="max-w-7xl mx-auto">
              <h3 className="font-serif text-xl font-bold text-slate-900 mb-4">Browse Categories</h3>
              <div className="flex flex-wrap gap-2">
                {categories.filter(c => c !== 'All').slice(0, 8).map(cat => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className="px-4 py-2 bg-white text-slate-700 text-sm rounded-full border border-slate-200 hover:border-blue-300 hover:bg-blue-50 transition"
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </section>
        )}
      </div>
      <Footer />
    </>
  );
}