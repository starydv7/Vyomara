'use client';

export default function VehicleCard({ vehicle, onSelect, isSelected }) {
    return (
        <div
            className={`relative overflow-hidden rounded-2xl border transition-all duration-300 cursor-pointer group
        ${isSelected
                    ? 'border-rose-500 bg-rose-50/30 dark:bg-rose-900/10 ring-2 ring-rose-500 ring-offset-2 dark:ring-offset-slate-900'
                    : 'border-slate-200 bg-white hover:border-rose-300 hover:shadow-lg dark:border-slate-700 dark:bg-slate-800'
                }`}
            onClick={() => onSelect(vehicle)}
        >
            <div className="aspect-video w-full overflow-hidden bg-slate-100 dark:bg-slate-900">
                <img
                    src={vehicle.image}
                    alt={vehicle.name}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
            </div>

            <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                    <div>
                        <h3 className="font-bold text-slate-900 dark:text-white text-lg">{vehicle.name}</h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400">{vehicle.category}</p>
                    </div>
                    <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded-lg">
                        <svg className="w-4 h-4 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        <span className="text-xs font-medium text-slate-700 dark:text-slate-300">{vehicle.capacity} Seats</span>
                    </div>
                </div>

                {vehicle.tag && (
                    <div className="mb-3 inline-flex items-center rounded-full bg-rose-100 px-2.5 py-0.5 text-xs font-medium text-rose-800 dark:bg-rose-900/30 dark:text-rose-300">
                        {vehicle.tag}
                    </div>
                )}

                <div className="flex items-center gap-4 mb-4 text-sm text-slate-600 dark:text-slate-400">
                    <div className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        <span>AC</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                        </svg>
                        <span>Luggage</span>
                    </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-700">
                    <div>
                        <p className="text-xs text-slate-500">Price per km</p>
                        <p className="font-bold text-rose-600 dark:text-rose-400">₹{vehicle.pricePerKm}</p>
                    </div>
                    <div className="text-right">
                        <p className="text-xs text-slate-500">Est. Total</p>
                        <p className="font-bold text-slate-900 dark:text-white text-lg">₹{vehicle.estimatedPrice}</p>
                    </div>
                </div>
            </div>

            {isSelected && (
                <div className="absolute top-3 right-3 bg-rose-500 text-white p-1 rounded-full shadow-lg">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                </div>
            )}
        </div>
    );
}
