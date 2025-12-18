'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Button from '../ui/Button';
import { SignInButton, SignUpButton, UserButton, SignedIn, SignedOut } from "@clerk/nextjs";
import LocationSelector from './LocationSelector';

const navLinks = [
  { label: 'Gallery', href: '#gallery' },
  { label: 'Packages', href: '#packages' },
];



export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const searchRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    if (!isSearchOpen) return;
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsSearchOpen(false);
      }
    };
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setIsSearchOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isSearchOpen]);



  const handleSearch = (e) => {
    e.preventDefault();
    const trimmedQuery = searchQuery.trim();
    if (!trimmedQuery) return;
    router.push(`/search?q=${encodeURIComponent(trimmedQuery)}`);
    setIsSearchOpen(false);
    setSearchQuery('');
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-white/80 backdrop-blur-md transition-all duration-300 dark:bg-slate-950/80">
      <nav className="mx-auto w-full max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-1 flex-wrap items-center gap-4 min-w-[280px]">
            <Link href="/" className="group inline-flex items-center gap-3 shrink-0">
              <div className="rounded-full bg-gradient-to-r from-rose-500 to-orange-400 p-2 text-white shadow-lg shadow-rose-200/60 transition group-hover:scale-110 dark:shadow-rose-900/60">
                <svg
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 20s8-4.5 8-10a8 8 0 1 0-16 0c0 5.5 8 10 8 10z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-rose-500">
                  ShaadiSathi
                </p>
                <p className="text-base font-bold text-slate-900 dark:text-white">WedOS Suite</p>
              </div>
            </Link>
            <LocationSelector variant="inline" className="flex-1 min-w-[220px]" />
          </div>

          <div className="hidden items-center gap-4 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-slate-600 transition hover:text-rose-500 dark:text-slate-200"
              >
                {link.label}
              </Link>
            ))}
            <div className="relative" ref={searchRef}>
              <button
                type="button"
                onClick={() => setIsSearchOpen((prev) => !prev)}
                className="flex w-64 items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-left text-sm font-medium text-slate-500 shadow-sm transition hover:border-rose-300 hover:text-rose-600 focus:outline-none focus:ring-2 focus:ring-rose-100 dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-300 dark:hover:border-rose-500/40 dark:hover:text-rose-200"
              >
                <svg
                  className="h-4 w-4 text-slate-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <span className="truncate">Search vendors, venues, decor...</span>
              </button>
              {isSearchOpen && (
                <div className="absolute right-0 top-full mt-2 w-80 rounded-2xl border border-slate-200 bg-white/95 p-4 shadow-xl backdrop-blur-md dark:border-slate-700 dark:bg-slate-950/95">
                  <form onSubmit={handleSearch} className="space-y-3">
                    <div className="relative">
                      <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search vendors, venues, decorators..."
                        autoFocus
                        className="w-full rounded-xl border border-slate-200 bg-white/80 px-4 py-2.5 pl-10 text-sm text-slate-800 shadow-sm transition-all focus:border-rose-400 focus:outline-none focus:ring-2 focus:ring-rose-100 dark:border-slate-700 dark:bg-slate-900/60 dark:text-white dark:focus:border-rose-500 dark:focus:ring-rose-900/40"
                      />
                      <svg
                        className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                    </div>
                    <button
                      type="submit"
                      className="w-full rounded-xl bg-gradient-to-r from-rose-500 to-orange-400 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-rose-200/60 transition hover:opacity-90 dark:shadow-rose-950/40"
                    >
                      Search
                    </button>
                  </form>
                </div>
              )}
            </div>
            <div className="relative flex items-center gap-4">
              <SignedOut>
                <SignInButton>
                  <button className="text-sm font-semibold text-slate-600 transition hover:text-rose-500 dark:text-slate-200">
                    Login
                  </button>
                </SignInButton>
                <SignUpButton>
                  <button className="rounded-full bg-rose-500 px-4 py-2 text-sm font-semibold text-white shadow-md shadow-rose-200/50 transition hover:bg-rose-600 dark:shadow-none">
                    Sign Up
                  </button>
                </SignUpButton>
              </SignedOut>
              <SignedIn>
                <Link
                  href="/profile"
                  className="text-sm font-semibold text-slate-600 transition hover:text-rose-500 dark:text-slate-200 mr-4"
                >
                  Dashboard
                </Link>
                <UserButton
                  afterSignOutUrl="/"
                  userProfileMode="navigation"
                  userProfileUrl="/profile"
                  appearance={{
                    elements: {
                      userButtonPopoverCard: "shadow-xl",
                      userButtonPopoverFooter: "hidden"
                    }
                  }}
                />
              </SignedIn>
            </div>
            <Button className="whitespace-nowrap bg-gradient-to-r from-rose-500 to-orange-400 text-white shadow-lg shadow-rose-200/60 hover:opacity-90">
              Plan My Wedding
            </Button>
          </div>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-lg p-2 text-slate-700 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-rose-500 lg:hidden dark:text-slate-200 dark:hover:bg-slate-900"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Toggle navigation"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="border-t border-white/10 bg-white/95 px-4 py-6 dark:bg-slate-950/95 lg:hidden">
          <div className="space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-base font-semibold text-slate-700 transition hover:text-rose-500 dark:text-slate-200"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="space-y-3">
              <button
                type="button"
                onClick={() => setIsSearchOpen((prev) => !prev)}
                className="flex w-full items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-left text-sm font-medium text-slate-500 shadow-sm transition hover:border-rose-300 hover:text-rose-600 focus:outline-none focus:ring-2 focus:ring-rose-100 dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-300 dark:hover:border-rose-500/40 dark:hover:text-rose-200"
              >
                <svg
                  className="h-4 w-4 text-slate-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <span className="truncate">Search vendors, venues, decor...</span>
              </button>
              {isSearchOpen && (
                <div className="rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-lg dark:border-slate-700 dark:bg-slate-900/60">
                  <form onSubmit={handleSearch} className="space-y-3">
                    <div className="relative">
                      <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search vendors, venues, decorators..."
                        className="w-full rounded-xl border border-slate-200 bg-white/80 px-4 py-2.5 pl-10 text-sm text-slate-800 shadow-sm transition-all focus:border-rose-400 focus:outline-none focus:ring-2 focus:ring-rose-100 dark:border-slate-700 dark:bg-slate-800/60 dark:text-white dark:focus:border-rose-500 dark:focus:ring-rose-900/40"
                      />
                      <svg
                        className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                    </div>
                    <button
                      type="submit"
                      className="w-full rounded-xl bg-gradient-to-r from-rose-500 to-orange-400 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-rose-200/60 transition hover:opacity-90 dark:shadow-rose-950/40"
                    >
                      Search
                    </button>
                  </form>
                </div>
              )}
            </div>
            <div className="space-y-2 pt-4 border-t border-slate-100 dark:border-slate-800">
              <SignedOut>
                <SignInButton>
                  <button className="flex w-full items-center justify-center gap-2 rounded-2xl border border-rose-100 bg-white/80 px-4 py-2.5 text-sm font-semibold text-rose-600 shadow-sm shadow-rose-50 transition hover:border-rose-200 hover:bg-white dark:border-rose-500/30 dark:bg-slate-900/60 dark:text-rose-100">
                    Login
                  </button>
                </SignInButton>
                <SignUpButton>
                  <button className="flex w-full items-center justify-center gap-2 rounded-2xl bg-rose-500 px-4 py-2.5 text-sm font-semibold text-white shadow-md shadow-rose-200/50 transition hover:bg-rose-600 dark:shadow-none">
                    Sign Up
                  </button>
                </SignUpButton>
              </SignedOut>
              <SignedIn>
                <div className="flex flex-col gap-4">
                  <Link
                    href="/profile"
                    className="flex w-full items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white/80 px-4 py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-200"
                    onClick={() => setIsOpen(false)}
                  >
                    My Dashboard
                  </Link>
                  <div className="flex items-center justify-between px-2">
                    <span className="text-sm font-medium text-slate-600 dark:text-slate-300">Account Settings</span>
                    <UserButton
                      afterSignOutUrl="/"
                      userProfileMode="navigation"
                      userProfileUrl="/profile"
                    />
                  </div>
                </div>
              </SignedIn>
            </div>
          </div>
          <LocationSelector className="mt-6" />
          <Button className="mt-6 w-full bg-gradient-to-r from-rose-500 to-orange-400 text-white shadow-lg shadow-rose-200/60 hover:opacity-90">
            Plan My Wedding
          </Button>
        </div>
      )}
    </header>
  );
}

