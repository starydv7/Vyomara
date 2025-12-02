'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const router = useRouter();

  const categories = [
    'Venues',
    'Photographers',
    'Caterers',
    'Decorators',
    'Makeup Artists',
    'DJs',
    'Mehendi Artists',
    'Transport',
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    const query = searchQuery.trim();
    if (!query && !selectedCategory) return;
    router.push(`/search?q=${encodeURIComponent(query)}&category=${encodeURIComponent(selectedCategory)}`);
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-rose-50/60 via-white to-white dark:from-slate-950 dark:via-slate-950 dark:to-slate-900">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAzNGMyIDIgNS4wNzQgMiA3LjA3NCAwIDItMiAyLTUuMDc0IDItNy4wNzQgMC0yLTIuMDc0LTIuMDc0LTUgMC03LjA3NCAyLTIgNS4wNzQtMiA3LjA3NCAwIDIgMi4wNzQgMiA1IDAgNy4wNzR6IiBmaWxsPSIjZmM5ODg3IiBmaWxsLW9wYWNpdHk9IjAuMDMiLz48L2c+PC9zdmc+')] opacity-40 dark:opacity-10"></div>

        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-4xl text-center">
            {/* Trust Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-rose-200/80 bg-white/80 px-4 py-2 text-xs font-semibold text-rose-600 shadow-sm backdrop-blur-sm dark:border-rose-500/30 dark:bg-slate-900/60 dark:text-rose-400">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Trusted by 65,000+ couples</span>
            </div>

            {/* Main Headline */}
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Plan Your Dream Wedding,
              <br />
              <span className="bg-gradient-to-r from-rose-500 to-orange-400 bg-clip-text text-transparent">
                One Step at a Time
              </span>
            </h1>

            {/* Subheadline */}
            <p className="mx-auto mb-8 max-w-2xl text-lg text-slate-600 dark:text-slate-300 sm:text-xl">
              Connect with <span className="font-semibold text-rose-600 dark:text-rose-400">9,800+ verified vendors</span>,
              manage your budget, track your timeline, and create unforgettable memories—all in one smart platform.
            </p>

            {/* Search Bar */}
            <form onSubmit={handleSearch} className="mb-8">
              <div className="mx-auto max-w-3xl">
                <div className="flex flex-col gap-3 rounded-3xl border border-slate-200/80 bg-white/95 p-2 shadow-2xl shadow-rose-100/50 backdrop-blur-sm dark:border-slate-700 dark:bg-slate-900/80 dark:shadow-none sm:flex-row">
                  {/* Category Selector */}
                  <div className="relative flex-shrink-0">
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="h-full w-full appearance-none rounded-2xl border-0 bg-slate-50/80 px-4 py-3.5 pl-10 pr-8 text-sm font-semibold text-slate-700 focus:bg-white focus:outline-none focus:ring-2 focus:ring-rose-400 dark:bg-slate-800/60 dark:text-slate-200 dark:focus:bg-slate-800"
                    >
                      <option value="">All Categories</option>
                      {categories.map((cat) => (
                        <option key={cat} value={cat}>
                          {cat}
                        </option>
                      ))}
                    </select>
                    <svg
                      className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>

                  {/* Search Input */}
                  <div className="relative flex-1">
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search venues, photographers, decorators..."
                      className="h-full w-full rounded-2xl border-0 bg-transparent px-4 py-3.5 pr-12 text-sm text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-rose-400 dark:text-slate-200 dark:placeholder-slate-500"
                    />
                    <svg
                      className="absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>

                  {/* Search Button */}
                  <button
                    type="submit"
                    className="rounded-2xl bg-gradient-to-r from-rose-500 to-orange-400 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-rose-200/60 transition hover:opacity-95 dark:shadow-rose-900/40"
                  >
                    Search
                  </button>
                </div>
              </div>
            </form>

            {/* CTA Buttons */}
            <div className="mb-12 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/signup"
                className="rounded-2xl bg-gradient-to-r from-rose-500 to-orange-400 px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-rose-200/60 transition hover:opacity-95 dark:shadow-rose-900/40"
              >
                Start Planning My Wedding
              </Link>
              <Link
                href="/signup?role=vendor"
                className="rounded-2xl border-2 border-slate-300 bg-white px-8 py-3.5 text-base font-semibold text-slate-700 transition hover:border-rose-300 hover:bg-rose-50/50 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-200 dark:hover:border-rose-500/40 dark:hover:bg-slate-700"
              >
                I'm a Vendor
              </Link>
            </div>

            {/* Stats Row */}
            <div className="mb-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
              <StatCard value="65,000+" label="Happy Couples" />
              <StatCard value="9,800+" label="Verified Vendors" />
              <StatCard value="420+" label="Cities Covered" />
              <StatCard value="4.8★" label="Average Rating" />
            </div>

            {/* Quick Action Cards */}
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              <QuickActionCard
                icon={
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                }
                title="Find Vendors"
                description="Browse by category"
                href="/vendors"
              />
              <QuickActionCard
                icon={
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                }
                title="Plan Timeline"
                description="Wedding checklist"
                href="/timeline"
              />
              <QuickActionCard
                icon={
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                }
                title="Manage Budget"
                description="Track expenses"
                href="/budget"
              />
              <QuickActionCard
                icon={
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                }
                title="Book Services"
                description="Secure bookings"
                href="/bookings"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="bg-gradient-to-b from-white to-slate-50/50 py-16 dark:from-slate-900 dark:to-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
              Browse by Category
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600 dark:text-slate-300">
              Find the perfect vendors for every aspect of your wedding
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            <CategoryCard
              icon={
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              }
              title="Venues"
              count="2,400+"
              href="/vendors?category=Venue"
            />
            <CategoryCard
              icon={
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              }
              title="Photographers"
              count="1,800+"
              href="/vendors?category=Photography"
            />
            <CategoryCard
              icon={
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              }
              title="Catering"
              count="1,200+"
              href="/vendors?category=Catering"
            />
            <CategoryCard
              icon={
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              }
              title="Decorators"
              count="1,500+"
              href="/vendors?category=Decoration"
            />
            <CategoryCard
              icon={
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              }
              title="Makeup Artists"
              count="900+"
              href="/vendors?category=Makeup Artist"
            />
            <CategoryCard
              icon={
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                </svg>
              }
              title="DJs & Music"
              count="650+"
              href="/vendors?category=DJ & Music"
            />
            <CategoryCard
              icon={
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              }
              title="Mehendi Artists"
              count="750+"
              href="/vendors?category=Mehendi Artist"
            />
            <CategoryCard
              icon={
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              }
              title="Car Rental"
              count="500+"
              href="/rentals"
            />
            <CategoryCard
              icon={
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              }
              title="Tents"
              count="800+"
              href="/vendors?category=Tents"
            />
            <CategoryCard
              icon={
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
              }
              title="Gifts"
              count="600+"
              href="/vendors?category=Gifts"
            />
            <CategoryCard
              icon={
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              }
              title="Invitations"
              count="450+"
              href="/vendors?category=Invitations"
            />
            <CategoryCard
              icon={
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              }
              title="Videographers"
              count="1,100+"
              href="/vendors?category=Videographers"
            />
            <CategoryCard
              icon={
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                </svg>
              }
              title="Jewelry"
              count="700+"
              href="/vendors?category=Jewelry"
            />
            <CategoryCard
              icon={
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              }
              title="Floral Decor"
              count="850+"
              href="/vendors?category=Floral Decor"
            />
            <CategoryCard
              icon={
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              }
              title="Wedding Planners"
              count="550+"
              href="/vendors?category=Wedding Planners"
            />
            <CategoryCard
              icon={
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              }
              title="Cakes"
              count="400+"
              href="/vendors?category=Cakes"
            />
            <CategoryCard
              icon={
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              }
              title="Security"
              count="300+"
              href="/vendors?category=Security"
            />
            <CategoryCard
              icon={
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              }
              title="Lighting"
              count="350+"
              href="/vendors?category=Lighting"
            />
            <CategoryCard
              icon={
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              }
              title="Food Styling"
              count="250+"
              href="/vendors?category=Food Styling"
            />
            <CategoryCard
              icon={
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              }
              title="Entertainment"
              count="500+"
              href="/vendors?category=Entertainment"
            />
            <CategoryCard
              icon={
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              }
              title="Stationery"
              count="380+"
              href="/vendors?category=Stationery"
            />
            <CategoryCard
              icon={
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              }
              title="Pandit/Priest"
              count="200+"
              href="/vendors?category=Pandit/Priest"
            />
          </div>

          {/* View All Button */}
          <div className="mt-12 text-center">
            <Link
              href="/categories"
              className="inline-flex items-center gap-2 rounded-2xl border-2 border-rose-300 bg-white px-8 py-3.5 text-base font-semibold text-rose-600 transition hover:border-rose-400 hover:bg-rose-50 dark:border-rose-500/40 dark:bg-slate-800 dark:text-rose-400 dark:hover:bg-slate-700"
            >
              <span>View All Categories</span>
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Vendors Section */}
      <section className="bg-gradient-to-b from-white to-slate-50/50 py-16 dark:from-slate-900 dark:to-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-rose-200/80 bg-rose-50/80 px-4 py-2 text-xs font-semibold text-rose-600 shadow-sm dark:border-rose-500/30 dark:bg-rose-950/30 dark:text-rose-400">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span>Top Rated & Verified</span>
            </div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
              Featured Vendors
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600 dark:text-slate-300">
              Handpicked premium vendors trusted by thousands of couples for their exceptional service and quality
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <VendorCard
              image="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=400&h=300&fit=crop"
              name="Royal Orchid Banquets"
              category="Venue"
              location="Mumbai, Maharashtra"
              rating={4.9}
              reviews={1247}
              priceRange="₹2L - ₹8L"
              verified={true}
              featured={true}
              badge="Top Rated"
            />
            <VendorCard
              image="https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=400&h=300&fit=crop"
              name="Dream Lens Photography"
              category="Photography"
              location="Delhi NCR"
              rating={4.8}
              reviews={892}
              priceRange="₹50K - ₹3L"
              verified={true}
              featured={true}
              badge="Featured"
            />
            <VendorCard
              image="https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=400&h=300&fit=crop"
              name="Blossom Decor Studio"
              category="Decoration"
              location="Bangalore, Karnataka"
              rating={4.9}
              reviews={1156}
              priceRange="₹1.5L - ₹6L"
              verified={true}
              featured={true}
              badge="Vendor of Month"
            />
            <VendorCard
              image="https://images.unsplash.com/photo-1556911220-bff31c812dba?w=400&h=300&fit=crop"
              name="Gourmet Catering Co."
              category="Catering"
              location="Pune, Maharashtra"
              rating={4.7}
              reviews={634}
              priceRange="₹80K - ₹4L"
              verified={true}
              featured={false}
            />
            <VendorCard
              image="https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=300&fit=crop"
              name="Bridal Beauty Studio"
              category="Makeup Artist"
              location="Jaipur, Rajasthan"
              rating={4.9}
              reviews={523}
              priceRange="₹25K - ₹1.5L"
              verified={true}
              featured={true}
              badge="Top Rated"
            />
            <VendorCard
              image="https://images.unsplash.com/photo-1511578314322-379afb476865?w=400&h=300&fit=crop"
              name="Melody DJ Services"
              category="DJ & Music"
              location="Hyderabad, Telangana"
              rating={4.6}
              reviews={445}
              priceRange="₹30K - ₹1.2L"
              verified={true}
              featured={false}
            />
            <VendorCard
              image="https://images.unsplash.com/photo-1519162808019-7de1683fa2ad?w=400&h=300&fit=crop"
              name="Mehendi Magic"
              category="Mehendi Artist"
              location="Ahmedabad, Gujarat"
              rating={4.8}
              reviews={678}
              priceRange="₹15K - ₹80K"
              verified={true}
              featured={true}
            />
            <VendorCard
              image="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=400&h=300&fit=crop"
              name="Luxury Car Rentals"
              category="Car Rental"
              location="Chandigarh, Punjab"
              rating={4.7}
              reviews={389}
              priceRange="₹20K - ₹1L"
              verified={true}
              featured={false}
            />
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/vendors"
              className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-rose-500 to-orange-400 px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-rose-200/60 transition hover:opacity-95 dark:shadow-rose-900/40"
            >
              <span>View All Vendors</span>
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-16 dark:bg-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
              Everything You Need for Your Perfect Wedding
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600 dark:text-slate-300">
              From planning to execution, we've got you covered at every step of your wedding journey.
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              icon="🎯"
              title="Verified Vendors Only"
              description="All vendors are background-checked and verified for quality and reliability."
            />
            <FeatureCard
              icon="💰"
              title="Budget Management"
              description="Track expenses, set budgets, and get real-time insights into your wedding spending."
            />
            <FeatureCard
              icon="📅"
              title="Smart Timeline"
              description="Personalized checklists and timelines based on your wedding date and preferences."
            />
            <FeatureCard
              icon="🔒"
              title="Secure Bookings"
              description="Safe and secure payment processing with booking confirmations and receipts."
            />
            <FeatureCard
              icon="💬"
              title="24/7 Support"
              description="Get help whenever you need it with our round-the-clock customer support team."
            />
            <FeatureCard
              icon="⭐"
              title="Real Reviews"
              description="Read authentic reviews from real couples who've worked with our vendors."
            />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-gradient-to-b from-slate-50/50 to-white py-16 dark:from-slate-950 dark:to-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
              How It Works
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600 dark:text-slate-300">
              Plan your dream wedding in just 4 simple steps
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <HowItWorksStep
              number="1"
              title="Sign Up & Create Profile"
              description="Create your free account and tell us about your wedding date, budget, and preferences."
              icon={
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              }
            />
            <HowItWorksStep
              number="2"
              title="Browse & Compare Vendors"
              description="Explore thousands of verified vendors, compare prices, read reviews, and shortlist your favorites."
              icon={
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              }
            />
            <HowItWorksStep
              number="3"
              title="Book & Manage"
              description="Secure your bookings with our safe payment system and manage everything from your dashboard."
              icon={
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              }
            />
            <HowItWorksStep
              number="4"
              title="Celebrate Your Day"
              description="Enjoy your perfect wedding day while we ensure everything runs smoothly behind the scenes."
              icon={
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              }
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-white py-16 dark:bg-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
              Why Choose ShaadiSathi?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600 dark:text-slate-300">
              We're not just a platform—we're your wedding planning partner
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <WhyChooseCard
              icon="🤖"
              title="AI-Powered Vendor Matching"
              description="Our intelligent algorithm matches you with vendors based on your style, budget, and preferences, saving you hours of searching."
            />
            <WhyChooseCard
              icon="💰"
              title="Price Comparison Tool"
              description="Compare prices from multiple vendors instantly and get the best deals. Save up to 30% on your wedding budget."
            />
            <WhyChooseCard
              icon="🎁"
              title="Free Wedding Planning Tools"
              description="Access our comprehensive planning tools including budget calculator, timeline tracker, and vendor comparison—all completely free."
            />
            <WhyChooseCard
              icon="👨‍💼"
              title="24/7 Concierge Support"
              description="Get dedicated support from our wedding planning experts. We're here to help you every step of the way, anytime you need."
            />
            <WhyChooseCard
              icon="✅"
              title="Money-Back Guarantee"
              description="Book with confidence. If you're not satisfied with a vendor, we offer a full refund guarantee on eligible bookings."
            />
            <WhyChooseCard
              icon="🔐"
              title="Secure & Verified"
              description="All vendors are verified, background-checked, and insured. Your payments are processed through secure, encrypted channels."
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gradient-to-b from-rose-50/60 to-white py-16 dark:from-slate-950 dark:to-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
              What Couples Say About Us
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600 dark:text-slate-300">
              Real stories from real couples who made their dream wedding come true
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <TestimonialCard
              name="Priya & Rahul"
              location="Mumbai"
              rating={5}
              text="ShaadiSathi made our wedding planning so easy! We found the perfect venue, photographer, and caterer all in one place. The vendor comparison feature helped us save ₹2 lakhs!"
              image="https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=150&h=150&fit=crop&crop=faces"
            />
            <TestimonialCard
              name="Anjali & Vikram"
              location="Delhi"
              rating={5}
              text="The best wedding planning platform! The AI recommendations were spot-on, and we loved how easy it was to manage everything. Our wedding was absolutely perfect!"
              image="https://images.unsplash.com/photo-1519741497674-611481863552?w=150&h=150&fit=crop&crop=faces"
            />
            <TestimonialCard
              name="Sneha & Arjun"
              location="Bangalore"
              rating={5}
              text="24/7 support was a lifesaver! When we had last-minute changes, the team helped us find replacement vendors within hours. Highly recommend!"
              image="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=150&h=150&fit=crop&crop=faces"
            />
          </div>
        </div>
      </section>

      {/* Wedding Gallery Section */}
      <section className="bg-white py-16 dark:bg-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
              Real Wedding Gallery
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600 dark:text-slate-300">
              Beautiful moments from weddings we've helped plan
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            <GalleryImage
              image="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=400&h=500&fit=crop"
              category="Venue"
            />
            <GalleryImage
              image="https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=500&fit=crop"
              category="Makeup"
            />
            <GalleryImage
              image="https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=400&h=500&fit=crop"
              category="Photography"
            />
            <GalleryImage
              image="https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=400&h=500&fit=crop"
              category="Decoration"
            />
            <GalleryImage
              image="https://images.unsplash.com/photo-1519162808019-7de1683fa2ad?w=400&h=500&fit=crop"
              category="Mehendi"
            />
            <GalleryImage
              image="https://images.unsplash.com/photo-1511578314322-379afb476865?w=400&h=500&fit=crop"
              category="Entertainment"
            />
            <GalleryImage
              image="https://images.unsplash.com/photo-1556911220-bff31c812dba?w=400&h=500&fit=crop"
              category="Catering"
            />
            <GalleryImage
              image="https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=500&fit=crop"
              category="Bridal"
            />
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 rounded-2xl border-2 border-rose-300 bg-white px-8 py-3.5 text-base font-semibold text-rose-600 transition hover:border-rose-400 hover:bg-rose-50 dark:border-rose-500/40 dark:bg-slate-800 dark:text-rose-400 dark:hover:bg-slate-700"
            >
              <span>View Full Gallery</span>
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Success Statistics Section */}
      <section className="bg-gradient-to-r from-rose-500 to-orange-400 py-16 dark:from-rose-600 dark:to-orange-500">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Our Success in Numbers
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
              Trusted by thousands of couples across India
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            <StatCardLarge value="65,000+" label="Happy Couples" />
            <StatCardLarge value="₹2,500+ Cr" label="Saved by Couples" />
            <StatCardLarge value="98%" label="Satisfaction Rate" />
            <StatCardLarge value="9,800+" label="Verified Vendors" />
          </div>
        </div>
      </section>

      {/* Blog/Resources Preview Section */}
      <section className="bg-white py-16 dark:bg-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
                Wedding Planning Resources
              </h2>
              <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
                Expert tips, trends, and inspiration for your special day
              </p>
            </div>
            <Link
              href="/blog"
              className="hidden rounded-2xl border-2 border-rose-300 bg-white px-6 py-3 text-base font-semibold text-rose-600 transition hover:border-rose-400 hover:bg-rose-50 dark:border-rose-500/40 dark:bg-slate-800 dark:text-rose-400 dark:hover:bg-slate-700 sm:inline-flex items-center gap-2"
            >
              View All
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <BlogCard
              image="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=400&h=250&fit=crop"
              category="Planning Tips"
              title="10 Essential Questions to Ask Your Wedding Venue"
              date="March 15, 2024"
              readTime="5 min read"
            />
            <BlogCard
              image="https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=250&fit=crop"
              category="Trends"
              title="2024 Wedding Trends: What's In and What's Out"
              date="March 10, 2024"
              readTime="7 min read"
            />
            <BlogCard
              image="https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=400&h=250&fit=crop"
              category="Real Weddings"
              title="Priya & Rahul's Dream Destination Wedding"
              date="March 5, 2024"
              readTime="8 min read"
            />
          </div>
        </div>
      </section>

      {/* Newsletter Signup Section */}
      <section className="bg-gradient-to-b from-slate-50/50 to-white py-16 dark:from-slate-950 dark:to-slate-900">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-rose-200/80 bg-gradient-to-br from-rose-50/80 to-orange-50/80 p-8 shadow-xl dark:border-rose-500/30 dark:from-rose-950/30 dark:to-orange-950/30 sm:p-12">
            <div className="text-center">
              <div className="mb-4 inline-flex items-center justify-center rounded-full bg-rose-100 p-3 text-rose-600 dark:bg-rose-950/50 dark:text-rose-400">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
                Stay Updated with Wedding Tips
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600 dark:text-slate-300">
                Get weekly planning tips, vendor recommendations, and exclusive deals delivered to your inbox
              </p>

              <form className="mt-8 flex flex-col gap-4 sm:flex-row sm:max-w-md sm:mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 rounded-2xl border border-slate-200/80 bg-white/90 px-6 py-3.5 text-base text-slate-700 shadow-sm transition focus:border-rose-400 focus:outline-none focus:ring-2 focus:ring-rose-100 dark:border-slate-700 dark:bg-slate-900/60 dark:text-white dark:focus:border-rose-500"
                />
                <button
                  type="submit"
                  className="rounded-2xl bg-gradient-to-r from-rose-500 to-orange-400 px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-rose-200/60 transition hover:opacity-95 dark:shadow-rose-900/40"
                >
                  Subscribe
                </button>
              </form>

              <p className="mt-4 text-xs text-slate-500 dark:text-slate-400">
                No spam. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-16 dark:bg-slate-900">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600 dark:text-slate-300">
              Everything you need to know about ShaadiSathi
            </p>
          </div>

          <div className="space-y-4">
            <FAQItem
              question="How do I book a vendor through ShaadiSathi?"
              answer="Simply browse our verified vendors, compare prices and reviews, and click 'Book Now' on any vendor profile. You can make secure payments through our platform and receive instant booking confirmations."
            />
            <FAQItem
              question="Are all vendors verified and trustworthy?"
              answer="Yes! All vendors on our platform undergo a thorough verification process including background checks, license verification, and quality assessments. We only feature vendors with excellent track records."
            />
            <FAQItem
              question="Can I cancel or modify my booking?"
              answer="Yes, you can modify or cancel bookings based on the vendor's cancellation policy. Most vendors offer flexible cancellation options, and we provide full refunds for cancellations made within the specified timeframe."
            />
            <FAQItem
              question="Is there a fee for using ShaadiSathi?"
              answer="Creating an account and browsing vendors is completely free. We only charge a small service fee when you make a booking, which is clearly displayed before you confirm your payment."
            />
            <FAQItem
              question="Do you offer wedding planning assistance?"
              answer="Yes! Our premium members get access to dedicated wedding planning consultants who can help with everything from vendor selection to timeline management. We also offer 24/7 support for all users."
            />
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-gradient-to-br from-rose-500 via-rose-600 to-orange-500 py-20 dark:from-rose-600 dark:via-rose-700 dark:to-orange-600">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white sm:text-5xl">
            Ready to Plan Your Dream Wedding?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-xl text-white/90">
            Join thousands of couples who have made their wedding dreams come true with ShaadiSathi
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/signup"
              className="rounded-2xl bg-white px-8 py-4 text-base font-semibold text-rose-600 shadow-xl transition hover:bg-rose-50 hover:scale-105"
            >
              Start Planning Today
            </Link>
            <Link
              href="/vendors"
              className="rounded-2xl border-2 border-white/80 bg-transparent px-8 py-4 text-base font-semibold text-white transition hover:bg-white/10"
            >
              Browse Vendors
            </Link>
          </div>
          <p className="mt-8 text-sm text-white/80">
            Free to sign up • No credit card required • 65,000+ happy couples
          </p>
        </div>
      </section>
    </main>
  );
}

function StatCard({ value, label }) {
  return (
    <div className="rounded-2xl border border-slate-200/70 bg-white/80 px-4 py-4 shadow-sm dark:border-slate-800 dark:bg-slate-900/60 sm:px-6 sm:py-5">
      <p className="text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl">{value}</p>
      <p className="mt-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">{label}</p>
    </div>
  );
}

function QuickActionCard({ icon, title, description, href }) {
  return (
    <Link
      href={href}
      className="group rounded-2xl border border-slate-200/70 bg-white/80 p-5 text-center shadow-sm transition hover:border-rose-300 hover:bg-rose-50/50 hover:shadow-md dark:border-slate-800 dark:bg-slate-900/60 dark:hover:border-rose-500/40 dark:hover:bg-slate-800"
    >
      <div className="mb-3 flex justify-center text-rose-500 transition group-hover:scale-110">{icon}</div>
      <h3 className="mb-1 text-sm font-semibold text-slate-900 dark:text-white">{title}</h3>
      <p className="text-xs text-slate-500 dark:text-slate-400">{description}</p>
    </Link>
  );
}

function CategoryCard({ icon, title, count, href }) {
  return (
    <Link
      href={href}
      className="group flex flex-col items-center gap-3 rounded-2xl border border-slate-200/70 bg-white/80 p-6 text-center shadow-sm transition-all hover:border-rose-300 hover:bg-rose-50/50 hover:shadow-md hover:scale-105 dark:border-slate-800 dark:bg-slate-900/60 dark:hover:border-rose-500/40 dark:hover:bg-slate-800"
    >
      <div className="text-rose-500 transition-transform group-hover:scale-110 dark:text-rose-400">{icon}</div>
      <div>
        <h3 className="mb-1 text-sm font-semibold text-slate-900 dark:text-white">{title}</h3>
        <p className="text-xs text-slate-500 dark:text-slate-400">{count}</p>
      </div>
    </Link>
  );
}

function VendorCard({ image, name, category, location, rating, reviews, priceRange, verified, featured, badge }) {
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <svg key={i} className="h-4 w-4 fill-amber-400 text-amber-400" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }

    if (hasHalfStar && fullStars < 5) {
      stars.push(
        <svg key="half" className="h-4 w-4 text-amber-400" viewBox="0 0 20 20" fill="none">
          <defs>
            <linearGradient id={`half-${name.replace(/\s+/g, '-')}`}>
              <stop offset="50%" stopColor="#fbbf24" />
              <stop offset="50%" stopColor="#e5e7eb" />
            </linearGradient>
          </defs>
          <path
            fill={`url(#half-${name.replace(/\s+/g, '-')})`}
            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
          />
        </svg>
      );
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <svg key={`empty-${i}`} className="h-4 w-4 fill-slate-300 text-slate-300 dark:fill-slate-600" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }

    return stars;
  };

  return (
    <Link
      href={`/vendors/${name.toLowerCase().replace(/\s+/g, '-')}`}
      className="group relative overflow-hidden rounded-2xl border border-slate-200/70 bg-white shadow-sm transition-all hover:border-rose-300 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900/60 dark:hover:border-rose-500/40"
    >
      {/* Badge */}
      {badge && (
        <div className="absolute left-3 top-3 z-10 rounded-full bg-gradient-to-r from-rose-500 to-orange-400 px-3 py-1 text-xs font-semibold text-white shadow-lg">
          {badge}
        </div>
      )}

      {/* Verified Badge */}
      {verified && (
        <div className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-md dark:bg-slate-800">
          <svg className="h-5 w-5 text-rose-500" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      )}

      {/* Image */}
      <div className="relative h-48 overflow-hidden bg-slate-200">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/400x300?text=' + encodeURIComponent(name);
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Category */}
        <div className="mb-2">
          <span className="inline-flex items-center rounded-full bg-rose-50 px-2.5 py-0.5 text-xs font-semibold text-rose-600 dark:bg-rose-950/30 dark:text-rose-400">
            {category}
          </span>
        </div>

        {/* Name */}
        <h3 className="mb-2 text-lg font-bold text-slate-900 line-clamp-1 dark:text-white">{name}</h3>

        {/* Location */}
        <div className="mb-3 flex items-center gap-1.5 text-sm text-slate-600 dark:text-slate-400">
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span className="line-clamp-1">{location}</span>
        </div>

        {/* Rating & Reviews */}
        <div className="mb-3 flex items-center gap-2">
          <div className="flex items-center gap-0.5">{renderStars(rating)}</div>
          <span className="text-sm font-semibold text-slate-900 dark:text-white">{rating}</span>
          <span className="text-sm text-slate-500 dark:text-slate-400">
            ({reviews.toLocaleString()} {reviews === 1 ? 'review' : 'reviews'})
          </span>
        </div>

        {/* Price Range */}
        <div className="flex items-center justify-between border-t border-slate-200 pt-3 dark:border-slate-700">
          <div>
            <p className="text-xs text-slate-500 dark:text-slate-400">Starting from</p>
            <p className="text-base font-bold text-slate-900 dark:text-white">{priceRange}</p>
          </div>
          <button className="rounded-xl bg-rose-50 px-4 py-2 text-sm font-semibold text-rose-600 transition hover:bg-rose-100 dark:bg-rose-950/30 dark:text-rose-400 dark:hover:bg-rose-950/50">
            View Details
          </button>
        </div>
      </div>
    </Link>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 text-left transition-shadow hover:shadow-lg dark:border-slate-800 dark:bg-slate-900">
      <div className="mb-4 text-4xl">{icon}</div>
      <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">{title}</h3>
      <p className="text-sm text-slate-600 dark:text-slate-300">{description}</p>
    </div>
  );
}

function HowItWorksStep({ number, title, description, icon }) {
  return (
    <div className="relative text-center">
      <div className="mb-4 flex justify-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-rose-100 to-orange-100 text-rose-600 dark:from-rose-950/50 dark:to-orange-950/50 dark:text-rose-400">
          {icon}
        </div>
      </div>
      <div className="mb-2 flex justify-center">
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-rose-500 text-sm font-bold text-white">
          {number}
        </span>
      </div>
      <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">{title}</h3>
      <p className="text-sm text-slate-600 dark:text-slate-300">{description}</p>
    </div>
  );
}

function WhyChooseCard({ icon, title, description }) {
  return (
    <div className="flex gap-4 rounded-2xl border border-slate-200/70 bg-white/80 p-6 transition-shadow hover:shadow-lg dark:border-slate-800 dark:bg-slate-900/60">
      <div className="flex-shrink-0">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-rose-100 text-2xl dark:bg-rose-950/30">
          {icon}
        </div>
      </div>
      <div>
        <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">{title}</h3>
        <p className="text-sm text-slate-600 dark:text-slate-300">{description}</p>
      </div>
    </div>
  );
}

function TestimonialCard({ name, location, rating, text, image }) {
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        className={`h-5 w-5 ${i < rating ? 'fill-amber-400 text-amber-400' : 'fill-slate-300 text-slate-300 dark:fill-slate-600 dark:text-slate-600'}`}
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <div className="rounded-2xl border border-slate-200/70 bg-white/80 p-6 shadow-sm transition-shadow hover:shadow-md dark:border-slate-800 dark:bg-slate-900/60">
      <div className="mb-4 flex items-center gap-1">{renderStars(rating)}</div>
      <p className="mb-6 text-sm text-slate-600 dark:text-slate-300">&quot;{text}&quot;</p>
      <div className="flex items-center gap-3">
        <img
          src={image}
          alt={name}
          className="h-12 w-12 rounded-full object-cover"
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/150?text=' + encodeURIComponent(name.charAt(0));
          }}
        />
        <div>
          <p className="font-semibold text-slate-900 dark:text-white">{name}</p>
          <p className="text-xs text-slate-500 dark:text-slate-400">{location}</p>
        </div>
      </div>
    </div>
  );
}

function GalleryImage({ image, category }) {
  return (
    <Link
      href="/gallery"
      className="group relative overflow-hidden rounded-2xl aspect-[3/4] bg-slate-200"
    >
      <img
        src={image}
        alt={category}
        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
        onError={(e) => {
          e.target.src = 'https://via.placeholder.com/400x500?text=' + encodeURIComponent(category);
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
      <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 transition-opacity group-hover:opacity-100">
        <span className="inline-flex rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-900 backdrop-blur-sm">
          {category}
        </span>
      </div>
    </Link>
  );
}

function StatCardLarge({ value, label }) {
  return (
    <div className="text-center">
      <p className="text-4xl font-bold text-white sm:text-5xl">{value}</p>
      <p className="mt-2 text-sm font-semibold uppercase tracking-wider text-white/90">{label}</p>
    </div>
  );
}

function BlogCard({ image, category, title, date, readTime }) {
  return (
    <Link
      href="/blog"
      className="group overflow-hidden rounded-2xl border border-slate-200/70 bg-white shadow-sm transition-shadow hover:shadow-lg dark:border-slate-800 dark:bg-slate-900/60"
    >
      <div className="relative h-48 overflow-hidden bg-slate-200">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/400x250?text=' + encodeURIComponent(title);
          }}
        />
      </div>
      <div className="p-6">
        <span className="inline-flex rounded-full bg-rose-50 px-3 py-1 text-xs font-semibold text-rose-600 dark:bg-rose-950/30 dark:text-rose-400">
          {category}
        </span>
        <h3 className="mt-3 text-lg font-semibold text-slate-900 line-clamp-2 dark:text-white group-hover:text-rose-600 dark:group-hover:text-rose-400">
          {title}
        </h3>
        <div className="mt-4 flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400">
          <span>{date}</span>
          <span>•</span>
          <span>{readTime}</span>
        </div>
      </div>
    </Link>
  );
}

function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="rounded-2xl border border-slate-200/70 bg-white/80 dark:border-slate-800 dark:bg-slate-900/60">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between gap-4 p-6 text-left"
      >
        <span className="font-semibold text-slate-900 dark:text-white">{question}</span>
        <svg
          className={`h-5 w-5 flex-shrink-0 text-slate-400 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="border-t border-slate-200/70 px-6 pb-6 pt-4 dark:border-slate-800">
          <p className="text-sm text-slate-600 dark:text-slate-300">{answer}</p>
        </div>
      )}
    </div>
  );
}
