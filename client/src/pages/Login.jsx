import { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ email, password });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-black text-white px-6">

            <div className="w-full max-w-md bg-zinc-900 border border-white/10 rounded-3xl p-10">

                <h1 className="text-3xl font-bold mb-2">Welcome back</h1>
                <p className="text-white/60 mb-8">Login to continue exploring experiences</p>

                <form onSubmit={handleSubmit} className="space-y-5">

                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full bg-black/40 border border-white/10 rounded-2xl px-5 py-4 outline-none"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full bg-black/40 border border-white/10 rounded-2xl px-5 py-4 outline-none"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <button
                        type="submit"
                        className="w-full bg-white text-black py-4 rounded-2xl font-semibold hover:scale-[1.02] active:scale-95 transition"
                    >
                        Login
                    </button>

                </form>

                <p className="text-center text-white/60 mt-6 text-sm">
                    Don’t have an account?{" "}
                    <Link to="/register" className="text-white hover:underline">
                        Register
                    </Link>
                </p>

                <Link to="/" className="block text-center mt-6 text-white/50 hover:text-white text-sm">
                    Back to Home
                </Link>

            </div>
        </div>
    );
}