// // Modal.js
// import { motion, AnimatePresence } from 'framer-motion';

// export function Modal({ open, onClose, children }) {
//   return (
//     <AnimatePresence>
//       {open && (
//         <>
//           {/* Backdrop */}
//           <motion.div
//             key="backdrop"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.22 }}
//             onClick={onClose}
//             className="fixed inset-0 bg-[#0f2356]/55 backdrop-blur-sm z-[2000]"
//           />

//           {/* Modal panel – centered */}
//           <motion.div
//             key="modal"
//             initial={{ opacity: 0, scale: 0.92, y: 40 }}
//             animate={{ opacity: 1, scale: 1, y: 0 }}
//             exit={{ opacity: 0, scale: 0.92, y: 30 }}
//             transition={{ type: 'spring', stiffness: 300, damping: 28 }}
//             onClick={e => e.stopPropagation()}
//             className="fixed top-[10%] bottom-[10%] left-1/2 -translate-x-1/2 w-[min(560px,95vw)] max-h-[90vh] bg-white rounded-2xl overflow-hidden flex flex-col z-[2001] shadow-[0_40px_100px_rgba(15,35,86,0.3),0_8px_32px_rgba(15,35,86,0.15)] border border-blue-900/10"
//           >
//             {/* Decorative top border */}
//             <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-blue-900 to-sky-500 z-10" />
//             {children}
//           </motion.div>
//         </>
//       )}
//     </AnimatePresence>
//   );
// }



// Modal.js
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';

export function Modal({ open, onClose, children }) {
  // Prevent body scroll when modal is open
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

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[2000] flex items-center justify-center p-3 sm:p-4 md:p-5">
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#0f2356]/55 backdrop-blur-sm"
          />

          {/* Modal panel – with fixed height constraints */}
          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.92, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 30 }}
            transition={{ type: 'spring', stiffness: 300, damping: 28 }}
            onClick={e => e.stopPropagation()}
            className="relative w-full max-w-[560px] h-auto max-h-[85vh] min-h-[300px] bg-white rounded-xl sm:rounded-2xl overflow-hidden flex flex-col z-[2001] shadow-[0_40px_100px_rgba(15,35,86,0.3),0_8px_32px_rgba(15,35,86,0.15)] border border-blue-900/10"
          >
            {/* Decorative top border */}
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-blue-900 to-sky-500 z-10" />
            {children}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}