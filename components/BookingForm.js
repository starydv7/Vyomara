'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function BookingForm({ className = '' }) {
    const router = useRouter();
    const [formData, setFormData] = useState({
        fromLocation: '',
        toLocation: '',
        date: '',
        distance: '',
        tripType: 'round-trip'
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Encode parameters for the booking page
        const params = new URLSearchParams(formData);
        router.push(`/rentals/booking?${params.toString()}`);
    };

    return (
        <form onSubmit={handleSubmit} className={`bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 ${className}`}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* From Location */}
                <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700 dark:text-slate-300">From Location</label>
                    <div className="relative">
                        <input
                            type="text"
                            required
                            placeholder="Pickup address"
                            className="w-full rounded-xl border-slate-200 bg-slate-50 px-4 py-3 pl-11 text-sm outline-none focus:border-rose-500 focus:ring-2 focus:ring-rose-200 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
                            value={formData.fromLocation}
                            onChange={(e) => setFormData({ ...formData, fromLocation: e.target.value })}
                        />
                        <svg className="absolute left-3 top-3.5 h-5 w-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                    </div>
                </div>

                {/* To Location */}
                <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700 dark:text-slate-300">To Location</label>
                    <div className="relative">
                        <input
                            type="text"
                            required
                            placeholder="Dropoff address"
                            className="w-full rounded-xl border-slate-200 bg-slate-50 px-4 py-3 pl-11 text-sm outline-none focus:border-rose-500 focus:ring-2 focus:ring-rose-200 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
                            value={formData.toLocation}
                            onChange={(e) => setFormData({ ...formData, toLocation: e.target.value })}
                        />
                        <svg className="absolute left-3 top-3.5 h-5 w-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                    </div>
                </div>

                {/* Date */}
                <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Date</label>
                    <input
                        type="date"
                        required
                        className="w-full rounded-xl border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-rose-500 focus:ring-2 focus:ring-rose-200 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    />
                </div>

                {/* Distance (Manual Input for now) */}
                <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Est. Distance (km)</label>
                    <div className="relative">
                        <input
                            type="number"
                            required
                            min="1"
                            placeholder="e.g. 50"
                            className="w-full rounded-xl border-slate-200 bg-slate-50 px-4 py-3 pl-11 text-sm outline-none focus:border-rose-500 focus:ring-2 focus:ring-rose-200 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
                            value={formData.distance}
                            onChange={(e) => setFormData({ ...formData, distance: e.target.value })}
                        />
                        <svg className="absolute left-3 top-3.5 h-5 w-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                        </svg>
                    </div>
                </div>
            </div>

            {/* Trip Type Selection */}
            <div className="mt-6 flex gap-4">
                <label className="flex items-center gap-2 cursor-pointer">
                    <input
                        type="radio"
                        name="tripType"
                        value="one-way"
                        checked={formData.tripType === 'one-way'}
                        onChange={(e) => setFormData({ ...formData, tripType: e.target.value })}
                        className="text-rose-500 focus:ring-rose-500"
                    />
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">One Way</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                    <input
                        type="radio"
                        name="tripType"
                        value="round-trip"
                        checked={formData.tripType === 'round-trip'}
                        onChange={(e) => setFormData({ ...formData, tripType: e.target.value })}
                        className="text-rose-500 focus:ring-rose-500"
                    />
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Round Trip</span>
                </label>
            </div>

            <button
                type="submit"
                className="mt-8 w-full rounded-xl bg-gradient-to-r from-rose-500 to-orange-400 py-4 text-sm font-bold text-white shadow-lg shadow-rose-200/50 transition hover:opacity-95 hover:shadow-xl dark:shadow-none"
            >
                Find Vehicles
            </button>
        </form>
    );
}
