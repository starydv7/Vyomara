'use client';

import { useEffect, useMemo, useRef, useState } from 'react';

const GEO_REVERSE = 'https://api.bigdatacloud.net/data/reverse-geocode-client';
const GEO_REVERSE_FALLBACK = 'https://nominatim.openstreetmap.org/reverse';
const GEO_SEARCH = 'https://nominatim.openstreetmap.org/search';

export default function LocationSelector({ variant = 'full', className = '' }) {
  const [status, setStatus] = useState('idle');
  const [autoLocation, setAutoLocation] = useState('');
  const [activeLocation, setActiveLocation] = useState('Kolkata, India');
  const [query, setQuery] = useState('');
  const [searchStatus, setSearchStatus] = useState('idle');
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const inlineRef = useRef(null);
  const isCustomLocation = useMemo(
    () => autoLocation && activeLocation && autoLocation !== activeLocation,
    [autoLocation, activeLocation]
  );

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (!navigator.geolocation) {
      setStatus('error');
      setActiveLocation('Location not supported on this device.');
      return;
    }

    setStatus('requesting');
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const { latitude, longitude } = position.coords;
          const resolved = await resolveLocation(latitude, longitude);

          setAutoLocation(resolved);
          setActiveLocation(resolved);
          setStatus('success');
        } catch (error) {
          console.error('Geolocation lookup failed:', error);
          setStatus('error');
          setActiveLocation('Kolkata, India');
        }
      },
      (error) => {
        console.error('Geolocation permission denied:', error);
        setStatus('denied');
        setActiveLocation('Kolkata, India');
      },
      { maximumAge: 60_000, timeout: 15_000 }
    );
  }, []);

  const handleSearch = async (event) => {
    event.preventDefault();
    const value = query.trim();
    if (!value) return;

    setSearchStatus('searching');
    try {
      const params = new URLSearchParams({
        q: value,
        format: 'json',
        addressdetails: '1',
        limit: '1',
      });

      const response = await fetch(`${GEO_SEARCH}?${params}`, {
        headers: { 'User-Agent': 'Vyomara-WedOS/1.0 (https://vyomara.app)' },
      });
      const results = await response.json();

      if (Array.isArray(results) && results.length > 0) {
        const result = results[0];
        const display =
          result.display_name ||
          [result.address?.city, result.address?.state, result.address?.country]
            .filter(Boolean)
            .join(', ');
        setActiveLocation(display || value);
        setSearchStatus('success');
      } else {
        setSearchStatus('empty');
      }
    } catch (error) {
      console.error('Location search failed:', error);
      setSearchStatus('error');
    }
  };

  const handleReset = () => {
    if (autoLocation) {
      setActiveLocation(autoLocation);
      setSearchStatus('idle');
    }
  };

  useEffect(() => {
    if (!isPanelOpen) return;
    const handleClickOutside = (event) => {
      if (inlineRef.current && !inlineRef.current.contains(event.target)) {
        setIsPanelOpen(false);
      }
    };
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setIsPanelOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isPanelOpen]);

  const searchForm = (
    <>
      <form onSubmit={handleSearch} className="mt-4 flex flex-col gap-3 sm:flex-row">
        <label className="flex-1 text-sm font-medium text-slate-600 dark:text-slate-300">
          <span className="sr-only">Search for another location</span>
          <input
            type="text"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search another city (e.g., Jaipur, Kochi, Pune)"
            className="mt-1 w-full rounded-xl border border-slate-200 bg-white/80 px-4 py-2 text-sm text-slate-800 shadow-sm focus:border-rose-400 focus:outline-none focus:ring-2 focus:ring-rose-100 dark:border-slate-700 dark:bg-slate-950/60 dark:text-white dark:focus:border-rose-500 dark:focus:ring-rose-900/40"
          />
        </label>
        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-rose-500 to-orange-400 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-rose-200/60 transition hover:opacity-90 dark:shadow-rose-950/40"
        >
          {searchStatus === 'searching' ? 'Searching…' : 'Use this city'}
        </button>
      </form>
      {searchStatus === 'empty' && (
        <p className="mt-2 text-xs font-semibold text-rose-500">
          Couldn&apos;t find that place. Try another spelling.
        </p>
      )}
      {searchStatus === 'error' && (
        <p className="mt-2 text-xs font-semibold text-rose-500">
          Search unavailable right now. Please try again in a moment.
        </p>
      )}
    </>
  );

  const inlineContent = (
    <button
      type="button"
      onClick={() => setIsPanelOpen((prev) => !prev)}
      className="flex flex-1 items-center gap-3 text-left"
      aria-expanded={isPanelOpen}
      aria-label="View or change location"
    >
      <div className="rounded-full bg-gradient-to-r from-rose-500 to-orange-400 p-2 text-white shadow-sm shadow-rose-200/60 transition group-hover:scale-110 dark:shadow-rose-900/60">
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
      <div className="min-w-0 flex-1">
        <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-rose-400">
          Serving
        </p>
        <p className="truncate text-sm font-semibold text-slate-900 dark:text-white">{activeLocation}</p>
      </div>
      <span
        className={`inline-flex shrink-0 items-center gap-1 rounded-full px-2 py-0.5 text-[11px] font-semibold whitespace-nowrap ${
          status === 'success'
            ? 'bg-emerald-50 text-emerald-600 dark:bg-emerald-950/50 dark:text-emerald-300'
            : status === 'denied'
            ? 'bg-amber-50 text-amber-600 dark:bg-amber-950/50 dark:text-amber-200'
            : status === 'error'
            ? 'bg-rose-50 text-rose-600 dark:bg-rose-950/50 dark:text-rose-200'
            : 'bg-slate-100 text-slate-600 dark:bg-slate-900/60 dark:text-slate-300'
        }`}
      >
        <span
          className={`h-1.5 w-1.5 rounded-full ${
            status === 'success'
              ? 'bg-emerald-500'
              : status === 'denied'
              ? 'bg-amber-400'
              : status === 'error'
              ? 'bg-rose-400'
              : 'bg-slate-400 animate-pulse'
          }`}
        />
        {status === 'success'
          ? 'Live'
          : status === 'denied'
          ? 'Allow'
          : status === 'error'
          ? 'Retry'
          : 'Locating'}
      </span>
      <svg
        className={`h-4 w-4 transition ${isPanelOpen ? 'rotate-180 text-rose-500' : 'text-slate-400'}`}
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.06 1.06l-4.24 4.24a.75.75 0 0 1-1.06 0L5.21 8.27a.75.75 0 0 1 .02-1.06z" clipRule="evenodd" />
      </svg>
    </button>
  );

  if (variant === 'inline') {
    return (
      <div ref={inlineRef} className={`relative inline-flex min-w-[240px] max-w-full ${className}`}>
        <div className="flex w-full items-center gap-3 rounded-full border border-rose-100 bg-white/70 px-3 py-2 text-xs shadow-sm shadow-rose-50 backdrop-blur transition hover:border-rose-200 dark:border-rose-500/30 dark:bg-slate-900/60">
          {inlineContent}
        </div>
        {isPanelOpen && (
          <div className="absolute left-0 top-full z-50 mt-3 w-[min(360px,90vw)] rounded-2xl border border-rose-100 bg-white/95 p-4 shadow-xl shadow-rose-100/80 backdrop-blur dark:border-rose-500/30 dark:bg-slate-900/95">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rose-400">
                  Change city
                </p>
                <p className="text-sm font-semibold text-slate-900 dark:text-white">
                  {activeLocation}
                </p>
              </div>
              {isCustomLocation && (
                <button
                  type="button"
                  onClick={handleReset}
                  className="text-xs font-semibold text-rose-500 hover:underline"
                >
                  Use my current location
                </button>
              )}
            </div>
            {searchForm}
          </div>
        )}
      </div>
    );
  }

  return (
    <div
      className={`rounded-2xl border border-rose-100 bg-white/90 p-4 shadow-sm shadow-rose-50 backdrop-blur dark:border-rose-500/20 dark:bg-slate-900/70 dark:shadow-none ${className}`}
    >
      <div className="flex items-start gap-3">{inlineContent}</div>
      {isCustomLocation && (
        <button
          type="button"
          onClick={handleReset}
          className="mt-2 text-xs font-semibold text-rose-500 hover:underline"
        >
          Use my current location
        </button>
      )}

      {searchForm}
    </div>
  );
}

async function resolveLocation(latitude, longitude) {
  const params = new URLSearchParams({
    latitude: latitude.toString(),
    longitude: longitude.toString(),
    localityLanguage: 'en',
  });

  try {
    const response = await fetch(`${GEO_REVERSE}?${params}`);
    if (!response.ok) throw new Error('Primary reverse geocode failed');
    const data = await response.json();
    const formatted =
      data.city ||
      data.locality ||
      [data.principalSubdivision, data.countryName].filter(Boolean).join(', ');
    if (formatted) return formatted;
    throw new Error('Primary reverse geocode empty');
  } catch (error) {
    console.warn('Primary reverse geocode unavailable, using fallback', error);
  }

  const fallbackParams = new URLSearchParams({
    lat: latitude.toString(),
    lon: longitude.toString(),
    format: 'json',
    addressdetails: '1',
  });

  const fallbackResponse = await fetch(`${GEO_REVERSE_FALLBACK}?${fallbackParams}`, {
    headers: { 'User-Agent': 'Vyomara-WedOS/1.0 (https://vyomara.app)' },
  });

  if (fallbackResponse.ok) {
    const fallbackData = await fallbackResponse.json();
    const fallbackFormatted =
      fallbackData.display_name ||
      [
        fallbackData.address?.city ||
          fallbackData.address?.town ||
          fallbackData.address?.village ||
          fallbackData.address?.state,
        fallbackData.address?.country,
      ]
        .filter(Boolean)
        .join(', ');

    if (fallbackFormatted) {
      return fallbackFormatted;
    }
  }

  return `${latitude.toFixed(2)}, ${longitude.toFixed(2)}`;
}

