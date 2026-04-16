import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

const blogs = [
    {
        title: "Introduction to Gas Chromatography",
        desc: "Learn how gas chromatography helps detect substances in laboratories.",
        img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
        date: "March 10, 2026",
        category: "Technology",
    },
    {
        title: "Importance of Calibration in Labs",
        desc: "Why calibration ensures accurate and reliable lab results.",
        img: "https://images.unsplash.com/photo-1581093458791-9d42b3c3d6c7",
        date: "March 5, 2026",
        category: "Insights",
    },
    {
        title: "Top Laboratory Equipment Trends",
        desc: "Discover the latest innovations in lab technology.",
        img: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69",
        date: "Feb 28, 2026",
        category: "Updates",
    },
    {
        title: "How to Maintain Lab Equipment",
        desc: "Best practices to increase equipment lifespan.",
        img: "https://images.unsplash.com/photo-1581090700227-4c4c1c3b3f7d",
        date: "Feb 20, 2026",
        category: "Maintenance",
    },
];

const BlogsPage = () => {

    const navigate = useNavigate();
    return (
        <>
            <Navbar />
            <div className="bg-gray-50">

                {/* HERO */}
                <div className="bg-gradient-to-r from-[#0f2356] to-[#2563eb] text-white py-20 px-6 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Our Blog
                    </h1>
                    <p className="max-w-3xl mx-auto text-lg opacity-90">
                        Explore industry insights, product updates, and expert knowledge in laboratory technology.
                    </p>
                </div>

                {/* MAIN CONTENT */}
                <div className="max-w-7xl mx-auto px-6 py-14 grid lg:grid-cols-3 gap-10">

                    {/* LEFT - BLOGS */}
                    <div className="lg:col-span-2 space-y-8">

                        {/* FEATURED BLOG */}
                        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                            <img
                                src={blogs[0].img}
                                alt=""
                                className="w-full h-[300px] object-cover"
                            />
                            <div className="p-6">
                                <span className="text-sm text-blue-600 font-semibold">
                                    {blogs[0].category}
                                </span>
                                <h2 className="text-2xl font-bold mt-2 mb-3">
                                    {blogs[0].title}
                                </h2>
                                <p className="text-gray-600 mb-4">{blogs[0].desc}</p>
                                <span className="text-sm text-gray-400">{blogs[0].date}</span>
                            </div>
                        </div>

                        {/* BLOG GRID */}
                        <div className="grid sm:grid-cols-2 gap-6">
                            {blogs.slice(1).map((blog, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-xl shadow hover:shadow-xl transition overflow-hidden"
                                >
                                    <img
                                        src={blog.img}
                                        alt=""
                                        className="w-full h-[180px] object-cover"
                                    />
                                    <div className="p-5">
                                        <span className="text-xs text-blue-600 font-semibold">
                                            {blog.category}
                                        </span>
                                        <h3 className="font-semibold text-lg mt-2 mb-2">
                                            {blog.title}
                                        </h3>
                                        <p className="text-gray-600 text-sm">{blog.desc}</p>
                                        <span className="block text-xs text-gray-400 mt-3">
                                            {blog.date}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT - SIDEBAR */}
                    <div className="space-y-8">

                        {/* SEARCH */}
                        <div className="bg-white p-6 rounded-xl shadow">
                            <input
                                type="text"
                                placeholder="Search blog..."
                                className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2563eb]"
                            />
                        </div>

                        {/* CATEGORIES */}
                        <div className="bg-white p-6 rounded-xl shadow">
                            <h3 className="text-lg font-semibold mb-4">Categories</h3>
                            <ul className="space-y-2 text-gray-600">
                                <li className="hover:text-blue-600 cursor-pointer">Technology</li>
                                <li className="hover:text-blue-600 cursor-pointer">Insights</li>
                                <li className="hover:text-blue-600 cursor-pointer">Maintenance</li>
                                <li className="hover:text-blue-600 cursor-pointer">Updates</li>
                            </ul>
                        </div>

                        {/* RECENT POSTS */}
                        <div className="bg-white p-6 rounded-xl shadow">
                            <h3 className="text-lg font-semibold mb-4">Recent Posts</h3>
                            <div className="space-y-4">
                                {blogs.map((blog, index) => (
                                    <div key={index} className="flex gap-3 items-center" onClick={()=>navigate('/blogDetails')}>
                                        <img
                                            src={blog.img}
                                            alt=""
                                            className="w-16 h-16 rounded-md object-cover"
                                        />
                                        <div>
                                            <p className="text-sm font-medium">{blog.title}</p>
                                            <span className="text-xs text-gray-400">
                                                {blog.date}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>

                {/* CTA */}
                <div className="bg-gradient-to-r from-[#0f2356] to-[#2563eb] text-white text-center py-14 px-6">
                    <h2 className="text-3xl font-semibold mb-4">
                        Stay Updated with Latest Insights
                    </h2>
                    <p className="mb-6 opacity-90">
                        Subscribe to our blog for the latest updates in lab technology.
                    </p>
                    <button className="bg-white text-[#0f2356] px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition">
                        Subscribe Now
                    </button>
                </div>

            </div>
            <Footer/>
        </>
    );
};

export default BlogsPage;