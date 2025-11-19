'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { getVendorBySlug, generateGalleryImages } from '@/lib/vendors-data';

export default function VendorDetailPage() {
  const params = useParams();
  const [vendor, setVendor] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (params.slug) {
      const foundVendor = getVendorBySlug(params.slug);
      if (foundVendor) {
        setVendor(foundVendor);
      }
      setIsLoading(false);
    }
  }, [params.slug]);

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <div className="mb-4 h-12 w-12 animate-spin rounded-full border-4 border-rose-500 border-t-transparent mx-auto"></div>
          <p className="text-slate-600 dark:text-slate-400">Loading vendor details...</p>
        </div>
      </div>
    );
  }

  if (!vendor) {
    return (
      <div className="min-h-screen bg-slate-50 py-12 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="mb-4 text-4xl font-bold text-slate-900 dark:text-white">Vendor Not Found</h1>
            <p className="mb-8 text-slate-600 dark:text-slate-400">The vendor you're looking for doesn't exist.</p>
            <Link
              href="/vendors"
              className="inline-block rounded-lg bg-rose-500 px-6 py-3 text-white transition-colors hover:bg-rose-600"
            >
              Browse All Vendors
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const galleryImages = generateGalleryImages(vendor, 6);
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <svg key={i} className="h-5 w-5 fill-amber-400 text-amber-400" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }

    if (hasHalfStar && fullStars < 5) {
      stars.push(
        <svg key="half" className="h-5 w-5 text-amber-400" viewBox="0 0 20 20" fill="none">
          <defs>
            <linearGradient id={`half-${vendor.name.replace(/\s+/g, '-')}`}>
              <stop offset="50%" stopColor="#fbbf24" />
              <stop offset="50%" stopColor="#e5e7eb" />
            </linearGradient>
          </defs>
          <path
            fill={`url(#half-${vendor.name.replace(/\s+/g, '-')})`}
            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
          />
        </svg>
      );
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <svg key={`empty-${i}`} className="h-5 w-5 fill-slate-300 text-slate-300 dark:fill-slate-600" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }

    return stars;
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      {/* Breadcrumb */}
      <div className="border-b border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-slate-600 hover:text-rose-500 dark:text-slate-400">
              Home
            </Link>
            <span className="text-slate-400">/</span>
            <Link href="/vendors" className="text-slate-600 hover:text-rose-500 dark:text-slate-400">
              Vendors
            </Link>
            <span className="text-slate-400">/</span>
            <span className="text-slate-900 dark:text-white">{vendor.name}</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Image Gallery */}
            <div className="space-y-4">
              {/* Main Image */}
              <div className="relative h-96 overflow-hidden rounded-2xl bg-slate-200">
                <img
                  src={galleryImages[selectedImageIndex]}
                  alt={vendor.name}
                  className="h-full w-full object-cover"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/800x600?text=' + encodeURIComponent(vendor.name);
                  }}
                />
                {vendor.badge && (
                  <div className="absolute left-4 top-4 rounded-full bg-gradient-to-r from-rose-500 to-orange-400 px-4 py-2 text-sm font-semibold text-white shadow-lg">
                    {vendor.badge}
                  </div>
                )}
              </div>

              {/* Thumbnail Gallery */}
              <div className="grid grid-cols-6 gap-2">
                {galleryImages.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`relative h-20 overflow-hidden rounded-lg border-2 transition-all ${
                      selectedImageIndex === index
                        ? 'border-rose-500 ring-2 ring-rose-200'
                        : 'border-slate-200 hover:border-rose-300 dark:border-slate-700'
                    }`}
                  >
                    <img
                      src={img}
                      alt={`${vendor.name} - Image ${index + 1}`}
                      className="h-full w-full object-cover"
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/150x100?text=' + encodeURIComponent(vendor.name);
                      }}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Vendor Info */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
              <div className="mb-6">
                <div className="mb-4 flex items-start justify-between">
                  <div>
                    <div className="mb-2 flex items-center gap-3">
                      <h1 className="text-3xl font-bold text-slate-900 dark:text-white">{vendor.name}</h1>
                      {vendor.verified && (
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-rose-100 dark:bg-rose-900/30">
                          <svg className="h-5 w-5 text-rose-500" fill="currentColor" viewBox="0 0 20 20">
                            <path
                              fillRule="evenodd"
                              d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                      )}
                    </div>
                    <div className="mb-3 flex items-center gap-4">
                      <span className="inline-flex items-center rounded-full bg-rose-50 px-3 py-1 text-sm font-semibold text-rose-600 dark:bg-rose-950/30 dark:text-rose-400">
                        {vendor.category}
                      </span>
                      <div className="flex items-center gap-1">
                        {renderStars(vendor.rating)}
                        <span className="ml-2 text-sm font-semibold text-slate-900 dark:text-white">
                          {vendor.rating}
                        </span>
                        <span className="text-sm text-slate-600 dark:text-slate-400">
                          ({vendor.reviews} reviews)
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div className="mb-4 flex items-center gap-2 text-slate-600 dark:text-slate-400">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>{vendor.location}</span>
                </div>

                {/* Address */}
                {vendor.address && (
                  <div className="mb-4 flex items-start gap-2 text-slate-600 dark:text-slate-400">
                    <svg className="mt-0.5 h-5 w-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>{vendor.address}</span>
                  </div>
                )}

                {/* Description */}
                {vendor.description && (
                  <p className="mb-4 text-slate-700 dark:text-slate-300">{vendor.description}</p>
                )}
              </div>

              {/* Capacity & Parking */}
              {(vendor.capacity || vendor.parking) && (
                <div className="mb-6 grid gap-4 border-t border-slate-200 pt-6 dark:border-slate-800 md:grid-cols-2">
                  {vendor.capacity && (
                    <div>
                      <h3 className="mb-2 text-sm font-semibold text-slate-900 dark:text-white">Capacity</h3>
                      <p className="text-slate-600 dark:text-slate-400">{vendor.capacity}</p>
                    </div>
                  )}
                  {vendor.parking && (
                    <div>
                      <h3 className="mb-2 text-sm font-semibold text-slate-900 dark:text-white">Parking</h3>
                      <p className="text-slate-600 dark:text-slate-400">{vendor.parking}</p>
                    </div>
                  )}
                </div>
              )}

              {/* Amenities */}
              {vendor.amenities && vendor.amenities.length > 0 && (
                <div className="border-t border-slate-200 pt-6 dark:border-slate-800">
                  <h3 className="mb-4 text-lg font-semibold text-slate-900 dark:text-white">Amenities</h3>
                  <div className="flex flex-wrap gap-2">
                    {vendor.amenities.map((amenity, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1.5 text-sm text-slate-700 dark:bg-slate-800 dark:text-slate-300"
                      >
                        <svg className="h-4 w-4 text-rose-500" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {amenity}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Reviews Section */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
              <h2 className="mb-6 text-2xl font-bold text-slate-900 dark:text-white">Reviews & Ratings</h2>
              <div className="space-y-6">
                {/* Sample Reviews */}
                {[1, 2, 3].map((review) => (
                  <div key={review} className="border-b border-slate-200 pb-6 last:border-0 last:pb-0 dark:border-slate-800">
                    <div className="mb-3 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-gradient-to-br from-rose-400 to-orange-400 flex items-center justify-center text-white font-semibold">
                          {['A', 'B', 'C'][review - 1]}
                        </div>
                        <div>
                          <p className="font-semibold text-slate-900 dark:text-white">
                            {['Priya Sharma', 'Rahul Kumar', 'Anjali Singh'][review - 1]}
                          </p>
                          <div className="flex items-center gap-1">
                            {renderStars(4.5 + review * 0.1)}
                            <span className="ml-1 text-xs text-slate-500 dark:text-slate-400">
                              {['2 weeks ago', '1 month ago', '3 weeks ago'][review - 1]}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="text-slate-700 dark:text-slate-300">
                      {[
                        'Excellent venue with great facilities. The staff was very helpful and the food was amazing!',
                        'Beautiful place for weddings. Highly recommended for large gatherings.',
                        'Great experience overall. The parking was convenient and the hall was spacious.',
                      ][review - 1]}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Booking Card */}
          <div className="lg:col-span-1">
            <div className="sticky top-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-lg dark:border-slate-800 dark:bg-slate-900">
              <div className="mb-6">
                <div className="mb-4 text-center">
                  <div className="mb-2 text-3xl font-bold text-rose-500">{vendor.priceRange}</div>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Price Range</p>
                </div>
                <div className="mb-6 flex items-center justify-center gap-2">
                  {renderStars(vendor.rating)}
                  <span className="font-semibold text-slate-900 dark:text-white">{vendor.rating}</span>
                  <span className="text-slate-600 dark:text-slate-400">({vendor.reviews} reviews)</span>
                </div>
              </div>

              <div className="space-y-4">
                <button className="w-full rounded-lg bg-gradient-to-r from-rose-500 to-orange-400 px-6 py-3 font-semibold text-white transition-all hover:from-rose-600 hover:to-orange-500 hover:shadow-lg">
                  Book Now
                </button>
                <button className="w-full rounded-lg border-2 border-rose-500 px-6 py-3 font-semibold text-rose-500 transition-all hover:bg-rose-50 dark:hover:bg-rose-950/20">
                  Request Quote
                </button>
                <button className="w-full rounded-lg border border-slate-300 px-6 py-3 font-semibold text-slate-700 transition-all hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800">
                  Contact Vendor
                </button>
              </div>

              <div className="mt-6 space-y-4 border-t border-slate-200 pt-6 dark:border-slate-800">
                <div className="flex items-center gap-3">
                  <svg className="h-5 w-5 text-slate-600 dark:text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-slate-700 dark:text-slate-300">+91 98765 43210</span>
                </div>
                {vendor.website && (
                  <div className="flex items-center gap-3">
                    <svg className="h-5 w-5 text-slate-600 dark:text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                    <a href={`https://${vendor.website}`} target="_blank" rel="noopener noreferrer" className="text-rose-500 hover:underline">
                      {vendor.website}
                    </a>
                  </div>
                )}
                <div className="flex items-center gap-3">
                  <svg className="h-5 w-5 text-slate-600 dark:text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-slate-700 dark:text-slate-300">{vendor.location}</span>
                </div>
              </div>

              <div className="mt-6 rounded-lg bg-rose-50 p-4 dark:bg-rose-950/20">
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  <strong className="text-rose-600 dark:text-rose-400">Free Cancellation</strong> up to 48 hours before the event
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

