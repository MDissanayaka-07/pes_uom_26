import { useEffect, useState } from "react";
import "../styles/heroAnimation.css";

const LINE1    = "IEEE Power & Energy Society";
const LINE2    = "Student Branch Chapter";
const SUBTITLE = "University of Moratuwa";

interface WordToken { word: string; idx: number; line: number; }

export default function HeroSection() {
    const [words, setWords] = useState<WordToken[]>([]);
    const [ready, setReady] = useState(false);

    useEffect(() => {
        const w1 = LINE1.split(" ").map((word, idx) => ({ word, idx, line: 1 }));
        const w2 = LINE2.split(" ").map((word, idx) => ({ word, idx: idx + w1.length, line: 2 }));
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setWords([...w1, ...w2]);
        const t = setTimeout(() => setReady(true), 80);
        return () => clearTimeout(t);
    }, []);

    const line1 = words.filter(w => w.line === 1);
    const line2 = words.filter(w => w.line === 2);

    return (
        <section className="hero-pro">

            <div className="grain" />
            <div className="vignette" />

            {/* ── Desktop: rings fill full background ── */}
            {/* ── Mobile:  rings sit in their own block above text ── */}

            {/* Rings — always absolutely centered on desktop,
                        become a sized block on mobile via .rings-mobile-block */}
            <div className="rings-wrap">
                <div className="ring rF" />
                <div className="ring rE" />
                <div className="ring rA" />
                <div className="ring rC" />
                <div className="ring rD" />

                {/* ── Silicon: 2, 8, 4 ── */}

                {/* n=1 (rD) — 2 electrons, 180° apart
                    period=5s, delay step = 5/2 = 2.5s */}
                <div className="electron e-n1" style={{ animationDelay: "0s" }} />
                <div className="electron e-n1" style={{ animationDelay: "-2.5s" }} />

                {/* n=2 (rC) — 8 electrons, 45° apart
                    period=12s, delay step = 12/8 = 1.5s */}
                <div className="electron e-n2" style={{ animationDelay: "0s" }} />
                <div className="electron e-n2" style={{ animationDelay: "-1.5s" }} />
                <div className="electron e-n2" style={{ animationDelay: "-3s" }} />
                <div className="electron e-n2" style={{ animationDelay: "-4.5s" }} />
                <div className="electron e-n2" style={{ animationDelay: "-6s" }} />
                <div className="electron e-n2" style={{ animationDelay: "-7.5s" }} />
                <div className="electron e-n2" style={{ animationDelay: "-9s" }} />
                <div className="electron e-n2" style={{ animationDelay: "-10.5s" }} />

                {/* n=3 (rA) — 4 electrons (valence), 90° apart
                    period=22s, delay step = 22/4 = 5.5s */}
                <div className="electron e-n3" style={{ animationDelay: "0s" }} />
                <div className="electron e-n3" style={{ animationDelay: "-5.5s" }} />
                <div className="electron e-n3" style={{ animationDelay: "-11s" }} />
                <div className="electron e-n3" style={{ animationDelay: "-16.5s" }} />

                <div className="wave-box">
                    <svg viewBox="0 0 220 48" fill="none" overflow="visible" className="w-full block">
                        <path className="wf"
                              d="M4 16 Q36 4 70 16 T138 16 T206 16 T220 16"
                              stroke="#4ade80" strokeWidth="1.5" strokeDasharray="10 7" strokeLinecap="round" />
                        <path className="wb"
                              d="M4 32 Q36 18 70 32 T138 32 T206 32 T220 32"
                              stroke="#4ade80" strokeWidth="1" strokeDasharray="7 9" strokeLinecap="round" />
                    </svg>
                </div>
            </div>

            {/* ── Content ── */}
            <div className="hero-content">

                <div className={`eyebrow ${ready ? "eyebrow-in" : ""}`}>
                    <span className="eyebrow-dot" />
                    Power &amp; Energy Society
                </div>

                <h1 className="hero-heading">
                    <span className="block">
                        {line1.map(({ word, idx }) => (
                            <span key={idx} className="word-wrap">
                                <span
                                    className={`word-token ${ready ? "word-in" : ""}`}
                                    style={{ transitionDelay: `${0.05 + idx * 0.07}s` }}
                                >
                                    {word}
                                </span>
                                {"\u00A0"}
                            </span>
                        ))}
                    </span>
                    <span className="block text-green-400">
                        {line2.map(({ word, idx }) => (
                            <span key={idx} className="word-wrap">
                                <span
                                    className={`word-token ${ready ? "word-in" : ""}`}
                                    style={{ transitionDelay: `${0.05 + idx * 0.07}s` }}
                                >
                                    {word}
                                </span>
                                {"\u00A0"}
                            </span>
                        ))}
                    </span>
                </h1>

                <div className={`divider ${ready ? "divider-in" : ""}`} />

                <p className={`subtitle ${ready ? "subtitle-in" : ""}`}>
                    {SUBTITLE}
                </p>

                <div className={`scroll-hint ${ready ? "scroll-hint-in" : ""}`}>
                    <div className="scroll-mouse">
                        <div className="scroll-wheel" />
                    </div>
                </div>
            </div>

        </section>
    );
}