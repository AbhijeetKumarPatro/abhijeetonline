'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/experience', label: 'Experience' },
  { href: '/projects', label: 'Projects' },
  { href: '/music', label: 'Music' },
  { href: '/travel', label: 'Travel' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/Mylogo.PNG"
                alt="Abhijeet Kumar Patro"
                width={0}
                height={0}
                sizes="220px"
                className="w-auto h-10 sm:h-12 md:h-14 object-contain"
              />
              <span className="sr-only">AbhijeetOnline</span>
            </Link>
          </div>

          <div className="flex items-center gap-3 md:hidden">
            <button
              onClick={() => setIsOpen((prev) => !prev)}
              type="button"
              aria-label="Toggle navigation"
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {isOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

          <div className="hidden md:flex md:items-center md:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                  pathname === item.href ? 'text-blue-600' : 'text-gray-700'
                }`}
              >
                {item.label}
              </Link>
            ))}

            <div className="relative group">
              <Link
                href="/blog"
                className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                  pathname.startsWith('/blog') ? 'text-blue-600' : 'text-gray-700'
                }`}
              >
                Blog
              </Link>
              <div className="absolute right-0 mt-2 w-48 hidden group-hover:block bg-white shadow-lg rounded-md border border-gray-200 z-50">
                <Link href="/blog?category=Banking" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">Banking Blog</Link>
                <Link href="/blog?category=Travel" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">Travel Blog</Link>
                <Link href="/blog?category=General" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">General Blog</Link>
              </div>
            </div>

            <a
              href="/BA_AbhijeetKumar_Patro_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors"
            >
              Download My Resume →
            </a>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden mt-2 space-y-2 pb-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  pathname === item.href ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/blog"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
            >
              Blog
            </Link>
            <a
              href="/BA_AbhijeetKumar_Patro_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-3 py-2 rounded-md text-base font-medium text-blue-600 bg-blue-50 hover:bg-blue-100"
            >
              Download Resume
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}