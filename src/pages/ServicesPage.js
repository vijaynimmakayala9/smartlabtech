import React, { useState } from "react";
import {
  FaTools, FaCogs, FaWrench, FaFlask, FaTruck, FaCheckCircle,
} from "react-icons/fa";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const services = [
  { label: "Installation & Commissioning", icon: <FaCogs />, desc: "Expert setup and system commissioning at your site." },
  { label: "On-site Repair", icon: <FaWrench />, desc: "Fast, reliable repairs without disrupting your workflow." },
  { label: "Calibration & Testing", icon: <FaFlask />, desc: "Precision calibration to national and international standards." },
  { label: "Annual Maintenance Contract", icon: <FaTools />, desc: "Comprehensive AMC plans for uninterrupted operations." },
  { label: "IQ / OQ Validation", icon: <FaCheckCircle />, desc: "Complete installation and operational qualification support." },
  { label: "Spare Parts Support", icon: <FaCogs />, desc: "Genuine spare parts delivered swiftly across India." },
  { label: "Customization", icon: <FaWrench />, desc: "Tailored solutions designed around your specific needs." },
  { label: "Equipment Shifting / Re-location", icon: <FaTruck />, desc: "Safe and professional equipment relocation services." },
];

const stats = [
  { value: "20+", label: "Years Experience" },
  { value: "500+", label: "Clients Served" },
  { value: "24/7", label: "Support Available" },
  { value: "Pan India", label: "Service Network" },
];

const inputClass =
  "w-full bg-white/75 border border-slate-200/70 text-slate-800 placeholder-slate-400/60 rounded-xl px-5 py-3.5 text-sm focus:outline-none focus:border-sky-400/70 focus:ring-2 focus:ring-sky-100 transition-all duration-200 backdrop-blur-sm";

const ServicesPage = () => {
  const [focused, setFocused] = useState(null);

  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-br from-slate-50 via-sky-50/40 to-blue-50/60 text-slate-800 font-['Sora',sans-serif] min-h-screen overflow-x-hidden">
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&family=Space+Mono:wght@400;700&display=swap');
          .glow-line { background: linear-gradient(90deg, transparent, rgba(56,189,248,0.35), transparent); height: 1px; }
          .stat-num { font-family: 'Space Mono', monospace; }
          .mesh-bg {
            background:
              radial-gradient(ellipse 70% 50% at 50% 0%, rgba(56,189,248,0.13) 0%, transparent 70%),
              radial-gradient(ellipse 50% 40% at 80% 30%, rgba(99,102,241,0.07) 0%, transparent 60%);
          }
          .dot-pattern {
            background-image: radial-gradient(circle, rgba(148,163,184,0.18) 1px, transparent 1px);
            background-size: 24px 24px;
          }
          .glass-card {
            background: rgba(255,255,255,0.65);
            backdrop-filter: blur(18px);
            -webkit-backdrop-filter: blur(18px);
            border: 1px solid rgba(255,255,255,0.8);
            box-shadow: 0 4px 20px rgba(14,165,233,0.07), 0 1px 4px rgba(0,0,0,0.04);
          }
          .glass-card-strong {
            background: rgba(255,255,255,0.80);
            backdrop-filter: blur(28px);
            -webkit-backdrop-filter: blur(28px);
            border: 1px solid rgba(255,255,255,0.9);
            box-shadow: 0 8px 40px rgba(14,165,233,0.10), 0 2px 10px rgba(0,0,0,0.05);
          }
          .service-card {
            background: rgba(255,255,255,0.55);
            backdrop-filter: blur(14px);
            -webkit-backdrop-filter: blur(14px);
            border: 1px solid rgba(255,255,255,0.75);
            box-shadow: 0 2px 12px rgba(14,165,233,0.05);
            transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
          }
          .service-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 16px 48px rgba(14,165,233,0.14);
            border-color: rgba(56,189,248,0.45);
          }
          .submit-btn {
            background: linear-gradient(135deg, #0369a1 0%, #0ea5e9 60%, #38bdf8 100%);
            background-size: 200%;
            transition: background-position 0.4s ease, transform 0.2s ease, box-shadow 0.2s ease;
          }
          .submit-btn:hover {
            background-position: right;
            transform: translateY(-1px);
            box-shadow: 0 8px 30px rgba(14,165,233,0.35);
          }
          .icon-wrap {
            width: 44px; height: 44px; border-radius: 12px; flex-shrink: 0;
            background: linear-gradient(135deg, rgba(224,242,254,0.9), rgba(186,230,255,0.6));
            border: 1px solid rgba(56,189,248,0.2);
            display: flex; align-items: center; justify-content: center;
            color: #0ea5e9; font-size: 15px;
            transition: border-color 0.3s ease, background 0.3s ease;
          }
          .service-card:hover .icon-wrap {
            border-color: rgba(56,189,248,0.45);
            background: linear-gradient(135deg, rgba(186,230,255,0.9), rgba(125,211,252,0.5));
          }
        `}</style>

        {/* ── HERO ── */}
        <div className="relative mesh-bg dot-pattern pt-28 pb-20 px-6 text-center overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-sky-200/35 pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] rounded-full border border-sky-300/25 pointer-events-none" />
          <div className="absolute top-8 left-1/4 w-64 h-64 bg-sky-200/25 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-blue-200/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto">
            <span className="inline-block text-sky-600 text-xs font-semibold tracking-[0.2em] uppercase mb-5 px-4 py-1.5 rounded-full border border-sky-300/60 bg-sky-50/80 backdrop-blur-sm shadow-sm">
              Expert Support Across India
            </span>
            <h1 className="text-5xl md:text-6xl font-bold leading-[1.1] mb-6 tracking-tight text-slate-800">
              Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600">
                Services
              </span>
            </h1>
            <p className="text-slate-500 text-lg leading-relaxed max-w-2xl mx-auto font-light">
              Professional installation, maintenance, and calibration services to ensure optimal performance and longevity of your laboratory equipment.
            </p>
          </div>

          {/* Stats bar */}
          <div className="relative z-10 mt-14 max-w-3xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-3">
            {stats.map((s, i) => (
              <div key={i} className="glass-card rounded-2xl px-5 py-4 text-center">
                <div className="stat-num text-2xl font-bold text-slate-800 mb-0.5">{s.value}</div>
                <div className="text-slate-400 text-xs tracking-wide">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="glow-line w-full" />

        {/* ── ABOUT SERVICES ── */}
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sky-500 text-xs tracking-[0.2em] uppercase font-semibold block mb-4">Who We Are</span>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6 tracking-tight text-slate-800">
                Factory-Trained Technicians,<br />
                <span className="text-slate-400 font-light">Nationwide Reach</span>
              </h2>
              <p className="text-slate-500 leading-7 text-sm mb-5">
                SmartLabtech offers services designed to meet your needs from installation to maintenance and calibration, ensuring full repair coverage and minimal downtime. Our team of experienced, factory-trained technicians is committed to supporting your service needs across India.
              </p>
              <p className="text-slate-500 leading-7 text-sm">
                We provide nationwide service support with expert engineers available anytime. Our extensive customer service network ensures fast and reliable assistance wherever you are.
              </p>
            </div>
            <div className="space-y-3">
              {["ISO-certified service protocols", "Dedicated regional service engineers", "Same-day response for critical issues", "Documented service reports for every visit"].map((item, i) => (
                <div key={i} className="glass-card flex items-center gap-4 rounded-xl px-5 py-4 hover:border-sky-300/60 transition-all duration-200 hover:shadow-md hover:shadow-sky-50">
                  <div className="w-2 h-2 rounded-full bg-sky-400 flex-shrink-0" />
                  <span className="text-slate-600 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── SERVICES GRID ── */}
        <div className="max-w-6xl mx-auto px-6 pb-20">
          <div className="text-center mb-14">
            <span className="text-sky-500 text-xs tracking-[0.2em] uppercase font-semibold block mb-3">What We Offer</span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-800">Service Catalogue</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((service, index) => (
              <div key={index} className="service-card rounded-2xl p-6 group cursor-default">
                <div className="icon-wrap mb-5">
                  <span>{service.icon}</span>
                </div>
                <h3 className="text-slate-700 font-semibold text-sm mb-2 leading-snug">{service.label}</h3>
                <p className="text-slate-400 text-xs leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── LIFECYCLE SECTION ── */}
        <div className="border-y border-sky-100/80 bg-gradient-to-r from-sky-50/60 via-white/50 to-blue-50/60 py-20 px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
            {[
              { step: "01", title: "Installation & Training", body: "Begins with proper installation, system qualification, and comprehensive user training for your team." },
              { step: "02", title: "Routine Maintenance", body: "Scheduled preventive maintenance and calibration to maintain peak instrument performance year-round." },
              { step: "03", title: "Long-term Support", body: "AMC plans and rapid on-site repair to minimise downtime and extend the life of your equipment." },
            ].map((item, i) => (
              <div key={i} className="relative pl-8 border-l-2 border-sky-200/60 hover:border-sky-400/60 transition-colors duration-300">
                <span className="stat-num text-[11px] text-sky-500 font-bold tracking-widest block mb-3">{item.step}</span>
                <h3 className="text-slate-700 font-semibold text-lg mb-3">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── SUPPORT SECTION ── */}
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="glass-card-strong rounded-3xl p-10 md:p-14 relative overflow-hidden bg-gradient-to-br from-sky-50/80 to-blue-50/70">
            <div className="absolute top-0 right-0 w-64 h-64 bg-sky-300/15 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none" />
            <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center">
              <div>
                <span className="text-sky-500 text-xs tracking-[0.2em] uppercase font-semibold block mb-4">Always Available</span>
                <h2 className="text-3xl font-bold mb-5 leading-tight text-slate-800">When You Need Professional Support</h2>
                <p className="text-slate-500 text-sm leading-7">
                  Our team provides technical guidance and quick access to spare parts. If issues arise, we ensure prompt support and logistics management to minimize downtime and keep your lab running.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {["24/7 Helpdesk", "Genuine Spare Parts", "Pan India Coverage", "Express Dispatch"].map((item, i) => (
                  <div key={i} className="glass-card rounded-xl px-4 py-4 text-center hover:border-sky-300/60 transition-all duration-200 hover:shadow-md">
                    <FaCheckCircle className="text-sky-500 mx-auto mb-2 text-sm" />
                    <span className="text-slate-600 text-xs font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── CALL REQUEST FORM ── */}
        <div className="border-t border-sky-100/60 bg-gradient-to-b from-white/30 to-sky-50/50 py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-14">
              <span className="text-sky-500 text-xs tracking-[0.2em] uppercase font-semibold block mb-3">Request a Visit</span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-800">Service Call Request</h2>
              <p className="text-slate-400 text-sm mt-3 max-w-lg mx-auto">Fill in the details below and our service team will get back to you within 24 hours.</p>
            </div>

            <div className="glass-card-strong rounded-3xl p-8 md:p-12">
              <form className="grid md:grid-cols-2 gap-4">
                <input className={inputClass} placeholder="Company Details / Location" />
                <input className={inputClass} placeholder="Contact Person" />
                <input className={inputClass} placeholder="Designation / Department" />
                <input className={inputClass} placeholder="Contact Number" />
                <input className={inputClass} placeholder="Email ID" />
                <input className={inputClass} placeholder="Instrument Type" />
                <input className={inputClass} placeholder="Model Number" />
                <input className={inputClass} placeholder="Serial Number" />
                <input className={`${inputClass} md:col-span-2`} placeholder="Contract Type / PO Number" />
                <textarea
                  className={`${inputClass} md:col-span-2 resize-none`}
                  rows="4"
                  placeholder="Nature of Problem"
                />
                <button
                  type="submit"
                  className="submit-btn md:col-span-2 text-white py-4 rounded-xl font-semibold text-sm tracking-wide"
                >
                  Submit Service Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ServicesPage;