import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Home() {
    const [menuOpen, setMenuOpen] = useState(false);

    const experiences = [
        {
            title: "Sunset Rooftop Sessions",
            category: "Music & Nightlife",
            location: "Lusaka",
            image:
                "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=1200&auto=format&fit=crop",
        },
        {
            title: "Urban Art & Culture Walk",
            category: "Art & Culture",
            location: "Livingstone",
            image:
                "https://images.unsplash.com/photo-1518998053901-5348d3961a04?q=80&w=1200&auto=format&fit=crop",
        },
        {
            title: "Taste of Zambia Food Experience",
            category: "Food",
            location: "Lusaka",
            image:
                "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200&auto=format&fit=crop",
        },
    ];

    const stories = [
        {
            title: "How Creative Spaces Are Reshaping African Cities",
            description:
                "Exploring the rise of modern cultural hubs and community-driven experiences.",
        },
        {
            title: "The Future of Lifestyle Discovery",
            description:
                "Why curated experiences are becoming the new social ecosystem.",
        },
    ];

    useEffect(() => {
        axios
            .get("http://localhost:5000")
            .then((response) => console.log(response.data))
            .catch((error) => console.log(error));
    }, []);

    return (
        <div className="min-h-screen bg-black text-white font-sans">

            {/* NAVIGATION */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-lg border-b border-white/10">
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

                    <Link
                        to="/"
                        className="text-2xl font-bold tracking-wide"
                        onClick={() => setMenuOpen(false)}
                    >
                        Kulture
                    </Link>

                    {/* Desktop menu */}
                    <div className="hidden md:flex gap-8 text-sm text-white/80">
                        <Link to="/" className="hover:text-white transition">Home</Link>
                        <a href="#explore" className="hover:text-white transition">Explore</a>
                        <a href="#stories" className="hover:text-white transition">Stories</a>
                        <a href="#community" className="hover:text-white transition">Community</a>
                        <Link to="/login" className="hover:text-white transition">Login</Link>
                        <Link to="/register" className="hover:text-white transition">Register</Link>
                    </div>

                    {/* Right side */}
                    <div className="flex items-center gap-4">

                        <button
                            className="md:hidden text-white text-2xl"
                            onClick={() => setMenuOpen(!menuOpen)}
                        >
                            ☰
                        </button>

                        <Link
                            to="/register"
                            className="hidden md:block bg-white text-black px-5 py-2 rounded-full text-sm font-medium hover:scale-105 active:scale-95 transition"
                        >
                            Join Community
                        </Link>
                    </div>
                </div>
            </nav>

            {/* MOBILE MENU */}
            {menuOpen && (
                <div className="md:hidden fixed top-16 left-0 right-0 bg-black border-b border-white/10 p-6 space-y-5 z-50 text-sm">

                    <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
                    <a href="#explore" onClick={() => setMenuOpen(false)}>Explore</a>
                    <a href="#stories" onClick={() => setMenuOpen(false)}>Stories</a>
                    <a href="#community" onClick={() => setMenuOpen(false)}>Community</a>
                    <Link to="/login" onClick={() => setMenuOpen(false)}>Login</Link>
                    <Link to="/register" onClick={() => setMenuOpen(false)}>Register</Link>

                </div>
            )}

            {/* HERO */}
            <section
                className="relative h-screen flex items-center justify-center overflow-hidden pt-24"
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1600&auto=format&fit=crop')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="absolute inset-0 bg-black/60" />

                <div className="relative z-10 text-center px-6 max-w-4xl">

                    <p className="uppercase tracking-[0.3em] text-white/70 mb-4 text-sm">
                        Discover Culture • Experiences • Community
                    </p>

                    <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
                        A Modern Cultural & Lifestyle Ecosystem
                    </h1>

                    <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto">
                        Discover immersive experiences, curated stories, local culture,
                        and vibrant communities.
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 justify-center">

                        <button className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:scale-105 active:scale-95 transition duration-200">
                            Explore Experiences
                        </button>

                        <button className="border border-white/30 px-8 py-4 rounded-full hover:bg-white/10 active:scale-95 transition">
                            Discover Stories
                        </button>

                    </div>
                </div>
            </section>

            {/* SEARCH */}
            <section className="relative -mt-20 z-20 px-6">
                <div className="max-w-5xl mx-auto bg-zinc-900 border border-white/10 rounded-3xl p-6 shadow-2xl">

                    <div className="grid md:grid-cols-4 gap-4">

                        <input className="bg-black/40 border border-white/10 rounded-2xl px-5 py-4 outline-none" placeholder="Search experiences" />
                        <input className="bg-black/40 border border-white/10 rounded-2xl px-5 py-4 outline-none" placeholder="Location" />

                        <select className="bg-black/40 border border-white/10 rounded-2xl px-5 py-4 outline-none">
                            <option>All Categories</option>
                            <option>Music</option>
                            <option>Food</option>
                            <option>Art</option>
                        </select>

                        <button className="bg-white text-black rounded-2xl font-semibold hover:scale-[1.02] active:scale-95 transition">
                            Discover
                        </button>

                    </div>
                </div>
            </section>

            {/* EXPLORE */}
            <section id="explore" className="py-28 px-6">
                <div className="max-w-7xl mx-auto">

                    <div className="flex items-center justify-between mb-10">
                        <div>
                            <p className="text-white/60 uppercase text-sm mb-2">Curated Discovery</p>
                            <h2 className="text-4xl font-bold">Trending Experiences</h2>
                        </div>

                        <button className="border border-white/20 px-5 py-2 rounded-full text-sm hover:bg-white/10 transition">
                            View All
                        </button>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">

                        {experiences.map((item, index) => (
                            <div key={index} className="group bg-zinc-900 rounded-3xl overflow-hidden border border-white/10 hover:border-white/40 hover:scale-[1.02] transition duration-300">

                                <div className="relative overflow-hidden h-80">

                                    <img
                                        src={item.image}
                                        className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                                    <div className="absolute bottom-6 left-6 right-6">

                                        <p className="text-sm text-white/70 mb-2">{item.category}</p>
                                        <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
                                        <p className="text-white/70">{item.location}</p>

                                    </div>
                                </div>

                            </div>
                        ))}

                    </div>
                </div>
            </section>

            {/* STORIES */}
            <section id="stories" className="py-24 px-6 bg-zinc-950">
                <div className="max-w-7xl mx-auto">

                    <h2 className="text-4xl font-bold mb-12">Stories & Perspectives</h2>

                    <div className="grid md:grid-cols-2 gap-8">

                        {stories.map((story, index) => (
                            <div key={index} className="bg-black border border-white/10 rounded-3xl p-10 hover:border-white/30 transition">

                                <h3 className="text-2xl font-semibold mb-4">{story.title}</h3>
                                <p className="text-white/70 mb-6">{story.description}</p>

                                <button className="text-sm uppercase tracking-wider hover:text-white">
                                    Read Story →
                                </button>

                            </div>
                        ))}

                    </div>
                </div>
            </section>

            {/* COMMUNITY */}
            <section id="community" className="py-28 px-6 text-center">

                <h2 className="text-5xl font-bold mb-6">Built Around Culture & People</h2>

                <p className="text-white/70 max-w-3xl mx-auto mb-12">
                    This platform connects communities and experiences through culture.
                </p>

            </section>

        </div>
    );
}