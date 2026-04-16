import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ContactPage = () => {
  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-br from-slate-50 via-sky-50/40 to-blue-50/60 text-slate-800 font-['Sora',sans-serif] min-h-screen overflow-x-hidden">
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&family=Space+Mono:wght@400;700&display=swap');

          .glass-card {
            background: rgba(255,255,255,0.65);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            border: 1px solid rgba(255,255,255,0.8);
            box-shadow: 0 4px 24px rgba(14,165,233,0.07), 0 1.5px 6px rgba(0,0,0,0.04);
          }
          .glass-card-strong {
            background: rgba(255,255,255,0.80);
            backdrop-filter: blur(28px);
            -webkit-backdrop-filter: blur(28px);
            border: 1px solid rgba(255,255,255,0.9);
            box-shadow: 0 8px 40px rgba(14,165,233,0.10), 0 2px 10px rgba(0,0,0,0.05);
          }
          .mesh-bg {
            background:
              radial-gradient(ellipse 70% 50% at 50% 0%, rgba(56,189,248,0.13) 0%, transparent 70%),
              radial-gradient(ellipse 50% 40% at 80% 30%, rgba(99,102,241,0.07) 0%, transparent 60%);
          }
          .glow-line {
            background: linear-gradient(90deg, transparent, rgba(56,189,248,0.35), transparent);
            height: 1px;
          }
          .input-field {
            width: 100%;
            background: rgba(255,255,255,0.75);
            border: 1px solid rgba(148,163,184,0.3);
            color: #1e293b;
            border-radius: 12px;
            padding: 14px 20px;
            font-size: 14px;
            font-family: 'Sora', sans-serif;
            outline: none;
            transition: border-color 0.2s ease, box-shadow 0.2s ease;
            backdrop-filter: blur(8px);
          }
          .input-field::placeholder { color: rgba(100,116,139,0.55); }
          .input-field:focus {
            border-color: rgba(56,189,248,0.6);
            box-shadow: 0 0 0 3px rgba(56,189,248,0.1);
            background: rgba(255,255,255,0.95);
          }
          .contact-card {
            transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
          }
          .contact-card:hover {
            transform: translateY(-3px);
            box-shadow: 0 12px 40px rgba(14,165,233,0.13);
            border-color: rgba(56,189,248,0.45) !important;
          }
          .send-btn {
            width: 100%;
            background: linear-gradient(135deg, #0369a1 0%, #0ea5e9 60%, #38bdf8 100%);
            background-size: 200%;
            color: white;
            padding: 14px;
            border-radius: 12px;
            font-weight: 600;
            font-size: 14px;
            font-family: 'Sora', sans-serif;
            border: none;
            cursor: pointer;
            letter-spacing: 0.02em;
            transition: background-position 0.4s ease, transform 0.2s ease, box-shadow 0.2s ease;
          }
          .send-btn:hover {
            background-position: right;
            transform: translateY(-1px);
            box-shadow: 0 8px 30px rgba(14,165,233,0.35);
          }
          .info-icon-wrap {
            width: 44px; height: 44px; border-radius: 12px; flex-shrink: 0;
            background: linear-gradient(135deg, rgba(224,242,254,0.9), rgba(186,230,255,0.7));
            border: 1px solid rgba(56,189,248,0.25);
            display: flex; align-items: center; justify-content: center;
            color: #0ea5e9; font-size: 14px;
          }
          .dot-pattern {
            background-image: radial-gradient(circle, rgba(148,163,184,0.2) 1px, transparent 1px);
            background-size: 24px 24px;
          }
        `}</style>

        {/* ── HERO ── */}
        <div className="relative mesh-bg dot-pattern pt-28 pb-20 px-6 text-center overflow-hidden">
          {/* Decorative rings */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-sky-200/40 pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] rounded-full border border-sky-300/30 pointer-events-none" />

          {/* Blurred blobs */}
          <div className="absolute top-10 left-1/4 w-56 h-56 bg-sky-200/30 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-blue-200/25 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <span className="inline-block text-sky-600 text-xs font-semibold tracking-[0.2em] uppercase mb-5 px-4 py-1.5 rounded-full border border-sky-300/60 bg-sky-50/80 backdrop-blur-sm shadow-sm">
              We're Here to Help
            </span>
            <h1 className="text-5xl md:text-6xl font-bold leading-[1.1] mb-5 tracking-tight text-slate-800">
              Contact{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600">
                Us
              </span>
            </h1>
            <p className="text-slate-500 text-lg leading-relaxed font-light">
              Have questions or need assistance? We're here to help you. Reach out to us anytime.
            </p>
          </div>
        </div>

        <div className="glow-line w-full" />

        {/* ── MAIN CONTENT ── */}
        <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-start">

          {/* LEFT – CONTACT INFO */}
          <div className="space-y-5">
            <div className="mb-8">
              <span className="text-sky-500 text-xs tracking-[0.2em] uppercase font-semibold block mb-3">Reach Out</span>
              <h2 className="text-3xl font-bold tracking-tight mb-2 text-slate-800">Get In Touch</h2>
              <p className="text-slate-400 text-sm leading-relaxed">Our team is ready to assist you with any queries about our products and services.</p>
            </div>

            {/* Phone */}
            <div className="contact-card glass-card flex items-start gap-4 rounded-2xl p-5 cursor-default">
              <div className="info-icon-wrap"><FaPhoneAlt /></div>
              <div>
                <h4 className="font-semibold text-sm text-slate-700 mb-1">Phone</h4>
                <p className="text-slate-500 text-sm">+91 40 23774310</p>
                <p className="text-slate-500 text-sm">+91 9848444237</p>
              </div>
            </div>

            {/* Email */}
            <div className="contact-card glass-card flex items-start gap-4 rounded-2xl p-5 cursor-default">
              <div className="info-icon-wrap"><FaEnvelope /></div>
              <div>
                <h4 className="font-semibold text-sm text-slate-700 mb-1">Email</h4>
                <p className="text-slate-500 text-sm">info@yourcompany.com</p>
                <p className="text-slate-500 text-sm">support@yourcompany.com</p>
              </div>
            </div>

            {/* Address */}
            <div className="contact-card glass-card flex items-start gap-4 rounded-2xl p-5 cursor-default">
              <div className="info-icon-wrap"><FaMapMarkerAlt /></div>
              <div>
                <h4 className="font-semibold text-sm text-slate-700 mb-1">Address</h4>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Plot #75/B, Phase-II, SV Industrial Estate,<br />
                  Hyderabad, Telangana - 500037
                </p>
              </div>
            </div>

            {/* Business hours */}
            <div className="glass-card rounded-2xl p-5 bg-gradient-to-br from-sky-50/70 to-blue-50/60 border-sky-200/60">
              <h4 className="font-semibold text-sm text-slate-700 mb-3">Business Hours</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Monday – Saturday</span>
                  <span className="text-sky-600 font-semibold bg-sky-50 px-2.5 py-0.5 rounded-full text-xs border border-sky-200/60">9:00 AM – 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Sunday</span>
                  <span className="text-slate-400 text-xs">Closed</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT – FORM */}
          <div className="glass-card-strong rounded-3xl p-8">
            <h3 className="text-xl font-bold mb-1 tracking-tight text-slate-800">Send a Message</h3>
            <p className="text-slate-400 text-sm mb-7">We'll respond within 24 hours on business days.</p>

            <form className="space-y-4">
              <input type="text" placeholder="Your Name" className="input-field" />
              <input type="email" placeholder="Your Email" className="input-field" />
              <input type="text" placeholder="Subject" className="input-field" />
              <textarea rows="5" placeholder="Your Message" className="input-field resize-none" />
              <button type="submit" className="send-btn">Send Message</button>
            </form>
          </div>
        </div>

        {/* ── MAP ── */}
        <div className="px-6 pb-20 max-w-6xl mx-auto">
          <div className="rounded-3xl overflow-hidden border border-white/70 h-[380px] relative shadow-xl shadow-sky-100/50">
            <div className="absolute inset-0 z-10 pointer-events-none rounded-3xl ring-1 ring-inset ring-sky-200/40" />
            <iframe
              title="map"
              src="https://maps.google.com/maps?q=SV+Industrial+Estate+Hyderabad&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0 opacity-90"
              loading="lazy"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;