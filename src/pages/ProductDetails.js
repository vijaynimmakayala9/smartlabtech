import React, { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { 
  ArrowRight, ChevronLeft, ChevronRight, Check, Download, FileText,
  Settings, Award, Truck, Shield, Clock, Phone, Mail, 
  Star, Heart, Share2, Sparkles, Package,
  FlaskConical, Play, Pause, Maximize2, BadgeCheck,
  ShoppingCart, MessageCircle, X
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

/* ─── Font Import ─── */
const FontLink = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap');
    
    * { margin: 0; padding: 0; box-sizing: border-box; }
    
    .font-serif { font-family: 'Cormorant Garamond', serif; }
    .font-sans { font-family: 'Plus Jakarta Sans', sans-serif; }
    
    .gradient-text {
      background: linear-gradient(135deg, #1e3a8a 0%, #0ea5e9 50%, #38bdf8 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    
    .blue-overlay {
      background: linear-gradient(135deg, rgba(30,58,138,0.85) 0%, rgba(14,165,233,0.75) 100%);
    }
    
    .image-scrollbar::-webkit-scrollbar { height: 4px; }
    .image-scrollbar::-webkit-scrollbar-track { background: #e2e8f0; border-radius: 10px; }
    .image-scrollbar::-webkit-scrollbar-thumb { background: linear-gradient(135deg, #1e3a8a, #0ea5e9); border-radius: 10px; }
    
    @keyframes pulse-glow {
      0%, 100% { box-shadow: 0 0 20px rgba(14,165,233,0.15); }
      50% { box-shadow: 0 0 40px rgba(14,165,233,0.25); }
    }
    
    .glow-effect { animation: pulse-glow 3s ease-in-out infinite; }
  `}</style>
);

/* ─── Product Data ─── */
const productData = {
  'analytical-balances': {
    id: 'analytical-balances',
    name: 'Analytical Balances',
    brand: 'Sartorius',
    category: 'Weighing & Measurement',
    shortDesc: 'High-precision analytical balances for accurate laboratory measurements with 0.1mg readability',
    fullDesc: `The Sartorius Analytical Balance represents the pinnacle of precision weighing technology. Engineered for the most demanding laboratory environments, this instrument delivers unparalleled accuracy with readability down to 0.1mg.`,
    img: "https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    gallery: [
      "https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/256262/pexels-photo-256262.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/3735757/pexels-photo-3735757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/3735711/pexels-photo-3735711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    specifications: {
      readability: "0.1 mg",
      capacity: "60g - 520g",
      panSize: "90 mm diameter",
      repeatability: "±0.1 mg",
      linearity: "±0.2 mg",
      stabilizationTime: "≤ 3 seconds",
      display: "7\" TFT touchscreen",
      interfaces: "USB-C, Ethernet, Wi-Fi, Bluetooth",
      dimensions: "210 × 340 × 120 mm",
      weight: "5.2 kg"
    },
    features: [
      "Automatic internal calibration",
      "Static charge detection",
      "Underfloor weighing capability",
      "GLP compliant printouts",
      "Password protection with user profiles",
      "Multiple weighing units"
    ],
    applications: [
      "Pharmaceutical quality control",
      "Chemical analysis",
      "Research laboratories",
      "Environmental testing",
      "Food safety testing"
    ],
    price: "₹ 2,45,000",
    originalPrice: "₹ 2,85,000",
    discount: "14% OFF",
    warranty: "3 years",
    leadTime: "2-3 weeks",
    inStock: true,
    rating: 4.9,
    reviews: 128,
    sku: "SART-ANB-220",
    certifications: ["ISO 9001:2015", "CE Certified", "GMP Compliant"]
  },
  'laboratory-balances': {
    id: 'laboratory-balances',
    name: 'Laboratory Balances',
    brand: 'Sartorius',
    category: 'Weighing & Measurement',
    shortDesc: 'Versatile laboratory balances for everyday weighing with exceptional precision',
    fullDesc: `Sartorius laboratory balances combine precision engineering with user-friendly operation, making them ideal for routine laboratory applications.`,
    img: "https://images.pexels.com/photos/256262/pexels-photo-256262.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    gallery: [
      "https://images.pexels.com/photos/256262/pexels-photo-256262.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    specifications: {
      readability: "1 mg - 0.1 g",
      capacity: "Up to 14.2 kg",
      panSize: "180 × 180 mm",
      repeatability: "±1 mg",
      linearity: "±2 mg",
      stabilizationTime: "≤ 2 seconds",
      display: "4.5\" LCD backlit",
      interfaces: "RS232, USB"
    },
    features: [
      "Multiple application modes",
      "Chemical resistant design",
      "Level indicator with alarm",
      "Overload protection"
    ],
    applications: [
      "Educational laboratories",
      "Production quality control",
      "Material testing",
      "General laboratory weighing"
    ],
    price: "₹ 1,45,000",
    originalPrice: "₹ 1,75,000",
    discount: "17% OFF",
    warranty: "2 years",
    leadTime: "1-2 weeks",
    inStock: true,
    rating: 4.7,
    reviews: 86,
    sku: "SART-LAB-120",
    certifications: ["ISO 9001:2015", "CE Certified"]
  }
};

/* ─── Auto-Scroll Gallery Component ─── */
const AutoScrollGallery = ({ images, productName }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const scrollRef = useRef(null);
  const intervalRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isPlaying && !isMobile) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
      }, 3500);
    }
    return () => clearInterval(intervalRef.current);
  }, [isPlaying, images.length, isMobile]);

  useEffect(() => {
    if (scrollRef.current) {
      const scrollAmount = currentIndex * (scrollRef.current.scrollWidth / images.length);
      scrollRef.current.scrollTo({ left: scrollAmount, behavior: 'smooth' });
    }
  }, [currentIndex, images.length]);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
    setIsPlaying(false);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    setIsPlaying(false);
  };

  return (
    <>
      <div className="relative">
        {/* Main Display */}
        <div className="relative rounded-xl sm:rounded-2xl overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 border border-slate-200">
          <img 
            src={images[currentIndex]} 
            alt={`${productName} - View ${currentIndex + 1}`}
            className="w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] object-contain"
          />
          
          {/* Navigation Arrows - Hidden on mobile */}
          <button 
            onClick={prevImage}
            className="hidden sm:flex absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full items-center justify-center shadow-lg hover:bg-white transition-all"
          >
            <ChevronLeft size={20} className="text-slate-700" />
          </button>
          <button 
            onClick={nextImage}
            className="hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full items-center justify-center shadow-lg hover:bg-white transition-all"
          >
            <ChevronRight size={20} className="text-slate-700" />
          </button>

          {/* Controls */}
          <div className="absolute bottom-3 right-3 flex gap-2">
            <button 
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-8 h-8 sm:w-10 sm:h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-all"
            >
              {isPlaying ? <Pause size={14} className="sm:w-4 sm:h-4 text-slate-700" /> : <Play size={14} className="sm:w-4 sm:h-4 text-slate-700" />}
            </button>
            <button 
              onClick={() => setIsFullscreen(true)}
              className="w-8 h-8 sm:w-10 sm:h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-all"
            >
              <Maximize2 size={14} className="sm:w-4 sm:h-4 text-slate-700" />
            </button>
          </div>

          {/* Counter */}
          <div className="absolute bottom-3 left-3 px-2 sm:px-3 py-1 sm:py-1.5 bg-white/90 backdrop-blur-sm rounded-full text-slate-700 text-xs">
            {currentIndex + 1} / {images.length}
          </div>

          {/* Mobile Swipe Hint */}
          <div className="absolute inset-x-0 bottom-12 flex justify-center sm:hidden">
            <div className="flex gap-1.5">
              {images.map((_, idx) => (
                <div
                  key={idx}
                  className={`w-1.5 h-1.5 rounded-full transition-all ${
                    currentIndex === idx ? 'w-6 bg-blue-600' : 'bg-slate-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Thumbnail Strip - Hidden on mobile */}
        <div className="hidden sm:block mt-4 relative">
          <div 
            ref={scrollRef}
            className="flex gap-3 overflow-x-auto pb-2 image-scrollbar snap-x snap-mandatory"
          >
            {images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setCurrentIndex(idx);
                  setIsPlaying(false);
                }}
                className={`relative flex-shrink-0 w-16 md:w-20 lg:w-24 h-16 md:h-20 lg:h-24 rounded-lg overflow-hidden snap-start transition-all ${
                  currentIndex === idx 
                    ? 'ring-2 ring-blue-500 ring-offset-2' 
                    : 'opacity-60 hover:opacity-100'
                }`}
              >
                <img 
                  src={img} 
                  alt={`Thumbnail ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {isFullscreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[2000] bg-black/95 flex items-center justify-center p-4"
            onClick={() => setIsFullscreen(false)}
          >
            <button 
              onClick={() => setIsFullscreen(false)}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 sm:w-12 sm:h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition z-10"
            >
              <X size={20} className="sm:w-6 sm:h-6" />
            </button>
            
            <div className="relative w-full max-w-6xl">
              <img 
                src={images[currentIndex]} 
                alt={`Fullscreen ${currentIndex + 1}`}
                className="w-full h-auto max-h-[85vh] object-contain"
              />
              
              <button 
                onClick={(e) => { e.stopPropagation(); prevImage(); }}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition"
              >
                <ChevronLeft size={20} className="sm:w-6 sm:h-6" />
              </button>
              <button 
                onClick={(e) => { e.stopPropagation(); nextImage(); }}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition"
              >
                <ChevronRight size={20} className="sm:w-6 sm:h-6" />
              </button>
            </div>
            
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={(e) => { e.stopPropagation(); setCurrentIndex(idx); }}
                  className={`h-2 rounded-full transition-all ${
                    currentIndex === idx ? 'w-8 bg-white' : 'w-2 bg-white/40'
                  }`}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

/* ─── Main Component ─── */
const ProductDetails = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [activeSpec, setActiveSpec] = useState(null);
  const [showBackToTop, setShowBackToTop] = useState(false);
  
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    const handleScroll = () => setShowBackToTop(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    
    setLoading(true);
    setTimeout(() => {
      const foundProduct = productData[productId] || productData['analytical-balances'];
      setProduct(foundProduct);
      setLoading(false);
    }, 500);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [productId]);

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30 flex items-center justify-center">
          <div className="text-center">
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-6 rounded-full border-2 border-blue-200 border-t-blue-600"
            />
            <p className="text-slate-600 font-sans text-base sm:text-lg">Loading Premium Experience...</p>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  const relatedProducts = Object.values(productData).filter(p => p.category === product.category && p.id !== product.id).slice(0, 3);

  return (
    <>
      <FontLink />
      <Navbar />
      <div ref={containerRef} className="bg-white font-sans">
        
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center py-16 sm:py-20 overflow-hidden">
          {/* White Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50/30" />
          
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-blue-100/30 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-sky-100/20 rounded-full blur-3xl" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
              {/* Left Column - Gallery */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <AutoScrollGallery images={product.gallery} productName={product.name} />
              </motion.div>

              {/* Right Column - Product Info */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="text-slate-800"
              >
                {/* Breadcrumb */}
                <div className="flex items-center gap-2 text-xs sm:text-sm mb-4 text-slate-500">
                  <button onClick={() => navigate('/')} className="hover:text-blue-600 transition">Home</button>
                  <ChevronRight size={12} />
                  <button onClick={() => navigate('/products')} className="hover:text-blue-600 transition">Products</button>
                  <ChevronRight size={12} />
                  <span className="text-slate-700">{product.category}</span>
                </div>

                {/* Brand & Rating */}
                <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-3">
                  <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-semibold tracking-wider border border-blue-200">
                    {product.brand}
                  </span>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} className={i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-slate-300"} />
                    ))}
                    <span className="text-slate-500 text-xs sm:text-sm ml-1">({product.reviews})</span>
                  </div>
                </div>

                <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 leading-tight text-slate-900">
                  <span className="gradient-text">{product.name}</span>
                </h1>
                <p className="text-slate-600 text-sm sm:text-base lg:text-lg mb-4 sm:mb-6 leading-relaxed">
                  {product.shortDesc}
                </p>

                {/* Price Section */}
                <div className="flex flex-wrap items-end gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <span className="font-serif text-3xl sm:text-4xl font-bold text-slate-900">{product.price}</span>
                  <span className="text-slate-400 line-through text-base sm:text-lg">{product.originalPrice}</span>
                  <span className="px-3 py-1 bg-green-100 text-green-700 text-xs sm:text-sm font-semibold rounded-full border border-green-200">
                    {product.discount}
                  </span>
                </div>

                {/* SKU & Stock */}
                <div className="flex flex-wrap gap-4 sm:gap-6 mb-4 sm:mb-6">
                  <div className="flex items-center gap-2">
                    <Package size={14} className="sm:w-4 sm:h-4 text-blue-600" />
                    <span className="text-slate-500 text-xs sm:text-sm">SKU: <span className="text-slate-700">{product.sku}</span></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${product.inStock ? 'bg-green-500' : 'bg-yellow-500'} animate-pulse`} />
                    <span className="text-slate-600 text-xs sm:text-sm">{product.inStock ? 'In Stock' : 'Made to Order'}</span>
                  </div>
                </div>

                {/* Certifications */}
                <div className="flex flex-wrap gap-2 mb-6 sm:mb-8">
                  {product.certifications.map((cert, i) => (
                    <span key={i} className="px-2 sm:px-3 py-1 sm:py-1.5 bg-blue-50 rounded-lg text-xs text-blue-700 border border-blue-200 flex items-center gap-1.5">
                      <BadgeCheck size={12} className="text-blue-600" />
                      {cert}
                    </span>
                  ))}
                </div>

                {/* Quantity & Actions */}
                <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
                  <div className="flex items-center gap-2">
                    <button 
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-700 hover:bg-slate-100 transition"
                    >
                      <span className="text-lg sm:text-xl">−</span>
                    </button>
                    <input
                      type="number"
                      min="1"
                      value={quantity}
                      onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                      className="w-16 sm:w-20 h-10 sm:h-12 text-center bg-slate-50 border border-slate-200 rounded-xl text-slate-800 text-base sm:text-lg font-semibold focus:border-blue-500 outline-none"
                    />
                    <button 
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-700 hover:bg-slate-100 transition"
                    >
                      <span className="text-lg sm:text-xl">+</span>
                    </button>
                  </div>
                  
                  <button className="flex-1 sm:flex-none px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-sky-500 text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-blue-500/20 transition-all flex items-center justify-center gap-2 text-sm sm:text-base glow-effect">
                    <ShoppingCart size={16} className="sm:w-[18px] sm:h-[18px]" />
                    Add to Inquiry
                  </button>
                  
                  <button className="p-3 sm:p-4 rounded-xl bg-slate-50 border border-slate-200 text-slate-600 hover:bg-slate-100 transition">
                    <Heart size={18} className="sm:w-5 sm:h-5" />
                  </button>
                </div>

                {/* Quick Actions */}
                <div className="flex flex-wrap gap-4 sm:gap-6 pt-4 sm:pt-6 border-t border-slate-200">
                  <button className="flex items-center gap-2 text-slate-500 hover:text-blue-600 transition text-xs sm:text-sm">
                    <Phone size={14} className="sm:w-4 sm:h-4" />
                    <span>Call Expert</span>
                  </button>
                  <button className="flex items-center gap-2 text-slate-500 hover:text-blue-600 transition text-xs sm:text-sm">
                    <MessageCircle size={14} className="sm:w-4 sm:h-4" />
                    <span>Live Chat</span>
                  </button>
                  <button className="flex items-center gap-2 text-slate-500 hover:text-blue-600 transition text-xs sm:text-sm">
                    <Share2 size={14} className="sm:w-4 sm:h-4" />
                    <span>Share</span>
                  </button>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <motion.div 
            style={{ opacity }}
            className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2"
          >
            <div className="flex flex-col items-center gap-2">
              <span className="text-slate-400 text-xs tracking-widest uppercase">Scroll</span>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="text-slate-400"
              >
                <ChevronRight size={16} className="rotate-90" />
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Specifications Section */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-10 sm:mb-12"
            >
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-2 sm:mb-3">
                Technical <span className="gradient-text">Specifications</span>
              </h2>
              <p className="text-slate-500 text-sm sm:text-base max-w-2xl mx-auto">
                Precision engineering for demanding laboratory environments
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {Object.entries(product.specifications).map(([key, value], i) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.03 }}
                  className="relative group cursor-pointer"
                  onMouseEnter={() => setActiveSpec(key)}
                  onMouseLeave={() => setActiveSpec(null)}
                >
                  <div className={`p-4 sm:p-6 rounded-xl sm:rounded-2xl transition-all duration-300 bg-white border ${
                    activeSpec === key 
                      ? 'border-blue-300 shadow-lg' 
                      : 'border-slate-200 shadow-sm'
                  }`}>
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-slate-400 text-xs uppercase tracking-wider mb-1">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </p>
                        <p className="text-slate-800 text-base sm:text-lg font-semibold">{value}</p>
                      </div>
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all ${
                        activeSpec === key ? 'bg-blue-100 text-blue-600' : 'bg-slate-100 text-slate-400'
                      }`}>
                        <Settings size={14} className="sm:w-4 sm:h-4" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features & Applications */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
              {/* Features */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-900 mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
                  <Sparkles size={20} className="sm:w-6 sm:h-6 text-blue-600" />
                  Key Features
                </h3>
                <div className="space-y-2 sm:space-y-3">
                  {product.features.map((feature, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-blue-200 transition-all"
                    >
                      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                        <Check size={14} className="sm:w-4 sm:h-4 text-blue-600" />
                      </div>
                      <span className="text-slate-700 text-sm sm:text-base">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Applications */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-900 mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
                  <FlaskConical size={20} className="sm:w-6 sm:h-6 text-blue-600" />
                  Applications
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                  {product.applications.map((app, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="p-3 sm:p-4 rounded-xl bg-slate-50 border border-slate-200 text-center hover:bg-blue-50 hover:border-blue-200 transition-all"
                    >
                      <span className="text-slate-700 text-xs sm:text-sm">{app}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-10 sm:mb-12"
              >
                <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-2 sm:mb-3">
                  You May Also <span className="gradient-text">Like</span>
                </h2>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {relatedProducts.map((item, i) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    onClick={() => navigate(`/product/${item.id}`)}
                    className="group relative overflow-hidden rounded-xl sm:rounded-2xl cursor-pointer bg-white border border-slate-200 shadow-sm hover:shadow-xl transition-all"
                  >
                    <div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden">
                      <img 
                        src={item.img} 
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 blue-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="px-4 py-2 bg-white text-blue-600 font-semibold rounded-full text-sm">View Details</span>
                      </div>
                      <div className="absolute top-3 left-3">
                        <span className="px-2 sm:px-3 py-1 bg-white/95 backdrop-blur-sm rounded-full text-xs font-semibold text-slate-700 shadow-sm">
                          {item.brand}
                        </span>
                      </div>
                    </div>
                    <div className="p-4 sm:p-5">
                      <h4 className="font-serif text-lg sm:text-xl font-bold text-slate-900 mb-1">{item.name}</h4>
                      <div className="flex items-center justify-between">
                        <span className="text-blue-600 font-semibold text-sm sm:text-base">{item.price}</span>
                        <span className="text-slate-500 text-xs sm:text-sm flex items-center gap-1 group-hover:text-blue-600 transition">
                          View <ArrowRight size={12} className="sm:w-3.5 sm:h-3.5" />
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA Banner with Blue Overlay */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Laboratory"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 blue-overlay" />
              
              <div className="relative z-10 p-8 sm:p-12 md:p-16 text-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="font-serif text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-3 sm:mb-4">
                    Ready to Elevate Your Laboratory?
                  </h2>
                  <p className="text-white/90 text-sm sm:text-base md:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto">
                    Get personalized consultation and exclusive pricing for your requirements.
                  </p>
                  <div className="flex flex-wrap gap-3 sm:gap-4 justify-center">
                    <button className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-blue-600 font-semibold rounded-xl hover:shadow-2xl transition-all flex items-center gap-2 text-sm sm:text-base">
                      <Phone size={16} className="sm:w-[18px] sm:h-[18px]" />
                      Request Callback
                    </button>
                    <button className="px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-white/80 text-white font-semibold rounded-xl hover:bg-white/10 transition-all flex items-center gap-2 text-sm sm:text-base">
                      <FileText size={16} className="sm:w-[18px] sm:h-[18px]" />
                      Download Datasheet
                    </button>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Back to Top Button */}
        <AnimatePresence>
          {showBackToTop && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="fixed bottom-6 right-4 sm:bottom-8 sm:right-8 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-600 to-sky-500 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all z-50"
            >
              <ArrowRight size={18} className="sm:w-5 sm:h-5 rotate-[-90deg]" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetails;