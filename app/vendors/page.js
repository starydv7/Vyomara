'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { allVendors } from '@/lib/vendors-data';

const categories = [
  'All Categories',
  'Venue',
  'Photography',
  'Catering',
  'Decoration',
  'Makeup Artist',
  'DJ & Music',
  'Mehendi Artist',
  'Car Rental',
  'Tents',
  'Gifts',
  'Invitations',
  'Videographers',
  'Jewelry',
  'Floral Decor',
  'Wedding Planners',
  'Cakes',
  'Security',
  'Lighting',
  'Food Styling',
  'Entertainment',
  'Stationery',
  'Pandit/Priest',
];

const sortOptions = [
  { value: 'rating', label: 'Highest Rated' },
  { value: 'reviews', label: 'Most Reviews' },
  { value: 'price-low', label: 'Price: Low to High' },
  { value: 'price-high', label: 'Price: High to Low' },
  { value: 'newest', label: 'Newest First' },
];

export default function VendorsPage() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get('category') || 'All Categories';
  
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(categoryParam);
  const [sortBy, setSortBy] = useState('rating');
  const [priceRange, setPriceRange] = useState('all');
  const [ratingFilter, setRatingFilter] = useState('all');

  const filteredVendors = useMemo(() => {
    let filtered = [...allVendors];

    // Category filter
    if (selectedCategory && selectedCategory !== 'All Categories') {
      filtered = filtered.filter((vendor) => vendor.category === selectedCategory);
    }

    // Search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (vendor) =>
          vendor.name.toLowerCase().includes(query) ||
          vendor.location.toLowerCase().includes(query) ||
          vendor.category.toLowerCase().includes(query)
      );
    }

    // Rating filter
    if (ratingFilter !== 'all') {
      const minRating = parseFloat(ratingFilter);
      filtered = filtered.filter((vendor) => vendor.rating >= minRating);
    }

    // Sort
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'rating':
          return b.rating - a.rating;
        case 'reviews':
          return b.reviews - a.reviews;
        case 'price-low':
          return parseFloat(a.priceRange.replace(/[₹LK,]/g, '')) - parseFloat(b.priceRange.replace(/[₹LK,]/g, ''));
        case 'price-high':
          return parseFloat(b.priceRange.replace(/[₹LK,]/g, '')) - parseFloat(a.priceRange.replace(/[₹LK,]/g, ''));
        case 'newest':
          return b.id - a.id;
        default:
          return 0;
      }
    });

    return filtered;
  }, [selectedCategory, searchQuery, sortBy, ratingFilter]);

  return (
    <main className="min-h-screen bg-gradient-to-b from-rose-50/60 via-white to-white dark:from-slate-950 dark:via-slate-950 dark:to-slate-900">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="mb-4 flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
            <Link href="/" className="hover:text-rose-600 dark:hover:text-rose-400">
              Home
            </Link>
            <span>/</span>
            <span className="text-slate-900 dark:text-white">Vendors</span>
            {selectedCategory !== 'All Categories' && (
              <>
                <span>/</span>
                <span className="text-slate-900 dark:text-white">{selectedCategory}</span>
              </>
            )}
          </div>
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white sm:text-5xl">
            {selectedCategory === 'All Categories' ? 'All Vendors' : `${selectedCategory} Vendors`}
          </h1>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
            {selectedCategory === 'All Categories'
              ? 'Browse through all verified vendors and find the perfect match for your wedding'
              : `Find the best ${selectedCategory.toLowerCase()} vendors for your special day`}
          </p>
        </div>

        {/* Filters and Search */}
        <div className="mb-8 space-y-4">
          {/* Search Bar */}
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search vendors by name, location, or category..."
              className="w-full rounded-2xl border border-slate-200/80 bg-white/90 px-6 py-4 pl-12 pr-6 text-base text-slate-700 shadow-sm transition focus:border-rose-400 focus:outline-none focus:ring-2 focus:ring-rose-100 dark:border-slate-700 dark:bg-slate-900/60 dark:text-white dark:focus:border-rose-500"
            />
            <svg
              className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-rose-500"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>

          {/* Filter Row */}
          <div className="flex flex-wrap items-center gap-4">
            {/* Category Filter */}
            <div className="flex-1 min-w-[200px]">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full rounded-2xl border border-slate-200/80 bg-white/90 px-4 py-3 text-sm font-semibold text-slate-700 shadow-sm transition focus:border-rose-400 focus:outline-none focus:ring-2 focus:ring-rose-100 dark:border-slate-700 dark:bg-slate-900/60 dark:text-white dark:focus:border-rose-500"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            {/* Sort Filter */}
            <div className="flex-1 min-w-[200px]">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full rounded-2xl border border-slate-200/80 bg-white/90 px-4 py-3 text-sm font-semibold text-slate-700 shadow-sm transition focus:border-rose-400 focus:outline-none focus:ring-2 focus:ring-rose-100 dark:border-slate-700 dark:bg-slate-900/60 dark:text-white dark:focus:border-rose-500"
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Rating Filter */}
            <div className="flex-1 min-w-[150px]">
              <select
                value={ratingFilter}
                onChange={(e) => setRatingFilter(e.target.value)}
                className="w-full rounded-2xl border border-slate-200/80 bg-white/90 px-4 py-3 text-sm font-semibold text-slate-700 shadow-sm transition focus:border-rose-400 focus:outline-none focus:ring-2 focus:ring-rose-100 dark:border-slate-700 dark:bg-slate-900/60 dark:text-white dark:focus:border-rose-500"
              >
                <option value="all">All Ratings</option>
                <option value="4.5">4.5+ Stars</option>
                <option value="4.0">4.0+ Stars</option>
                <option value="3.5">3.5+ Stars</option>
              </select>
            </div>
          </div>

          {/* Results Count */}
          <div className="flex items-center justify-between">
            <p className="text-sm text-slate-600 dark:text-slate-300">
              Showing <span className="font-semibold text-slate-900 dark:text-white">{filteredVendors.length}</span> vendor
              {filteredVendors.length !== 1 ? 's' : ''}
            </p>
            {selectedCategory !== 'All Categories' && (
              <button
                onClick={() => setSelectedCategory('All Categories')}
                className="text-sm font-semibold text-rose-600 hover:text-rose-700 dark:text-rose-400"
              >
                Clear Category Filter
              </button>
            )}
          </div>
        </div>

        {/* Vendors Grid */}
        {filteredVendors.length === 0 ? (
          <div className="rounded-2xl border border-slate-200 bg-white/80 p-12 text-center dark:border-slate-800 dark:bg-slate-900/60">
            <svg
              className="mx-auto h-12 w-12 text-slate-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p className="mt-4 text-lg font-semibold text-slate-600 dark:text-slate-300">No vendors found</p>
            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
              Try adjusting your filters or search query
            </p>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredVendors.map((vendor) => (
              <VendorCard key={vendor.id} {...vendor} />
            ))}
          </div>
        )}

        {/* Pagination (if needed in future) */}
        {filteredVendors.length > 0 && (
          <div className="mt-12 text-center">
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Showing all {filteredVendors.length} vendors
            </p>
          </div>
        )}
      </div>
    </main>
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

