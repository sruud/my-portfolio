"use client";
import { useState } from "react";
import Link from "next/link";

interface NavItemWithSubLinks {
  name: string;
  subLinks: { href: string; name: string }[];
}

interface NavItemWithoutSubLinks {
  name: string;
}

type NavItem = NavItemWithSubLinks | NavItemWithoutSubLinks;

const navItems: Record<string, NavItem> = {
  "#about": {
    name: "about",
    subLinks: [{ href: "#looking-for", name: "more" }],
    // Next, Future, Vision - other ideas
    // subLinks: [{ href: "#looking-for", name: "What I'm Looking For" }],
    // Almost looks like a comment bubble
  },
  "#skills": { name: "skills" },
  "#projects": { name: "projects" },
  "#contact": { name: "contact" },
};

export function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  return (
    // nav is 44px tall - changed in global css
    // TODO make dropdown retract once more has been clicked
    <nav className="sticky top-0 z-50 flex w-full space-x-4 bg-black">
      {Object.entries(navItems).map(([href, item]) => (
        <div key={href} className="relative inline-block text-left">
          <div>
            {"subLinks" in item ? (
              <>
                <button
                  type="button"
                  className="inline-flex w-full justify-center gap-x-1.5 rounded-md py-2 px-3 text-lg text-neutral-200 shadow-xs"
                  id="menu-button"
                  aria-expanded={isDropdownOpen ? "true" : "false"}
                  aria-haspopup="true"
                  onClick={toggleDropdown}
                >
                  {item.name}
                  <svg
                    className={`h-7 w-5 text-gray-400 transition-transform duration-200 ${
                      isDropdownOpen ? "rotate-180" : "rotate-0"
                    }`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>

                {isDropdownOpen && (
                  // mt-2
                  <div
                    className="absolute right-0 z-10 w-full origin-top-right bg-black"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="menu-button"
                    tabIndex={-1}
                  >
                    <div className="py-1" role="none">
                      {item.subLinks.map((subLink) => (
                        <Link
                          key={subLink.href}
                          href={subLink.href}
                          className="block rounded-2xl py-2 px-4 text-lg text-neutral-900 hover:bg-gray-700 hover:text-white dark:text-white"
                          role="menuitem"
                          tabIndex={-1}
                        >
                          {subLink.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </>
            ) : (
              <Link key={href} href={href} className="block py-2 px-4 text-lg">
                {item.name}
              </Link>
            )}
          </div>
        </div>
      ))}
    </nav>
  );
}
