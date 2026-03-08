import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

const NAV_LINKS = [
    { to: "/",           label: "Home"       },
    { to: "/about",      label: "About"      },
    { to: "/committees", label: "Committees" },
    { to: "/projects",   label: "Projects"   },
    { to: "/contact",    label: "Contact"    },
];

export default function Navbar() {
    const [isOpen, setIsOpen]     = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { pathname }            = useLocation();

    /* Shrink + glassify on scroll */
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <>
            <nav
                style={{
                    background:     scrolled ? "rgba(14,38,17,0.90)"   : "rgba(27,94,32,1)",
                    backdropFilter: scrolled ? "blur(18px) saturate(1.4)" : "none",
                    borderBottom:   scrolled ? "1px solid rgba(74,222,128,0.13)" : "1px solid transparent",
                    boxShadow:      scrolled ? "0 2px 40px rgba(0,0,0,0.40)"     : "none",
                    transition:     "all 0.45s ease",
                }}
                className="fixed top-0 left-0 w-full z-50"
            >
                <div
                    className="max-w-7xl mx-auto flex items-center justify-between px-6 sm:px-10 lg:px-16"
                    style={{ height: scrolled ? "58px" : "72px", transition: "height 0.45s ease" }}
                >
                    {/* ── Logo + Brand — hidden on mobile when panel is open ── */}
                    <Link
                        to="/"
                        className="flex items-center gap-3 flex-shrink-0"
                        style={{ opacity: isOpen ? 0 : 1, transition: "opacity 0.25s ease", pointerEvents: isOpen ? "none" : "auto" }}
                    >
                        <img
                            src={logo}
                            alt="IEEE PES"
                            className="w-auto"
                            style={{
                                height:     scrolled ? "34px" : "44px",
                                transition: "height 0.45s ease",
                            }}
                        />
                        <div className="hidden sm:flex items-center gap-3">
                            <div className="w-px h-6 bg-white/20" />
                            <div className="flex flex-col leading-tight">
                                <span className="text-white font-semibold text-[11px] tracking-[0.14em] uppercase">
                                    IEEE PES
                                </span>
                                <span className="text-white/45 text-[9px] tracking-[0.12em] uppercase">
                                    UoM Student Branch
                                </span>
                            </div>
                        </div>
                    </Link>

                    {/* ── Desktop nav ── */}
                    <div className="hidden md:flex items-center gap-0.5">
                        {NAV_LINKS.map(({ to, label }) => {
                            const active = pathname === to;
                            return (
                                <Link
                                    key={to}
                                    to={to}
                                    className="relative px-4 py-2 rounded-md text-[13px] font-medium
                                               tracking-wide transition-colors duration-250"
                                    style={{ color: active ? "#4ade80" : "rgba(255,255,255,0.78)" }}
                                >
                                    {/* bg pill on active/hover */}
                                    <span
                                        className="absolute inset-0 rounded-md"
                                        style={{
                                            background: "rgba(74,222,128,0.09)",
                                            opacity:    active ? 1 : 0,
                                            transition: "opacity 0.25s",
                                        }}
                                    />
                                    {/* glowing underline dot */}
                                    {active && (
                                        <span
                                            className="absolute bottom-[3px] left-1/2 -translate-x-1/2
                                                       w-1 h-1 rounded-full bg-[#4ade80]"
                                            style={{ boxShadow: "0 0 7px #4ade80, 0 0 14px rgba(74,222,128,.5)" }}
                                        />
                                    )}
                                    <span className="relative">{label}</span>
                                </Link>
                            );
                        })}

                        {/* Glowing CTA */}
                        <a
                            href="mailto:pes@uom.lk"
                            className="ml-4 px-5 py-2 rounded-md text-[13px] font-semibold
                                       tracking-wide transition-all duration-300"
                            style={{
                                color:        "#4ade80",
                                border:       "1px solid rgba(74,222,128,0.40)",
                                background:   "rgba(74,222,128,0.07)",
                                boxShadow:    "0 0 0 0 rgba(74,222,128,0)",
                            }}
                            onMouseEnter={e => {
                                const el = e.currentTarget as HTMLElement;
                                el.style.background  = "rgba(74,222,128,0.16)";
                                el.style.borderColor = "rgba(74,222,128,0.70)";
                                el.style.boxShadow   = "0 0 16px rgba(74,222,128,0.20)";
                            }}
                            onMouseLeave={e => {
                                const el = e.currentTarget as HTMLElement;
                                el.style.background  = "rgba(74,222,128,0.07)";
                                el.style.borderColor = "rgba(74,222,128,0.40)";
                                el.style.boxShadow   = "0 0 0 0 rgba(74,222,128,0)";
                            }}
                        >
                            Contact Us
                        </a>
                    </div>

                    {/* ── Hamburger ── */}
                    <button
                        onClick={() => setIsOpen(true)}
                        aria-label="Open menu"
                        className="md:hidden flex items-center justify-center
                                   w-10 h-10 rounded-md text-white text-xl
                                   transition-colors duration-200 hover:bg-white/10"
                    >
                        <FaBars />
                    </button>
                </div>
            </nav>

            {/* ════════════════════════════════
                MOBILE SLIDE PANEL
            ════════════════════════════════ */}

            {/* Backdrop */}
            <div
                onClick={() => setIsOpen(false)}
                className="fixed inset-0 z-40 md:hidden"
                style={{
                    background:    "rgba(0,0,0,0.60)",
                    backdropFilter:"blur(4px)",
                    opacity:       isOpen ? 1 : 0,
                    pointerEvents: isOpen ? "auto" : "none",
                    transition:    "opacity 0.35s ease",
                }}
            />

            {/* Panel */}
            <div
                className="fixed top-0 right-0 h-full w-72 z-50 md:hidden flex flex-col"
                style={{
                    background:  "linear-gradient(170deg, #183b1c 0%, #0e2611 100%)",
                    borderLeft:  "1px solid rgba(74,222,128,0.14)",
                    boxShadow:   "-8px 0 40px rgba(0,0,0,0.50)",
                    transform:   isOpen ? "translateX(0)" : "translateX(100%)",
                    transition:  "transform 0.40s cubic-bezier(0.4,0,0.2,1)",
                }}
            >
                {/* Header */}
                <div
                    className="flex items-center justify-between px-5 py-4"
                    style={{ borderBottom: "1px solid rgba(74,222,128,0.10)" }}
                >
                    <div className="flex items-center gap-3">
                        <img src={logo} alt="IEEE PES" className="h-9 w-auto" />

                    </div>
                    <button
                        onClick={() => setIsOpen(false)}
                        className="w-8 h-8 flex items-center justify-center rounded-md
                                   text-white/60 hover:text-white hover:bg-white/10
                                   transition-colors duration-200"
                    >
                        <FaTimes />
                    </button>
                </div>

                {/* Links */}
                <nav className="flex flex-col px-3 pt-5 pb-3 gap-1 flex-1">
                    {NAV_LINKS.map(({ to, label }, i) => {
                        const active = pathname === to;
                        return (
                            <Link
                                key={to}
                                to={to}
                                onClick={() => setIsOpen(false)}
                                className="flex items-center px-4 py-3 rounded-md
                                           text-sm font-medium tracking-wide"
                                style={{
                                    color:           active ? "#4ade80" : "rgba(255,255,255,0.75)",
                                    background:      active ? "rgba(74,222,128,0.10)" : "transparent",
                                    borderLeft:      active ? "2px solid #4ade80" : "2px solid transparent",
                                    boxShadow:       active ? "inset 0 0 20px rgba(74,222,128,0.05)" : "none",
                                    opacity:         isOpen ? 1 : 0,
                                    transform:       isOpen ? "translateX(0)" : "translateX(16px)",
                                    transition:      `opacity 0.35s ease ${i * 0.05}s, transform 0.35s ease ${i * 0.05}s, background 0.2s, color 0.2s`,
                                }}
                            >
                                {label}
                            </Link>
                        );
                    })}
                </nav>

                {/* Footer CTA */}
                <div
                    className="px-5 py-5"
                    style={{ borderTop: "1px solid rgba(74,222,128,0.10)" }}
                >
                    <a
                        href="mailto:pes@uom.lk"
                        className="flex items-center justify-center w-full py-2.5 rounded-md
                                   text-sm font-semibold tracking-wide"
                        style={{
                            color:      "#4ade80",
                            border:     "1px solid rgba(74,222,128,0.35)",
                            background: "rgba(74,222,128,0.07)",
                        }}
                    >
                        Contact Us
                    </a>
                    <p className="text-white/20 text-[9px] text-center tracking-[0.18em] uppercase mt-5">
                        IEEE Power &amp; Energy Society
                    </p>
                </div>
            </div>
        </>
    );
}