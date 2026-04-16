import React from "react";
import { FaFlask, FaUsers, FaAward, FaCogs, FaCheckCircle } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const coreValues = [
  { icon: <FaAward />, title: "Quality First", desc: "We believe in delivering only the highest quality products and solutions." },
  { icon: <FaUsers />, title: "Customer Focus", desc: "Customer satisfaction drives every decision we make." },
  { icon: <FaFlask />, title: "Innovation", desc: "We bring advanced scientific tools and cutting-edge solutions." },
  { icon: <FaCogs />, title: "Reliability", desc: "Trusted services and long-term partnerships you can count on." },
];

const whyUs = [
  "Wide range of laboratory equipment",
  "Strong nationwide service network",
  "Experienced technical support team",
  "High-quality and certified products",
  "Competitive pricing",
  "Reliable after-sales service",
];

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-br from-slate-50 via-sky-50/40 to-blue-50/60 text-slate-800 font-['Sora',sans-serif] min-h-screen overflow-x-hidden">
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&family=Space+Mono:wght@400;700&display=swap');
          .glow-line { background: linear-gradient(90deg, transparent, rgba(56,189,248,0.35), transparent); height: 1px; }
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
          .value-card {
            background: rgba(255,255,255,0.55);
            backdrop-filter: blur(14px);
            -webkit-backdrop-filter: blur(14px);
            border: 1px solid rgba(255,255,255,0.75);
            box-shadow: 0 2px 12px rgba(14,165,233,0.05);
            transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
          }
          .value-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 16px 48px rgba(14,165,233,0.14);
            border-color: rgba(56,189,248,0.45);
          }
          .icon-wrap {
            width: 52px; height: 52px; border-radius: 14px; margin: 0 auto 1.25rem;
            background: linear-gradient(135deg, rgba(224,242,254,0.9), rgba(186,230,255,0.6));
            border: 1px solid rgba(56,189,248,0.2);
            display: flex; align-items: center; justify-content: center;
            color: #0ea5e9; font-size: 18px;
            transition: border-color 0.3s ease;
          }
          .value-card:hover .icon-wrap { border-color: rgba(56,189,248,0.5); }
          .cta-btn {
            background: linear-gradient(135deg, #0369a1 0%, #0ea5e9 60%, #38bdf8 100%);
            background-size: 200%;
            transition: background-position 0.4s ease, transform 0.2s ease, box-shadow 0.2s ease;
          }
          .cta-btn:hover {
            background-position: right;
            transform: translateY(-1px);
            box-shadow: 0 8px 30px rgba(14,165,233,0.35);
          }
        `}</style>

        {/* ── HERO ── */}
        <div className="relative mesh-bg dot-pattern pt-28 pb-20 px-6 text-center overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-sky-200/40 pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] rounded-full border border-sky-300/25 pointer-events-none" />
          <div className="absolute top-10 left-1/4 w-56 h-56 bg-sky-200/25 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-blue-200/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <span className="inline-block text-sky-600 text-xs font-semibold tracking-[0.2em] uppercase mb-5 px-4 py-1.5 rounded-full border border-sky-300/60 bg-sky-50/80 backdrop-blur-sm shadow-sm">
              Our Story
            </span>
            <h1 className="text-5xl md:text-6xl font-bold leading-[1.1] mb-5 tracking-tight text-slate-800">
              About{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600">
                Us
              </span>
            </h1>
            <p className="text-slate-500 text-lg leading-relaxed font-light">
              Delivering high-quality laboratory equipment and scientific solutions with innovation, precision, and trust.
            </p>
          </div>
        </div>

        <div className="glow-line w-full" />

        {/* ── WHO WE ARE ── */}
        <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-sky-500 text-xs tracking-[0.2em] uppercase font-semibold block mb-4">Company Overview</span>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6 tracking-tight text-slate-800">
              Who We Are
            </h2>
            <p className="text-slate-500 leading-7 text-sm mb-5">
              Smart Labtech is a leading supplier of laboratory analytical, biotechnological, environmental, microscopic, and weighing equipment. We provide high-quality, time-tested products sourced from globally renowned manufacturers.
            </p>
            <p className="text-slate-500 leading-7 text-sm">
              Headquartered in Hyderabad, we serve customers across India with a strong distribution and service network. Our solutions support research, quality control, and scientific innovation in multiple industries.
            </p>
          </div>

          <div className="relative">
            <div className="absolute -inset-3 bg-gradient-to-br from-sky-200/30 to-blue-200/20 rounded-3xl blur-xl pointer-events-none" />
            <img
              src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b"
              alt="Laboratory"
              className="relative rounded-3xl w-full object-cover shadow-xl shadow-sky-100/60 border border-white/70"
              style={{ height: "340px" }}
            />
          </div>
        </div>

        {/* ── MISSION & VISION ── */}
        <div className="border-y border-sky-100/60 bg-gradient-to-r from-sky-50/60 via-white/50 to-blue-50/60 py-16 px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">

            <div className="glass-card-strong rounded-3xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-sky-200/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl pointer-events-none" />
              <div className="relative z-10">
                <span className="inline-block text-sky-600 text-xs font-semibold tracking-[0.18em] uppercase mb-4 px-3 py-1 rounded-full border border-sky-300/50 bg-sky-50/80">
                  Mission
                </span>
                <h3 className="text-2xl font-bold mb-4 text-slate-800 tracking-tight">Our Mission</h3>
                <p className="text-slate-500 leading-7 text-sm">
                  To deliver innovative, customer-oriented laboratory solutions that enhance research capabilities and scientific advancements while maintaining the highest standards of quality and reliability.
                </p>
              </div>
            </div>

            <div className="glass-card-strong rounded-3xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-blue-200/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl pointer-events-none" />
              <div className="relative z-10">
                <span className="inline-block text-blue-600 text-xs font-semibold tracking-[0.18em] uppercase mb-4 px-3 py-1 rounded-full border border-blue-300/50 bg-blue-50/80">
                  Vision
                </span>
                <h3 className="text-2xl font-bold mb-4 text-slate-800 tracking-tight">Our Vision</h3>
                <p className="text-slate-500 leading-7 text-sm">
                  To be a trusted leader in laboratory solutions through continuous innovation, excellent customer service, and strong commitment to scientific progress.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* ── CORE VALUES ── */}
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="text-center mb-14">
            <span className="text-sky-500 text-xs tracking-[0.2em] uppercase font-semibold block mb-3">What Drives Us</span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-800">Our Core Values</h2>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5">
            {coreValues.map((val, i) => (
              <div key={i} className="value-card rounded-2xl p-6 text-center cursor-default">
                <div className="icon-wrap">{val.icon}</div>
                <h4 className="font-semibold text-slate-700 text-sm mb-2">{val.title}</h4>
                <p className="text-slate-400 text-xs leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── WHY CHOOSE US ── */}
        <div className="border-y border-sky-100/60 bg-gradient-to-r from-sky-50/60 via-white/50 to-blue-50/60 py-20 px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sky-500 text-xs tracking-[0.2em] uppercase font-semibold block mb-4">Our Edge</span>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-3 tracking-tight text-slate-800">
                Why Choose{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600">Us</span>
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-8">
                We combine technical expertise with a customer-first approach to deliver laboratory solutions that truly make a difference.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              {whyUs.map((item, i) => (
                <div key={i} className="glass-card flex items-center gap-3 rounded-xl px-4 py-3.5 hover:border-sky-300/60 transition-all duration-200 hover:shadow-md hover:shadow-sky-50">
                  <FaCheckCircle className="text-sky-500 text-sm flex-shrink-0" />
                  <span className="text-slate-600 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── CTA ── */}
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="glass-card-strong rounded-3xl p-12 md:p-16 text-center relative overflow-hidden bg-gradient-to-br from-sky-50/80 to-blue-50/70">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-40 bg-sky-300/15 rounded-full -translate-y-1/2 blur-3xl pointer-events-none" />
            <div className="relative z-10">
              <span className="inline-block text-sky-600 text-xs font-semibold tracking-[0.2em] uppercase mb-5 px-4 py-1.5 rounded-full border border-sky-300/60 bg-sky-50/80 backdrop-blur-sm shadow-sm">
                Let's Collaborate
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight text-slate-800">
                Ready to Work With Us?
              </h2>
              <p className="text-slate-500 mb-8 max-w-lg mx-auto text-sm leading-relaxed">
                Get in touch with our experts for the best laboratory solutions tailored to your needs.
              </p>
              <button className="cta-btn text-white px-8 py-3.5 rounded-xl font-semibold text-sm tracking-wide">
                Contact Us
              </button>
            </div>
          </div>
        </div>

      </div>
      <Footer />
    </>
  );
};

export default AboutPage;