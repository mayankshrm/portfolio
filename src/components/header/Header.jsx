import React, { useEffect, useState } from "react";
import './header.css';
import {
    HiOutlineHome, HiOutlineUser, HiOutlineBadgeCheck,
    HiOutlinePhotograph, HiOutlineMail, HiOutlineSparkles, HiX, HiOutlineMenu,
    HiOutlineSun, HiOutlineMoon
} from "react-icons/hi";
import { useTheme } from "../../hooks/useTheme";

const navItems = [
    { href: "#home", label: "Home", Icon: HiOutlineHome },
    { href: "#about", label: "About", Icon: HiOutlineUser },
    { href: "#skills", label: "Skills", Icon: HiOutlineBadgeCheck },
    { href: "#featured", label: "Work", Icon: HiOutlineSparkles },
    { href: "#portfolio", label: "Projects", Icon: HiOutlinePhotograph },
    { href: "#contact", label: "Contact", Icon: HiOutlineMail },
];

const Header = () => {
    const [Toggle, showMenu] = useState(false);
    const [activeNav, setActiveNav] = useState("#home");
    const { theme, toggleTheme } = useTheme();

    useEffect(() => {
        const onScroll = () => {
            const header = document.querySelector(".header");
            if (!header) return;
            if (window.scrollY >= 80) header.classList.add("scroll-header");
            else header.classList.remove("scroll-header");
        };
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header className="header">
            <nav className="nav container">
                <a href="#home" className="nav__logo">Mayank<span className="nav__logo-dot">.</span></a>
                <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
                    <ul className="nav__list grid">
                        {navItems.map(({ href, label, Icon }) => (
                            <li className="nav__item" key={href}>
                                <a
                                    href={href}
                                    onClick={() => { setActiveNav(href); showMenu(false); }}
                                    className={activeNav === href ? "nav__link active-link" : "nav__link"}
                                >
                                    <Icon className="nav__icon" />{label}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <HiX className="nav__close" onClick={() => showMenu(!Toggle)} />
                </div>

                <div className="nav__actions">
                    <button
                        type="button"
                        className="nav__theme-toggle"
                        onClick={toggleTheme}
                        aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
                        title={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
                    >
                        {theme === "dark" ? <HiOutlineSun /> : <HiOutlineMoon />}
                    </button>
                    <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
                        <HiOutlineMenu />
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
