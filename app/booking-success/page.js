'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState, Suspense } from 'react';

function BookingSuccessContent() {
    const searchParams = useSearchParams();
    const [bookingId, setBookingId] = useState('');

    useEffect(() => {
        // Generate a random booking ID if one isn't provided
        const id = searchParams.get('id') || `BK-${Math.floor(Math.random() * 10000)}`;
        setBookingId(id);
    }, [searchParams]);

    return (
        <main className="flex min-h-screen items-center justify-center bg-slate-50 px-4 py-12 dark:bg-slate-950 sm:px-6 lg:px-8">
            <div className="w-full max-w-md text-center">
                <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
                    <svg
                        className="h-12 w-12 text-green-600 dark:text-green-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                </div>

                <h1 className="mb-2 text-3xl font-bold text-slate-900 dark:text-white">Booking Confirmed!</h1>
                <p className="mb-8 text-slate-600 dark:text-slate-400">
                    Thank you for your booking. We have sent a confirmation email to your registered address.
                </p>

                <div className="mb-8 rounded-2xl bg-white p-6 shadow-sm dark:bg-slate-900">
                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Booking Reference</p>
                    <p className="mt-1 text-2xl font-bold text-slate-900 dark:text-white">{bookingId}</p>
                </div>

                <div className="flex flex-col gap-4 sm:flex-row">
                    <Link
                        href="/profile"
                        className="flex-1 rounded-xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100"
                    >
                        View My Bookings
                    </Link>
                    <Link
                        href="/"
                        className="flex-1 rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800"
                    >
                        Back to Home
                    </Link>
                </div>
            </div>
        </main>
    );
}

export default function BookingSuccessPage() {
    return (
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
            <BookingSuccessContent />
        </Suspense>
    );
}
