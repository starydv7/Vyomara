import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-slate-900 text-slate-300">
            <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
                    {/* Brand Section */}
                    <div className="space-y-4">
                        <Link href="/" className="inline-flex items-center gap-2">
                            <div className="rounded-full bg-gradient-to-r from-rose-500 to-orange-400 p-1.5 text-white">
                                <svg
                                    className="h-5 w-5"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M12 20s8-4.5 8-10a8 8 0 1 0-16 0c0 5.5 8 10 8 10z" />
                                    <circle cx="12" cy="10" r="3" />
                                </svg>
                            </div>
                            <span className="text-xl font-bold text-white">ShaadiSathi</span>
                        </Link>
                        <p className="text-sm leading-relaxed text-slate-400">
                            India's most trusted wedding planning platform. We help you find the perfect vendors, manage your budget, and create unforgettable memories.
                        </p>
                        <div className="flex gap-4">
                            <SocialLink href="#" icon={<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />} />
                            <SocialLink href="#" icon={<><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></>} />
                            <SocialLink href="#" icon={<path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />} />
                            <SocialLink href="#" icon={<><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></>} />
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">Services</h3>
                        <ul className="space-y-2 text-sm">
                            <FooterLink href="/vendors?category=Venue">Venues</FooterLink>
                            <FooterLink href="/vendors?category=Photography">Photographers</FooterLink>
                            <FooterLink href="/vendors?category=Makeup Artist">Makeup Artists</FooterLink>
                            <FooterLink href="/vendors?category=Decoration">Decorators</FooterLink>
                            <FooterLink href="/rentals">Car Rentals</FooterLink>
                            <FooterLink href="/vendors">All Categories</FooterLink>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">Company</h3>
                        <ul className="space-y-2 text-sm">
                            <FooterLink href="/about">About Us</FooterLink>
                            <FooterLink href="/contact">Contact Us</FooterLink>
                            <FooterLink href="/careers">Careers</FooterLink>
                            <FooterLink href="/terms">Terms of Service</FooterLink>
                            <FooterLink href="/privacy">Privacy Policy</FooterLink>
                            <FooterLink href="/sitemap">Sitemap</FooterLink>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">Stay Updated</h3>
                        <p className="mb-4 text-sm text-slate-400">
                            Subscribe to our newsletter for wedding tips, trends, and exclusive offers.
                        </p>
                        <form className="flex flex-col gap-2">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-2.5 text-sm text-white placeholder-slate-400 focus:border-rose-500 focus:outline-none focus:ring-1 focus:ring-rose-500"
                            />
                            <button
                                type="button"
                                className="w-full rounded-lg bg-rose-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-rose-500"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                <div className="mt-12 border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
                    <p>&copy; {new Date().getFullYear()} ShaadiSathi. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

function SocialLink({ href, icon }) {
    return (
        <a
            href={href}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-800 text-slate-400 transition hover:bg-rose-600 hover:text-white"
        >
            <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                {icon}
            </svg>
        </a>
    );
}

function FooterLink({ href, children }) {
    return (
        <li>
            <Link href={href} className="transition hover:text-rose-500">
                {children}
            </Link>
        </li>
    );
}
