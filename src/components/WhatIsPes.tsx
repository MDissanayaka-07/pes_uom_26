export default function WhatIsPES() {
    return (
        <section
            className="w-full px-6 py-20"
            style={{ background: "linear-gradient(160deg, #0d1c2e 0%, #070c17 55%, #090e1a 100%)" }}
        >
            <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-12">

                {/* ── What is PES text ── */}
                <div className="flex flex-col items-center gap-5">
                    <h2 className="text-white font-bold text-2xl sm:text-3xl tracking-tight">
                        What is PES?
                    </h2>
                    <p
                        className="text-sm sm:text-base leading-relaxed max-w-2xl"
                        style={{ color: "rgba(200,220,230,0.70)" }}
                    >
                        IEEE Power &amp; Energy Society (PES) is the world's largest forum to share
                        technological developments in the electric power industry as well as to educate
                        members developing standards. The IEEE PES Student Branch Chapter University of
                        Moratuwa strives to realize the vision and mission of IEEE PES through volunteering
                        and spreading awareness on means to gain experience and exposure in the field of
                        electric power. The student branch chapter annually organizes the Undergraduate
                        Design Competition to appreciate the design thinking of the Electrical Engineering
                        Undergraduates of the University, along with guest lectures and field visits.
                    </p>
                </div>

                {/* ── Promotional Video ── */}
                <div className="w-full flex flex-col items-center gap-5">
                    <h2 className="text-white font-bold text-xl sm:text-2xl tracking-tight">
                        IEEE PES Promotional Video
                    </h2>

                    {/* Video container with green glow border */}
                    <div
                        className="w-full max-w-3xl rounded-xl overflow-hidden"
                        style={{
                            border:    "2px solid rgba(74,222,128,0.75)",
                            boxShadow: "0 0 28px rgba(74,222,128,0.25), 0 0 60px rgba(74,222,128,0.10)",
                        }}
                    >
                        <div className="relative w-full" style={{ paddingBottom: "56.25%" /* 16:9 */ }}>
                            <iframe
                                className="absolute inset-0 w-full h-full"
                                src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                                title="IEEE PES Promotional Video"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}