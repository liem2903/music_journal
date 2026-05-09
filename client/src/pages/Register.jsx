import { useState } from "react"

export default function Register() {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

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

            <div>
                <p className="text-white text-2xl font-medium leading-snug tracking-tight mb-6">
                Your journal.<br/>
                <span className="text-white/38">Your sound.</span>
                </p>

                <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                    <div className="w-[22px] h-[22px] rounded-full bg-white/90 flex items-center justify-center flex-shrink-0">
                    <span className="text-[#e8635a] text-[10px]">✓</span>
                    </div>
                    <span className="text-white/90 text-xs">Write how you feel</span>
                </div>
                <div className="flex items-center gap-3">
                    <div className="w-[22px] h-[22px] rounded-full bg-white/90 flex items-center justify-center flex-shrink-0">
                    <span className="text-[#e8635a] text-[10px]">✓</span>
                    </div>
                    <span className="text-white/90 text-xs">We analyse your mood</span>
                </div>
                <div className="flex items-center gap-3">
                    <div className="w-[22px] h-[22px] rounded-full bg-white/15 border border-white/30 flex items-center justify-center flex-shrink-0">
                    <span className="text-white/80 text-[10px]">3</span>
                    </div>
                    <span className="text-white/65 text-xs">Get a playlist that fits</span>
                </div>
                </div>
            </div>
            </div>

            {/* Right panel */}
            <div className="bg-[#f5f0e8] flex flex-col justify-center p-8 md:flex-1">
            <h1 className="text-[#1c1410] text-2xl font-medium tracking-tight mb-1">Create account</h1>
            <p className="text-[#8a7d6e] text-sm mb-6">Takes less than a minute.</p>

            {/* Name row */}
            <div className="grid grid-cols-2 gap-3 mb-4">
                <div>
                <label className="block text-[#6b5e51] text-xs font-medium uppercase tracking-widest mb-1.5">
                    First name
                </label>
                <input
                    type="text"
                    placeholder="Liem"
                    className="w-full h-10 bg-[#ede8df] border border-[#d4cbbc] rounded-lg px-3 text-[#1c1410] text-sm placeholder-[#b8ada0] focus:outline-none focus:border-[#e8635a] focus:ring-2 focus:ring-[#e8635a]/14 transition-all"
                    value={firstName} onChange={(e) => setFirstName(e.target.value)}
                />
                </div>
                <div>
                <label className="block text-[#6b5e51] text-xs font-medium uppercase tracking-widest mb-1.5">
                    Last name
                </label>
                <input
                    type="text"
                    placeholder="Phan"
                    className="w-full h-10 bg-[#ede8df] border border-[#d4cbbc] rounded-lg px-3 text-[#1c1410] text-sm placeholder-[#b8ada0] focus:outline-none focus:border-[#e8635a] focus:ring-2 focus:ring-[#e8635a]/14 transition-all"
                    value={lastName} onChange={(e) => setLastName(e.target.value)}
                />
                </div>
            </div>

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
                <input
                type="password"
                placeholder="••••••••"
                className="w-full h-10 bg-[#ede8df] border border-[#d4cbbc] rounded-lg px-3 text-[#1c1410] text-sm placeholder-[#b8ada0] focus:outline-none focus:border-[#e8635a] focus:ring-2 focus:ring-[#e8635a]/14 transition-all"
                value={password} onChange={(e) => setPassword(e.target.value)}
                />
            </div>

            {/* Confirm password */}
            <div className="mb-4">
                <label className="block text-[#6b5e51] text-xs font-medium uppercase tracking-widest mb-1.5">
                Confirm password
                </label>
                <input
                type="password"
                placeholder="••••••••"
                className="w-full h-10 bg-[#ede8df] border border-[#d4cbbc] rounded-lg px-3 text-[#1c1410] text-sm placeholder-[#b8ada0] focus:outline-none focus:border-[#e8635a] focus:ring-2 focus:ring-[#e8635a]/14 transition-all"
                value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}
                />
            </div>

            {/* Submit */}
            <button className="w-full h-10 bg-[#e8635a] hover:bg-[#d4554c] active:scale-95 text-white text-sm font-medium rounded-lg transition-all">
                Create account
            </button>

            <p className="text-center text-[#a09080] text-xs mt-3 leading-relaxed">
                By signing up you agree to our{" "}
                <span className="text-[#e8635a] cursor-pointer">Terms</span> and{" "}
                <span className="text-[#e8635a] cursor-pointer">Privacy Policy</span>
            </p>

            {/* Divider */}
            <div className="flex items-center gap-3 my-4">
                <div className="flex-1 h-px bg-[#d4cbbc]" />
                <span className="text-[#b0a394] text-xs">already have one?</span>
                <div className="flex-1 h-px bg-[#d4cbbc]" />
            </div>

            <p className="text-center text-sm text-[#e8635a] cursor-pointer hover:text-[#d4554c] transition-colors">
                Sign in instead
            </p>
            </div>

        </div>
        </div>
    )
}