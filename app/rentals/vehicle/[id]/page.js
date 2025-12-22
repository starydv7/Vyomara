'use client';

import { use } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { vehicles } from '@/data/vehicles';
import AvailabilityCalendar from '@/components/AvailabilityCalendar';

export default function VehicleDetailPage({ params }) {
    const router = useRouter();
    const resolvedParams = use(params);
    const vehicle = vehicles.find(v => v.id === resolvedParams.id);

    if (!vehicle) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-slate-900">Vehicle Not Found</h1>
                    <Link href="/rentals" className="text-rose-600 hover:underline mt-4 block">
                        Return to Rentals
                    </Link>
                </div>
            </div>
        );
    }

    const handleBookNow = () => {
        // Redirect to booking page with vehicle pre-selected (via query param or similar mechanism)
        // For now, we'll just go to the booking page. In a real app, we'd pass the ID.
        router.push(`/rentals/booking?vehicleId=${vehicle.id}`);
    };

    return (
        <main className="min-h-screen bg-white dark:bg-slate-950 pb-20">
            {/* Hero Image / Gallery Preview */}
            <div className="relative h-[50vh] w-full overflow-hidden bg-slate-100">
                <img
                    src={vehicle.image}
                    alt={vehicle.name}
                    className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8 text-white">
                    <div className="max-w-7xl mx-auto w-full">
                        <span className="inline-block px-3 py-1 rounded-full bg-rose-500 text-xs font-bold mb-3">
                            {vehicle.category}
                        </span>
                        <h1 className="text-4xl md:text-5xl font-bold mb-2">{vehicle.name}</h1>
                        <p className="text-lg text-slate-200">{vehicle.tag}</p>
                    </div>
                </div>
            </div>

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
                <div className="grid lg:grid-cols-3 gap-8">

                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Description */}
                        <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-sm border border-slate-100 dark:border-slate-800">
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">About this Vehicle</h2>
                            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                                {vehicle.description}
                            </p>

                            <div className="mt-8">
                                <h3 className="text-lg font-semibold mb-4">Features & Amenities</h3>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    {vehicle.features.map((feature, idx) => (
                                        <div key={idx} className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                                            <div className="h-2 w-2 rounded-full bg-rose-500"></div>
                                            {feature}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Gallery Grid (Placeholder for 10 photos) */}
                        <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-sm border border-slate-100 dark:border-slate-800">
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Photo Gallery</h2>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                {/* Just repeating the main image for demo, in real app use vehicle.images */}
                                {[...Array(6)].map((_, i) => (
                                    <div key={i} className="aspect-square rounded-xl overflow-hidden bg-slate-100">
                                        <img
                                            src={vehicle.images[i % vehicle.images.length] || vehicle.image}
                                            alt={`Gallery ${i}`}
                                            className="h-full w-full object-cover hover:scale-110 transition duration-500"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Reviews */}
                        <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-sm border border-slate-100 dark:border-slate-800">
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Client Reviews</h2>
                            {vehicle.reviews.length > 0 ? (
                                <div className="space-y-6">
                                    {vehicle.reviews.map((review, idx) => (
                                        <div key={idx} className="border-b border-slate-100 dark:border-slate-800 last:border-0 pb-6 last:pb-0">
                                            <div className="flex items-center justify-between mb-2">
                                                <h4 className="font-bold text-slate-900 dark:text-white">{review.user}</h4>
                                                <div className="flex text-amber-400 text-sm">
                                                    {[...Array(5)].map((_, i) => (
                                                        <span key={i}>{i < review.rating ? '★' : '☆'}</span>
                                                    ))}
                                                </div>
                                            </div>
                                            <p className="text-slate-600 dark:text-slate-400 text-sm">{review.comment}</p>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <p className="text-slate-500 italic">No reviews yet for this vehicle.</p>
                            )}
                        </div>
                        {/* Availability Calendar */}
                        <AvailabilityCalendar />

                        {/* Stats & Interior */}
                        <div className="grid sm:grid-cols-2 gap-6">
                            <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-slate-800">
                                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Vehicle Stats</h3>
                                <div className="space-y-3">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-slate-500">Total Trips</span>
                                        <span className="font-semibold text-slate-900 dark:text-white">142</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-slate-500">Avg. Rating</span>
                                        <span className="font-semibold text-slate-900 dark:text-white">{vehicle.reviews.length > 0 ? '4.8/5.0' : 'New'}</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-slate-500">Maintenance</span>
                                        <span className="font-semibold text-green-600">Excellent</span>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-slate-800">
                                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Interior</h3>
                                <div className="space-y-3">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-slate-500">Upholstery</span>
                                        <span className="font-semibold text-slate-900 dark:text-white">Premium Leather</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-slate-500">Legroom</span>
                                        <span className="font-semibold text-slate-900 dark:text-white">Spacious</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-slate-500">Ambient Light</span>
                                        <span className="font-semibold text-slate-900 dark:text-white">Yes (RGB)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar Pricing */}
                    <div className="space-y-6">
                        <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700 sticky top-24">
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Pricing Details</h3>

                            <div className="space-y-4 mb-8">
                                <div className="flex justify-between items-center p-3 rounded-lg bg-slate-50 dark:bg-slate-800">
                                    <span className="text-slate-600 dark:text-slate-400">Price per Km</span>
                                    <span className="font-bold text-lg text-slate-900 dark:text-white">₹{vehicle.pricePerKm}</span>
                                </div>
                                <div className="flex justify-between items-center p-3 rounded-lg bg-slate-50 dark:bg-slate-800">
                                    <span className="text-slate-600 dark:text-slate-400">Full Day (8hr/80km)</span>
                                    <span className="font-bold text-lg text-slate-900 dark:text-white">₹{vehicle.fullDayRate}</span>
                                </div>
                                <div className="flex justify-between items-center p-3 rounded-lg bg-slate-50 dark:bg-slate-800">
                                    <span className="text-slate-600 dark:text-slate-400">Driver Allowance</span>
                                    <span className="font-bold text-lg text-slate-900 dark:text-white">₹{vehicle.driverAllowance}</span>
                                </div>
                            </div>

                            <button
                                onClick={handleBookNow}
                                className="w-full rounded-xl bg-gradient-to-r from-rose-500 to-orange-400 py-4 text-base font-bold text-white shadow-lg shadow-rose-200/50 transition hover:opacity-95 hover:shadow-xl dark:shadow-none"
                            >
                                Book This Vehicle
                            </button>

                            <p className="text-xs text-center text-slate-500 mt-4">
                                *Final price depends on total distance and duration.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </main>
    );
}
