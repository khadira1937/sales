"use client";

import { useEffect, useState } from "react";

import { navLinks, siteAssets } from "@/content/home-page";

const HEADER_SCROLL_OFFSET = 120;
const HOME_SCROLL_THRESHOLD = 300;

function getActiveNavKey() {
  if (window.scrollY < HOME_SCROLL_THRESHOLD) {
    return "home";
  }

  const sections = document.querySelectorAll("section[id]");
  let activeSectionId = null;

  sections.forEach((section) => {
    const top = section.offsetTop - HEADER_SCROLL_OFFSET;
    const bottom = top + section.offsetHeight;

    if (window.scrollY >= top && window.scrollY < bottom) {
      activeSectionId = section.id;
    }
  });

  const activeLink = navLinks.find((link) => link.href === `#${activeSectionId}`);
  return activeLink ? activeLink.key : null;
}

export default function Header() {
  const [activeKey, setActiveKey] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 50);
      setActiveKey(getActiveNavKey());
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    if (!mobileOpen) {
      return undefined;
    }

    const onKeyUp = (event) => {
      if (event.key === "Escape") {
        setMobileOpen(false);
      }
    };

    document.addEventListener("keyup", onKeyUp);

    return () => {
      document.removeEventListener("keyup", onKeyUp);
    };
  }, [mobileOpen]);

  const closeMobileMenu = () => {
    setMobileOpen(false);
  };

  return (
    <>
      <header className={`site-header${isScrolled ? " scrolled" : ""}`} id="site-header">
        <div className="header-container">
          <a href="#" className="logo" aria-label="FlashStream IPTV Home" onClick={closeMobileMenu}>
            <img
              src={siteAssets.logo.src}
              alt={siteAssets.logo.alt}
              width={siteAssets.logo.width}
              height={siteAssets.logo.height}
              loading="eager"
            />
            <span className="logo-wordmark">FlashStream IPTV</span>
          </a>

          <nav className="main-nav" aria-label="Main Navigation">
            <ul className="nav-menu" id="nav-menu">
              {navLinks.map((link) => (
                <li key={link.key}>
                  <a
                    href={link.href}
                    className={`nav-link${activeKey === link.key ? " active" : ""}`}
                    aria-current={activeKey === link.key ? "page" : undefined}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <a href="#pricing" className="btn-login">
            Get Instant Access
          </a>

          <button
            type="button"
            className={`menu-toggle${mobileOpen ? " active" : ""}`}
            id="menu-toggle"
            aria-label="Toggle Menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((current) => !current)}
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
        </div>
      </header>

      <div
        className={`mobile-menu-overlay${mobileOpen ? " active" : ""}`}
        id="mobile-overlay"
        onClick={closeMobileMenu}
      ></div>
      <div className={`mobile-menu${mobileOpen ? " active" : ""}`} id="mobile-menu">
        <div className="mobile-menu-header">
          <div className="mobile-brand">
            <img
              src={siteAssets.logo.src}
              alt={siteAssets.logo.alt}
              width={siteAssets.logo.width}
              height={siteAssets.logo.height}
            />
            <span className="logo-wordmark">FlashStream IPTV</span>
          </div>
          <button
            type="button"
            className="mobile-close"
            id="mobile-close"
            aria-label="Close Menu"
            onClick={closeMobileMenu}
          >
            &times;
          </button>
        </div>
        <nav className="mobile-nav">
          <ul>
            {navLinks.map((link) => (
              <li key={`mobile-${link.key}`}>
                <a href={link.href} onClick={closeMobileMenu}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a href="#pricing" className="btn-mobile-cta" onClick={closeMobileMenu}>
          Get Instant Access
        </a>
      </div>
    </>
  );
}
