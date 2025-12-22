'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function PaymentPage({ params }) {
    const router = useRouter();
    const { bookingId } = params;
    const [booking, setBooking] = useState(null);
    const [loading, setLoading] = useState(true);
    const [processing, setProcessing] = useState(false);

    useEffect(() => {
        // Fetch booking details to show summary
        // For now, we'll just mock the display since we don't have a specific GET endpoint for single booking yet
        // In a real app, we'd fetch /api/bookings/${bookingId}
        setLoading(false);
    }, [bookingId]);

    const handlePayment = async () => {
        setProcessing(true);
        try {
            const res = await fetch(`/api/bookings/${bookingId}/pay`, {
                method: 'POST',
            });

            if (res.ok) {
                // Redirect to success page
                router.push(`/booking-success?id=${bookingId}&type=booking`);
            } else {
                alert('Payment failed. Please try again.');
            }
        } catch (error) {
            console.error('Payment error:', error);
            alert('An error occurred.');
        } finally {
            setProcessing(false);
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
            <div className="max-w-md w-full space-y-8 bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-800">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Complete Payment</h2>
                    <p className="mt-2 text-slate-500 dark:text-slate-400">Secure Checkout (Demo Mode)</p>
                </div>

                <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-6 space-y-4">
                    <div className="flex justify-between text-sm">
                        <span className="text-slate-500 dark:text-slate-400">Booking ID</span>
                        <span className="font-mono font-medium text-slate-900 dark:text-white">{bookingId}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                        <span className="text-slate-500 dark:text-slate-400">Amount Due</span>
                        <span className="font-bold text-rose-600 text-lg">₹5,500.00</span>
                    </div>
                    <p className="text-xs text-slate-400 text-center pt-2">
                        *This is a demo payment. No actual money will be deducted.
                    </p>
                </div>

                <div className="space-y-4">
                    <button
                        onClick={handlePayment}
                        disabled={processing}
                        className="w-full flex justify-center py-4 px-4 border border-transparent rounded-xl shadow-sm text-sm font-bold text-white bg-gradient-to-r from-rose-500 to-orange-400 hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                    >
                        {processing ? (
                            <span className="flex items-center gap-2">
                                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Processing...
                            </span>
                        ) : (
                            'Pay Now (Demo)'
                        )}
                    </button>

                    <button
                        onClick={() => router.back()}
                        className="w-full py-3 text-sm font-medium text-slate-500 hover:text-slate-900 dark:hover:text-white transition"
                    >
                        Cancel
                    </button>
                </div>

                <div className="flex justify-center gap-4 opacity-50 grayscale">
                    {/* Mock Payment Icons */}
                    <div className="h-8 w-12 bg-slate-200 rounded"></div>
                    <div className="h-8 w-12 bg-slate-200 rounded"></div>
                    <div className="h-8 w-12 bg-slate-200 rounded"></div>
                </div>
            </div>
        </div>
    );
}
