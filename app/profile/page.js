'use client';

import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

// Mock Data for Bookings
const mockBookings = [
    {
        id: "BK-2024-001",
        vehicle: "Mahindra Scorpio N",
        image: "https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?q=80&w=2070&auto=format&fit=crop",
        date: "12 Dec 2024",
        status: "Confirmed",
        totalAmount: 5500,
        paidAmount: 1100,
        paymentStatus: "Advance Paid",
        type: "Wedding (Baraat)",
        from: "Patna",
        to: "Siwan"
    },
    {
        id: "BK-2024-002",
        vehicle: "Toyota Innova Crysta",
        image: "https://images.unsplash.com/photo-1609521263047-f8f205293f24?q=80&w=2070&auto=format&fit=crop",
        date: "15 Jan 2025",
        status: "Pending",
        totalAmount: 4500,
        paidAmount: 0,
        paymentStatus: "Pending",
        type: "Family Trip",
        from: "Siwan",
        to: "Gopalganj"
    },
    {
        id: "BK-2023-089",
        vehicle: "Audi A6",
        image: "https://images.unsplash.com/photo-1523983388277-336a66bf9bcd?q=80&w=2070&auto=format&fit=crop",
        date: "10 Nov 2023",
        status: "Completed",
        totalAmount: 15000,
        paidAmount: 15000,
        paymentStatus: "Fully Paid",
        type: "Luxury Rental",
        from: "Patna Airport",
        to: "Hotel Maurya"
    }
];

export default function ProfilePage() {
    const { user, isLoaded } = useUser();

    if (!isLoaded) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-rose-500"></div>
            </div>
        );
    }

    if (!user) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 dark:bg-slate-950 gap-4">
                <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Please Sign In</h1>
                <Link href="/sign-in" className="px-6 py-2 bg-rose-500 text-white rounded-full font-semibold hover:bg-rose-600 transition">
                    Go to Login
                </Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto space-y-8">

                {/* Header Section */}
                <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-sm border border-slate-100 dark:border-slate-800 flex flex-col md:flex-row items-center gap-6">
                    <div className="relative h-24 w-24 rounded-full overflow-hidden border-4 border-rose-100 dark:border-rose-900/30">
                        <Image
                            src={user.imageUrl}
                            alt={user.fullName || "User"}
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="text-center md:text-left flex-1">
                        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">{user.fullName}</h1>
                        <p className="text-slate-500 dark:text-slate-400">{user.primaryEmailAddress?.emailAddress}</p>
                        <div className="mt-3 flex flex-wrap justify-center md:justify-start gap-3">
                            <span className="px-3 py-1 rounded-full bg-rose-50 text-rose-600 text-sm font-medium border border-rose-100 dark:bg-rose-900/20 dark:text-rose-300 dark:border-rose-800">
                                Verified Customer
                            </span>
                            <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-sm font-medium border border-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700">
                                Member since {new Date(user.createdAt).getFullYear()}
                            </span>
                        </div>
                    </div>
                    <div className="flex gap-3">
                        <button className="px-4 py-2 rounded-xl border border-slate-200 text-slate-700 font-medium hover:bg-slate-50 transition dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800">
                            Edit Profile
                        </button>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-gradient-to-br from-rose-500 to-orange-400 rounded-2xl p-6 text-white shadow-lg shadow-rose-200/50 dark:shadow-none">
                        <p className="text-rose-100 font-medium mb-1">Total Bookings</p>
                        <h3 className="text-4xl font-bold">12</h3>
                        <p className="text-sm text-rose-100 mt-2 opacity-80">Lifetime trips with us</p>
                    </div>
                    <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-slate-800">
                        <p className="text-slate-500 dark:text-slate-400 font-medium mb-1">Total Spent</p>
                        <h3 className="text-4xl font-bold text-slate-900 dark:text-white">₹45k+</h3>
                        <p className="text-sm text-green-500 mt-2 font-medium">Saved ₹5,000 with offers</p>
                    </div>
                    <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-slate-800">
                        <p className="text-slate-500 dark:text-slate-400 font-medium mb-1">Upcoming Trips</p>
                        <h3 className="text-4xl font-bold text-slate-900 dark:text-white">2</h3>
                        <p className="text-sm text-rose-500 mt-2 font-medium">Next trip in 5 days</p>
                    </div>
                </div>

                {/* Bookings List */}
                <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Booking History</h2>

                    <div className="grid gap-6">
                        {mockBookings.map((booking) => (
                            <div key={booking.id} className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-slate-800 flex flex-col lg:flex-row gap-6 transition hover:shadow-md">
                                {/* Image */}
                                <div className="relative h-48 lg:h-auto lg:w-64 rounded-xl overflow-hidden shrink-0">
                                    <Image
                                        src={booking.image}
                                        alt={booking.vehicle}
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute top-3 left-3">
                                        <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${booking.status === 'Confirmed' ? 'bg-green-500 text-white' :
                                                booking.status === 'Pending' ? 'bg-amber-500 text-white' :
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
                                                <h3 className="text-xl font-bold text-slate-900 dark:text-white">{booking.vehicle}</h3>
                                                <p className="text-slate-500 dark:text-slate-400 text-sm">{booking.type} • {booking.date}</p>
                                            </div>
                                            <p className="text-lg font-bold text-rose-600">₹{booking.totalAmount.toLocaleString()}</p>
                                        </div>

                                        <div className="grid sm:grid-cols-2 gap-4 mt-4">
                                            <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300">
                                                <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500">
                                                    📍
                                                </div>
                                                <div>
                                                    <p className="text-xs text-slate-400">Route</p>
                                                    <p className="font-medium">{booking.from} ➝ {booking.to}</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300">
                                                <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500">
                                                    💳
                                                </div>
                                                <div>
                                                    <p className="text-xs text-slate-400">Payment Status</p>
                                                    <p className={`font-medium ${booking.paymentStatus === 'Fully Paid' ? 'text-green-600' :
                                                            booking.paymentStatus === 'Advance Paid' ? 'text-blue-600' :
                                                                'text-amber-600'
                                                        }`}>
                                                        {booking.paymentStatus}
                                                        {booking.paymentStatus !== 'Fully Paid' && booking.paymentStatus !== 'Pending' &&
                                                            <span className="text-slate-400 font-normal"> (₹{booking.paidAmount} paid)</span>
                                                        }
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-6 flex gap-3 pt-6 border-t border-slate-100 dark:border-slate-800">
                                        <button className="flex-1 py-2.5 rounded-xl bg-slate-900 text-white font-medium hover:bg-slate-800 transition dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100">
                                            View Details
                                        </button>
                                        {booking.status === 'Confirmed' && (
                                            <button className="flex-1 py-2.5 rounded-xl border border-rose-200 text-rose-600 font-medium hover:bg-rose-50 transition dark:border-rose-900/30 dark:text-rose-400 dark:hover:bg-rose-900/20">
                                                Download Invoice
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
