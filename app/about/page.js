export default function AboutPage() {
    return (
        <main className="bg-white dark:bg-slate-950">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-slate-50 py-20 dark:bg-slate-900">
                <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-bold text-slate-900 dark:text-white sm:text-5xl">
                        We Make Dream Weddings Come True
                    </h1>
                    <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600 dark:text-slate-300">
                        ShaadiSathi is India's most loved wedding planning platform. We connect couples with the best vendors to create unforgettable memories.
                    </p>
                </div>
            </section>

            {/* Our Story */}
            <section className="py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Our Story</h2>
                            <p className="mt-6 text-lg leading-relaxed text-slate-600 dark:text-slate-300">
                                Founded in 2024, ShaadiSathi began with a simple mission: to simplify the chaotic process of wedding planning in India. We realized that while Indian weddings are grand and beautiful, planning them is often stressful and disorganized.
                            </p>
                            <p className="mt-4 text-lg leading-relaxed text-slate-600 dark:text-slate-300">
                                We set out to build a platform that brings transparency, trust, and convenience to the industry. Today, we are proud to have helped over 65,000 couples plan their perfect day, connecting them with verified vendors who share our passion for excellence.
                            </p>
                        </div>
                        <div className="relative h-[400px] overflow-hidden rounded-2xl bg-slate-200">
                            <img
                                src="https://images.unsplash.com/photo-1519225468359-2996bc01c32c?w=800&q=80"
                                alt="Wedding Team"
                                className="h-full w-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="bg-rose-50 py-20 dark:bg-rose-950/20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
                        <div>
                            <div className="text-4xl font-bold text-rose-600 dark:text-rose-400">65k+</div>
                            <div className="mt-2 text-sm font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400">Couples</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-rose-600 dark:text-rose-400">9.8k+</div>
                            <div className="mt-2 text-sm font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400">Vendors</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-rose-600 dark:text-rose-400">420+</div>
                            <div className="mt-2 text-sm font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400">Cities</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-rose-600 dark:text-rose-400">4.8</div>
                            <div className="mt-2 text-sm font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400">Rating</div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
