'use client';

import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ProfilePage() {
    const { user: clerkUser, isLoaded } = useUser();
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchProfile() {
            if (!clerkUser) return;
            try {
                const res = await fetch('/api/user');
                if (res.ok) {
                    const data = await res.json();
                    setProfile(data);
                }
            } catch (error) {
                console.error("Failed to fetch profile:", error);
            } finally {
                setLoading(false);
            }
        }

        if (isLoaded && clerkUser) {
            fetchProfile();
        } else if (isLoaded && !clerkUser) {
            setLoading(false);
        }
    }, [isLoaded, clerkUser]);

    if (!isLoaded || loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-rose-500"></div>
            </div>
        );
    }

    if (!clerkUser) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 dark:bg-slate-950 gap-4">
                <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Please Sign In</h1>
                <Link href="/sign-in" className="px-6 py-2 bg-rose-500 text-white rounded-full font-semibold hover:bg-rose-600 transition">
                    Go to Login
                </Link>
            </div>
        );
    }

    // Use profile data from DB if available, otherwise fallback to Clerk data
    const bookings = profile?.bookings || [];
    const totalSpent = bookings.reduce((sum, b) => sum + (b.totalAmount || 0), 0);

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto space-y-8">

                {/* Header Section */}
                <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-sm border border-slate-100 dark:border-slate-800 flex flex-col md:flex-row items-center gap-6">
                    <div className="relative h-24 w-24 rounded-full overflow-hidden border-4 border-rose-100 dark:border-rose-900/30">
                        <Image
                            src={clerkUser.imageUrl}
                            alt={clerkUser.fullName || "User"}
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="text-center md:text-left flex-1">
                        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">{clerkUser.fullName}</h1>
                        <p className="text-slate-500 dark:text-slate-400">{clerkUser.primaryEmailAddress?.emailAddress}</p>
                        <div className="mt-3 flex flex-wrap justify-center md:justify-start gap-3">
                            <span className="px-3 py-1 rounded-full bg-rose-50 text-rose-600 text-sm font-medium border border-rose-100 dark:bg-rose-900/20 dark:text-rose-300 dark:border-rose-800">
                                Verified Customer
                            </span>
                            <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-sm font-medium border border-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700">
                                Member since {new Date(clerkUser.createdAt).getFullYear()}
                            </span>
                        </div>
                    </div>
                    <div className="flex gap-3">
                        <Link href="/profile/edit" className="px-4 py-2 rounded-xl border border-slate-200 text-slate-700 font-medium hover:bg-slate-50 transition dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800">
                            Edit Profile
                        </Link>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-gradient-to-br from-rose-500 to-orange-400 rounded-2xl p-6 text-white shadow-lg shadow-rose-200/50 dark:shadow-none">
                        <p className="text-rose-100 font-medium mb-1">Total Bookings</p>
                        <h3 className="text-4xl font-bold">{bookings.length}</h3>
                        <p className="text-sm text-rose-100 mt-2 opacity-80">Lifetime trips with us</p>
                    </div>
                    <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-slate-800">
                        <p className="text-slate-500 dark:text-slate-400 font-medium mb-1">Total Spent</p>
                        <h3 className="text-4xl font-bold text-slate-900 dark:text-white">₹{totalSpent.toLocaleString()}</h3>
                        <p className="text-sm text-green-500 mt-2 font-medium">Thank you for trusting us!</p>
                    </div>
                    <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-slate-800">
                        <p className="text-slate-500 dark:text-slate-400 font-medium mb-1">Upcoming Trips</p>
                        <h3 className="text-4xl font-bold text-slate-900 dark:text-white">
                            {bookings.filter(b => b.status === 'CONFIRMED' && new Date(b.startDate) > new Date()).length}
                        </h3>
                        <p className="text-sm text-rose-500 mt-2 font-medium">Ready for your next event?</p>
                    </div>
                </div>

                {/* Bookings List */}
                <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Booking History</h2>

                    {bookings.length === 0 ? (
                        <div className="text-center py-12 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800">
                            <p className="text-slate-500 dark:text-slate-400 mb-4">No bookings found yet.</p>
                            <Link href="/rentals" className="px-6 py-2 bg-rose-500 text-white rounded-full font-semibold hover:bg-rose-600 transition">
                                Browse Vehicles
                            </Link>
                        </div>
                    ) : (
                        <div className="grid gap-6">
                            {bookings.map((booking) => (
                                <div key={booking.id} className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-slate-800 flex flex-col lg:flex-row gap-6 transition hover:shadow-md">
                                    {/* Image */}
                                    <div className="relative h-48 lg:h-auto lg:w-64 rounded-xl overflow-hidden shrink-0 bg-slate-200">
                                        {booking.vehicle?.image && (
                                            <Image
                                                src={booking.vehicle.image}
                                                alt={booking.vehicle.name}
                                                fill
                                                className="object-cover"
                                            />
                                        )}
                                        <div className="absolute top-3 left-3">
                                            <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${booking.status === 'CONFIRMED' ? 'bg-green-500 text-white' :
                                                booking.status === 'PENDING' ? 'bg-amber-500 text-white' :
                                                    'bg-slate-500 text-white'
                                                }`}>
                                                {booking.status}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Details */}
                                    <div className="flex-1 flex flex-col justify-between">
                                        <div>
                                            <div className="flex justify-between items-start mb-2">
                                                <div>
                                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                                                        {booking.vehicle?.name || booking.vendor?.name || 'Booking'}
                                                    </h3>
                                                    <p className="text-slate-500 dark:text-slate-400 text-sm">
                                                        {booking.type} • {new Date(booking.startDate).toLocaleDateString()}
                                                    </p>
                                                </div>
                                                <p className="text-lg font-bold text-rose-600">₹{booking.totalAmount.toLocaleString()}</p>
                                            </div>

                                            <div className="grid sm:grid-cols-2 gap-4 mt-4">
                                                <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300">
                                                    <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500">
                                                        📅
                                                    </div>
                                                    <div>
                                                        <p className="text-xs text-slate-400">Dates</p>
                                                        <p className="font-medium">
                                                            {new Date(booking.startDate).toLocaleDateString()} - {new Date(booking.endDate).toLocaleDateString()}
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300">
                                                    <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500">
                                                        💳
                                                    </div>
                                                    <div>
                                                        <p className="text-xs text-slate-400">Payment Status</p>
                                                        <p className="font-medium text-amber-600">
                                                            Pending Payment
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mt-6 flex gap-3 pt-6 border-t border-slate-100 dark:border-slate-800">
                                            <button className="flex-1 py-2.5 rounded-xl bg-slate-900 text-white font-medium hover:bg-slate-800 transition dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100">
                                                View Details
                                            </button>
                                            {booking.status === 'CONFIRMED' && (
                                                <button className="flex-1 py-2.5 rounded-xl border border-rose-200 text-rose-600 font-medium hover:bg-rose-50 transition dark:border-rose-900/30 dark:text-rose-400 dark:hover:bg-rose-900/20">
                                                    Download Invoice
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
