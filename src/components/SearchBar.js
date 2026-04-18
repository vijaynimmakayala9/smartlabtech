import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Clock, TrendingUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { CATEGORIES } from '../data/Categories';

const getAllProducts = () => {
  const products = [];
  Object.entries(CATEGORIES).forEach(([category, items]) => {
    items.forEach(item => {
      products.push({ ...item, category });
    });
  });
  return products;
};

export default function SearchBar({ 
  isOpen, 
  onClose, 
  searchBarRef, 
  searchTerm, 
  setSearchTerm,
  onSearchSubmit 
}) {
  const [recommendations, setRecommendations] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [searchBarWidth, setSearchBarWidth] = useState(0);
  const [searchBarPosition, setSearchBarPosition] = useState({ left: 0, top: 0 });
  const navigate = useNavigate();
  const allProducts = getAllProducts();

  // Update search bar dimensions and position
  useEffect(() => {
    if (isOpen && searchBarRef?.current) {
      const updatePosition = () => {
        const rect = searchBarRef.current.getBoundingClientRect();
        // Find the actual input element inside the container
        const inputElement = searchBarRef.current.querySelector('input');
        if (inputElement) {
          const inputRect = inputElement.getBoundingClientRect();
          setSearchBarWidth(inputRect.width);
          setSearchBarPosition({
            left: inputRect.left,
            top: inputRect.bottom + 4
          });
        } else {
          setSearchBarWidth(rect.width);
          setSearchBarPosition({
            left: rect.left,
            top: rect.bottom + 4
          });
        }
      };
      
      updatePosition();
      window.addEventListener('resize', updatePosition);
      window.addEventListener('scroll', updatePosition);
      
      return () => {
        window.removeEventListener('resize', updatePosition);
        window.removeEventListener('scroll', updatePosition);
      };
    }
  }, [isOpen, searchBarRef]);

  // Update recommendations when search term changes
  useEffect(() => {
    if (searchTerm?.trim()) {
      const filtered = allProducts.filter(product => 
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.brand?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(searchTerm.toLowerCase())
      ).slice(0, 6);
      setRecommendations(filtered);
    } else {
      setRecommendations(allProducts.slice(0, 4));
    }
    setSelectedIndex(-1);
  }, [searchTerm]);

  const handleSelectProduct = (product) => {
    onClose();
    if (setSearchTerm) setSearchTerm('');
    navigate(product.link);
  };

  const handleSeeAllResults = () => {
    if (searchTerm?.trim()) {
      onClose();
      if (onSearchSubmit) {
        onSearchSubmit();
      } else {
        navigate(`/search?q=${encodeURIComponent(searchTerm)}`);
        if (setSearchTerm) setSearchTerm('');
      }
    }
  };

  const handleQuickLink = (term) => {
    if (setSearchTerm) setSearchTerm(term);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 z-[998]"
            onClick={onClose}
          />

          {recommendations.length > 0 && (
            <motion.div
              data-search-container
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="fixed z-[999]"
              style={{
                left: searchBarPosition.left,
                top: searchBarPosition.top,
                width: searchBarWidth,
              }}
            >
              <div className="bg-white rounded-xl border border-slate-200 shadow-2xl overflow-hidden">
                <div className="flex items-center justify-between px-4 py-3 bg-slate-50 border-b border-slate-100">
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    {searchTerm?.trim() ? 'Search Results' : 'Popular Products'}
                  </span>
                  {searchTerm?.trim() && (
                    <button
                      onClick={handleSeeAllResults}
                      className="text-xs text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1"
                    >
                      See all results <ChevronRight size={12} />
                    </button>
                  )}
                </div>

                <div className="max-h-[400px] overflow-y-auto p-2">
                  {recommendations.map((product, idx) => (
                    <motion.button
                      key={product.link}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.03 }}
                      onClick={() => handleSelectProduct(product)}
                      className={`w-full flex items-center gap-3 p-3 rounded-lg text-left transition-all ${
                        selectedIndex === idx
                          ? 'bg-blue-50 border-blue-200'
                          : 'hover:bg-slate-50'
                      }`}
                    >
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-50 to-sky-50 flex items-center justify-center text-xl border border-blue-100 flex-shrink-0">
                        {product.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-slate-800 truncate">
                          {product.name}
                        </p>
                        <p className="text-xs text-slate-500 flex items-center gap-1">
                          <span>{product.brand}</span>
                          <span className="w-1 h-1 bg-slate-300 rounded-full" />
                          <span>{product.category}</span>
                        </p>
                      </div>
                      <ChevronRight size={14} className="text-slate-400" />
                    </motion.button>
                  ))}
                </div>

                {!searchTerm?.trim() && (
                  <div className="border-t border-slate-100 p-3 bg-slate-50">
                    <div className="flex items-center gap-2 mb-2">
                      <TrendingUp size={12} className="text-slate-400" />
                      <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                        Quick Links
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {['Analytical Balances', 'Chromatography', 'Centrifuges', 'Incubators'].map((item) => (
                        <button
                          key={item}
                          onClick={() => handleQuickLink(item)}
                          className="px-3 py-1.5 bg-white text-slate-600 text-xs rounded-full border border-slate-200 hover:bg-slate-100 transition"
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </>
      )}
    </AnimatePresence>
  );
}