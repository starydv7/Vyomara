'use client';

import Link from 'next/link';
import BookingForm from '@/components/BookingForm';

export default function RentalsPage() {
    return (
        <main className="min-h-screen bg-white dark:bg-slate-950">
            {/* Hero Section */}
            <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1600&h=900&fit=crop"
                        alt="Luxury Wedding Car"
                        className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/50 to-slate-900/90"></div>
                </div>

                <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="text-white space-y-6">
                            <div className="inline-flex items-center gap-2 rounded-full border border-rose-400/30 bg-rose-500/20 px-4 py-2 text-sm font-semibold text-rose-200 backdrop-blur-sm">
                                <span className="animate-pulse">✨</span>
                                <span>Premium Wedding Fleet</span>
                            </div>

                            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
                                Arrive in <br />
                                <span className="bg-gradient-to-r from-rose-400 to-orange-300 bg-clip-text text-transparent">
                                    Style & Comfort
                                </span>
                            </h1>

                            <p className="text-lg text-slate-200 max-w-xl leading-relaxed">
                                From vintage classics for the couple to luxury coaches for your guests.
                                We manage the entire logistics so you can focus on the celebration.
                            </p>

                            <div className="flex flex-wrap gap-4 pt-4">
                                <div className="flex items-center gap-2 text-sm font-medium text-slate-300">
                                    <svg className="w-5 h-5 text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    Verified Drivers
                                </div>
                                <div className="flex items-center gap-2 text-sm font-medium text-slate-300">
                                    <svg className="w-5 h-5 text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    On-time Guarantee
                                </div>
                                <div className="flex items-center gap-2 text-sm font-medium text-slate-300">
                                    <svg className="w-5 h-5 text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    Decorated Cars
                                </div>
                            </div>
                        </div>

                        <div className="lg:pl-12">
                            <BookingForm />
                        </div>
                    </div>
                </div>
            </section>

            {/* Fleet Preview Section */}
            <section className="py-24 bg-slate-50 dark:bg-slate-900">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                            A Ride for Every Need
                        </h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                            Whether it's the grand entry of the groom or transporting 500 guests, we have the perfect fleet for you.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Card 1: Baraat Special */}
                        <Link href="/rentals/category/baraat-special" className="group relative overflow-hidden rounded-3xl bg-white dark:bg-slate-800 shadow-xl transition-all hover:-translate-y-1 hover:shadow-2xl cursor-pointer">
                            <div className="aspect-[4/3] overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?w=800&q=80"
                                    alt="Baraat Special SUVs"
                                    className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                                />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent"></div>
                            <div className="absolute bottom-0 p-8 text-white">
                                <h3 className="text-2xl font-bold mb-2">Baraat Special</h3>
                                <p className="text-slate-200 mb-4">Scorpio, Fortuner & More</p>
                                <span className="inline-flex items-center text-sm font-semibold text-rose-400 group-hover:text-rose-300">
                                    View Options &rarr;
                                </span>
                            </div>
                        </Link>

                        {/* Card 2: Family & Staff */}
                        <Link href="/rentals/category/family-staff" className="group relative overflow-hidden rounded-3xl bg-white dark:bg-slate-800 shadow-xl transition-all hover:-translate-y-1 hover:shadow-2xl cursor-pointer">
                            <div className="aspect-[4/3] overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1609520505218-7421da356d80?w=800&q=80"
                                    alt="Family & Staff Cars"
                                    className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                                />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent"></div>
                            <div className="absolute bottom-0 p-8 text-white">
                                <h3 className="text-2xl font-bold mb-2">Family & Staff</h3>
                                <p className="text-slate-200 mb-4">Budget Friendly Options</p>
                                <span className="inline-flex items-center text-sm font-semibold text-rose-400 group-hover:text-rose-300">
                                    View Options &rarr;
                                </span>
                            </div>
                        </Link>

                        {/* Card 3: Luxury Cars */}
                        <Link href="/rentals/category/luxury" className="group relative overflow-hidden rounded-3xl bg-white dark:bg-slate-800 shadow-xl transition-all hover:-translate-y-1 hover:shadow-2xl cursor-pointer">
                            <div className="aspect-[4/3] overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80"
                                    alt="Luxury Cars"
                                    className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                                />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent"></div>
                            <div className="absolute bottom-0 p-8 text-white">
                                <h3 className="text-2xl font-bold mb-2">Luxury Cars</h3>
                                <p className="text-slate-200 mb-4">For the Bride & Groom</p>
                                <span className="inline-flex items-center text-sm font-semibold text-rose-400 group-hover:text-rose-300">
                                    View Options &rarr;
                                </span>
                            </div>
                        </Link>

                        {/* Card 2 */}
                        <Link href="/rentals/category/baraati-bus" className="group relative overflow-hidden rounded-3xl bg-white dark:bg-slate-800 shadow-xl transition-all hover:-translate-y-1 hover:shadow-2xl cursor-pointer">
                            <div className="aspect-[4/3] overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&q=80"
                                    alt="Luxury Buses"
                                    className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                                />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent"></div>
                            <div className="absolute bottom-0 p-8 text-white">
                                <h3 className="text-2xl font-bold mb-2">Luxury Buses</h3>
                                <p className="text-slate-200 mb-4">For Guests & Relatives</p>
                                <span className="inline-flex items-center text-sm font-semibold text-rose-400 group-hover:text-rose-300">
                                    View Options &rarr;
                                </span>
                            </div>
                        </Link>

                        {/* Card 3 */}
                        <Link href="/rentals/category/vintage" className="group relative overflow-hidden rounded-3xl bg-white dark:bg-slate-800 shadow-xl transition-all hover:-translate-y-1 hover:shadow-2xl cursor-pointer">
                            <div className="aspect-[4/3] overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1532934411374-b8a9d2374bce?w=800&q=80"
                                    alt="Vintage Cars"
                                    className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                                />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent"></div>
                            <div className="absolute bottom-0 p-8 text-white">
                                <h3 className="text-2xl font-bold mb-2">Vintage Classics</h3>
                                <p className="text-slate-200 mb-4">For a Royal Entry</p>
                                <span className="inline-flex items-center text-sm font-semibold text-rose-400 group-hover:text-rose-300">
                                    View Options &rarr;
                                </span>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
