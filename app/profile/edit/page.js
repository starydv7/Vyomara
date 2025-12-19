'use client';

import { useUser } from "@clerk/nextjs";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function EditProfilePage() {
    const { user, isLoaded } = useUser();
    const router = useRouter();
    const [isSaving, setIsSaving] = useState(false);

    if (!isLoaded) return null;

    const handleSave = async (e) => {
        e.preventDefault();
        setIsSaving(true);
        // Simulate API call
        setTimeout(() => {
            setIsSaving(false);
            router.push('/profile');
        }, 1000);
    };

    return (
        <main className="min-h-screen bg-slate-50 dark:bg-slate-950 py-12 px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Edit Profile</h1>
                    <p className="mt-2 text-slate-600 dark:text-slate-400">
                        Update your personal information
                    </p>
                </div>

                <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-sm border border-slate-100 dark:border-slate-800">
                    <form onSubmit={handleSave} className="space-y-6">
                        <div className="grid sm:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                    First Name
                                </label>
                                <input
                                    type="text"
                                    defaultValue={user?.firstName}
                                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-900 focus:border-rose-500 focus:ring-rose-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                    Last Name
                                </label>
                                <input
                                    type="text"
                                    defaultValue={user?.lastName}
                                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-900 focus:border-rose-500 focus:ring-rose-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                Email Address
                            </label>
                            <input
                                type="email"
                                defaultValue={user?.primaryEmailAddress?.emailAddress}
                                disabled
                                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-500 cursor-not-allowed dark:border-slate-700 dark:bg-slate-800/50 dark:text-slate-400"
                            />
                            <p className="mt-1 text-xs text-slate-500">Email cannot be changed</p>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                Phone Number
                            </label>
                            <input
                                type="tel"
                                placeholder="+91 98765 43210"
                                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-900 focus:border-rose-500 focus:ring-rose-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                Bio
                            </label>
                            <textarea
                                rows={4}
                                placeholder="Tell us a bit about yourself..."
                                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-900 focus:border-rose-500 focus:ring-rose-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                            />
                        </div>

                        <div className="flex gap-4 pt-4">
                            <button
                                type="submit"
                                disabled={isSaving}
                                className="flex-1 rounded-xl bg-rose-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-rose-500 disabled:opacity-50"
                            >
                                {isSaving ? 'Saving...' : 'Save Changes'}
                            </button>
                            <button
                                type="button"
                                onClick={() => router.back()}
                                className="flex-1 rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
                            >
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    );
}
