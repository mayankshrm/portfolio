import React, { useEffect } from 'react';
import './scrollup.css';
import { HiOutlineArrowSmUp } from "react-icons/hi";

const ScrollUp = () => {
    useEffect(() => {
        const onScroll = () => {
            const scrollUp = document.querySelector(".scrollup");
            if (!scrollUp) return;
            if (window.scrollY >= 560) scrollUp.classList.add("show-scroll");
            else scrollUp.classList.remove("show-scroll");
        };
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <a href="#home" className="scrollup" aria-label="Scroll to top">
            <HiOutlineArrowSmUp className="scrollup__icon" />
        </a>
    );
};

export default ScrollUp;
