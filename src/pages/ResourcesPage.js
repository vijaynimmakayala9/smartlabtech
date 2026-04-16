import React, { useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { 
  FaFilePdf, FaVideo, FaBookOpen, FaToolbox, FaChartLine, 
  FaShieldAlt, FaDownload, FaPlay, FaArrowRight, FaSearch,
  FaMicroscope, FaFlask, FaCogs, FaTachometerAlt, FaCheckCircle,
  FaNewspaper, FaRegFileAlt, FaUserTie, FaIndustry, FaQuestionCircle, FaAward
} from "react-icons/fa";
import { 
  ChevronDown, Download, Eye, FileText, BookOpen, 
  Video, Shield, Award, Users, Calendar
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

/* ─── Google Fonts (only font import, no custom CSS classes) ─────────── */
const FontLink = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,600&family=Outfit:wght@300;400;500;600;700&display=swap');
  `}</style>
);

// Technical Articles Data
const articles = [
  {
    title: "How to Select the Right Analytical Balance",
    category: "Equipment Selection",
    readTime: "5 min read",
    excerpt: "Learn the key factors to consider when choosing an analytical balance for your laboratory, including precision, capacity, and calibration requirements.",
    image: "https://images.pexels.com/photos/256262/pexels-photo-256262.jpeg?auto=compress&cs=tinysrgb&w=400",
    link: "#"
  },
  {
    title: "Why Calibration is Critical in Laboratories",
    category: "Calibration",
    readTime: "4 min read",
    excerpt: "Understanding the importance of regular calibration for accurate results and regulatory compliance in research and quality control.",
    image: "https://images.pexels.com/photos/256264/pexels-photo-256264.jpeg?auto=compress&cs=tinysrgb&w=400",
    link: "#"
  },
  {
    title: "Essential Maintenance Tips for Lab Equipment",
    category: "Maintenance",
    readTime: "6 min read",
    excerpt: "Proactive maintenance strategies to extend equipment life, reduce downtime, and ensure consistent performance.",
    image: "https://images.pexels.com/photos/4050301/pexels-photo-4050301.jpeg?auto=compress&cs=tinysrgb&w=400",
    link: "#"
  },
  {
    title: "Laboratory Safety Guidelines: Best Practices",
    category: "Safety",
    readTime: "7 min read",
    excerpt: "Comprehensive safety protocols for laboratory operations, including chemical handling, equipment usage, and emergency procedures.",
    image: "https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=400",
    link: "#"
  }
];

// Product Brochures
const brochures = [
  { name: "Analytical Balances - Product Catalog", type: "PDF", size: "2.4 MB", icon: FaFilePdf },
  { name: "Brookfield Viscometers - Technical Specs", type: "PDF", size: "1.8 MB", icon: FaFilePdf },
  { name: "Laboratory Incubators - Brochure", type: "PDF", size: "3.1 MB", icon: FaFilePdf },
  { name: "Biosafety Cabinets - Product Guide", type: "PDF", size: "2.2 MB", icon: FaFilePdf },
  { name: "Gas Chromatography - Catalog", type: "PDF", size: "4.0 MB", icon: FaFilePdf },
  { name: "Centrifuges - Technical Documentation", type: "PDF", size: "1.5 MB", icon: FaFilePdf },
];

// Service Documents
const serviceDocs = [
  { name: "Annual Maintenance Contract (AMC) Details", icon: FaFilePdf },
  { name: "Service Process & SLA Guidelines", icon: FaFilePdf },
  { name: "Installation & Commissioning Guide", icon: FaFilePdf },
  { name: "Preventive Maintenance Checklist", icon: FaFilePdf },
  { name: "Calibration Service Brochure", icon: FaFilePdf },
  { name: "Warranty Terms & Conditions", icon: FaFilePdf },
];

// Videos
const videos = [
  { title: "Product Demo: Analytical Balance", duration: "3:45", icon: FaPlay },
  { title: "Installation Guide: Biosafety Cabinet", duration: "5:20", icon: FaPlay },
  { title: "SmartLabtech - Company Introduction", duration: "2:30", icon: FaPlay },
  { title: "Calibration Process Explained", duration: "4:15", icon: FaPlay },
];

// Case Studies
const caseStudies = [
  {
    title: "Pharmaceutical Quality Control Enhancement",
    industry: "Pharma",
    description: "How our analytical instruments improved testing accuracy by 40% at a leading pharma company.",
    icon: FaFlask
  },
  {
    title: "Research Laboratory Efficiency Upgrade",
    industry: "Research",
    description: "Streamlined workflows and reduced downtime through our integrated equipment solutions.",
    icon: FaMicroscope
  },
  {
    title: "Food & Beverage Testing Laboratory",
    industry: "Food & Beverage",
    description: "Implementation of quality control systems for regulatory compliance.",
    icon: FaIndustry
  },
];

// FAQs
const faqs = [
  { q: "How often should laboratory equipment be calibrated?", a: "Calibration frequency depends on equipment type, usage intensity, and regulatory requirements. Typically, annual calibration is recommended, but high-precision instruments may require semi-annual or quarterly calibration." },
  { q: "What is included in your Annual Maintenance Contract (AMC)?", a: "Our AMC includes preventive maintenance visits, priority service response, discounted spare parts, annual calibration, software updates, and 24/7 technical phone support." },
  { q: "How do I choose the right instrument for my application?", a: "Consider factors like accuracy requirements, sample volume, throughput needs, budget, and regulatory compliance. Our technical experts can help you make the right choice." },
  { q: "Do you provide training for new equipment?", a: "Yes, we provide comprehensive on-site and remote training for all equipment we supply, including operation, maintenance, and safety procedures." },
  { q: "What is your service response time?", a: "Our standard response time is within 24 hours. For critical equipment, we offer priority response within 4-6 hours in major cities." },
];

// Certifications
const certifications = [
  { name: "ISO 9001:2015 Certified", icon: FaShieldAlt },
  { name: "NABL Accreditation", icon: FaAward },
  { name: "CE Certified Products", icon: FaCheckCircle },
  { name: "Quality Management System", icon: FaTachometerAlt },
];

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

function FAQItem({ faq, index }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      viewport={{ once: true }}
      className="border-b border-slate-200 last:border-b-0"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-4 flex items-center justify-between text-left hover:text-blue-700 transition-colors group"
      >
        <span className="text-sm font-semibold text-slate-800 group-hover:text-blue-700 pr-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
          {faq.q}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-colors ${
            isOpen ? 'bg-[linear-gradient(135deg,rgba(15,35,86,0.95)_0%,rgba(30,58,138,0.9)_50%,rgba(14,165,233,0.95)_100%)] text-white' : 'bg-slate-100 text-slate-500'
          }`}
        >
          <ChevronDown size={14} />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-4 text-sm text-slate-500 leading-relaxed" style={{ fontFamily: "'Outfit', sans-serif" }}>
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

const ResourcesPage = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  return (
    <>
      <FontLink />
      <Navbar />

      {/* Hero Section */}
      <section ref={heroRef} className="relative overflow-hidden" style={{ minHeight: 'clamp(580px, 85vh, 820px)' }}>
        <motion.div className="absolute inset-0" style={{ y: imgY }}>
          <img
            src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Resources"
            className="w-full h-full object-cover object-center scale-110"
          />
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(15,35,86,0.88)_0%,rgba(30,58,138,0.72)_50%,rgba(14,165,233,0.82)_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_top,#0f2356_0%,transparent_55%)]" />
        </motion.div>

        <div className="absolute inset-0 opacity-30 pointer-events-none" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
          backgroundSize: '64px 64px'
        }} />

        <div className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none bg-gradient-to-bl from-sky-500/10 to-transparent rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-20 flex flex-col justify-center items-center text-center h-full"
          style={{ paddingTop: 'clamp(80px,12vw,140px)', paddingBottom: 'clamp(60px,10vw,120px)' }}>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <div className="w-8 h-px bg-sky-400" />
            <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-sky-300" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Knowledge Hub
            </span>
            <div className="w-8 h-px bg-sky-400" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-bold text-white leading-[1.1] mb-6 text-center"
            style={{ fontFamily: "'Playfair Display', serif", letterSpacing: '-0.02em' }}
          >
            Resources{' '}
            <span className="bg-gradient-to-r from-sky-300 to-blue-300 bg-clip-text text-transparent">
              Library
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.22 }}
            className="text-base sm:text-lg leading-relaxed mb-10 max-w-2xl text-white/80 text-center mx-auto" 
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Access technical articles, product brochures, service documents, and educational resources to support your laboratory operations.
          </motion.p>
        </div>
      </section>

      {/* Quick Links Navigation */}
      <section className="bg-white py-8 border-b border-slate-100 sticky top-0 z-40 bg-white/95 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-20">
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { href: "#articles", label: "Technical Articles", icon: FaNewspaper },
              { href: "#brochures", label: "Brochures", icon: FaFilePdf },
              { href: "#service-docs", label: "Service Docs", icon: FaToolbox },
              { href: "#videos", label: "Videos", icon: FaVideo },
              { href: "#case-studies", label: "Case Studies", icon: FaChartLine },
              { href: "#faq", label: "FAQ", icon: FaQuestionCircle },
              { href: "#certifications", label: "Certifications", icon: FaShieldAlt },
            ].map((item, i) => (
              <a
                key={i}
                href={item.href}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium text-slate-600 hover:text-blue-600 hover:bg-blue-50 transition-all"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                <item.icon size={14} /> {item.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 1. Technical Articles Section */}
      <section id="articles" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-20">
          <Reveal className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-3">
              <div className="w-8 h-px bg-blue-600" />
              <span className="text-[10px] font-semibold tracking-[0.25em] uppercase text-blue-600" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Technical Articles
              </span>
              <div className="w-8 h-px bg-blue-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
              Latest <span className="bg-gradient-to-r from-blue-700 to-sky-500 bg-clip-text text-transparent">Insights</span>
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Expert knowledge and best practices for laboratory professionals
            </p>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {articles.map((article, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="group bg-white rounded-2xl overflow-hidden border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className="h-40 overflow-hidden">
                    <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[10px] font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">{article.category}</span>
                      <span className="text-[10px] text-slate-400">{article.readTime}</span>
                    </div>
                    <h3 className="font-semibold text-slate-800 mb-2 line-clamp-2" style={{ fontFamily: "'Playfair Display', serif" }}>{article.title}</h3>
                    <p className="text-slate-500 text-xs mb-3 line-clamp-2" style={{ fontFamily: "'Outfit', sans-serif" }}>{article.excerpt}</p>
                    <a href={article.link} className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 hover:gap-2 transition-all">
                      Read More <FaArrowRight size={10} />
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Product Brochures Section */}
      <section id="brochures" className="py-20 bg-[linear-gradient(135deg,rgba(15,35,86,0.05)_0%,rgba(30,58,138,0.03)_50%,rgba(14,165,233,0.05)_100%)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-20">
          <Reveal className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-3">
              <div className="w-8 h-px bg-blue-600" />
              <span className="text-[10px] font-semibold tracking-[0.25em] uppercase text-blue-600" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Product Brochures
              </span>
              <div className="w-8 h-px bg-blue-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
              Download <span className="bg-gradient-to-r from-blue-700 to-sky-500 bg-clip-text text-transparent">Product Literature</span>
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Detailed specifications and technical information for our product range
            </p>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {brochures.map((brochure, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 flex items-center justify-between border border-slate-100 hover:border-blue-200 hover:shadow-md transition-all duration-300 group">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center">
                      <brochure.icon size={20} className="text-red-500" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-slate-700 group-hover:text-blue-700 transition-colors" style={{ fontFamily: "'Outfit', sans-serif" }}>{brochure.name}</h4>
                      <p className="text-[10px] text-slate-400">{brochure.type} • {brochure.size}</p>
                    </div>
                  </div>
                  <a href="#" className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-all">
                    <Download size={14} />
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Service Documents Section */}
      <section id="service-docs" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-20">
          <Reveal className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-3">
              <div className="w-8 h-px bg-blue-600" />
              <span className="text-[10px] font-semibold tracking-[0.25em] uppercase text-blue-600" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Service Documents
              </span>
              <div className="w-8 h-px bg-blue-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
              Support <span className="bg-gradient-to-r from-blue-700 to-sky-500 bg-clip-text text-transparent">Documentation</span>
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Service guides, maintenance checklists, and AMC information
            </p>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {serviceDocs.map((doc, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 flex items-center justify-between border border-slate-100 hover:border-blue-200 hover:shadow-md transition-all duration-300 group">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                      <doc.icon size={20} className="text-blue-600" />
                    </div>
                    <h4 className="text-sm font-semibold text-slate-700 group-hover:text-blue-700 transition-colors" style={{ fontFamily: "'Outfit', sans-serif" }}>{doc.name}</h4>
                  </div>
                  <a href="#" className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-all">
                    <Download size={14} />
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Videos Section */}
      <section id="videos" className="py-20 bg-[linear-gradient(135deg,rgba(15,35,86,0.05)_0%,rgba(30,58,138,0.03)_50%,rgba(14,165,233,0.05)_100%)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-20">
          <Reveal className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-3">
              <div className="w-8 h-px bg-blue-600" />
              <span className="text-[10px] font-semibold tracking-[0.25em] uppercase text-blue-600" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Video Library
              </span>
              <div className="w-8 h-px bg-blue-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
              Watch <span className="bg-gradient-to-r from-blue-700 to-sky-500 bg-clip-text text-transparent">Product Demos</span>
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Visual guides and product demonstrations
            </p>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {videos.map((video, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="group bg-white rounded-2xl overflow-hidden border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                  <div className="relative h-32 bg-gradient-to-br from-blue-900 to-sky-600 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                      <video.icon size={24} className="text-white ml-1" />
                    </div>
                  </div>
                  <div className="p-4">
                    <h4 className="text-sm font-semibold text-slate-800 mb-1" style={{ fontFamily: "'Outfit', sans-serif" }}>{video.title}</h4>
                    <p className="text-[10px] text-slate-400">{video.duration}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Case Studies Section */}
      <section id="case-studies" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-20">
          <Reveal className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-3">
              <div className="w-8 h-px bg-blue-600" />
              <span className="text-[10px] font-semibold tracking-[0.25em] uppercase text-blue-600" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Case Studies
              </span>
              <div className="w-8 h-px bg-blue-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
              Real-World <span className="bg-gradient-to-r from-blue-700 to-sky-500 bg-clip-text text-transparent">Applications</span>
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Success stories from our clients across various industries
            </p>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6">
            {caseStudies.map((study, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-[linear-gradient(135deg,rgba(15,35,86,0.1)_0%,rgba(30,58,138,0.08)_50%,rgba(14,165,233,0.1)_100%)] flex items-center justify-center mb-4">
                    <study.icon size={22} className="text-blue-600" />
                  </div>
                  <span className="text-[10px] font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full inline-block mb-3">{study.industry}</span>
                  <h3 className="text-lg font-bold text-slate-800 mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>{study.title}</h3>
                  <p className="text-slate-500 text-sm mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>{study.description}</p>
                  <a href="#" className="inline-flex items-center gap-1 text-sm font-semibold text-blue-600 hover:gap-2 transition-all">
                    Read Case Study <FaArrowRight size={12} />
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FAQ Section */}
      <section id="faq" className="py-20 bg-[linear-gradient(135deg,rgba(15,35,86,0.05)_0%,rgba(30,58,138,0.03)_50%,rgba(14,165,233,0.05)_100%)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 lg:px-20">
          <Reveal className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-3">
              <div className="w-8 h-px bg-blue-600" />
              <span className="text-[10px] font-semibold tracking-[0.25em] uppercase text-blue-600" style={{ fontFamily: "'Outfit', sans-serif" }}>
                FAQ
              </span>
              <div className="w-8 h-px bg-blue-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
              Frequently Asked <span className="bg-gradient-to-r from-blue-700 to-sky-500 bg-clip-text text-transparent">Questions</span>
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Find answers to common questions about our products and services
            </p>
          </Reveal>

          <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
            {faqs.map((faq, i) => (
              <FAQItem key={i} faq={faq} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* 7. Certifications Section */}
      <section id="certifications" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-20">
          <Reveal className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-3">
              <div className="w-8 h-px bg-blue-600" />
              <span className="text-[10px] font-semibold tracking-[0.25em] uppercase text-blue-600" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Certifications & Quality
              </span>
              <div className="w-8 h-px bg-blue-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
              Our <span className="bg-gradient-to-r from-blue-700 to-sky-500 bg-clip-text text-transparent">Accreditations</span>
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Committed to quality and compliance with international standards
            </p>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {certifications.map((cert, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="bg-[linear-gradient(135deg,rgba(15,35,86,0.05)_0%,rgba(30,58,138,0.03)_50%,rgba(14,165,233,0.05)_100%)] rounded-2xl p-6 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-blue-200">
                  <div className="w-14 h-14 rounded-xl bg-[linear-gradient(135deg,rgba(15,35,86,0.15)_0%,rgba(30,58,138,0.1)_50%,rgba(14,165,233,0.15)_100%)] flex items-center justify-center mx-auto mb-4">
                    <cert.icon size={26} className="text-blue-600" />
                  </div>
                  <h4 className="font-semibold text-slate-700 text-sm" style={{ fontFamily: "'Outfit', sans-serif" }}>{cert.name}</h4>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <Reveal>
        <div className="py-20 px-4 bg-[linear-gradient(135deg,rgba(15,35,86,0.05)_0%,rgba(30,58,138,0.03)_50%,rgba(14,165,233,0.05)_100%)]">
          <div className="max-w-4xl mx-auto text-center">
            <div className="rounded-3xl p-12 bg-[linear-gradient(135deg,rgba(15,35,86,0.95)_0%,rgba(30,58,138,0.9)_50%,rgba(14,165,233,0.95)_100%)] shadow-xl">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                Need Personalized Assistance?
              </h2>
              <p className="text-white/80 mb-6 max-w-md mx-auto text-sm" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Our technical experts are ready to help you find the right solution for your laboratory needs.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <a href="/contact" className="relative overflow-hidden inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-blue-900 bg-white hover:shadow-lg hover:-translate-y-0.5 transition-all before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-blue-100 before:to-transparent before:transition-transform before:duration-500 hover:before:translate-x-0">
                  Contact Our Experts <FaArrowRight size={12} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      <Footer />
    </>
  );
};

export default ResourcesPage;