import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const BlogDetailsPage = () => {
    return (
        <>
            <Navbar />
            <div className="bg-gray-50">

                {/* HERO */}
                <div className="bg-gradient-to-r from-[#0f2356] to-[#2563eb] text-white py-20 px-6 text-center">
                    <h1 className="text-3xl md:text-5xl font-bold max-w-4xl mx-auto leading-tight">
                        Liquid Chromatography: How It Works and Real-World Applications
                    </h1>
                    <p className="mt-4 text-sm opacity-80">November 13, 2024</p>
                </div>

                {/* CONTENT */}
                <div className="max-w-5xl mx-auto px-6 py-14">

                    {/* INTRO */}
                    <p className="text-gray-700 leading-7 mb-6">
                        Ever wondered how laboratories make sure the drugs you take are safe or how food manufacturers check for contaminants?
                        The answer lies in a powerful technique called <strong>Liquid Chromatography (LC)</strong>. :contentReference
                    </p>

                    <p className="text-gray-700 leading-7 mb-10">
                        Whether you're in pharmaceuticals, food safety, or environmental testing, LC plays a key role in ensuring accuracy and safety.
                    </p>

                    {/* WHAT IS LC */}
                    <h2 className="text-2xl font-semibold mb-4">What is Liquid Chromatography?</h2>
                    <p className="text-gray-700 leading-7 mb-10">
                        Liquid Chromatography is a technique used to separate and analyse components in a mixture. It helps scientists test purity,
                        detect harmful substances, and ensure quality across industries.
                    </p>

                    {/* HOW IT WORKS */}
                    <h2 className="text-2xl font-semibold mb-4">How Does It Work?</h2>

                    <div className="space-y-4 mb-10">
                        <p><strong>Mobile Phase:</strong> Liquid solvent carrying the sample</p>
                        <p><strong>Stationary Phase:</strong> Solid material inside a column</p>
                        <p><strong>Separation:</strong> Components move at different speeds based on interaction</p>
                    </div>

                    <p className="text-gray-700 mb-10">
                        Think of it like a race — some components move faster while others stick and slow down.
                    </p>

                    {/* TYPES */}
                    <h2 className="text-2xl font-semibold mb-6">Types of Liquid Chromatography</h2>

                    <div className="space-y-6">

                        <div className="bg-white p-6 rounded-xl shadow">
                            <h3 className="font-semibold text-lg mb-2">HPLC</h3>
                            <p>High precision technique used in pharma, environment, and forensics.</p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow">
                            <h3 className="font-semibold text-lg mb-2">UHPLC</h3>
                            <p>Faster and higher resolution version of HPLC.</p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow">
                            <h3 className="font-semibold text-lg mb-2">Ion Chromatography</h3>
                            <p>Used to analyse ions in water and environmental samples.</p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow">
                            <h3 className="font-semibold text-lg mb-2">SEC</h3>
                            <p>Separates molecules based on size (proteins, polymers).</p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow">
                            <h3 className="font-semibold text-lg mb-2">RPLC</h3>
                            <p>Most common method for hydrophobic compounds.</p>
                        </div>

                    </div>

                    {/* APPLICATIONS */}
                    <h2 className="text-2xl font-semibold mt-12 mb-6">Real-World Applications</h2>

                    <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-10">
                        <li>Pharmaceuticals – drug purity & safety</li>
                        <li>Environmental testing – pollution detection</li>
                        <li>Food industry – additives & contaminants</li>
                        <li>Forensic science – drug detection</li>
                        <li>Biotechnology – protein & biomarker analysis</li>
                    </ul>

                    {/* CASE STUDIES */}
                    <h2 className="text-2xl font-semibold mb-6">Case Studies</h2>

                    <div className="space-y-6">

                        <div className="bg-white p-6 rounded-xl shadow">
                            <h4 className="font-semibold mb-2">Cancer Drug Testing</h4>
                            <p>HPLC ensures purity of drugs like paclitaxel used in chemotherapy.</p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow">
                            <h4 className="font-semibold mb-2">Water Safety</h4>
                            <p>Detects pesticide contamination in rivers and groundwater.</p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow">
                            <h4 className="font-semibold mb-2">Food Safety</h4>
                            <p>Detects preservatives like sodium benzoate in beverages.</p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow">
                            <h4 className="font-semibold mb-2">Forensic Analysis</h4>
                            <p>Used in drug detection during investigations.</p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow">
                            <h4 className="font-semibold mb-2">Biotech Research</h4>
                            <p>Helps detect Alzheimer’s biomarkers.</p>
                        </div>

                    </div>

                    {/* CONCLUSION */}
                    <h2 className="text-2xl font-semibold mt-12 mb-4">Conclusion</h2>
                    <p className="text-gray-700 leading-7 mb-10">
                        Liquid chromatography is essential across healthcare, environmental science, food safety,
                        and biotechnology due to its unmatched precision and reliability.
                    </p>

                    {/* CTA */}
                    <div className="bg-gradient-to-r from-[#0f2356] to-[#2563eb] text-white p-8 rounded-2xl text-center">
                        <h3 className="text-2xl font-semibold mb-3">
                            Need Chromatography Solutions?
                        </h3>
                        <p className="mb-4 opacity-90">
                            Contact our experts for advanced lab equipment and support.
                        </p>
                        <button className="bg-white text-[#0f2356] px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition">
                            Contact Us
                        </button>
                    </div>

                </div>
            </div>
            <Footer />
        </>
    );
};

export default BlogDetailsPage;