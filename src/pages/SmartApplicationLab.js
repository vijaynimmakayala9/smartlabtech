// src/components/SmartApplicationLab.js
import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import {
    FlaskConical,
    Microscope,
    BookOpen,
    Video,
    Users,
    Calendar,
    Wrench,
    Settings,
    CheckCircle,
    ArrowRight,
    Atom,
    Beaker,
    FileText,
    HelpCircle,
    Zap,
    Target,
    Layers,
    TrendingUp,
    Mail
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet';

const FontLink = () => (
    <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,600&family=Outfit:wght@300;400;500;600;700&display=swap');
  `}</style>
);

// Animation wrapper component (reused from Support.js)
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

// Service Item Component for the lab offerings
function LabServiceItem({ icon: Icon, title, description, index }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            viewport={{ once: true }}
            className="flex gap-4 p-4 rounded-xl bg-white/50 backdrop-blur-sm border border-blue-100 hover:shadow-md hover:border-blue-200 transition-all group"
        >
            <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-blue-100 to-sky-100 flex items-center justify-center group-hover:from-blue-600 group-hover:to-sky-600 transition-colors">
                <Icon size={18} className="text-blue-700 group-hover:text-white transition-colors" />
            </div>
            <div>
                <h4 className="font-bold text-slate-800 text-md mb-1 group-hover:text-blue-700 transition-colors" style={{ fontFamily: "'Outfit', sans-serif" }}>
                    {title}
                </h4>
                <p className="text-sm text-slate-500 leading-relaxed">{description}</p>
            </div>
        </motion.div>
    );
}

// Feature Pill Component
function FeaturePill({ children, index }) {
    return (
        <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.03 }}
            viewport={{ once: true }}
            className="px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm text-blue-700 text-sm font-medium border border-blue-200 shadow-sm hover:shadow-md transition-all"
            style={{ fontFamily: "'Outfit', sans-serif" }}
        >
            {children}
        </motion.span>
    );
}

export default function SmartApplicationLab() {
    const heroRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
    const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

    // Data based on the provided URL content
    const labData = {
        hero: {
            title: "Application Support: Smart Lab!",
            tagline: "Step into our Lab!",
            description: "Newly expanded and redesigned, staffed with a team of leading experts SMART APPLICATION LAB is the place where we make ideas happen.",
            image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1600" // Modern lab image
        },
        mainDescription: `SMART APPLICATION LAB is built upon long-term field experience and exhibits a number of typical industrial applications of different markets. Smart Application Lab can help, educate and collaborate with our customers all over India. As part of SMARTLAB's professional customer support we offer our customers the individual advice required to find the optimum solution for their sample preparation task. To achieve this, our application laboratory process, measure samples and provide a recommendation for the most suitable method and instrument. We perform sample tests, demonstrate equipment and provide applications support to customers.`,
        facilityDescription: `These advanced, state-of-the-art facility and expert staffed entities will showcase how smartlab products and services work together for successful expansion with on-time projects. In addition, our technical staff will introduce new applications, which can potentially introduce you to new potential and expanding technology market segments.`,
        offerings: [
            { icon: BookOpen, title: "e-Learning", description: "Online resources and training modules for self-paced learning" },
            { icon: Target, title: "e-Focus", description: "Targeted technical sessions for specific applications" },
            { icon: Beaker, title: "Sample Analysis", description: "Professional testing and analysis of your samples" },
            { icon: Video, title: "Demonstration", description: "Live equipment demonstrations and virtual tours" },
            { icon: Users, title: "Technical Presentations", description: "In-depth presentations by expert staff" },
            { icon: Layers, title: "Features of the Products", description: "Detailed exploration of instrument capabilities" },
            { icon: Wrench, title: "Method Analysis", description: "Optimization of analytical methods for your needs" },
            { icon: HelpCircle, title: "Trouble shooting solutions", description: "Expert diagnosis and problem resolution" },
            { icon: FileText, title: "Application Library", description: "Comprehensive database of applications and methods" }
        ],
        features: [
            "Training sessions", "Demonstrations", "Customization exercises",
            "Interactive sessions", "Presentations", "Sample preparation"
        ],
        cta: {
            title: "Need help with analytical challenges or equipment selection?",
            buttonText: "Contact us for technical assistance!",
            email: "info@smartlabtech.net"
        }
    };

    return (
        <>

            <Helmet>

                <title>Application Laboratory Solutions | SmartLabTech</title>

                <meta
                    name="description"
                    content="Discover SmartLabTech application laboratory solutions for research, testing, analysis, quality control, healthcare, pharma, and industrial applications."
                />

                <meta
                    name="keywords"
                    content="application laboratory, lab testing solutions, research applications, pharma laboratory, analytical solutions"
                />

                <meta name="robots" content="index, follow" />

                <meta property="og:title" content="Application Laboratory Solutions | SmartLabTech" />

                <meta
                    property="og:description"
                    content="Advanced laboratory application solutions for scientific research, analysis, and industrial testing."
                />

                <meta property="og:type" content="website" />

                <meta property="og:image" content="/logo.png" />

                <link rel="canonical" href="https://smartlabtech.com/application-lab" />

            </Helmet>

            <Navbar />
            <FontLink />

            {/* Hero Section with Lab Background Image */}
            <section ref={heroRef} className="relative overflow-hidden" style={{ minHeight: 'clamp(580px, 85vh, 820px)' }}>
                {/* Parallax background image */}
                <motion.div className="absolute inset-0" style={{ y: imgY }}>
                    <img
                        src={labData.hero.image}
                        alt="Smart Application Lab"
                        className="w-full h-full object-cover object-center"
                    />
                    {/* Hero overlay with premium gradient - matching Support.js */}
                    <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(15,35,86,0.88)_0%,rgba(30,58,138,0.72)_50%,rgba(14,165,233,0.82)_100%)]" />
                    <div className="absolute inset-0 bg-[linear-gradient(to_top,#0f2356_0%,transparent_55%)]" />
                </motion.div>

                {/* Grid pattern - matching Support.js */}
                <div className="absolute inset-0 opacity-30 pointer-events-none" style={{
                    backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
                    backgroundSize: '64px 64px'
                }} />

                {/* Blue radial accent */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none bg-gradient-to-bl from-sky-500/10 to-transparent rounded-full blur-3xl" />

                {/* Content */}
                <div className="relative z-10 max-w-8xl mx-auto px-4 sm:px-8 lg:px-20 flex flex-col justify-center items-center min-h-[clamp(580px,85vh,820px)]"
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
                            SmartLabTech · Application Lab
                        </span>
                    </motion.div>

                    {/* Headline with gradient text */}
                    <motion.h1
                        initial={{ opacity: 0, y: 32 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.85, delay: 0.1 }}
                        className="text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-bold text-white leading-[0.92] mb-4 text-center"
                        style={{ fontFamily: "'Playfair Display', serif", letterSpacing: '-0.02em' }}
                    >
                        {labData.hero.title}
                    </motion.h1>

                    {/* Tagline */}
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.18 }}
                        className="text-xl sm:text-2xl md:text-3xl font-semibold text-white/90 mb-6 text-center"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                        {labData.hero.tagline}
                    </motion.h2>

                    {/* Subtext */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.26 }}
                        className="text-base sm:text-lg leading-relaxed mb-10 max-w-2xl text-center text-white/80"
                        style={{ fontFamily: "'Outfit', sans-serif" }}
                    >
                        {labData.hero.description}
                    </motion.p>

                    {/* CTA button */}
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.34 }}
                    >
                        <a
                            href={`mailto:${labData.cta.email}`}
                            className="relative overflow-hidden inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-white bg-[linear-gradient(135deg,rgba(15,35,86,0.95)_0%,rgba(30,58,138,0.9)_50%,rgba(14,165,233,0.95)_100%)] hover:shadow-lg hover:-translate-y-0.5 transition-all before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-white/20 before:to-transparent before:transition-transform before:duration-500 hover:before:translate-x-0"
                            style={{ fontFamily: "'Outfit', sans-serif" }}
                        >
                            <Mail size={15} /> Contact Our Lab Experts
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* Main Description Section */}
            <section className="bg-blue-50 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                        <Reveal>
                            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-sm border border-blue-100">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-1 h-8 bg-gradient-to-b from-blue-600 to-sky-500 rounded-full" />
                                    <h3 className="text-xl font-bold text-slate-800" style={{ fontFamily: "'Playfair Display', serif" }}>
                                        Our Approach
                                    </h3>
                                </div>
                                <p className="text-slate-600 leading-relaxed" style={{ fontFamily: "'Outfit', sans-serif" }}>
                                    {labData.mainDescription}
                                </p>
                            </div>
                        </Reveal>

                        <Reveal delay={0.15}>
                            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-sm border border-blue-100">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-1 h-8 bg-gradient-to-b from-blue-600 to-sky-500 rounded-full" />
                                    <h3 className="text-xl font-bold text-slate-800" style={{ fontFamily: "'Playfair Display', serif" }}>
                                        State-of-the-Art Facility
                                    </h3>
                                </div>
                                <p className="text-slate-600 leading-relaxed" style={{ fontFamily: "'Outfit', sans-serif" }}>
                                    {labData.facilityDescription}
                                </p>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* What We Offer Section - Grid of services */}
            <section className="bg-blue-50 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-20">
                    <Reveal className="text-center mb-12">
                        <div className="flex items-center justify-center gap-2 mb-3">
                            <div className="w-8 h-px bg-blue-600" />
                            <span className="text-[10px] font-semibold tracking-[0.25em] uppercase text-blue-600" style={{ fontFamily: "'Outfit', sans-serif" }}>
                                Lab Capabilities
                            </span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900" style={{ fontFamily: "'Playfair Display', serif" }}>
                            Technology & Support Services
                        </h2>
                        <p className="text-slate-500 max-w-2xl mx-auto mt-3" style={{ fontFamily: "'Outfit', sans-serif" }}>
                            An application lab where technology is demonstrated to provide and support your research needs
                        </p>
                    </Reveal>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {labData.offerings.map((offering, index) => (
                            <LabServiceItem
                                key={offering.title}
                                icon={offering.icon}
                                title={offering.title}
                                description={offering.description}
                                index={index}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Pills Section */}
            <section className="bg-blue-50 py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-20">
                    <Reveal className="text-center mb-8">
                        <h3 className="text-xl font-semibold text-slate-700 mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                            At our Application Lab customers can participate in
                        </h3>
                    </Reveal>
                    <div className="flex flex-wrap justify-center gap-3">
                        {labData.features.map((feature, index) => (
                            <FeaturePill key={feature} index={index}>
                                {feature}
                            </FeaturePill>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA Section - Premium gradient matching Support.js */}
            <Reveal>
                <div className="py-16 px-4 bg-blue-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-20">
                        <div className="rounded-2xl p-8 sm:p-12 flex flex-wrap items-center justify-between gap-6 bg-[linear-gradient(135deg,rgba(15,35,86,0.95)_0%,rgba(30,58,138,0.9)_50%,rgba(14,165,233,0.95)_100%)] shadow-xl">
                            <div>
                                <p className="text-[11px] font-bold text-sky-200 tracking-widest uppercase mb-2" style={{ fontFamily: "'Outfit', sans-serif" }}>
                                    Need Assistance?
                                </p>
                                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                                    {labData.cta.title}
                                </h3>
                                <p className="text-sm text-white/70 max-w-sm" style={{ fontFamily: "'Outfit', sans-serif" }}>
                                    Our application experts are ready to help you find the right solution.
                                </p>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-3">
                                <a
                                    href={`mailto:${labData.cta.email}`}
                                    className="relative overflow-hidden inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-[linear-gradient(135deg,rgba(15,35,86,0.95)_0%,rgba(30,58,138,0.9)_50%,rgba(14,165,233,0.95)_100%)] hover:shadow-lg hover:-translate-y-0.5 transition-all before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-white/20 before:to-transparent before:transition-transform before:duration-500 hover:before:translate-x-0"
                                    style={{ fontFamily: "'Outfit', sans-serif" }}
                                >
                                    <Mail size={15} /> {labData.cta.buttonText}
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