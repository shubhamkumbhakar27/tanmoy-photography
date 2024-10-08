"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Roboto } from "next/font/google";
const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
});
import { Menu, X, ChevronDown } from "lucide-react";

import Link from "next/link";
import clsx from "clsx";
import { useRouter } from "next/navigation";
export default function Navbar({ selectedLabel }: { selectedLabel?: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(-1);
  const router = useRouter();

  const navItems = [
    { label: "Home", scroolToId: "home" },
    { label: "About", scroolToId: "about-us" },
    {
      label: "Portfolio",
      dropdownItems: [
        { label: "Wedding", href: "/portfolio/wedding" },
        { label: "Pre-wedding", href: "/portfolio/pre-wedding" },
        { label: "Editorial", href: "/portfolio/editorial" },
        { label: "Baby Shoot", href: "/portfolio/baby-shoot" },
      ],
    },
    {
      label: "Films",
      dropdownItems: [
        { label: "Wedding", href: "/films/wedding" },
        { label: "Pre-wedding", href: "/films/pre-wedding" },
      ],
    },
    { label: "Contact", scroolToId: "contact-us" },
  ];

  const toggleDropdown = (index: number) => {
    if (activeDropdown === index) {
      setActiveDropdown(-1);
    } else {
      setActiveDropdown(index);
    }
  };

  const smoothScroll = (e: any, targetId: string) => {
    console.log("targetId", targetId);
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80, // Adjust for navbar height
        behavior: "smooth",
      });
    }
  };

  return (
    <nav
      className="bg-gray-100/70 fixed w-full z-20 h-32 pt-4"
      onMouseLeave={() => setActiveDropdown(-1)}
    >
      <div className="container mx-auto h-full flex justify-between items-center px-8">
        {/* Logo */}
        <Link href="/">
          <div className="flex justify-center w-full">
            <Image
              src={require("../../../public/images/logo.png")}
              alt="Tanmoy Photography"
              height={100}
              width={100}
            />
          </div>
          <p className="text-black text-xs text-center -translate-y-4">
            {`Tanmoy Photography`}
          </p>
          <p className="text-black text-xs text-center -translate-y-4">{`& Films`}</p>
        </Link>

        {/* Desktop menu */}
        <div className="hidden md:flex space-x-4">
          {navItems.map((item, index) => (
            <div key={index} className="relative group">
              <div
                className={clsx(
                  "text-black hover:text-blue-200 px-3 py-2 rounded-md text-sm font-medium flex items-center cursor-pointer",
                  {
                    "text-blue-200": selectedLabel === item.label,
                  }
                )}
                onMouseOver={() => {
                  if (item.dropdownItems) {
                    toggleDropdown(index);
                  }
                }}
                onClick={(e) => {
                  if (selectedLabel && selectedLabel !== item.label) {
                    if (item.label !== "Contact") {
                      router.push("/");
                    }
                  }
                  e.preventDefault();
                  if (item.scroolToId) {
                    smoothScroll(e, item.scroolToId);
                  }
                  if (item.dropdownItems) {
                    toggleDropdown(index);
                  }
                }}
              >
                {item.label}
                {item.dropdownItems && (
                  <ChevronDown size={16} className="ml-1" />
                )}
              </div>
              {item.dropdownItems && activeDropdown === index && (
                <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <div
                    className="py-1"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu"
                    onMouseLeave={() => setActiveDropdown(-1)}
                  >
                    {item.dropdownItems.map((dropdownItem, dropdownIndex) => (
                      <a
                        key={dropdownIndex}
                        href={dropdownItem?.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                        role="menuitem"
                      >
                        {dropdownItem!.label}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => {
              setIsOpen(!isOpen);
              setActiveDropdown(-1);
            }}
            className="text-black focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-100/70 px-8">
          <div className="px-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item, index) => (
              <div key={index}>
                <div
                  className="text-black hover:bg-white/20 px-3 py-2 rounded-md text-base font-medium flex justify-between items-center cursor-pointer"
                  onClick={(e) => {
                    if (selectedLabel && selectedLabel !== item.label) {
                      if (item.label !== "Contact") {
                        router.push("/");
                      }
                    }
                    e.preventDefault();
                    if (item.scroolToId) {
                      smoothScroll(e, item.scroolToId);
                      setIsOpen(false);
                    }
                    if (item.dropdownItems) {
                      e.preventDefault();
                      toggleDropdown(index);
                    }
                  }}
                >
                  {item.label}
                  {item.dropdownItems && (
                    <ChevronDown size={16} className="ml-1" />
                  )}
                </div>
                {item.dropdownItems && activeDropdown === index && (
                  <div className="pl-4">
                    {item.dropdownItems.map((dropdownItem, dropdownIndex) => (
                      <a
                        key={dropdownIndex}
                        href={dropdownItem?.href}
                        className="text-black hover:bg-white/20 block px-3 py-2 rounded-md text-sm"
                      >
                        {dropdownItem?.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
