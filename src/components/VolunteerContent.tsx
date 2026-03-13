
export function VolunteerContent() {
    return (
        <div
            className="w-full md:w-1/2 flex flex-col items-center text-center gap-6 px-8 py-14 md:px-14 md:py-0 justify-center"
            style={{ background: "linear-gradient(160deg, #0d1c2e 0%, #090e1a 100%)" }}
        >
            {/* Badge */}
            <span
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium tracking-widest uppercase"
                style={{
                    color:      "rgba(74,222,128,0.90)",
                    border:     "1px solid rgba(74,222,128,0.25)",
                    background: "rgba(74,222,128,0.07)",
                }}
            >
        <span className="w-1.5 h-1.5 rounded-full bg-[#4ade80] animate-pulse" />
        Open for Applications
      </span>

            {/* Heading */}
            <h1 className="text-white font-extrabold text-3xl sm:text-4xl leading-tight tracking-tight">
                IEEE PES{" "}
                <span
                    style={{
                        color: "#4ade80",
                        textShadow: "0 0 24px rgba(74,222,128,0.35)",
                    }}
                >
          Volunteer
        </span>
                <br />of the Year
            </h1>

            {/* Divider */}
            <div
                className="w-16 h-px rounded-full"
                style={{
                    background: "linear-gradient(90deg, transparent, #4ade80, transparent)",
                    boxShadow:  "0 0 10px rgba(74,222,128,0.4)",
                }}
            />

            {/* Body text */}
            <div className="flex flex-col gap-4 max-w-md">
                <p className="text-sm sm:text-base leading-relaxed" style={{ color: "rgba(200,220,230,0.68)" }}>
                    Have you been a dedicated and enthusiastic volunteer of the IEEE PES
                    Student Branch Chapter of the University of Moratuwa in the year 2021?
                </p>
                <p className="text-sm sm:text-base leading-relaxed" style={{ color: "rgba(200,220,230,0.68)" }}>
                    Here's your turn to become the IEEE PES Volunteer of the Year and to
                    be an inspiration for other volunteers.
                </p>
                <p className="text-sm sm:text-base leading-relaxed" style={{ color: "rgba(200,220,230,0.68)" }}>
                    Hurry up and submit your IEEE PES volunteering experience for the year 2021!
                </p>
            </div>

            {/* CTA */}
            <button
                className="mt-2 px-8 py-3 rounded-md text-sm font-semibold tracking-widest uppercase transition-all duration-300"
                style={{
                    color:      "#4ade80",
                    border:     "1px solid rgba(74,222,128,0.45)",
                    background: "rgba(74,222,128,0.08)",
                }}
                onMouseEnter={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.background  = "rgba(74,222,128,0.18)";
                    el.style.borderColor = "rgba(74,222,128,0.80)";
                    el.style.boxShadow   = "0 0 22px rgba(74,222,128,0.25)";
                    el.style.transform   = "translateY(-2px)";
                }}
                onMouseLeave={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.background  = "rgba(74,222,128,0.08)";
                    el.style.borderColor = "rgba(74,222,128,0.45)";
                    el.style.boxShadow   = "none";
                    el.style.transform   = "translateY(0)";
                }}
            >
                Apply Now →
            </button>


        </div>
    );
}
