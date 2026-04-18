import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, FileText, HelpCircle } from 'lucide-react';
import { Modal } from '../modal/Modal';
import { QueryForm } from '../modal/QueryForm';
import { QuoteForm } from '../modal/QuoteForm';

export default function SideButtons() {
  const [open, setOpen] = useState(null);
  const [isOpen, setIsOpen] = useState(false); // controls menu
  const wrapperRef = useRef(null);

  const closeModal = () => setOpen(null);

  // 👉 Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <>
      {/* FLOAT BUTTON WRAPPER */}
      <div
        ref={wrapperRef}
        className="fixed bottom-6 right-6 z-[1500]"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <div className="flex flex-col items-end gap-3">

          {/* OPTIONS */}
          <AnimatePresence>
            {isOpen && (
              <>
                {/* CONTACT */}
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.2 }}
                  onClick={() => {
                    setOpen('query');
                    setIsOpen(false);
                  }}
                  className="flex items-center gap-3 bg-white shadow-lg px-4 py-2 rounded-full border hover:shadow-xl"
                >
                  <Phone size={16} className="text-sky-600" />
                  <span className="text-sm font-medium">Contact Us</span>
                </motion.button>

                {/* QUOTE */}
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.25 }}
                  onClick={() => {
                    setOpen('quote');
                    setIsOpen(false);
                  }}
                  className="flex items-center gap-3 bg-white shadow-lg px-4 py-2 rounded-full border hover:shadow-xl"
                >
                  <FileText size={16} className="text-blue-700" />
                  <span className="text-sm font-medium">Get Quote</span>
                </motion.button>
              </>
            )}
          </AnimatePresence>

          {/* MAIN BUTTON */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)} // 👉 CLICK TOGGLE
            whileTap={{ scale: 0.95 }}
            className="w-14 h-14 rounded-full bg-gradient-to-r from-[#0f2356] to-[#2563eb] flex items-center justify-center shadow-lg text-white"
          >
            <HelpCircle size={26} />
          </motion.button>
        </div>
      </div>

      {/* MODALS */}
      <Modal open={open === 'query'} onClose={closeModal}>
        <QueryForm onClose={closeModal} />
      </Modal>

      <Modal open={open === 'quote'} onClose={closeModal}>
        <QuoteForm onClose={closeModal} />
      </Modal>
    </>
  );
}