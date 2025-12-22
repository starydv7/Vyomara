'use client';

import { use } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { vehicles } from '@/data/vehicles';
import AvailabilityCalendar from '@/components/AvailabilityCalendar';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useParams, notFound } from 'next/navigation';

export default function VehicleDetailPage({ params }) {
    const router = useRouter();
    // Handle both direct params prop (Next.js 13/14 server component style passed to client) 
    // and useParams hook (client component style)
    const resolvedParams = params ? use(params) : useParams();
    const id = resolvedParams?.id;

    const [vehicle, setVehicle] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchVehicle() {
            if (!id) return;
            try {
                const res = await fetch(`/api/vehicles/${id}`);
                if (!res.ok) {
                    if (res.status === 404) notFound();
                    throw new Error('Failed to fetch');
                }
                const data = await res.json();
                setVehicle(data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        }
        fetchVehicle();
    }, [id]);

    const handleBookNow = () => {
        if (vehicle) {
            router.push(`/rentals/booking?vehicleId=${vehicle.id}`);
        }
    };

    if (loading) {
        return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
    }

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
                        <p className="text-lg text-slate-200">{vehicle.tag || 'Luxury Rental'}</p>
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

                        {/* Vehicle Stats */}
                        <div className="grid sm:grid-cols-3 gap-4">
                            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 text-center">
                                <p className="text-3xl font-bold text-slate-900 dark:text-white">{vehicle.reviewsCount || 0}</p>
                                <p className="text-sm text-slate-500">Total Trips</p>
                            </div>
                            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 text-center">
                                <p className="text-3xl font-bold text-slate-900 dark:text-white">{vehicle.rating || 0}</p>
                                <p className="text-sm text-slate-500">Avg. Rating</p>
                            </div>
                            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 text-center">
                                <p className="text-3xl font-bold text-slate-900 dark:text-white">Excellent</p>
                                <p className="text-sm text-slate-500">Maintenance</p>
                            </div>
                        </div>

                        {/* Availability Calendar */}
                        <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-sm border border-slate-100 dark:border-slate-800">
                            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Availability</h2>
                            <AvailabilityCalendar vehicleId={vehicle.id} />
                        </div>

                        {/* Interior Details (Mock) */}
                        <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-sm border border-slate-100 dark:border-slate-800">
                            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Interior & Comfort</h2>
                            <div className="grid sm:grid-cols-2 gap-6">
                                <div>
                                    <p className="text-sm text-slate-500 mb-1">Upholstery</p>
                                    <p className="font-medium">Premium Leather (Tan)</p>
                                </div>
                                <div>
                                    <p className="text-sm text-slate-500 mb-1">Legroom</p>
                                    <p className="font-medium">Extended (Business Class)</p>
                                </div>
                                <div>
                                    <p className="text-sm text-slate-500 mb-1">Climate Control</p>
                                    <p className="font-medium">4-Zone Automatic</p>
                                </div>
                                <div>
                                    <p className="text-sm text-slate-500 mb-1">Ambient Lighting</p>
                                    <p className="font-medium">64 Colors</p>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Right Column: Booking Card */}
                    <div className="space-y-6">
                        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-lg border border-slate-200 dark:border-slate-700 sticky top-6">
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Booking Summary</h3>

                            <div className="space-y-4 mb-6">
                                <div className="flex justify-between text-sm">
                                    <span className="text-slate-500">Full Day Rate (8hrs)</span>
                                    <span className="font-medium text-slate-900 dark:text-white">₹{vehicle.fullDayRate}</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-slate-500">Driver Allowance</span>
                                    <span className="font-medium text-slate-900 dark:text-white">₹{vehicle.driverAllowance}</span>
                                </div>
                                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center">
                                    <span className="font-bold text-slate-900 dark:text-white">Total (Est.)</span>
                                    <span className="text-xl font-bold text-rose-600">₹{vehicle.fullDayRate + vehicle.driverAllowance}</span>
                                </div>
                            </div>

                            <button
                                onClick={handleBookNow}
                                className="w-full py-4 rounded-xl bg-gradient-to-r from-rose-500 to-orange-400 text-white font-bold shadow-lg shadow-rose-200/50 hover:opacity-95 transition dark:shadow-none"
                            >
                                Book This Vehicle
                            </button>

                            <p className="text-xs text-center text-slate-500 mt-4">
                                Free cancellation up to 24 hours before trip
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
