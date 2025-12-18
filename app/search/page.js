'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import VendorCard from '@/components/VendorCard';
import { vendors } from '@/data/vendors';

function SearchContent() {
    const searchParams = useSearchParams();
    const query = searchParams.get('q') || '';
    const categoryParam = searchParams.get('category') || '';

    const [filteredVendors, setFilteredVendors] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        // Simulate API delay
        const timer = setTimeout(() => {
            const results = vendors.filter(vendor => {
                const matchesQuery = query === '' ||
                    vendor.name.toLowerCase().includes(query.toLowerCase()) ||
                    vendor.location.toLowerCase().includes(query.toLowerCase());

                const matchesCategory = categoryParam === '' ||
                    vendor.category === categoryParam;

                return matchesQuery && matchesCategory;
            });
            setFilteredVendors(results);
            setIsLoading(false);
        }, 500);

        return () => clearTimeout(timer);
    }, [query, categoryParam]);

    return (
        <main className="min-h-screen bg-slate-50 dark:bg-slate-950 py-12 px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
                        {query ? `Search Results for "${query}"` : 'All Vendors'}
                    </h1>
                    <p className="mt-2 text-slate-600 dark:text-slate-400">
                        {categoryParam && <span className="mr-2 rounded-full bg-rose-100 px-3 py-1 text-xs font-bold text-rose-600 dark:bg-rose-900/30 dark:text-rose-400">{categoryParam}</span>}
                        {filteredVendors.length} results found
                    </p>
                </div>

                {/* Results Grid */}
                {isLoading ? (
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {[...Array(8)].map((_, i) => (
                            <div key={i} className="h-[350px] rounded-2xl bg-slate-200 animate-pulse dark:bg-slate-800"></div>
                        ))}
                    </div>
                ) : filteredVendors.length > 0 ? (
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {filteredVendors.map((vendor) => (
                            <VendorCard key={vendor.id} {...vendor} />
                        ))}
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center py-20 text-center">
                        <div className="mb-4 rounded-full bg-slate-100 p-6 dark:bg-slate-800">
                            <svg className="h-12 w-12 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white">No results found</h3>
                        <p className="mt-2 text-slate-600 dark:text-slate-400">
                            We couldn't find any vendors matching your search. Try different keywords or categories.
                        </p>
                        <Link href="/" className="mt-6 rounded-xl bg-rose-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-rose-600">
                            Back to Home
                        </Link>
                    </div>
                )}
            </div>
        </main>
    );
}

export default function SearchPage() {
    return (
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
            <SearchContent />
        </Suspense>
    );
}
