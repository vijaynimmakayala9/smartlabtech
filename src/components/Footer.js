// src/components/Footer.js
import React, { useState, useEffect } from 'react';
import {
  FlaskConical,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube
} from 'lucide-react';
import { useNavigate } from "react-router-dom";
import { FaLinkedin, FaTwitter, FaInstagram, FaYoutube, FaFacebook } from 'react-icons/fa';

export default function Footer({ id }) {
  const navigate = useNavigate();
  const [footerData, setFooterData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchFooter();
  }, []);

  const fetchFooter = async () => {
    try {
      const response = await fetch('https://smartlabtechbackend-p5h6.onrender.com/api/footer');
      const data = await response.json();
      
      if (data.success && data.data) {
        setFooterData(data.data);
      }
    } catch (error) {
      console.error('Error fetching footer:', error);
    } finally {
      setLoading(false);
    }
  };

  // Default footer links structure
  const defaultFooterLinks = {
    Products: [
      { name: 'Microscopes', path: '/products' },
      { name: 'Spectrometers', path: '/products' },
      { name: 'Centrifuges', path: '/products' },
      { name: 'Balances', path: '/products' },
      { name: 'Incubators', path: '/products' },
      { name: 'Smart Lab Systems', path: '/products' }
    ],
    Services: [
      { name: 'Equipment Supply', path: '/services' },
      { name: 'Installation & Calibration', path: '/services' },
      { name: 'Maintenance (AMC)', path: '/services' },
      { name: 'Scientific Consulting', path: '/services' },
      { name: 'Quality Validation', path: '/services' },
      { name: 'Training Programs', path: '/services' }
    ],
    Company: [
      { name: 'About Us', path: '/about' },
      { name: 'Services', path: '/services' },
      { name: 'Blogs', path: '/blogs' },
      { name: 'Products', path: '/products' }
    ],
    Support: [
      { name: 'Get a Quote', path: '/contact' },
      { name: 'Contact Us', path: '/contact' },
      { name: 'Support', path: '/support' }
    ]
  };

  // Get footer links from API or use defaults
  const getFooterLinks = () => {
    if (!footerData) return defaultFooterLinks;

    const links = {
      Products: [],
      Services: [],
      Company: [
        { name: 'About Us', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Blogs', path: '/blogs' },
        { name: 'Products', path: '/products' },
        { name: 'Resourses', path: '/resources'}
      ],
      Support: [
        { name: 'Get a Quote', path: '/contact' },
        { name: 'Contact Us', path: '/contact' },
        { name: 'Support', path: '/support' }
      ]
    };

    // Add products from API
    if (footerData.products && footerData.products.length > 0) {
      links.Products = footerData.products.map(product => ({
        name: product.name,
        path: `/products/${product.productId?._id || product.productId}`,
        slug: product.productId?.slug
      }));
    } else {
      links.Products = defaultFooterLinks.Products;
    }

    // Add services from API
    if (footerData.services && footerData.services.length > 0) {
      links.Services = footerData.services.map(service => ({
        name: service.name,
        path: '/services'
      }));
    } else {
      links.Services = defaultFooterLinks.Services;
    }

    return links;
  };

  const footerLinks = getFooterLinks();

  // Social media icons mapping
  const socialLinks = [
    { icon: FaFacebook, url: footerData?.socialMedia?.facebook || 'https://facebook.com', color: '#1877f2' },
    { icon: FaTwitter, url: footerData?.socialMedia?.twitter || 'https://twitter.com', color: '#1da1f2' },
    { icon: FaInstagram, url: footerData?.socialMedia?.instagram || 'https://instagram.com', color: '#e4405f' },
    { icon: FaLinkedin, url: footerData?.socialMedia?.linkedin || 'https://linkedin.com', color: '#0077b5' },
    { icon: FaYoutube, url: footerData?.socialMedia?.youtube || 'https://youtube.com', color: '#ff0000' }
  ].filter(social => social.url);

  // Get company contact info
  const companyContact = footerData?.companyContact || {
    mobileNumber: '+91 40 6789 1234',
    email: 'info@smartlabtech.in',
    location: 'Hyderabad, Telangana, India'
  };

  // Get company description
  const companyDescription = footerData?.companyDescription || 
    "Precision instruments and scientific solutions for research, pharma, and education since 2004.";

  // Get copyright text
  const copyrightText = footerData?.copyrightText || `© ${new Date().getFullYear()} SmartLabTech Pvt. Ltd. All rights reserved.`;

  // Handle navigation
  const handleNavigate = (path) => {
    if (path) navigate(path);
  };

  if (loading) {
    return (
      <footer id={id} className="bg-slate-900 text-slate-200 pt-[72px]">
        <div className="max-w-8xl mx-auto px-4 sm:px-8 lg:px-20 py-12">
          <div className="animate-pulse space-y-4">
            <div className="h-4 bg-slate-700 rounded w-3/4"></div>
            <div className="h-4 bg-slate-700 rounded w-1/2"></div>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer id={id} className="bg-slate-900 text-slate-200 pt-[72px]">
      <div className="max-w-8xl mx-auto px-4 sm:px-8 lg:px-20">
        {/* Main Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-10 mb-12">
          {/* Brand Section */}
          <div className="col-span-2">
            {/* Logo */}
            <div className="flex items-center gap-2.5 mb-4">
              <img
                src="/logo.png"
                alt="SmartLabTech"
                className="w-9 h-9 object-contain rounded-lg"
                onError={(e) => {
                  e.target.style.display = 'none';
                  if (e.target.nextSibling) {
                    e.target.nextSibling.style.display = 'flex';
                  }
                }}
              />
              <div
                className="hidden w-9 h-9 items-center justify-center rounded-lg flex-shrink-0"
                style={{
                  background: 'linear-gradient(135deg,#1e3a8a,#0ea5e9)'
                }}
              >
                <FlaskConical size={18} color="#fff" />
              </div>
              <span className="font-display text-lg font-bold text-white">
                SmartLab<span className="text-sky-400">Tech</span>
              </span>
            </div>

            {/* Company Description */}
            <p className="text-sm text-slate-400 leading-relaxed font-body mb-5">
              {companyDescription}
            </p>

            {/* Social Media Links */}
            <div className="flex gap-2.5 mb-6">
              {socialLinks.map((item, i) => {
                const Icon = item.icon;
                return (
                  <a
                    key={i}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center cursor-pointer transition-all hover:bg-white/10 hover:border-sky-500"
                  >
                    <Icon size={16} color="#94a3b8" />
                  </a>
                );
              })}
            </div>

            {/* Contact Information */}
            <div className="flex flex-col gap-2.5">
              <div className="flex items-center gap-2.5">
                <Phone size={13} color="#38bdf8" className="flex-shrink-0" />
                <span className="text-sm text-slate-400 font-body">
                  {companyContact.mobileNumber}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail size={13} color="#38bdf8" className="flex-shrink-0" />
                <span className="text-sm text-slate-400 font-body">
                  {companyContact.email}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <MapPin size={13} color="#38bdf8" className="flex-shrink-0" />
                <span className="text-sm text-slate-400 font-body">
                  {companyContact.location}
                </span>
              </div>
            </div>
          </div>

          {/* Footer Links Sections */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <p className="text-xs font-bold text-white tracking-widest uppercase mb-4 font-body">
                {title}
              </p>
              <ul className="flex flex-col gap-2.5 list-none">
                {links.map((link, idx) => (
                  <li key={idx}>
                    <button
                      onClick={() => handleNavigate(link.path)}
                      className="bg-transparent border-none cursor-pointer p-0 text-sm text-slate-400 font-body text-left transition-colors duration-200 hover:text-sky-400"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/[0.08] py-6 flex flex-wrap justify-between items-center gap-3">
          <span className="text-sm text-slate-500 font-body">
            {copyrightText}
          </span>

          <div className="flex gap-5">
            {/* Privacy Policy Link */}
            {footerData?.privacyPolicy?.file && (
              <a
                href={footerData.privacyPolicy.file}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-slate-500 font-body transition-colors duration-200 hover:text-sky-400 cursor-pointer"
              >
                Privacy Policy
              </a>
            )}
            
            {/* Terms of Service Link */}
            {footerData?.termsOfService?.file && (
              <a
                href={footerData.termsOfService.file}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-slate-500 font-body transition-colors duration-200 hover:text-sky-400 cursor-pointer"
              >
                Terms of Service
              </a>
            )}
            
            {/* Cookie Policy Link */}
            {footerData?.cookiePolicy?.file && (
              <a
                href={footerData.cookiePolicy.file}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-slate-500 font-body transition-colors duration-200 hover:text-sky-400 cursor-pointer"
              >
                Cookie Policy
              </a>
            )}

            {/* Fallback links if no policy files */}
            {!footerData?.privacyPolicy?.file && (
              <button
                onClick={() => handleNavigate('/privacy-policy')}
                className="text-xs text-slate-500 font-body transition-colors duration-200 hover:text-sky-400 cursor-pointer bg-transparent border-none"
              >
                Privacy Policy
              </button>
            )}
            {!footerData?.termsOfService?.file && (
              <button
                onClick={() => handleNavigate('/terms')}
                className="text-xs text-slate-500 font-body transition-colors duration-200 hover:text-sky-400 cursor-pointer bg-transparent border-none"
              >
                Terms of Service
              </button>
            )}
            {!footerData?.cookiePolicy?.file && (
              <button
                onClick={() => handleNavigate('/cookies')}
                className="text-xs text-slate-500 font-body transition-colors duration-200 hover:text-sky-400 cursor-pointer bg-transparent border-none"
              >
                Cookie Policy
              </button>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}