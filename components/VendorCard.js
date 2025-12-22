import Link from 'next/link';

export default function VendorCard({ id, image, name, category, location, rating, reviews, priceRange, verified, featured, badge }) {
    // ... (stars logic)

    return (
        <Link
            href={`/vendors/${id || name.toLowerCase().replace(/\s+/g, '-')}`}
            className="group relative overflow-hidden rounded-2xl border border-slate-200/70 bg-white shadow-sm transition-all hover:border-rose-300 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900/60 dark:hover:border-rose-500/40"
        >
            {/* Badge */}
            {badge && (
                <div className="absolute left-3 top-3 z-10 rounded-full bg-gradient-to-r from-rose-500 to-orange-400 px-3 py-1 text-xs font-semibold text-white shadow-lg">
                    {badge}
                </div>
            )}

            {/* Verified Badge */}
            {verified && (
                <div className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-md dark:bg-slate-800">
                    <svg className="h-5 w-5 text-rose-500" fill="currentColor" viewBox="0 0 20 20">
                        <path
                            fillRule="evenodd"
                            d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                        />
                    </svg>
                </div>
            )}

            {/* Image */}
            <div className="relative h-48 overflow-hidden bg-slate-200">
                <img
                    src={image}
                    alt={name}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                    onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/400x300?text=' + encodeURIComponent(name);
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            </div>

            {/* Content */}
            <div className="p-5">
                {/* Category */}
                <div className="mb-2">
                    <span className="inline-flex items-center rounded-full bg-rose-50 px-2.5 py-0.5 text-xs font-semibold text-rose-600 dark:bg-rose-950/30 dark:text-rose-400">
                        {category}
                    </span>
                </div>

                {/* Name */}
                <h3 className="mb-2 text-lg font-bold text-slate-900 line-clamp-1 dark:text-white">{name}</h3>

                {/* Location */}
                <div className="mb-3 flex items-center gap-1.5 text-sm text-slate-600 dark:text-slate-400">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="line-clamp-1">{location}</span>
                </div>

                {/* Rating & Reviews */}
                <div className="mb-3 flex items-center gap-2">
                    <div className="flex items-center gap-0.5">{renderStars(rating)}</div>
                    <span className="text-sm font-semibold text-slate-900 dark:text-white">{rating}</span>
                    <span className="text-sm text-slate-500 dark:text-slate-400">
                        ({reviews.toLocaleString()} {reviews === 1 ? 'review' : 'reviews'})
                    </span>
                </div>

                {/* Price Range */}
                <div className="flex items-center justify-between border-t border-slate-200 pt-3 dark:border-slate-700">
                    <div>
                        <p className="text-xs text-slate-500 dark:text-slate-400">Starting from</p>
                        <p className="text-base font-bold text-slate-900 dark:text-white">{priceRange}</p>
                    </div>
                    <button className="rounded-xl bg-rose-50 px-4 py-2 text-sm font-semibold text-rose-600 transition hover:bg-rose-100 dark:bg-rose-950/30 dark:text-rose-400 dark:hover:bg-rose-950/50">
                        View Details
                    </button>
                </div>
            </div>
        </Link>
    );
}
