'use client';

import { useState } from 'react';
import Link from 'next/link';

const vendorCategories = [
  {
    id: 1,
    title: 'Wedding Planning & Coordination',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
    items: [
      { id: 'planner-full', label: 'Full Wedding Planner' },
      { id: 'planner-partial', label: 'Partial Planner' },
      { id: 'planner-day', label: 'Day-of Coordinator' },
      { id: 'planner-destination', label: 'Destination Wedding Planner' },
      { id: 'planner-luxury', label: 'Luxury Wedding Planner' },
      { id: 'planner-budget', label: 'Budget Wedding Planner' },
      { id: 'coordinator', label: 'Wedding Coordinator' },
      { id: 'event-manager', label: 'Event Manager' },
      { id: 'event-supervisor', label: 'Event Supervisor' },
      { id: 'planner-assistant', label: "Planner's Assistant" },
      { id: 'logistics-manager', label: 'Logistics Manager' },
    ],
  },
  {
    id: 2,
    title: 'Venue & Guest Management',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    items: [
      { id: 'venue-banquet', label: 'Banquet Hall' },
      { id: 'venue-resort', label: 'Resort / Hotel' },
      { id: 'venue-farmhouse', label: 'Farmhouse' },
      { id: 'venue-palace', label: 'Palace / Heritage Venue' },
      { id: 'venue-beach', label: 'Beach Venue' },
      { id: 'venue-destination', label: 'Destination Venue' },
      { id: 'venue-manager', label: 'Venue Manager' },
      { id: 'guest-relations', label: 'Guest Relations Manager' },
      { id: 'front-desk', label: 'Front Desk Team' },
      { id: 'valet', label: 'Valet Team' },
      { id: 'parking', label: 'Parking Supervisors' },
      { id: 'housekeeping', label: 'Housekeeping Team' },
      { id: 'room-allocation', label: 'Room Allocation Staff' },
      { id: 'guest-welcoming', label: 'Guest Welcoming Hosts' },
      { id: 'airport-pickup', label: 'Airport Pickup Drivers' },
      { id: 'luggage', label: 'Luggage Handlers' },
      { id: 'guest-executives', label: 'Guest Relation Executives' },
    ],
  },
  {
    id: 3,
    title: 'Food & Catering',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    items: [
      { id: 'caterer-main', label: 'Main Caterer (Veg / Non-veg)' },
      { id: 'caterer-live', label: 'Live Food Counters' },
      { id: 'caterer-international', label: 'International Cuisine Specialists' },
      { id: 'caterer-regional', label: 'Regional Cuisine Specialists' },
      { id: 'food-stylist', label: 'Food Stylist' },
      { id: 'dessert-designer', label: 'Dessert Table Designer' },
      { id: 'mixologist', label: 'Mixologists' },
      { id: 'bartender', label: 'Bartenders' },
      { id: 'head-chef', label: 'Head Chef' },
      { id: 'sous-chef', label: 'Sous Chef' },
      { id: 'line-cook', label: 'Line Cook' },
      { id: 'buffet-manager', label: 'Buffet Managers' },
      { id: 'mithai', label: 'Sweet / Mithai Vendors' },
      { id: 'cake-artist', label: 'Custom Cake Artists' },
    ],
  },
  {
    id: 4,
    title: 'Photography & Videography',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    items: [
      { id: 'photo-wedding', label: 'Wedding Photographer' },
      { id: 'photo-candid', label: 'Candid Photographer' },
      { id: 'photo-pre', label: 'Pre-wedding Photographer' },
      { id: 'photo-traditional', label: 'Traditional Photographer' },
      { id: 'photo-drone', label: 'Drone Photographer' },
      { id: 'video-cinematic', label: 'Cinematic Videographer' },
      { id: 'video-traditional', label: 'Traditional Videographer' },
      { id: 'video-drone', label: 'Drone Videographer' },
      { id: 'photo-assistant', label: 'Photo Assistant' },
      { id: 'lightman', label: 'Lightman' },
      { id: 'camera-tech', label: 'Camera Technician' },
      { id: 'editor', label: 'Editors (Photo/Video)' },
      { id: 'album-designer', label: 'Album Designers' },
    ],
  },
  {
    id: 5,
    title: 'Decoration & Design',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    items: [
      { id: 'decor-company', label: 'Wedding Decor Company' },
      { id: 'decor-floral', label: 'Floral Decor Specialist' },
      { id: 'decor-mandap', label: 'Mandap Decor Specialist' },
      { id: 'decor-stage', label: 'Stage Decor Artist' },
      { id: 'decor-entrance', label: 'Entrance Decor Artist' },
      { id: 'decor-theme', label: 'Theme Decor Designer' },
      { id: 'designer-set', label: 'Wedding Set Designer' },
      { id: 'designer-fabric', label: 'Fabric / Draping Specialist' },
      { id: 'designer-lighting', label: 'Lighting Designer' },
      { id: 'designer-props', label: 'Props Designer' },
      { id: 'designer-moodboard', label: 'Moodboard Specialist' },
      { id: 'worker-flower', label: 'Flower Workers' },
      { id: 'worker-tent', label: 'Tent Workers' },
      { id: 'worker-fabric', label: 'Fabric Setup Crew' },
      { id: 'worker-mandap', label: 'Mandap Setup Crew' },
      { id: 'worker-stage', label: 'Stage Construction Workers' },
    ],
  },
  {
    id: 6,
    title: 'Entertainment & Performers',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
      </svg>
    ),
    items: [
      { id: 'singer-bollywood', label: 'Singer (Bollywood, Sufi, Folk, Classical)' },
      { id: 'dj', label: 'DJ' },
      { id: 'band', label: 'Live Band' },
      { id: 'dhol', label: 'Dhol Players' },
      { id: 'shehnai', label: 'Shehnai Players' },
      { id: 'instrumentalist', label: 'Instrumentalists' },
      { id: 'dance-folk', label: 'Folk Dance Troupes (Rajasthani, Punjabi, Garba)' },
      { id: 'performer-fire', label: 'Fire Performers' },
      { id: 'performer-led', label: 'LED Performers' },
      { id: 'mc', label: 'Wedding Hosts (MC)' },
      { id: 'comedian', label: 'Stand-up Comedians' },
      { id: 'celebrity', label: 'Celebrity Performers' },
    ],
  },
  {
    id: 7,
    title: 'Beauty & Fashion',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    items: [
      { id: 'makeup-bridal', label: 'Bridal Makeup Artist' },
      { id: 'makeup-groom', label: 'Groom Makeup Artist' },
      { id: 'hair', label: 'Hair Stylist' },
      { id: 'mehendi', label: 'Mehendi Artist' },
      { id: 'nail', label: 'Nail Artist' },
      { id: 'fashion-bridal', label: 'Bridal Wear Designers' },
      { id: 'fashion-groom', label: 'Groom Wear Designers' },
      { id: 'boutique', label: 'Boutique Designers' },
      { id: 'lehenga', label: 'Lehenga Vendors' },
      { id: 'sherwani', label: 'Sherwani Vendors' },
      { id: 'jewelry', label: 'Jewelry Vendors (rent/buy)' },
      { id: 'draping', label: 'Draping Artist' },
      { id: 'hair-assistant', label: 'Hair Assistant' },
      { id: 'makeup-assistant', label: 'Makeup Assistant' },
    ],
  },
  {
    id: 8,
    title: 'Logistics, Travel & Operations',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
    items: [
      { id: 'car-luxury', label: 'Car Rental (Luxury, Vintage)' },
      { id: 'bus-tempo', label: 'Bus/Tempo Traveler Vendors' },
      { id: 'shuttle', label: 'Shuttle Service Providers' },
      { id: 'truck', label: 'Logistics Truck Providers' },
      { id: 'stage-crew', label: 'Stage Crew' },
      { id: 'sound-crew', label: 'Sound Crew' },
      { id: 'electricity-crew', label: 'Electricity Crew' },
      { id: 'generator', label: 'Generator Operator' },
      { id: 'setup-teardown', label: 'Setup/Teardown Workers' },
      { id: 'runners', label: 'Runners / Errand Boys' },
      { id: 'security-guard', label: 'Security Guards' },
      { id: 'bouncer', label: 'Bouncers' },
      { id: 'vip-protection', label: 'VIP Protection' },
    ],
  },
  {
    id: 9,
    title: 'Printing, Gifts & Stationery',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    items: [
      { id: 'invitation-design', label: 'Invitation Card Designers' },
      { id: 'invitation-digital', label: 'Digital Invitation Designers' },
      { id: 'branding', label: 'Event Branding Designers' },
      { id: 'return-gift', label: 'Return Gift Vendors' },
      { id: 'hamper', label: 'Custom Hampers' },
      { id: 'sweet-box', label: 'Sweet Boxes' },
      { id: 'welcome-kit', label: 'Welcome Kit Vendors' },
      { id: 'signage', label: 'Signage & Direction Boards' },
      { id: 'program-card', label: 'Wedding Program Cards' },
      { id: 'table-number', label: 'Table Numbers' },
      { id: 'baggage-tag', label: 'Baggage Tags' },
    ],
  },
  {
    id: 10,
    title: 'Ritual & Ceremony Related',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    items: [
      { id: 'pandit', label: 'Pandit / Priest' },
      { id: 'qazi', label: 'Qazi' },
      { id: 'granthi', label: 'Granthi' },
      { id: 'minister', label: 'Christian Wedding Minister' },
      { id: 'phera-setup', label: 'Pheras Setup Team' },
      { id: 'havankund', label: 'Havankund Setup Staff' },
      { id: 'ritual-supplier', label: 'Ritual Material Supplier' },
    ],
  },
  {
    id: 11,
    title: 'Vendors for Unique & Luxury Add-ons',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    items: [
      { id: 'fireworks', label: 'Fireworks Vendor' },
      { id: 'cold-pyro', label: 'Cold Pyro Vendor' },
      { id: 'sparklers', label: 'Sparklers Vendor' },
      { id: 'luxury-vehicle', label: 'Luxury Vehicle Entry Vendor' },
      { id: 'ghodi', label: 'Horse (Ghodi) Vendor' },
      { id: 'elephant-camel', label: 'Elephant / Camel Procession Vendor' },
      { id: 'vintage-car', label: 'Vintage Car Entry' },
      { id: 'fountain', label: 'Decor Fountain Specialist' },
      { id: 'proposal', label: 'Proposal Setup Artist' },
      { id: 'sangeet-choreo', label: 'Sangeet Choreographer' },
      { id: 'haldi-setup', label: 'Haldi Setup Specialist' },
      { id: 'bride-entry', label: 'Bride Entry Concept Designer' },
      { id: 'groom-entry', label: 'Groom Entry Designer' },
      { id: 'camera-360', label: '360° Camera Booth' },
      { id: 'slowmo', label: 'Slow-motion Booth' },
      { id: 'ar-vr', label: 'AR/VR Experience Team' },
      { id: 'led-wall', label: 'LED Wall Display Vendor' },
      { id: 'hologram', label: 'Hologram Entry Vendor' },
    ],
  },
  {
    id: 12,
    title: 'Back-office & Support Roles',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    items: [
      { id: 'customer-success', label: 'Customer Success' },
      { id: 'vendor-relations', label: 'Vendor Relations' },
      { id: 'ops-captain', label: 'On-ground Ops Captains' },
      { id: 'quality-check', label: 'Quality Check Team' },
      { id: 'billing', label: 'Billing & Finance' },
      { id: 'tech-support', label: 'Tech Support Team' },
    ],
  },
];

export default function CategoriesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedCategories, setExpandedCategories] = useState(new Set([1, 2, 3, 4])); // First 4 expanded by default

  const toggleCategory = (categoryId) => {
    setExpandedCategories((prev) => {
      const next = new Set(prev);
      if (next.has(categoryId)) {
        next.delete(categoryId);
      } else {
        next.add(categoryId);
      }
      return next;
    });
  };

  const filteredCategories = vendorCategories.filter((category) => {
    if (!searchQuery.trim()) return true;
    const query = searchQuery.toLowerCase();
    return (
      category.title.toLowerCase().includes(query) ||
      category.items.some((item) => item.label.toLowerCase().includes(query))
    );
  });

  const filteredItems = (items) => {
    if (!searchQuery.trim()) return items;
    const query = searchQuery.toLowerCase();
    return items.filter((item) => item.label.toLowerCase().includes(query));
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-rose-50/60 via-white to-white dark:from-slate-950 dark:via-slate-950 dark:to-slate-900">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white sm:text-5xl">
            All Wedding Categories
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600 dark:text-slate-300">
            Browse through all available wedding service categories and find the perfect vendors for your special day
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative mx-auto max-w-2xl">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search categories or services..."
              className="w-full rounded-2xl border border-slate-200/80 bg-white/90 px-6 py-4 pl-12 pr-6 text-base text-slate-700 shadow-sm transition focus:border-rose-400 focus:outline-none focus:ring-2 focus:ring-rose-100 dark:border-slate-700 dark:bg-slate-900/60 dark:text-white dark:focus:border-rose-500"
            />
            <svg
              className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-rose-500"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
        </div>

        {/* Categories List */}
        <div className="space-y-4">
          {filteredCategories.length === 0 ? (
            <div className="rounded-2xl border border-slate-200 bg-white/80 p-12 text-center dark:border-slate-800 dark:bg-slate-900/60">
              <svg
                className="mx-auto h-12 w-12 text-slate-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p className="mt-4 text-lg font-semibold text-slate-600 dark:text-slate-300">No categories found</p>
              <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                Try adjusting your search query
              </p>
            </div>
          ) : (
            filteredCategories.map((category) => {
              const items = filteredItems(category.items);
              const isExpanded = expandedCategories.has(category.id);

              return (
                <div
                  key={category.id}
                  className="rounded-2xl border border-slate-200/70 bg-white/80 shadow-sm transition hover:shadow-md dark:border-slate-800 dark:bg-slate-900/60"
                >
                  <button
                    onClick={() => toggleCategory(category.id)}
                    className="flex w-full items-center justify-between gap-4 p-6 text-left transition hover:bg-slate-50/50 dark:hover:bg-slate-800/50"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-rose-100 text-rose-600 dark:bg-rose-950/30 dark:text-rose-400">
                        {category.icon}
                      </div>
                      <div>
                        <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
                          {category.title}
                        </h2>
                        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                          {items.length} {items.length === 1 ? 'service' : 'services'} available
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {items.length > 0 && (
                        <span className="rounded-full bg-rose-100 px-3 py-1 text-xs font-semibold text-rose-600 dark:bg-rose-950/30 dark:text-rose-400">
                          {items.length}
                        </span>
                      )}
                      <svg
                        className={`h-5 w-5 text-slate-400 transition-transform ${
                          isExpanded ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>

                  {isExpanded && items.length > 0 && (
                    <div className="border-t border-slate-200/70 p-6 dark:border-slate-800">
                      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                        {items.map((item) => (
                          <Link
                            key={item.id}
                            href={`/categories/${category.id}/${item.id}`}
                            className="group flex items-center gap-3 rounded-xl border border-slate-200/70 bg-white/80 p-4 transition hover:border-rose-300 hover:bg-rose-50/50 hover:shadow-sm dark:border-slate-700 dark:bg-slate-800/50 dark:hover:border-rose-500/40 dark:hover:bg-slate-700"
                          >
                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-rose-100 text-rose-600 transition group-hover:scale-110 dark:bg-rose-950/30 dark:text-rose-400">
                              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </div>
                            <span className="flex-1 text-sm font-medium text-slate-700 group-hover:text-rose-600 dark:text-slate-300 dark:group-hover:text-rose-400">
                              {item.label}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}

                  {isExpanded && items.length === 0 && (
                    <div className="border-t border-slate-200/70 p-6 dark:border-slate-800">
                      <p className="text-center text-sm text-slate-500 dark:text-slate-400">
                        No services found matching your search
                      </p>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Back to Home */}
        <div className="mt-12 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-2xl border-2 border-slate-300 bg-white px-6 py-3 text-base font-semibold text-slate-700 transition hover:border-rose-300 hover:bg-rose-50 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-200 dark:hover:border-rose-500/40 dark:hover:bg-slate-700"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span>Back to Home</span>
          </Link>
        </div>
      </div>
    </main>
  );
}

