// components/ScrollDots.js
import { useEffect, useState } from "react";

const sections = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "journey", label: "Journey" },
  { id: "testimonials", label: "Testimonials" },
  { id: "contact", label: "Contact" },
  { id: "footer", label: "Footer"}
];

const ScrollDots = () => {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      let current = "hero";

      sections.forEach((section) => {
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.offsetTop - 150;
          if (window.scrollY >= top) {
            current = section.id;
          }
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed right-5 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4">
      {sections.map((section) => (
        <div key={section.id} className="relative group flex items-center justify-end">

          {/* LABEL (Hidden by default, shows on hover) */}
          <span className="absolute right-6 opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300 bg-[#0f2356] text-white text-xs px-3 py-1 rounded-md whitespace-nowrap shadow-md">
            {section.label}
          </span>

          {/* DOT */}
          <button
            onClick={() => scrollToSection(section.id)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${active === section.id
                ? "bg-[#2563eb] scale-125"
                : "bg-gray-400 hover:bg-[#0f2356]"
              }`}
          />
        </div>
      ))}
    </div>
  );
};

export default ScrollDots;