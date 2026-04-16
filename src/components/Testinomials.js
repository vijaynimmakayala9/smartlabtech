import { useRef, useEffect, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const TESTIMONIALS = [
  {
    name: 'Nimmakayala Vijay',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&q=80',
    quote: 'The faculty here are highly knowledgeable and supportive. They explain every concept clearly and are always available for doubt-solving. The teaching methods are practical, which makes learning much easier.',
  },
  {
    name: 'K. Manoj Kumar',
    rating: 4,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&q=80',
    quote: 'Thanks to the placement team, I was able to secure a good job right after completing my course. The mock interviews and resume preparation sessions were very useful.',
  },
  {
    name: 'K. Ganapathi Vara Prasad',
    rating: 4,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&q=80',
    quote: 'The curriculum is well-structured and updated with the latest industry trends. I really appreciate how they include real-world projects and case studies.',
  },
  {
    name: 'Sneha Reddy',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&q=80',
    quote: 'The hands-on training and exposure to cutting-edge equipment gave me the confidence to work in top-tier research facilities. Highly recommended!',
  },
  {
    name: 'Rajesh Kumar',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=120&q=80',
    quote: 'SmartLabTech transformed my career. Their industry-focused approach and expert mentorship helped me climb the corporate ladder quickly.',
  },
  {
    name: 'Priya Sharma',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&q=80',
    quote: 'The practical exposure and modern lab facilities gave me an edge in my career. The mentorship program is outstanding and truly industry-relevant.',
  },
];

/* ─── Single card ─────────────────────────────────────── */
function Card({ t }) {
  const [imgErr, setImgErr] = useState(false);
  const initials = t.name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);

  return (
    <div
      className="flex items-start gap-4 bg-white rounded-2xl p-6 border border-slate-100 w-full transition-all duration-300"
      style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.07)', minHeight: 180 }}
    >
      {/* Avatar */}
      <div className="flex-shrink-0">
        {!imgErr ? (
          <img
            src={t.image} alt={t.name}
            className="w-[72px] h-[72px] rounded-full object-cover border-2 border-slate-100"
            onError={() => setImgErr(true)}
          />
        ) : (
          <div
            className="w-[72px] h-[72px] rounded-full flex items-center justify-center text-white text-xl font-bold font-display"
            style={{ background: 'linear-gradient(135deg,#1e3a8a,#0ea5e9)' }}
          >
            {initials}
          </div>
        )}
      </div>

      {/* Text */}
      <div className="flex-1 min-w-0">
        <p className="text-base font-bold font-body leading-tight" style={{ color: '#9b1c1c' }}>
          {t.name}
        </p>

        {/* Stars */}
        <div className="flex gap-0.5 my-1.5">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i} size={16}
              fill={i < t.rating ? '#f59e0b' : '#e5e7eb'}
              color={i < t.rating ? '#f59e0b' : '#e5e7eb'}
            />
          ))}
        </div>

        <p className="text-sm text-slate-500 font-body leading-relaxed">
          "{t.quote}"
        </p>
      </div>
    </div>
  );
}

/* ─── Main component ──────────────────────────────────── */
export default function Testimonials({ id }) {
  // Group into pairs
  const pairs = [];
  for (let i = 0; i < TESTIMONIALS.length; i += 2) {
    pairs.push([TESTIMONIALS[i], TESTIMONIALS[i + 1]].filter(Boolean));
  }

  const [current,   setCurrent]   = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused,    setPaused]    = useState(false);
  const sectionRef = useRef(null);
  const isInView   = useInView(sectionRef, { once: false, amount: 0.2 });

  const goTo = (idx, dir) => { setDirection(dir); setCurrent(idx); };
  const next = () => goTo((current + 1) % pairs.length,  1);
  const prev = () => goTo((current - 1 + pairs.length) % pairs.length, -1);

  // Auto-slide left every 4 s
  useEffect(() => {
    if (paused || !isInView) return;
    const t = setInterval(next, 4000);
    return () => clearInterval(t);
  }, [current, paused, isInView]);

  const variants = {
    enter:  (d) => ({ x: d > 0 ? '100%' : '-100%', opacity: 0 }),
    center: { x: 0, opacity: 1, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
    exit:   (d) => ({ x: d > 0 ? '-60%' : '60%', opacity: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } }),
  };

  return (
    <section id={id} ref={sectionRef} className="bg-white py-16 sm:py-24">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-8 lg:px-20">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-display font-bold text-slate-900 leading-tight mb-3" style={{ fontSize: 'clamp(26px,4vw,42px)' }}>
            What Our <span style={{ color: '#9b1c1c' }}>Alumni</span> Speaks?
          </h2>
          <p className="text-sm text-slate-400 font-body">Real success stories from our graduates across India</p>
        </div>

        {/* Carousel */}
        <div
          className="relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Slides */}
          <div className="overflow-hidden relative" style={{ minHeight: 200 }}>
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full"
              >
                {pairs[current].map((t, i) => <Card key={i} t={t} />)}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Prev arrow */}
          <button
            onClick={prev}
            aria-label="Previous"
            className="absolute -left-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center z-20 cursor-pointer transition-all duration-200 group hover:bg-blue-900 hover:border-blue-900"
            style={{ boxShadow: '0 2px 10px rgba(0,0,0,0.10)' }}
          >
            <ChevronLeft size={18} className="text-slate-500 group-hover:text-white transition-colors" />
          </button>

          {/* Next arrow */}
          <button
            onClick={next}
            aria-label="Next"
            className="absolute -right-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center z-20 cursor-pointer transition-all duration-200 group hover:bg-blue-900 hover:border-blue-900"
            style={{ boxShadow: '0 2px 10px rgba(0,0,0,0.10)' }}
          >
            <ChevronRight size={18} className="text-slate-500 group-hover:text-white transition-colors" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center items-center gap-2 mt-8">
          {pairs.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goTo(idx, idx >= current ? 1 : -1)}
              className="h-2 rounded-full border-none cursor-pointer transition-all duration-300"
              style={{
                width: current === idx ? 28 : 8,
                background: current === idx
                  ? 'linear-gradient(90deg,#1e3a8a,#0ea5e9)'
                  : 'rgba(30,58,138,0.18)',
              }}
            />
          ))}
        </div>

        {/* Progress bar — restarts on each slide change */}
        {!paused && isInView && (
          <div className="relative w-20 h-0.5 bg-slate-200 rounded mx-auto mt-5 overflow-hidden">
            <motion.div
              key={current}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 4, ease: 'linear' }}
              className="absolute inset-0 w-full h-full origin-left rounded"
              style={{ background: 'linear-gradient(90deg,#1e3a8a,#0ea5e9)' }}
            />
          </div>
        )}

      </div>
    </section>
  );
}