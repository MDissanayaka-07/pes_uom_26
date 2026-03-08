import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const NAV_LINKS = [
    { to: "/",           label: "Home"       },
    { to: "/about",      label: "About"      },
    { to: "/committees", label: "Committees" },
    { to: "/projects",   label: "Projects"   },
    { to: "/contact",    label: "Contact"    },
];

export default function Footer() {
    return (
        <footer className="bg-[#1B5E20] text-white text-center px-5 py-10 mt-0">

            {/* Logo */}
            <div className="flex justify-center mb-4">
                <img src={logo} alt="IEEE PES Logo" className="h-14 w-auto" />
            </div>

            <h3 className="text-lg font-semibold tracking-wide">
                IEEE PES Student Branch Chapter
            </h3>
            <p className="text-sm text-white/70 mt-1">
                University of Moratuwa
            </p>

            {/* Nav links */}
            <div className="flex justify-center flex-wrap gap-x-6 gap-y-2 my-5">
                {NAV_LINKS.map(({ to, label }) => (
                    <Link
                        key={to}
                        to={to}
                        className="text-white text-sm no-underline hover:text-white/70 transition-colors duration-300"
                    >
                        {label}
                    </Link>
                ))}
            </div>

            <hr className="border-white/20 mx-auto max-w-xs" />

            <p className="text-xs text-white/60 mt-4 tracking-wide">
                © 2026 IEEE — All rights reserved.
            </p>

        </footer>
    );
}

