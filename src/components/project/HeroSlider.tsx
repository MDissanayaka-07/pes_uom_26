

const sliderImages = [
    "public/projects/gammedda/GIEEE12.jpeg",
    "public/projects/AIWorkShop/AIW4.jpeg",
    "public/projects/gammedda/GIEEE13.jpeg",
    "public/projects/fieldVisit/FV6.jpeg",
    "public/projects/gammedda/GIEEE6.jpeg",
    "public/projects/fieldVisit/FV4.jpeg",
    "public/projects/AIWorkShop/AIW9.jpeg",
    "public/projects/gammedda/GIEEE7.jpeg",
    "public/projects/AIWorkShop/AIW2.jpeg",

];


// Duplicate for seamless loop
const tape = [...sliderImages, ...sliderImages];

export default function HeroSlider() {
    return (
        <div className="relative w-full overflow-hidden" style={{ height: "420px" }}>

            {/* Moving tape */}
            <div
                className="absolute inset-0 flex"
                style={{
                    width: `${tape.length * 320}px`,
                    animation: `tape ${sliderImages.length * 3}s linear infinite`,
                }}
            >
                {tape.map((src, i) => (
                    <div
                        key={i}
                        className="relative flex-shrink-0"
                        style={{
                            width: "320px",
                            height: "420px",
                            borderRight: "3px solid rgba(255,255,255,0.12)",
                        }}
                    >
                        <img
                            src={src}
                            alt=""
                            className="w-full h-full object-cover"
                            style={{ filter: "grayscale(100%) brightness(0.55)" }}
                        />
                    </div>
                ))}
            </div>

            {/* Dark gradient overlay */}
            <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to bottom, rgba(10,20,10,0.3) 0%, rgba(10,20,10,0.68) 100%)" }}
            />

            {/* Left & right edge fade */}
            <div className="absolute inset-y-0 left-0 w-24 pointer-events-none" style={{ background: "linear-gradient(to right, rgba(10,20,10,0.6), transparent)" }} />
            <div className="absolute inset-y-0 right-0 w-24 pointer-events-none" style={{ background: "linear-gradient(to left, rgba(10,20,10,0.6), transparent)" }} />

            {/* Text overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                <p
                    className="inline-block text-xs font-semibold tracking-[0.25em] uppercase mb-4 px-4 py-1.5 rounded-full"
                    style={{
                        color: "rgba(74,222,128,0.95)",
                        background: "rgba(74,222,128,0.1)",
                        border: "1px solid rgba(74,222,128,0.3)",
                    }}
                >
                  Projects
                </p>

                <h1
                    className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-4"
                    style={{ fontFamily: "'Georgia', serif", textShadow: "0 2px 24px rgba(0,0,0,0.7)" }}
                >
                    Our Initiatives
                </h1>

                <p
                    className="text-sm sm:text-base max-w-lg leading-relaxed"
                    style={{ color: "rgba(220,235,220,0.85)" }}
                >
                    Events,Sessions and outreach programs run by IEEE PES Student Branch Chapter, University of Moratuwa.
                </p>

                <div className="flex items-center gap-3 mt-6">
                    <div className="h-px w-16" style={{ background: "rgba(74,222,128,0.4)" }} />
                    <div className="w-2 h-2 rounded-full" style={{ background: "rgba(74,222,128,0.9)" }} />
                    <div className="h-px w-16" style={{ background: "rgba(74,222,128,0.4)" }} />
                </div>
            </div>

            <style>{`
                @keyframes tape {
                    from { transform: translateX(0); }
                    to   { transform: translateX(-${sliderImages.length * 320}px); }
                }
            `}</style>
        </div>
    );

}