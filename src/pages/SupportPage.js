import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import {
  ChevronDown, Phone, Mail, MapPin, Clock, Shield,
  Wrench, Settings, Microscope, FlaskConical, Package,
  Truck, FileText, CheckCircle, Headphones,
  BookOpen, Video, Users, Calendar,
  LifeBuoy, ClipboardCheck, Zap, ArrowRight
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const FontLink = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,600&family=Outfit:wght@300;400;500;600;700&display=swap');
  `}</style>
);

const FAQS = [
  {
    question: "What is the warranty period for your laboratory equipment?",
    answer: "We offer a standard 12-month warranty on all new laboratory equipment from the date of installation. Extended warranty options are available for purchase. Our warranty covers manufacturing defects and parts replacement under normal operating conditions."
  },
  {
    question: "How quickly can you respond to a service request?",
    answer: "Our service team responds within 24 hours of receiving a service request. For critical equipment breakdowns, we offer priority response within 4-6 hours in major cities. Our pan-India service network ensures minimal downtime for your laboratory operations."
  },
  {
    question: "Do you provide installation and commissioning services?",
    answer: "Yes, all equipment purchased from SmartLabtech includes professional installation and commissioning by our factory-trained engineers. We ensure proper setup, calibration, and basic user training before handing over the equipment."
  },
  {
    question: "What is included in your Annual Maintenance Contract (AMC)?",
    answer: "Our AMC includes preventive maintenance visits, priority service response, discounted spare parts, annual calibration, software updates, and 24/7 technical phone support. We offer both comprehensive and basic AMC plans to suit different budget requirements."
  },
  {
    question: "Do you offer calibration services for existing equipment?",
    answer: "Absolutely! We provide NABL-accredited calibration services for a wide range of laboratory instruments including balances, pH meters, spectrophotometers, and temperature-controlled equipment. On-site and in-lab calibration options are available."
  },
  {
    question: "Can you help with equipment relocation?",
    answer: "Yes, our team specializes in safe equipment shifting and re-installation. We handle the entire process including de-installation, packaging, transportation, re-installation, and post-move validation at the new location."
  },
  {
    question: "What is IQ/OQ validation and do you provide it?",
    answer: "IQ (Installation Qualification) and OQ (Operational Qualification) are documented verification processes required for GMP compliance. We provide comprehensive IQ/OQ services following industry standards, complete with documentation suitable for regulatory audits."
  },
  {
    question: "Do you provide training for laboratory staff?",
    answer: "Yes, we offer both on-site and off-site training programs. Our training covers equipment operation, routine maintenance, troubleshooting, and safety procedures. Customized training sessions can be arranged based on your specific requirements."
  }
];

const SERVICES = [
  { icon: Wrench, title: 'Installation & Commissioning', desc: 'Professional setup and commissioning by factory-trained engineers' },
  { icon: Settings, title: 'On-site Repair', desc: 'Fast response repair services at your facility' },
  { icon: ClipboardCheck, title: 'Calibration & Testing', desc: 'NABL-accredited calibration services' },
  { icon: FileText, title: 'AMC Services', desc: 'Comprehensive annual maintenance contracts' },
  { icon: CheckCircle, title: 'IQ / OQ Validation', desc: 'GMP-compliant validation documentation' },
  { icon: Package, title: 'Spare Parts Support', desc: 'Genuine spare parts with quick delivery' },
  { icon: Zap, title: 'Customization', desc: 'Equipment modifications for specific needs' },
  { icon: Truck, title: 'Equipment Shifting', desc: 'Safe relocation and re-installation services' }
];

const FEATURES = [
  { icon: Headphones, title: '24/7 Support', desc: 'Round-the-clock technical assistance' },
  { icon: Users, title: 'Expert Team', desc: 'Factory-trained certified technicians' },
  { icon: MapPin, title: 'Pan-India Network', desc: 'Service coverage across India' },
  { icon: Clock, title: 'Quick Response', desc: '4-6 hour response time' }
];

const APPLAB_SERVICES = [
  { icon: Microscope, title: 'Sample Analysis', desc: 'Professional sample testing and analysis' },
  { icon: Video, title: 'Demonstrations', desc: 'Live equipment demonstrations' },
  { icon: BookOpen, title: 'E-Learning', desc: 'Online training resources' },
  { icon: FlaskConical, title: 'Method Development', desc: 'Custom method optimization' },
  { icon: Zap, title: 'Troubleshooting', desc: 'Expert problem-solving support' },
  { icon: Calendar, title: 'Training Sessions', desc: 'Interactive workshops' }
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
        className="w-full py-5 flex items-center justify-between text-left hover:text-blue-700 transition-colors group"
      >
        <span className="text-base sm:text-lg font-semibold text-slate-800 group-hover:text-blue-700 pr-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
          {faq.question}
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
            <p className="pb-5 text-sm text-slate-500 leading-relaxed" style={{ fontFamily: "'Outfit', sans-serif" }}>
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function ServiceCard({ service, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl p-6 border border-slate-100 hover:shadow-xl hover:border-blue-200 transition-all duration-300 group"
    >
      <div className="w-12 h-12 rounded-xl bg-[linear-gradient(135deg,rgba(15,35,86,0.1)_0%,rgba(30,58,138,0.08)_50%,rgba(14,165,233,0.1)_100%)] flex items-center justify-center mb-4 group-hover:bg-[linear-gradient(135deg,rgba(15,35,86,0.95)_0%,rgba(30,58,138,0.9)_50%,rgba(14,165,233,0.95)_100%)] transition-all duration-300">
        <service.icon size={22} className="text-blue-700 group-hover:text-white transition-all duration-300" />
      </div>
      <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-blue-700 transition-colors" style={{ fontFamily: "'Playfair Display', serif" }}>
        {service.title}
      </h3>
      <p className="text-sm text-slate-500 leading-relaxed" style={{ fontFamily: "'Outfit', sans-serif" }}>
        {service.desc}
      </p>
    </motion.div>
  );
}

function FeatureCard({ feature, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="text-center"
    >
      <div className="w-14 h-14 rounded-full bg-[linear-gradient(135deg,rgba(15,35,86,0.95)_0%,rgba(30,58,138,0.9)_50%,rgba(14,165,233,0.95)_100%)] flex items-center justify-center mx-auto mb-3 shadow-lg">
        <feature.icon size={24} className="text-white" />
      </div>
      <h4 className="font-bold text-slate-800 mb-1" style={{ fontFamily: "'Outfit', sans-serif" }}>{feature.title}</h4>
      <p className="text-xs text-slate-500" style={{ fontFamily: "'Outfit', sans-serif" }}>{feature.desc}</p>
    </motion.div>
  );
}

function AppLabCard({ service, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
      viewport={{ once: true }}
      className="flex items-center gap-3 p-3 rounded-xl bg-white/50 hover:bg-white transition-all group cursor-pointer"
    >
      <div className="w-10 h-10 rounded-lg bg-[linear-gradient(135deg,rgba(15,35,86,0.1)_0%,rgba(30,58,138,0.08)_50%,rgba(14,165,233,0.1)_100%)] flex items-center justify-center group-hover:bg-[linear-gradient(135deg,rgba(15,35,86,0.95)_0%,rgba(30,58,138,0.9)_50%,rgba(14,165,233,0.95)_100%)] transition-colors">
        <service.icon size={18} className="text-blue-600 group-hover:text-white transition-colors" />
      </div>
      <span className="text-sm font-medium text-slate-700 group-hover:text-blue-700" style={{ fontFamily: "'Outfit', sans-serif" }}>
        {service.title}
      </span>
    </motion.div>
  );
}

export default function Support() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  return (
    <>
      <FontLink />
      <Navbar />

      {/* Hero Section with Customer Support Background Image */}
      <section ref={heroRef} className="relative overflow-hidden" style={{ minHeight: 'clamp(580px, 85vh, 820px)' }}>
        {/* Parallax background image - New customer support image */}
        <motion.div className="absolute inset-0" style={{ y: imgY }}>
          <img
            src="https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Customer Support Team"
            className="w-full h-full object-cover object-center scale-110"
          />
          {/* Hero overlay with premium gradient */}
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(15,35,86,0.88)_0%,rgba(30,58,138,0.72)_50%,rgba(14,165,233,0.82)_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_top,#0f2356_0%,transparent_55%)]" />
        </motion.div>

        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-30 pointer-events-none" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
          backgroundSize: '64px 64px'
        }} />

        {/* Blue radial accent */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none bg-gradient-to-bl from-sky-500/10 to-transparent rounded-full blur-3xl" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-20 flex flex-col justify-center h-full"
          style={{ paddingTop: 'clamp(80px,12vw,140px)', paddingBottom: 'clamp(60px,10vw,120px)' }}>

          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-8 h-px bg-sky-400" />
            <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-sky-300" style={{ fontFamily: "'Outfit', sans-serif" }}>
              SmartLabTech · Customer Support
            </span>
          </motion.div>

          {/* Headline with gradient text */}
          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-bold text-white leading-[0.92] mb-6"
            style={{ fontFamily: "'Playfair Display', serif", letterSpacing: '-0.02em' }}
          >
            We're Here to{' '}
            <span className="bg-gradient-to-r from-sky-300 to-blue-300 bg-clip-text text-transparent">
              Help You
            </span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.22 }}
            className="text-base sm:text-lg leading-relaxed mb-10 max-w-lg text-white/80" style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Our team of experienced, factory-trained, certified service technicians are committed to support your service needs across India.
          </motion.p>

          {/* CTA row - Premium buttons with shine effect */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.34 }}
            className="flex flex-wrap gap-3"
          >
            <a
              href="tel:+914023774310"
              className="relative overflow-hidden inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-white bg-[linear-gradient(135deg,rgba(15,35,86,0.95)_0%,rgba(30,58,138,0.9)_50%,rgba(14,165,233,0.95)_100%)] hover:shadow-lg hover:-translate-y-0.5 transition-all before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-white/20 before:to-transparent before:transition-transform before:duration-500 hover:before:translate-x-0"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              <Phone size={15} /> +91 40 23 774310
            </a>
            <a
              href="mailto:info@smartlabtech.net"
              className="relative overflow-hidden inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold bg-white/10 border border-white/20 text-white hover:bg-white/20 hover:-translate-y-0.5 transition-all before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-white/20 before:to-transparent before:transition-transform before:duration-500 hover:before:translate-x-0"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              <Mail size={14} /> info@smartlabtech.net
            </a>
          </motion.div>
        </div>
      </section>

      {/* Features Section - Premium gradient backgrounds */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-20">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {FEATURES.map((feature, i) => (
              <Reveal key={feature.title} delay={i * 0.08}>
                <div className="bg-[linear-gradient(135deg,rgba(15,35,86,0.05)_0%,rgba(30,58,138,0.03)_50%,rgba(14,165,233,0.05)_100%)] rounded-2xl p-5 flex items-center gap-4 hover:shadow-md transition-all">
                  <div className="w-11 h-11 rounded-xl bg-[linear-gradient(135deg,rgba(15,35,86,0.15)_0%,rgba(30,58,138,0.1)_50%,rgba(14,165,233,0.15)_100%)] flex items-center justify-center">
                    <feature.icon size={18} className="text-blue-700" />
                  </div>
                  <div>
                    <p className="text-lg font-bold text-blue-700 leading-none" style={{ fontFamily: "'Playfair Display', serif" }}>{feature.title}</p>
                    <p className="text-[11px] text-slate-400 font-medium mt-0.5 tracking-wide" style={{ fontFamily: "'Outfit', sans-serif" }}>{feature.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-20">
          <Reveal className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-3">
              <div className="w-8 h-px bg-blue-600" />
              <span className="text-[10px] font-semibold tracking-[0.25em] uppercase text-blue-600" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Our Services
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900" style={{ fontFamily: "'Playfair Display', serif" }}>
              Comprehensive{' '}
              <span className="bg-gradient-to-r from-blue-700 to-sky-500 bg-clip-text text-transparent">Support Solutions</span>
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto mt-3" style={{ fontFamily: "'Outfit', sans-serif" }}>
              From installation to maintenance, we provide end-to-end service support for all your laboratory equipment needs
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {SERVICES.map((service, i) => (
              <ServiceCard key={service.title} service={service} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Service Life Cycle Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-20">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <Reveal className="flex-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[linear-gradient(135deg,rgba(15,35,86,0.1)_0%,rgba(30,58,138,0.08)_50%,rgba(14,165,233,0.1)_100%)] text-blue-700 text-xs font-semibold mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
                <Shield size={12} /> For Better Performance
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                Service Life Cycle Management
              </h3>
              <p className="text-slate-500 leading-relaxed mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Service life cycle management is a critical element in pharma, biopharma, university, or food & beverage industries, while purchasing an equipment.
              </p>
              <p className="text-slate-500 leading-relaxed" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Service life cycle management starts with the proper installation of the equipment and basic user training, which is followed by routine preventative maintenance visits. These services will increase the longevity of the unit, while reducing down time and limiting product loss.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-2">
                  <CheckCircle size={18} className="text-emerald-500" />
                  <span className="text-sm text-slate-600" style={{ fontFamily: "'Outfit', sans-serif" }}>Proper Installation</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={18} className="text-emerald-500" />
                  <span className="text-sm text-slate-600" style={{ fontFamily: "'Outfit', sans-serif" }}>User Training</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={18} className="text-emerald-500" />
                  <span className="text-sm text-slate-600" style={{ fontFamily: "'Outfit', sans-serif" }}>Preventive Maintenance</span>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2} className="flex-1">
              <div className="bg-[linear-gradient(135deg,rgba(15,35,86,0.05)_0%,rgba(30,58,138,0.03)_50%,rgba(14,165,233,0.05)_100%)] rounded-2xl p-6 border border-blue-100">
                <div className="flex items-center gap-3 mb-4">
                  <LifeBuoy size={28} className="text-blue-600" />
                  <h4 className="text-xl font-bold text-slate-800" style={{ fontFamily: "'Playfair Display', serif" }}>Our Commitment</h4>
                </div>
                <p className="text-slate-600 leading-relaxed" style={{ fontFamily: "'Outfit', sans-serif" }}>
                  SmartLabtech boasts an extensive customer service network, to guarantee you competent assistance on site, anywhere, any time. Our friendly customer service experts are always available for personal consultation. We serve customers around India with service contracts and a full range of services.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Smart Application Lab Section - Premium gradient */}
      <section className="py-16 bg-[linear-gradient(135deg,rgba(15,35,86,0.95)_0%,rgba(30,58,138,0.9)_50%,rgba(14,165,233,0.95)_100%)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-20">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-semibold mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
              <FlaskConical size={12} /> Smart Application Lab
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Step into Our{' '}
              <span className="bg-gradient-to-r from-sky-200 to-blue-200 bg-clip-text text-transparent">Application Lab</span>
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Newly expanded and redesigned, staffed with a team of leading experts — the place where we make ideas happen.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {APPLAB_SERVICES.map((service, i) => (
              <AppLabCard key={service.title} service={service} index={i} />
            ))}
          </div>

          <Reveal className="mt-10">
            <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
              <p className="text-white/90 text-center text-sm leading-relaxed" style={{ fontFamily: "'Outfit', sans-serif" }}>
                At our Application Lab, customers can participate in training sessions, demonstrations and customization exercises through a series of interactive sessions, presentations, and sample preparation designed to address their unique needs.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 lg:px-20">
          <Reveal className="text-center mb-10">
            <div className="flex items-center justify-center gap-2 mb-3">
              <div className="w-8 h-px bg-blue-600" />
              <span className="text-[10px] font-semibold tracking-[0.25em] uppercase text-blue-600" style={{ fontFamily: "'Outfit', sans-serif" }}>
                FAQ
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900" style={{ fontFamily: "'Playfair Display', serif" }}>
              Frequently Asked{' '}
              <span className="bg-gradient-to-r from-blue-700 to-sky-500 bg-clip-text text-transparent">Questions</span>
            </h2>
            <p className="text-slate-500 mt-3" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Find answers to common questions about our services and support
            </p>
          </Reveal>

          <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
            {FAQS.map((faq, i) => (
              <FAQItem key={i} faq={faq} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section - Premium gradient */}
      <Reveal>
        <div className="py-16 px-4 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-20">
            <div className="rounded-2xl p-8 sm:p-12 flex flex-wrap items-center justify-between gap-6 bg-[linear-gradient(135deg,rgba(15,35,86,0.95)_0%,rgba(30,58,138,0.9)_50%,rgba(14,165,233,0.95)_100%)] shadow-xl">
              <div>
                <p className="text-[11px] font-bold text-sky-200 tracking-widest uppercase mb-2" style={{ fontFamily: "'Outfit', sans-serif" }}>Need Help with Analytical Challenges?</p>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>Contact us for technical assistance!</h3>
                <p className="text-sm text-white/70 max-w-sm" style={{ fontFamily: "'Outfit', sans-serif" }}>
                  Our experts are ready to help you find the right solution.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="mailto:info@smartlabtech.net"
                  className="relative overflow-hidden inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-[linear-gradient(135deg,rgba(15,35,86,0.95)_0%,rgba(30,58,138,0.9)_50%,rgba(14,165,233,0.95)_100%)] hover:shadow-lg hover:-translate-y-0.5 transition-all before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-white/20 before:to-transparent before:transition-transform before:duration-500 hover:before:translate-x-0"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  <Mail size={15} /> info@smartlabtech.net
                </a>
                <a
                  href="tel:+914023774310"
                  className="relative overflow-hidden inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-white border-2 border-white/30 hover:bg-white/10 hover:-translate-y-0.5 transition-all before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-white/20 before:to-transparent before:transition-transform before:duration-500 hover:before:translate-x-0"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  <Phone size={15} /> +91 40 23 774310
                </a>
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      <Footer />
    </>
  );
}