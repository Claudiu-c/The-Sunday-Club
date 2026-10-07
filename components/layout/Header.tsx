"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { ArrowUpRightIcon } from "@/components/ui/Icons";

const links = [
  { label: "Services", href: "/services" },
  { label: "Our Work", href: "/work" },
  { label: "Our Approach", href: "/approach" },
  { label: "The People", href: "/about" },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;

    const previousBodyOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    const closeOnDesktop = (event: MediaQueryListEvent) => {
      if (event.matches) setMenuOpen(false);
    };

    const desktop = window.matchMedia("(min-width: 1051px)");

    window.addEventListener("keydown", closeOnEscape);
    desktop.addEventListener("change", closeOnDesktop);

    return () => {
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;

      window.removeEventListener("keydown", closeOnEscape);
      desktop.removeEventListener("change", closeOnDesktop);
    };
  }, [menuOpen]);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className={`site-header ${menuOpen ? "menu-open" : ""}`}>
      <Link
        href="/#top"
        className="site-logo"
        aria-label="The Sunday Club home"
        onClick={closeMenu}
      >
        <Image
          src="/images/logo-cream.svg"
          width={515}
          height={299}
          alt=""
          className="site-logo-image"
        />
      </Link>

      <button
        className="menu-button"
        type="button"
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
        aria-controls="site-navigation"
        onClick={() => setMenuOpen((current) => !current)}
      >
        <span>{menuOpen ? "Close" : "Menu"}</span>

        <span className="menu-icon" aria-hidden="true">
          <span />
          <span />
        </span>
      </button>

      <nav
        id="site-navigation"
        className={`site-nav ${menuOpen ? "is-open" : ""}`}
        aria-label="Main navigation"
      >
        {links.map((link) => {
          const active =
            pathname === link.href || pathname.startsWith(`${link.href}/#top`);

          return (
            <Link
              key={link.href}
              href={link.href}
              aria-current={active ? "page" : undefined}
              onClick={closeMenu}
            >
              {link.label}
            </Link>
          );
        })}

        <Link
          href="/contact#top"
          className="nav-cta"
          aria-current={pathname === "/contact" ? "page" : undefined}
          onClick={closeMenu}
        >
          Join the Club{" "}
          <span aria-hidden="true">
            <ArrowUpRightIcon />
          </span>
        </Link>
      </nav>
    </header>
  );
}
