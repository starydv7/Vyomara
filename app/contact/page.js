export default function ContactPage() {
    return (
        <main className="bg-white dark:bg-slate-950 py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-slate-900 dark:text-white">Get in Touch</h1>
                    <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
                        Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                    </p>
                </div>

                <div className="grid gap-12 lg:grid-cols-2">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Office</h3>
                            <p className="mt-2 text-slate-600 dark:text-slate-300">
                                123 Wedding Avenue, Jubilee Hills<br />
                                Hyderabad, Telangana 500033<br />
                                India
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Contact</h3>
                            <p className="mt-2 text-slate-600 dark:text-slate-300">
                                Email: hello@shaadisathi.com<br />
                                Phone: +91 98765 43210
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Hours</h3>
                            <p className="mt-2 text-slate-600 dark:text-slate-300">
                                Monday - Friday: 9am - 6pm<br />
                                Saturday: 10am - 4pm<br />
                                Sunday: Closed
                            </p>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="rounded-2xl bg-slate-50 p-8 dark:bg-slate-900">
                        <form className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="mt-1 block w-full rounded-lg border border-slate-300 bg-white px-4 py-2 text-slate-900 focus:border-rose-500 focus:ring-rose-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="mt-1 block w-full rounded-lg border border-slate-300 bg-white px-4 py-2 text-slate-900 focus:border-rose-500 focus:ring-rose-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                                    placeholder="you@example.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    className="mt-1 block w-full rounded-lg border border-slate-300 bg-white px-4 py-2 text-slate-900 focus:border-rose-500 focus:ring-rose-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                                    placeholder="How can we help you?"
                                />
                            </div>
                            <button
                                type="button"
                                className="w-full rounded-xl bg-rose-600 px-6 py-3 text-base font-semibold text-white shadow-lg transition hover:bg-rose-500"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
}
