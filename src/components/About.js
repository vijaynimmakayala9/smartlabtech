import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';

const HIGHLIGHTS = [
  'Authorized dealer for 50+ globally recognized laboratory brands',
  'End-to-end support: procurement, installation, calibration & AMC',
  'Serving pharma, biotech, research institutes & universities',
  'NABL-accredited calibration services for analytical instruments',
  'Dedicated technical team with domain-specific expertise',
];

function Reveal({ children, delay = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] }}>
      {children}
    </motion.div>
  );
}

export default function About({ id }) {
  return (
    <section id={id} className="bg-white py-16 sm:py-24 lg:py-32">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-8 lg:px-20">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Image */}
          <Reveal>
            <div className="relative">
              {/* Decorative bg frame */}
              <div className="absolute -top-4 -left-4 right-10 bottom-10 rounded-2xl"
                style={{ background: 'linear-gradient(135deg,rgba(30,58,138,0.08),rgba(14,165,233,0.06))' }} />
              <img
                src="/Screenshot 2026-04-13 150742.png"
                alt="SmartLabTech Laboratory"
                className="w-full rounded-2xl relative z-10"
                style={{ boxShadow: '0 20px 60px rgba(30,58,138,0.18)' }}
              />
              {/* Years badge */}
              <div className="absolute -bottom-5 -right-5 z-20 rounded-2xl px-5 py-4"
                style={{ background: 'linear-gradient(135deg,#1e3a8a,#1d4ed8)', boxShadow: '0 8px 32px rgba(30,58,138,0.3)' }}>
                <p className="font-display text-3xl font-bold text-white leading-none">20+</p>
                <p className="text-xs text-white/75 font-body mt-1">Years of Excellence</p>
              </div>
            </div>
          </Reveal>

          {/* Text */}
          <Reveal delay={0.15}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 mb-5 border"
              style={{ background: 'rgba(14,165,233,0.08)', borderColor: 'rgba(14,165,233,0.2)' }}>
              <span className="text-[11px] font-bold text-sky-600 font-body tracking-widest uppercase">About Us</span>
            </div>

            <h2 className="font-display font-bold text-slate-900 leading-tight mb-5"
              style={{ fontSize: 'clamp(26px,3.5vw,46px)' }}>
              Welcome to{' '}
              <span className="text-gradient">SmartLabTech</span>
            </h2>

            <p className="text-base text-slate-400 leading-relaxed mb-4 font-body">
              Since 2004, SmartLabTech has been the trusted partner for research institutions, pharmaceutical giants,
              and educational bodies seeking world-class laboratory equipment and scientific solutions.
            </p>
            <p className="text-base text-slate-400 leading-relaxed mb-7 font-body">
              We don't just supply equipment — we build long-term partnerships grounded in precision, reliability,
              and an unwavering commitment to advancing scientific discovery.
            </p>

            {/* Highlights */}
            <div className="flex flex-col gap-3 mb-8">
              {HIGHLIGHTS.map(h => (
                <div key={h} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="flex-shrink-0 mt-0.5 text-sky-400" />
                  <span className="text-sm text-slate-500 font-body leading-relaxed">{h}</span>
                </div>
              ))}
            </div>

            <button
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold text-white font-body border-none cursor-pointer transition-all"
              style={{ background: 'linear-gradient(135deg,#1e3a8a,#0ea5e9)', boxShadow: '0 6px 20px rgba(30,58,138,0.25)' }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 10px 28px rgba(30,58,138,0.35)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 6px 20px rgba(30,58,138,0.25)'; }}
            >
              More Info <ArrowRight size={15} />
            </button>
          </Reveal>
        </div>
      </div>
    </section>
  );
} 