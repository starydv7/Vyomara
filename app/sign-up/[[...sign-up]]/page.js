import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-rose-100 via-orange-50 to-rose-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 p-4">
            <div className="w-full max-w-4xl grid md:grid-cols-2 overflow-hidden rounded-3xl shadow-2xl bg-white dark:bg-slate-900">
                {/* Left Side: Branding/Image */}
                <div className="hidden md:flex flex-col justify-center items-center bg-gradient-to-br from-rose-500 to-orange-400 p-12 text-white relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
                    <div className="relative z-10 text-center">
                        <h2 className="text-3xl font-bold mb-4">Join Vyomara</h2>
                        <p className="text-rose-100 text-lg">
                            Create an account to start booking luxury vehicles and managing your wedding logistics.
                        </p>
                    </div>
                </div>

                {/* Right Side: Form */}
                <div className="flex items-center justify-center p-8 md:p-12">
                    <SignUp
                        appearance={{
                            elements: {
                                rootBox: "w-full",
                                card: "shadow-none p-0 w-full",
                                headerTitle: "text-2xl font-bold text-slate-900 dark:text-white",
                                headerSubtitle: "text-slate-600 dark:text-slate-400",
                                formButtonPrimary: "bg-gradient-to-r from-rose-500 to-orange-400 hover:from-rose-600 hover:to-orange-500 text-white shadow-lg shadow-rose-200/50 border-none",
                                formFieldInput: "rounded-xl border-slate-200 focus:ring-rose-500 focus:border-rose-500 dark:bg-slate-800 dark:border-slate-700",
                                footerActionLink: "text-rose-600 hover:text-rose-700 font-semibold",
                                identityPreviewText: "text-slate-700 dark:text-slate-300",
                                formFieldLabel: "text-slate-700 dark:text-slate-300"
                            },
                            layout: {
                                socialButtonsPlacement: "bottom",
                                showOptionalFields: false,
                            }
                        }}
                    />
                </div>
            </div>
        </div>
    );
}
