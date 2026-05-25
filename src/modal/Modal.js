// src/modal/Modal.js
import { Fragment, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';

export function Modal({ open, onClose, children, position = 'center' }) {
  // Lock body scroll when modal is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [open]);

  // Handle escape key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape' && open) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [open, onClose]);

  if (!open) return null;

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  const modalVariants = {
    center: {
      hidden: { opacity: 0, scale: 0.95 },
      visible: { opacity: 1, scale: 1 },
      exit: { opacity: 0, scale: 0.95 }
    },
    right: {
      hidden: { x: '100%' },
      visible: { x: 0 },
      exit: { x: '100%' }
    }
  };

  const modalStyle = position === 'right'
    ? "fixed top-0 right-0 h-full w-full max-w-2xl bg-white shadow-xl overflow-hidden"
    : "w-full max-w-3xl bg-white rounded-2xl shadow-xl overflow-hidden";

  const containerStyle = position === 'right'
    ? "flex justify-end"
    : "flex items-center justify-center p-4";

  return createPortal(
    <AnimatePresence mode="wait">
      {open && (
        <Fragment>
          {/* Backdrop */}
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={backdropVariants}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[1550]"
          />

          {/* Modal Container */}
          <div
            className={`fixed inset-0 z-[1550] ${containerStyle}`}
            onClick={onClose}
          >
            <motion.div
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={modalVariants[position]}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className={modalStyle}
              onClick={(e) => e.stopPropagation()}
            >
              {children}
            </motion.div>
          </div>
        </Fragment>
      )}
    </AnimatePresence>,
    document.body
  );
}