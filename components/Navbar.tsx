'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

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

  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/Mylogo.PNG"
                alt="Abhijeet Kumar Patro"
                width={0}
                height={0}
                sizes="180px"
                className="w-auto h-8 object-contain"
              />
              <span className="sr-only">AbhijeetOnline</span>
            </Link>
          </div>
          <div className="flex items-center space-x-8">
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
      </div>
    </nav>
  );
}