"use client";

import Link from "next/link";
import { useState } from "react";

const serviceLinks = [
  {
    label: "Dissertation Writing",
    href: "https://www.myassignmentbuddies.com/dissertation-writing",
  },
  {
    label: "Online Research Paper",
    href: "https://www.myassignmentbuddies.com/online-research-paper",
  },
  {
    label: "University Assignments",
    href: "https://www.myassignmentbuddies.com/university-assignments",
  },
  {
    label: "Economics Assignment",
    href: "https://www.myassignmentbuddies.com/economics-assignment",
  },
  {
    label: "MBA Assignment",
    href: "https://www.myassignmentbuddies.com/mba-assignment",
  },
  {
    label: "PowerPoint Presentation Assignment",
    href: "https://www.myassignmentbuddies.com/powerpoint-presentation-assignment",
  },
  {
    label: "Business Communication Assignment",
    href: "https://www.myassignmentbuddies.com/business-communication-assignment",
  },
  {
    label: "SWOT Analysis Assignment",
    href: "https://www.myassignmentbuddies.com/swot-analysis-assignment",
  },
  {
    label: "Business Plan Assignment",
    href: "https://www.myassignmentbuddies.com/business-plan-assignment",
  },
  {
    label: "Cyber Security Assignment",
    href: "https://www.myassignmentbuddies.com/cyber-security-assignment",
  },
  {
    label: "SOP Help",
    href: "https://www.myassignmentbuddies.com/sop-help",
  },
  {
    label: "TAFE Assignment Help",
    href: "https://www.myassignmentbuddies.com/tafe-assignment-help",
  },
  {
    label: "Nursing Assignment",
    href: "https://www.myassignmentbuddies.com/nursing-assignment",
  },
  {
    label: "Health Assessment Assignment",
    href: "https://www.myassignmentbuddies.com/health-assessment-assignment",
  },
  {
    label: "Research Methodology Assignment",
    href: "https://www.myassignmentbuddies.com/research-methodology-assignment",
  },
];

const mainLinks = [
  {
    label: "Home",
    href: "https://www.myassignmentbuddies.com/",
  },
  {
    label: "Blogs",
    href: "https://www.myassignmentbuddies.com/blog",
  },
  {
    label: "Offers",
    href: "https://www.myassignmentbuddies.com/offers",
  },
  {
    label: "Contact",
    href: "https://www.myassignmentbuddies.com/contact",
  },
  {
    label: "Policies",
    href: "https://www.myassignmentbuddies.com/items",
  },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setServicesOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#ffef18]">
      <div className="mx-auto flex min-h-[104px] max-w-[1800px] items-center px-6 lg:px-10">
        {/* Logo */}
        <Link
          href="https://www.myassignmentbuddies.com/"
          className="shrink-0"
          aria-label="My Assignment Buddies"
          onClick={closeMobileMenu}
        >
          <img
            src="/images/mab-logo.jpg"
            alt="My Assignment Buddies"
            width={166}
            height={90}
            className="h-[90px] w-[166px] object-contain"
          />
        </Link>

        {/* Desktop navigation */}
        <nav className="ml-auto hidden items-center gap-8 lg:flex">
          {/* Home */}
          <a
            href="https://www.myassignmentbuddies.com/"
            className="text-[19px] font-medium text-black transition-opacity hover:opacity-60"
          >
            Home
          </a>

          {/* Services */}
          <div className="group relative">
            <button
              type="button"
              className="flex items-center gap-1 text-[19px] font-medium text-black"
            >
              Services
              <span className="text-xs">▾</span>
            </button>

            <div className="invisible absolute right-0 top-full mt-3 w-[760px] bg-[#b6edf7] px-8 py-7 opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:opacity-100">
              <div className="grid grid-cols-3 gap-x-8 gap-y-5">
                {serviceLinks.map((service) => (
                  <a
                    key={service.label}
                    href={service.href}
                    className="text-[16px] leading-6 text-black transition-opacity hover:opacity-60"
                  >
                    {service.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Blogs */}
          <a
            href="https://www.myassignmentbuddies.com/blog"
            className="text-[19px] font-medium text-black transition-opacity hover:opacity-60"
          >
            Blogs
          </a>

          {/* Offers */}
          <a
            href="https://www.myassignmentbuddies.com/offers"
            className="text-[19px] font-medium text-black transition-opacity hover:opacity-60"
          >
            Offers
          </a>

          {/* Contact */}
          <a
            href="https://www.myassignmentbuddies.com/contact"
            className="text-[19px] font-medium text-black transition-opacity hover:opacity-60"
          >
            Contact
          </a>

          {/* Policies */}
          <a
            href="https://www.myassignmentbuddies.com/items"
            className="text-[19px] font-medium text-black transition-opacity hover:opacity-60"
          >
            Policies
          </a>

          {/* Get a Quote */}
          <a
            href="https://www.myassignmentbuddies.com/order-now"
            className="rounded-md bg-[#202020] px-6 py-3 text-[18px] font-bold text-white transition-transform hover:scale-[1.02]"
          >
            Get a Quote
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen((open) => !open)}
          className="ml-auto rounded-md border border-black/30 px-3 py-2 text-2xl lg:hidden"
        >
          {mobileMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile navigation */}
      {mobileMenuOpen && (
        <div className="border-t border-black/10 bg-[#ffef18] lg:hidden">
          <nav className="mx-auto max-w-[1800px] px-6 py-4">
            {/* Main links */}
            {mainLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={closeMobileMenu}
                className="block border-b border-black/10 py-4 text-[18px] font-medium text-black"
              >
                {link.label}
              </a>
            ))}

            {/* Services */}
            <button
              type="button"
              onClick={() => setServicesOpen((open) => !open)}
              aria-expanded={servicesOpen}
              className="flex w-full items-center justify-between border-b border-black/10 py-4 text-left text-[18px] font-medium text-black"
            >
              <span>Services</span>
              <span className="text-sm">
                {servicesOpen ? "▲" : "▼"}
              </span>
            </button>

            {servicesOpen && (
              <div className="bg-[#b6edf7] px-4 py-3">
                {serviceLinks.map((service) => (
                  <a
                    key={service.label}
                    href={service.href}
                    onClick={closeMobileMenu}
                    className="block border-b border-black/10 py-3 text-[15px] leading-5 text-black last:border-b-0"
                  >
                    {service.label}
                  </a>
                ))}
              </div>
            )}

            {/* Get a Quote */}
            <a
              href="https://www.myassignmentbuddies.com/order-now"
              onClick={closeMobileMenu}
              className="mt-5 block rounded-md bg-[#202020] px-5 py-3 text-center text-[17px] font-bold text-white"
            >
              Get a Quote
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}