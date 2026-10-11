import { useEffect, useState } from "react";
import { contact, navLinks, topLinks } from "../data";
import { useCart } from "../cart";
import { toFa } from "../lib";
import Logo from "./Logo";

export default function Header() {
  const { count } = useCart();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 8);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header className={"site-header" + (scrolled ? " scrolled" : "")}>
      <div className="topbar">
        <div className="container topbar-inner">
          <nav aria-label="پیوندهای سریع" className="top-links">
            {topLinks.map((l) => (
              <a key={l.title} href={l.href} target="_blank" rel="noreferrer">
                {l.title}
              </a>
            ))}
          </nav>
          <div className="top-right">
            <a className="top-phone" href={contact.phones[0].href}>
              <PhoneIcon /> {contact.phones[0].label}
            </a>
            <a className="cart-pill" href="#products" aria-label={`سبد خرید، ${toFa(count)} مورد`}>
              <CartIcon />
              <span>{toFa(count)} مورد</span>
            </a>
          </div>
        </div>
      </div>

      <div className="mainbar">
        <div className="container mainbar-inner">
          <a href="#top" className="brand" aria-label="آتریا الکترونیک - صفحه نخست">
            <Logo size={56} />
          </a>

          <nav className={"main-nav" + (open ? " open" : "")} aria-label="منوی اصلی">
            {navLinks.map((l) => (
              <a key={l.title} href={l.href} target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>
                {l.title}
              </a>
            ))}
          </nav>

          <a className="search-btn" href="#products" aria-label="جستجو در محصولات">
            <SearchIcon />
          </a>
          <button className="burger" aria-label="منو" aria-expanded={open} onClick={() => setOpen((o) => !o)}>
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}

export function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
function CartIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="9" cy="21" r="1" />
      <circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6" />
    </svg>
  );
}
function SearchIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}
