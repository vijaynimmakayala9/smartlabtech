// CookiePolicy.jsx

import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function CookiePolicy() {

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-[#eef2f7] py-10 px-4">

        <div className="max-w-6xl mx-auto">

          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200">

            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50">

              <div className="flex items-center gap-3">

                <div className="w-11 h-11 rounded-xl bg-red-100 flex items-center justify-center">
                  <span className="text-red-600 font-bold text-sm">
                    PDF
                  </span>
                </div>

                <div>
                  <h1 className="text-lg sm:text-xl font-bold text-slate-900">
                    Cookie Policy
                  </h1>

                  <p className="text-sm text-slate-500">
                    smartlabtech.com
                  </p>
                </div>
              </div>

              <a
                href="/pdf/cookie-policy.pdf"
                download
                className="px-5 py-2.5 rounded-xl bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition"
              >
                Download PDF
              </a>
            </div>

            <div className="w-full h-[85vh] bg-slate-200">

              <iframe
                src="/pdf/cookie-policy.pdf"
                title="Cookie Policy PDF"
                className="w-full h-full"
              />

            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}