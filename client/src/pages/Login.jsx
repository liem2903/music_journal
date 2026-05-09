import { useState } from "react"
import { useNavigate } from "react-router-dom";
import api from "../api/axios.js";

export default function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ errorMessage, setErrorMessage ] = useState("");
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            await api.post("/login", {password, email}).then(navigate("/"));
        } catch (err) {
            setErrorMessage(err.response.data.message);
        }
    }

    return (
        <div className="min-h-screen bg-[#1c1410] flex items-center justify-center p-4">
        <div className="w-full flex flex-col md:flex-row overflow-hidden rounded-2xl min-h-[calc(100vh-2rem)]">

            {/* Left panel */}
            <div className="bg-[#e8635a] flex flex-col justify-between p-8 md:w-2/5">
            <div className="flex items-center gap-2">
                <div className="w-8 h-8 border border-white/35 rounded-lg flex items-center justify-center text-white text-base">
                ♪
                </div>
                <span className="text-white/90 text-sm font-medium">Music Journal</span>
            </div>

            <p className="text-white text-2xl font-medium leading-snug tracking-tight">
                Music that matches{" "}
                <span className="text-white/38">how you</span>{" "}
                actually feel.
            </p>
            </div>

            {/* Right panel */}
            <div className="bg-[#f5f0e8] flex flex-col justify-center p-8 md:flex-1">
            <h1 className="text-[#1c1410] text-2xl font-medium tracking-tight mb-1">Sign in</h1>
            <p className="text-[#8a7d6e] text-sm mb-8">Good to have you back.</p>

            {/* Email */}
            <div className="mb-4">
                <label className="block text-[#6b5e51] text-xs font-medium uppercase tracking-widest mb-1.5">
                Email
                </label>
                <input
                type="email"
                placeholder="you@example.com"
                className="w-full h-10 bg-[#ede8df] border border-[#d4cbbc] rounded-lg px-3 text-[#1c1410] text-sm placeholder-[#b8ada0] focus:outline-none focus:border-[#e8635a] focus:ring-2 focus:ring-[#e8635a]/14 transition-all"
                value={email} onChange={(e) => setEmail(e.target.value)}
                />
            </div>

            {/* Password */}
            <div className="mb-4">
                <label className="block text-[#6b5e51] text-xs font-medium uppercase tracking-widest mb-1.5">
                Password
                </label>
                <div className="relative">
                <input
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    className="w-full h-10 bg-[#ede8df] border border-[#d4cbbc] rounded-lg px-3 pr-10 text-[#1c1410] text-sm placeholder-[#b8ada0] focus:outline-none focus:border-[#e8635a] focus:ring-2 focus:ring-[#e8635a]/14 transition-all"
                    value={password} onChange={(e) => setPassword(e.target.value)}
                />
                <button
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[#b0a394] hover:text-[#8a7d6e] transition-colors"
                    aria-label="Toggle password visibility"
                >
                    {showPassword ? "🙈" : "👁"}
                </button>
                </div>
                <p className="text-right text-xs text-[#e8635a] mt-1 cursor-pointer hover:text-[#d4554c]">
                Forgot password?
                </p>
            </div>

            {/* Submit */}
            <button className="w-full h-10 bg-[#e8635a] hover:bg-[#d4554c] active:scale-95 text-white text-sm font-medium rounded-lg mt-2 transition-all">
                Sign in
            </button>

            {/* Divider */}
            <div className="flex items-center gap-3 my-5">
                <div className="flex-1 h-px bg-[#d4cbbc]" />
                <span className="text-[#b0a394] text-xs">no account?</span>
                <div className="flex-1 h-px bg-[#d4cbbc]" />
            </div>

            <p className="text-center text-sm text-[#e8635a] cursor-pointer hover:text-[#d4554c] transition-colors" onClick={navigate("/register")}>
                Create one — it's free
            </p>
            </div>
        </div>
        </div>
    )
}