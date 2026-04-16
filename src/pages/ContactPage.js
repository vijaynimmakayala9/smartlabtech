// import React from "react";
// import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

// const ContactPage = () => {
//   return (
//     <>
//       <Navbar />
//       <div className="bg-gradient-to-br from-slate-50 via-sky-50/40 to-blue-50/60 text-slate-800 font-['Sora',sans-serif] min-h-screen overflow-x-hidden">
//         <style>{`
//           @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&family=Space+Mono:wght@400;700&display=swap');

//           .glass-card {
//             background: rgba(255,255,255,0.65);
//             backdrop-filter: blur(20px);
//             -webkit-backdrop-filter: blur(20px);
//             border: 1px solid rgba(255,255,255,0.8);
//             box-shadow: 0 4px 24px rgba(14,165,233,0.07), 0 1.5px 6px rgba(0,0,0,0.04);
//           }
//           .glass-card-strong {
//             background: rgba(255,255,255,0.80);
//             backdrop-filter: blur(28px);
//             -webkit-backdrop-filter: blur(28px);
//             border: 1px solid rgba(255,255,255,0.9);
//             box-shadow: 0 8px 40px rgba(14,165,233,0.10), 0 2px 10px rgba(0,0,0,0.05);
//           }
//           .mesh-bg {
//             background:
//               radial-gradient(ellipse 70% 50% at 50% 0%, rgba(56,189,248,0.13) 0%, transparent 70%),
//               radial-gradient(ellipse 50% 40% at 80% 30%, rgba(99,102,241,0.07) 0%, transparent 60%);
//           }
//           .glow-line {
//             background: linear-gradient(90deg, transparent, rgba(56,189,248,0.35), transparent);
//             height: 1px;
//           }
//           .input-field {
//             width: 100%;
//             background: rgba(255,255,255,0.75);
//             border: 1px solid rgba(148,163,184,0.3);
//             color: #1e293b;
//             border-radius: 12px;
//             padding: 14px 20px;
//             font-size: 14px;
//             font-family: 'Sora', sans-serif;
//             outline: none;
//             transition: border-color 0.2s ease, box-shadow 0.2s ease;
//             backdrop-filter: blur(8px);
//           }
//           .input-field::placeholder { color: rgba(100,116,139,0.55); }
//           .input-field:focus {
//             border-color: rgba(56,189,248,0.6);
//             box-shadow: 0 0 0 3px rgba(56,189,248,0.1);
//             background: rgba(255,255,255,0.95);
//           }
//           .contact-card {
//             transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
//           }
//           .contact-card:hover {
//             transform: translateY(-3px);
//             box-shadow: 0 12px 40px rgba(14,165,233,0.13);
//             border-color: rgba(56,189,248,0.45) !important;
//           }
//           .send-btn {
//             width: 100%;
//             background: linear-gradient(135deg, #0369a1 0%, #0ea5e9 60%, #38bdf8 100%);
//             background-size: 200%;
//             color: white;
//             padding: 14px;
//             border-radius: 12px;
//             font-weight: 600;
//             font-size: 14px;
//             font-family: 'Sora', sans-serif;
//             border: none;
//             cursor: pointer;
//             letter-spacing: 0.02em;
//             transition: background-position 0.4s ease, transform 0.2s ease, box-shadow 0.2s ease;
//           }
//           .send-btn:hover {
//             background-position: right;
//             transform: translateY(-1px);
//             box-shadow: 0 8px 30px rgba(14,165,233,0.35);
//           }
//           .info-icon-wrap {
//             width: 44px; height: 44px; border-radius: 12px; flex-shrink: 0;
//             background: linear-gradient(135deg, rgba(224,242,254,0.9), rgba(186,230,255,0.7));
//             border: 1px solid rgba(56,189,248,0.25);
//             display: flex; align-items: center; justify-content: center;
//             color: #0ea5e9; font-size: 14px;
//           }
//           .dot-pattern {
//             background-image: radial-gradient(circle, rgba(148,163,184,0.2) 1px, transparent 1px);
//             background-size: 24px 24px;
//           }
//         `}</style>

//         {/* ── HERO ── */}
//         <div className="relative mesh-bg dot-pattern pt-28 pb-20 px-6 text-center overflow-hidden">
//           {/* Decorative rings */}
//           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-sky-200/40 pointer-events-none" />
//           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] rounded-full border border-sky-300/30 pointer-events-none" />

//           {/* Blurred blobs */}
//           <div className="absolute top-10 left-1/4 w-56 h-56 bg-sky-200/30 rounded-full blur-3xl pointer-events-none" />
//           <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-blue-200/25 rounded-full blur-3xl pointer-events-none" />

//           <div className="relative z-10 max-w-3xl mx-auto">
//             <span className="inline-block text-sky-600 text-xs font-semibold tracking-[0.2em] uppercase mb-5 px-4 py-1.5 rounded-full border border-sky-300/60 bg-sky-50/80 backdrop-blur-sm shadow-sm">
//               We're Here to Help
//             </span>
//             <h1 className="text-5xl md:text-6xl font-bold leading-[1.1] mb-5 tracking-tight text-slate-800">
//               Contact{" "}
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600">
//                 Us
//               </span>
//             </h1>
//             <p className="text-slate-500 text-lg leading-relaxed font-light">
//               Have questions or need assistance? We're here to help you. Reach out to us anytime.
//             </p>
//           </div>
//         </div>

//         <div className="glow-line w-full" />

//         {/* ── MAIN CONTENT ── */}
//         <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-start">

//           {/* LEFT – CONTACT INFO */}
//           <div className="space-y-5">
//             <div className="mb-8">
//               <span className="text-sky-500 text-xs tracking-[0.2em] uppercase font-semibold block mb-3">Reach Out</span>
//               <h2 className="text-3xl font-bold tracking-tight mb-2 text-slate-800">Get In Touch</h2>
//               <p className="text-slate-400 text-sm leading-relaxed">Our team is ready to assist you with any queries about our products and services.</p>
//             </div>

//             {/* Phone */}
//             <div className="contact-card glass-card flex items-start gap-4 rounded-2xl p-5 cursor-default">
//               <div className="info-icon-wrap"><FaPhoneAlt /></div>
//               <div>
//                 <h4 className="font-semibold text-sm text-slate-700 mb-1">Phone</h4>
//                 <p className="text-slate-500 text-sm">+91 40 23774310</p>
//                 <p className="text-slate-500 text-sm">+91 9848444237</p>
//               </div>
//             </div>

//             {/* Email */}
//             <div className="contact-card glass-card flex items-start gap-4 rounded-2xl p-5 cursor-default">
//               <div className="info-icon-wrap"><FaEnvelope /></div>
//               <div>
//                 <h4 className="font-semibold text-sm text-slate-700 mb-1">Email</h4>
//                 <p className="text-slate-500 text-sm">info@yourcompany.com</p>
//                 <p className="text-slate-500 text-sm">support@yourcompany.com</p>
//               </div>
//             </div>

//             {/* Address */}
//             <div className="contact-card glass-card flex items-start gap-4 rounded-2xl p-5 cursor-default">
//               <div className="info-icon-wrap"><FaMapMarkerAlt /></div>
//               <div>
//                 <h4 className="font-semibold text-sm text-slate-700 mb-1">Address</h4>
//                 <p className="text-slate-500 text-sm leading-relaxed">
//                   Plot #75/B, Phase-II, SV Industrial Estate,<br />
//                   Hyderabad, Telangana - 500037
//                 </p>
//               </div>
//             </div>

//             {/* Business hours */}
//             <div className="glass-card rounded-2xl p-5 bg-gradient-to-br from-sky-50/70 to-blue-50/60 border-sky-200/60">
//               <h4 className="font-semibold text-sm text-slate-700 mb-3">Business Hours</h4>
//               <div className="space-y-2 text-sm">
//                 <div className="flex justify-between items-center">
//                   <span className="text-slate-400">Monday – Saturday</span>
//                   <span className="text-sky-600 font-semibold bg-sky-50 px-2.5 py-0.5 rounded-full text-xs border border-sky-200/60">9:00 AM – 6:00 PM</span>
//                 </div>
//                 <div className="flex justify-between items-center">
//                   <span className="text-slate-400">Sunday</span>
//                   <span className="text-slate-400 text-xs">Closed</span>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* RIGHT – FORM */}
//           <div className="glass-card-strong rounded-3xl p-8">
//             <h3 className="text-xl font-bold mb-1 tracking-tight text-slate-800">Send a Message</h3>
//             <p className="text-slate-400 text-sm mb-7">We'll respond within 24 hours on business days.</p>

//             <form className="space-y-4">
//               <input type="text" placeholder="Your Name" className="input-field" />
//               <input type="email" placeholder="Your Email" className="input-field" />
//               <input type="text" placeholder="Subject" className="input-field" />
//               <textarea rows="5" placeholder="Your Message" className="input-field resize-none" />
//               <button type="submit" className="send-btn">Send Message</button>
//             </form>
//           </div>
//         </div>

//         {/* ── MAP ── */}
//         <div className="px-6 pb-20 max-w-6xl mx-auto">
//           <div className="rounded-3xl overflow-hidden border border-white/70 h-[380px] relative shadow-xl shadow-sky-100/50">
//             <div className="absolute inset-0 z-10 pointer-events-none rounded-3xl ring-1 ring-inset ring-sky-200/40" />
//             <iframe
//               title="map"
//               src="https://maps.google.com/maps?q=SV+Industrial+Estate+Hyderabad&t=&z=13&ie=UTF8&iwloc=&output=embed"
//               className="w-full h-full border-0 opacity-90"
//               loading="lazy"
//             />
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default ContactPage;



import React, { useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { 
  FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock, FaFacebook, FaLinkedin, FaInstagram, FaTwitter, FaYoutube 
} from "react-icons/fa";
import { ArrowRight, Send } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

/* ─── Google Fonts (only font import, no custom CSS classes) ─────────── */
const FontLink = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,600&family=Outfit:wght@300;400;500;600;700&display=swap');
  `}</style>
);

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

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Message sent successfully! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const inputClass = "w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 outline-none focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all duration-200";

  return (
    <>
      <FontLink />
      <Navbar />

      {/* Hero Section with Background Image */}
      <section ref={heroRef} className="relative overflow-hidden" style={{ minHeight: 'clamp(580px, 85vh, 820px)' }}>
        {/* Parallax background image */}
        <motion.div className="absolute inset-0" style={{ y: imgY }}>
          <img
            src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Customer Support"
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

        {/* Content - Centered */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-20 flex flex-col justify-center items-center text-center h-full"
          style={{ paddingTop: 'clamp(80px,12vw,140px)', paddingBottom: 'clamp(60px,10vw,120px)' }}>

          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <div className="w-8 h-px bg-sky-400" />
            <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-sky-300" style={{ fontFamily: "'Outfit', sans-serif" }}>
              We're Here to Help
            </span>
            <div className="w-8 h-px bg-sky-400" />
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-bold text-white leading-[1.1] mb-6 text-center"
            style={{ fontFamily: "'Playfair Display', serif", letterSpacing: '-0.02em' }}
          >
            Contact{' '}
            <span className="bg-gradient-to-r from-sky-300 to-blue-300 bg-clip-text text-transparent">
              Us
            </span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.22 }}
            className="text-base sm:text-lg leading-relaxed mb-10 max-w-2xl text-white/80 text-center mx-auto" 
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Have questions or need assistance? We're here to help you. Reach out to us anytime.
          </motion.p>

          {/* CTA row */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.34 }}
            className="flex flex-wrap gap-3 justify-center"
          >
            <a
              href="tel:+914023774310"
              className="relative overflow-hidden inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-white bg-[linear-gradient(135deg,rgba(15,35,86,0.95)_0%,rgba(30,58,138,0.9)_50%,rgba(14,165,233,0.95)_100%)] hover:shadow-lg hover:-translate-y-0.5 transition-all before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-white/20 before:to-transparent before:transition-transform before:duration-500 hover:before:translate-x-0"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              <FaPhoneAlt size={14} /> Call Us Now
            </a>
            <a
              href="mailto:info@smartlabtech.net"
              className="relative overflow-hidden inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold bg-white/10 border border-white/20 text-white hover:bg-white/20 hover:-translate-y-0.5 transition-all before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-white/20 before:to-transparent before:transition-transform before:duration-500 hover:before:translate-x-0"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              <FaEnvelope size={14} /> Send Email
            </a>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-20 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          
          {/* LEFT - Contact Info */}
          <div className="space-y-5">
            <Reveal>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-px bg-blue-600" />
                <span className="text-[10px] font-semibold tracking-[0.25em] uppercase text-blue-600" style={{ fontFamily: "'Outfit', sans-serif" }}>
                  Reach Out
                </span>
              </div>
              <h2 className="text-3xl font-bold mb-2 text-slate-800" style={{ fontFamily: "'Playfair Display', serif" }}>
                Get In Touch
              </h2>
              <p className="text-slate-500 text-sm leading-relaxed mb-6" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Our team is ready to assist you with any queries about our products and services.
              </p>
            </Reveal>

            {/* Phone */}
            <Reveal delay={0.1}>
              <div className="bg-white/80 backdrop-blur-sm flex items-start gap-4 rounded-2xl p-5 border border-slate-100 hover:border-blue-200 hover:shadow-md transition-all duration-300">
                <div className="w-11 h-11 rounded-xl bg-[linear-gradient(135deg,rgba(15,35,86,0.1)_0%,rgba(30,58,138,0.08)_50%,rgba(14,165,233,0.1)_100%)] flex items-center justify-center flex-shrink-0">
                  <FaPhoneAlt className="text-blue-500 text-sm" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-slate-700 mb-1" style={{ fontFamily: "'Outfit', sans-serif" }}>Phone</h4>
                  <p className="text-slate-500 text-sm" style={{ fontFamily: "'Outfit', sans-serif" }}>+91 40 23 774310</p>
                  <p className="text-slate-500 text-sm" style={{ fontFamily: "'Outfit', sans-serif" }}>+91 98484 44237</p>
                </div>
              </div>
            </Reveal>

            {/* Email */}
            <Reveal delay={0.2}>
              <div className="bg-white/80 backdrop-blur-sm flex items-start gap-4 rounded-2xl p-5 border border-slate-100 hover:border-blue-200 hover:shadow-md transition-all duration-300">
                <div className="w-11 h-11 rounded-xl bg-[linear-gradient(135deg,rgba(15,35,86,0.1)_0%,rgba(30,58,138,0.08)_50%,rgba(14,165,233,0.1)_100%)] flex items-center justify-center flex-shrink-0">
                  <FaEnvelope className="text-blue-500 text-sm" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-slate-700 mb-1" style={{ fontFamily: "'Outfit', sans-serif" }}>Email</h4>
                  <p className="text-slate-500 text-sm" style={{ fontFamily: "'Outfit', sans-serif" }}>info@smartlabtech.net</p>
                  <p className="text-slate-500 text-sm" style={{ fontFamily: "'Outfit', sans-serif" }}>support@smartlabtech.net</p>
                </div>
              </div>
            </Reveal>

            {/* Address */}
            <Reveal delay={0.3}>
              <div className="bg-white/80 backdrop-blur-sm flex items-start gap-4 rounded-2xl p-5 border border-slate-100 hover:border-blue-200 hover:shadow-md transition-all duration-300">
                <div className="w-11 h-11 rounded-xl bg-[linear-gradient(135deg,rgba(15,35,86,0.1)_0%,rgba(30,58,138,0.08)_50%,rgba(14,165,233,0.1)_100%)] flex items-center justify-center flex-shrink-0">
                  <FaMapMarkerAlt className="text-blue-500 text-sm" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-slate-700 mb-1" style={{ fontFamily: "'Outfit', sans-serif" }}>Address</h4>
                  <p className="text-slate-500 text-sm leading-relaxed" style={{ fontFamily: "'Outfit', sans-serif" }}>
                    Plot #74 and #75/B, Sy #735, Phase-II,<br />
                    S.V. Co-operative Industrial Estate,<br />
                    Balanagar, Hyderabad - 500 037, Telangana, India.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Business Hours */}
            <Reveal delay={0.4}>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 border border-slate-100">
                <div className="flex items-center gap-3 mb-3">
                  <FaClock className="text-blue-500 text-sm" />
                  <h4 className="font-semibold text-sm text-slate-700" style={{ fontFamily: "'Outfit', sans-serif" }}>Business Hours</h4>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500" style={{ fontFamily: "'Outfit', sans-serif" }}>Monday – Saturday</span>
                    <span className="text-blue-600 font-semibold bg-blue-50 px-2.5 py-0.5 rounded-full text-xs border border-blue-200" style={{ fontFamily: "'Outfit', sans-serif" }}>9:00 AM – 6:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500" style={{ fontFamily: "'Outfit', sans-serif" }}>Sunday</span>
                    <span className="text-slate-400 text-xs" style={{ fontFamily: "'Outfit', sans-serif" }}>Closed</span>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Social Links */}
            <Reveal delay={0.5}>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 border border-slate-100">
                <h4 className="font-semibold text-sm text-slate-700 mb-3" style={{ fontFamily: "'Outfit', sans-serif" }}>Follow Us</h4>
                <div className="flex gap-3">
                  {[FaFacebook, FaLinkedin, FaInstagram, FaTwitter, FaYoutube].map((Icon, i) => (
                    <a key={i} href="#" className="w-9 h-9 rounded-xl bg-[linear-gradient(135deg,rgba(15,35,86,0.1)_0%,rgba(30,58,138,0.08)_50%,rgba(14,165,233,0.1)_100%)] flex items-center justify-center hover:bg-[linear-gradient(135deg,rgba(15,35,86,0.95)_0%,rgba(30,58,138,0.9)_50%,rgba(14,165,233,0.95)_100%)] transition-all duration-300 group">
                      <Icon size={16} className="text-blue-500 group-hover:text-white transition-colors" />
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          {/* RIGHT - Contact Form */}
          <Reveal delay={0.2}>
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 md:p-8 border border-slate-100 shadow-lg">
              <h3 className="text-xl font-bold mb-1 text-slate-800" style={{ fontFamily: "'Playfair Display', serif" }}>Send a Message</h3>
              <p className="text-slate-500 text-sm mb-6" style={{ fontFamily: "'Outfit', sans-serif" }}>We'll respond within 24 hours on business days.</p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className={inputClass}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className={inputClass}
                  required
                />
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={inputClass}
                  required
                />
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  className={`${inputClass} resize-none`}
                  required
                />
                <button
                  type="submit"
                  className="relative overflow-hidden w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-sm font-bold text-white bg-[linear-gradient(135deg,rgba(15,35,86,0.95)_0%,rgba(30,58,138,0.9)_50%,rgba(14,165,233,0.95)_100%)] hover:shadow-lg hover:-translate-y-0.5 transition-all before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-white/20 before:to-transparent before:transition-transform before:duration-500 hover:before:translate-x-0"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  Send Message <Send size={15} />
                </button>
              </form>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Map Section */}
      <Reveal>
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-20 pb-20">
          <div className="rounded-3xl overflow-hidden border border-slate-200 h-[380px] relative shadow-lg">
            <div className="absolute inset-0 z-10 pointer-events-none rounded-3xl ring-1 ring-inset ring-slate-200/50" />
            <iframe
              title="SmartLabtech Location"
              src="https://maps.google.com/maps?q=Balanagar+Hyderabad+Telangana&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
              allowFullScreen
            />
          </div>
        </div>
      </Reveal>

      <Footer />
    </>
  );
};

export default ContactPage;