'use client';

import { useState, use } from 'react';
import Link from 'next/link';
import { vehicles } from '@/data/vehicles';
import VehicleCard from '@/components/VehicleCard';

export default function CategoryPage({ params }) {
    // Unwrap params using React.use()
    const resolvedParams = use(params);
    const categorySlug = resolvedParams.category; // e.g., 'luxury', 'baraat-special'

    // Helper to normalize category matching
    const categoryName = categorySlug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

    // Filter vehicles
    // Note: In a real app, you might want more robust slug-to-category mapping
    const categoryVehicles = vehicles.filter(v => {
        if (categorySlug === 'all') return true;
        // Simple partial match for demo purposes, or match specific category IDs if we had them
        // Mapping slug back to category string in data
        const normalizedDataCategory = v.category.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-');
        return normalizedDataCategory.includes(categorySlug.toLowerCase()) || v.category.toLowerCase().includes(categoryName.toLowerCase());
    });

    return (
        <main className="min-h-screen bg-slate-50 dark:bg-slate-950 py-12 px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                {/* Header */}
                <div className="mb-8">
                    <Link
                        href="/rentals"
                        className="inline-flex items-center text-sm text-slate-500 hover:text-rose-600 mb-4"
                    >
                        <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Back to Rentals
                    </Link>
                    <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
                        {categoryName} Fleet
                    </h1>
                    <p className="mt-2 text-slate-600 dark:text-slate-400">
                        Choose from our premium selection of {categoryName} vehicles
                    </p>
                </div>

                {/* Vehicle Grid */}
                {categoryVehicles.length > 0 ? (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {categoryVehicles.map((vehicle) => (
                            <div key={vehicle.id} className="flex flex-col">
                                <VehicleCard
                                    vehicle={vehicle}
                                    isSelected={false}
                                    onSelect={() => { }} // No selection state needed here, just display
                                />
                                <Link
                                    href={`/rentals/vehicle/${vehicle.id}`}
                                    className="mt-4 w-full rounded-xl bg-white border-2 border-slate-200 py-3 text-center text-sm font-bold text-slate-700 transition hover:border-rose-500 hover:text-rose-600 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-200 dark:hover:border-rose-500"
                                >
                                    View Details & Photos
                                </Link>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20">
                        <p className="text-xl text-slate-500">No vehicles found in this category.</p>
                        <Link href="/rentals" className="text-rose-600 hover:underline mt-4 inline-block">
                            Browse all vehicles
                        </Link>
                    </div>
                )}
            </div>
        </main>
    );
}
