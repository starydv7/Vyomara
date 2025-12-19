'use client';

import { useParams, notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { vendors } from '@/data/vendors';

export default function VendorDetailsPage() {
  const params = useParams();
  const slug = params.slug;

  // Find vendor by slug (matching the name logic used in VendorCard)
  const vendor = vendors.find(v =>
    v.name.toLowerCase().replace(/\s+/g, '-') === slug
  );

  if (!vendor) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Breadcrumb */}
        <div className="mb-6 flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
          <Link href="/" className="hover:text-rose-600">Home</Link>
          <span>/</span>
          <Link href="/vendors" className="hover:text-rose-600">Vendors</Link>
          <span>/</span>
          <span className="text-slate-900 dark:text-white font-medium">{vendor.name}</span>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column: Images & Info */}
          <div className="lg:col-span-2 space-y-8">
            {/* Main Image */}
            <div className="relative h-[400px] rounded-3xl overflow-hidden bg-slate-200">
              <Image
                src={vendor.image}
                alt={vendor.name}
                fill
                className="object-cover"
              />
              {vendor.badge && (
                <div className="absolute top-4 left-4 bg-gradient-to-r from-rose-500 to-orange-400 text-white px-4 py-1.5 rounded-full text-sm font-bold shadow-lg">
                  {vendor.badge}
                </div>
              )}
            </div>

            {/* Title & Stats */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-sm border border-slate-100 dark:border-slate-800">
              <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-6">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h1 className="text-3xl font-bold text-slate-900 dark:text-white">{vendor.name}</h1>
                    {vendor.verified && (
                      <span className="bg-blue-50 text-blue-600 p-1 rounded-full dark:bg-blue-900/30 dark:text-blue-400" title="Verified Vendor">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </span>
                    )}
                  </div>
                  <p className="text-slate-500 dark:text-slate-400 flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {vendor.location}
                  </p>
                </div>
                <div className="flex flex-col items-end">
                  <div className="flex items-center gap-1 bg-green-50 px-3 py-1 rounded-lg dark:bg-green-900/20">
                    <span className="font-bold text-green-700 dark:text-green-400">{vendor.rating}</span>
                    <svg className="w-4 h-4 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <p className="text-sm text-slate-500 mt-1">{vendor.reviews} Reviews</p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6 pt-6 border-t border-slate-100 dark:border-slate-800">
                <div>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mb-1">Starting Price</p>
                  <p className="text-xl font-bold text-slate-900 dark:text-white">{vendor.priceRange}</p>
                </div>
                <div>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mb-1">Category</p>
                  <p className="text-xl font-bold text-slate-900 dark:text-white">{vendor.category}</p>
                </div>
              </div>
            </div>

            {/* About Section (Mock) */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-sm border border-slate-100 dark:border-slate-800">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">About {vendor.name}</h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                {vendor.name} is a premier service provider in {vendor.location}, known for their exceptional quality and attention to detail. With years of experience in the wedding industry, they have helped countless couples create their dream wedding. They specialize in {vendor.category} services and are committed to making your special day unforgettable.
              </p>
            </div>
          </div>

          {/* Right Column: Booking Card */}
          <div className="space-y-6">
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-lg border border-slate-200 dark:border-slate-700 sticky top-6">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Interested?</h3>

              <div className="space-y-4">
                <button className="w-full py-4 rounded-xl bg-gradient-to-r from-rose-500 to-orange-400 text-white font-bold shadow-lg shadow-rose-200/50 hover:opacity-95 transition dark:shadow-none">
                  Request Quote
                </button>
                <button className="w-full py-4 rounded-xl border-2 border-slate-200 text-slate-700 font-bold hover:bg-slate-50 transition dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800">
                  Message Vendor
                </button>
              </div>

              <p className="text-xs text-center text-slate-500 mt-4">
                Typically responds within 24 hours
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
