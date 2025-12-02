'use client';

export default function WeddingLogistics({ bookingFor, setBookingFor, specialReqs, setSpecialReqs, keepBuffer, setKeepBuffer }) {
    const roles = [
        { id: 'groom', label: 'Dulha (Groom)', icon: '🤵' },
        { id: 'bride', label: 'Dulhan (Bride)', icon: '👰' },
        { id: 'baraati', label: 'Baraati', icon: '🥁' },
        { id: 'family', label: 'Family', icon: '👨‍👩‍👧‍👦' },
    ];

    return (
        <div className="space-y-6 bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700">
            <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Who is this booking for?</h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {roles.map((role) => (
                        <button
                            key={role.id}
                            type="button"
                            onClick={() => setBookingFor(role.id)}
                            className={`flex flex-col items-center justify-center gap-2 p-4 rounded-xl border transition-all
                ${bookingFor === role.id
                                    ? 'border-rose-500 bg-rose-50 text-rose-700 dark:bg-rose-900/20 dark:text-rose-400'
                                    : 'border-slate-200 hover:border-rose-200 hover:bg-slate-50 dark:border-slate-700 dark:hover:bg-slate-750'
                                }`}
                        >
                            <span className="text-2xl">{role.icon}</span>
                            <span className="text-sm font-medium">{role.label}</span>
                        </button>
                    ))}
                </div>
            </div>

            <div className="space-y-3">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Special Requirements</h3>
                <textarea
                    value={specialReqs}
                    onChange={(e) => setSpecialReqs(e.target.value)}
                    placeholder="Any specific decorations, route preferences, or accessibility needs?"
                    className="w-full h-24 rounded-xl border-slate-200 bg-slate-50 p-4 text-sm outline-none focus:border-rose-500 focus:ring-2 focus:ring-rose-200 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
                />
            </div>

            <div className="flex items-center gap-3 p-4 bg-amber-50 dark:bg-amber-900/10 rounded-xl border border-amber-100 dark:border-amber-900/30">
                <input
                    type="checkbox"
                    id="buffer"
                    checked={keepBuffer}
                    onChange={(e) => setKeepBuffer(e.target.checked)}
                    className="h-5 w-5 rounded border-slate-300 text-rose-600 focus:ring-rose-500"
                />
                <label htmlFor="buffer" className="text-sm text-slate-700 dark:text-slate-300 cursor-pointer">
                    <span className="font-bold block text-amber-700 dark:text-amber-500">Keep Extra Buffer?</span>
                    Recommended for wedding processions (Baraat) to account for delays.
                </label>
            </div>
        </div>
    );
}
