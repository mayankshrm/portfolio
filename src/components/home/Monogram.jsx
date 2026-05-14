import React from "react";

const Monogram = () => (
    <div className="mono" aria-hidden="true">
        {/* Backdrop — large display MS letters */}
        <div className="mono__backdrop">
            <span className="mono__letter mono__letter--m">M</span>
            <span className="mono__letter mono__letter--s">S</span>
        </div>

        {/* Foreground — masthead text + rule + meta */}
        <div className="mono__masthead">
            <span className="mono__rule" />
            <div className="mono__label">
                <span className="mono__handle">mayank.sharma</span>
                <span className="mono__meta">
                    <span>SDE</span>
                    <span className="mono__dot">•</span>
                    <span>est. 2024</span>
                    <span className="mono__dot">•</span>
                    <span>IN</span>
                </span>
            </div>
            <span className="mono__rule" />
        </div>

        {/* Stamp badge — circular text + star */}
        <div className="mono__badge">
            <svg viewBox="0 0 100 100" className="mono__badge-svg">
                <defs>
                    <path
                        id="mono-circle"
                        d="M 50 50 m -38 0 a 38 38 0 1 1 76 0 a 38 38 0 1 1 -76 0"
                    />
                </defs>
                <text className="mono__badge-text">
                    <textPath href="#mono-circle" startOffset="0">
                        shipping · since 2024 · shipping · since 2024 ·
                    </textPath>
                </text>
            </svg>
            <span className="mono__badge-core">★</span>
        </div>
    </div>
);

export default Monogram;
