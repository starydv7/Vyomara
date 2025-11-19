'use client';

import { useState } from 'react';
import Link from 'next/link';

const vendorCategories = [
  {
    id: 1,
    title: 'Wedding Planning & Coordination',
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

export default function SignupPage() {
  const [role, setRole] = useState('user');

  return (
    <main className="bg-gradient-to-b from-rose-50/60 via-white to-white dark:from-slate-950 dark:via-slate-950 dark:to-slate-950">
      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:px-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-8">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-rose-500">Join ShaadiSathi</p>
            <h1 className="text-4xl font-bold text-slate-900 dark:text-white sm:text-5xl">
              Plan your wedding journey or grow your business in one place.
            </h1>
            <p className="text-base text-slate-600 dark:text-slate-300">
              Choose how you want to experience ShaadiSathi. Families get curated planning tools, while vendors unlock
              premium leads and a verified profile in India's smartest wedding network.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 rounded-3xl border border-rose-100 bg-white/80 p-4 shadow-sm shadow-rose-100/50 dark:border-rose-500/30 dark:bg-slate-950/80">
            <RoleCard
              label="I am planning a wedding"
              description="Get personalized checklists, budget insights, and trusted vendors."
              active={role === 'user'}
              onClick={() => setRole('user')}
            />
            <RoleCard
              label="I am a vendor or service provider"
              description="Showcase your services, receive verified leads, and manage bookings."
              active={role === 'vendor'}
              onClick={() => setRole('vendor')}
            />
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Stat label="Cities covered" value="420+" />
            <Stat label="Verified vendors" value="9,800+" />
            <Stat label="Families served" value="65,000+" />
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white/95 p-8 shadow-2xl shadow-rose-100/80 backdrop-blur dark:border-slate-800 dark:bg-slate-950/80 dark:shadow-none">
          {role === 'user' ? <UserForm /> : <VendorForm categories={vendorCategories} />}
          <p className="mt-6 text-center text-xs text-slate-500 dark:text-slate-400">
            Already have an account?{' '}
            <Link href="/login" className="font-semibold text-rose-500 hover:text-rose-600">
              Log in
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}

function RoleCard({ label, description, active, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex flex-1 min-w-[260px] flex-col items-start gap-2 rounded-2xl border p-4 text-left transition ${
        active
          ? 'border-rose-400 bg-rose-50/80 text-rose-600 shadow-sm shadow-rose-200/60 dark:border-rose-400/60 dark:bg-rose-950/30 dark:text-rose-100'
          : 'border-slate-200 text-slate-600 hover:border-rose-200 hover:text-rose-600 dark:border-slate-700 dark:text-slate-300'
      }`}
    >
      <span className="text-sm font-semibold">{label}</span>
      <span className="text-xs text-slate-500 dark:text-slate-400">{description}</span>
    </button>
  );
}

function Stat({ label, value }) {
  return (
    <div className="rounded-2xl border border-slate-200/70 bg-white/80 px-5 py-3 shadow-sm dark:border-slate-800 dark:bg-slate-900/60">
      <p className="text-xl font-semibold text-slate-900 dark:text-white">{value}</p>
      <p className="text-xs uppercase tracking-[0.3em] text-slate-400">{label}</p>
    </div>
  );
}

function UserForm() {
  return (
    <form className="space-y-5">
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">Create your family account</h2>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          You'll get a personalized dashboard, planning timeline, and curated vendor recommendations.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Full Name" placeholder="Aditi Sharma" />
        <Field label="Email" type="email" placeholder="aditi@email.com" />
        <Field label="Phone" type="tel" placeholder="+91 98765 43210" />
        <Field label="City / Region" placeholder="Delhi NCR" />
        <Field label="Wedding Date" type="date" />
        <Field label="Estimated Budget" placeholder="₹25-35 Lakhs" />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-semibold text-slate-700 dark:text-slate-200">Wedding Priorities</label>
        <textarea
          rows={3}
          placeholder="Tell us about your dream wedding, priorities, inspirations..."
          className="w-full rounded-2xl border border-slate-200/80 bg-white/90 px-4 py-3 text-sm text-slate-700 shadow-sm focus:border-rose-400 focus:outline-none focus:ring-2 focus:ring-rose-100 dark:border-slate-700 dark:bg-slate-900/60 dark:text-white dark:focus:border-rose-500"
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-2xl bg-gradient-to-r from-rose-500 to-orange-400 px-4 py-3 text-base font-semibold text-white shadow-lg shadow-rose-200/60 transition hover:opacity-95 dark:shadow-rose-900/40"
      >
        Create wedding account
      </button>
    </form>
  );
}

function VendorForm({ categories }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    businessName: '',
    email: '',
    phone: '',
    location: '',
    ownerName: '',
    experience: '',
    website: '',
  });
  const [selectedServices, setSelectedServices] = useState(new Set());
  const [expandedCategories, setExpandedCategories] = useState(new Set([1]));
  const [additionalInfo, setAdditionalInfo] = useState({
    portfolio: '',
    coverage: '',
    pricing: '',
    teamSize: '',
    socialMedia: '',
    specialties: '',
    notes: '',
  });

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleAdditionalChange = (field, value) => {
    setAdditionalInfo((prev) => ({ ...prev, [field]: value }));
  };

  const handleStep1Submit = (e) => {
    e.preventDefault();
    // Validate basic fields
    if (!formData.businessName || !formData.email || !formData.phone || !formData.location) {
      alert('Please fill all required fields');
      return;
    }
    setStep(2);
  };

  const handleStep2Submit = (e) => {
    e.preventDefault();
    if (selectedServices.size === 0) {
      alert('Please select at least one service');
      return;
    }
    setStep(3);
  };

  const handleStep3Submit = (e) => {
    e.preventDefault();
    console.log('Vendor application:', {
      formData,
      services: Array.from(selectedServices),
      additionalInfo,
    });
    alert('Vendor application submitted successfully!');
  };

  const toggleService = (serviceId) => {
    setSelectedServices((prev) => {
      const next = new Set(prev);
      if (next.has(serviceId)) {
        next.delete(serviceId);
      } else {
        next.add(serviceId);
      }
      return next;
    });
  };

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

  if (step === 1) {
    return (
      <form onSubmit={handleStep1Submit} className="space-y-5">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-rose-500 text-xs font-semibold text-white">
              1
            </span>
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">Basic Information</h2>
          </div>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Let's start with your business details. We'll set up your services in the next step.
          </p>
        </div>

        <Field
          label="Business / Brand Name *"
          placeholder="Royal Orchid Banquets"
          value={formData.businessName}
          onChange={(e) => handleInputChange('businessName', e.target.value)}
        />
        <div className="grid gap-4 sm:grid-cols-2">
          <Field
            label="Contact Email *"
            type="email"
            placeholder="bookings@royalorchid.com"
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
          />
          <Field
            label="Phone / WhatsApp *"
            type="tel"
            placeholder="+91 99887 77665"
            value={formData.phone}
            onChange={(e) => handleInputChange('phone', e.target.value)}
          />
        </div>
        <Field
          label="Primary Location / City *"
          placeholder="Mumbai"
          value={formData.location}
          onChange={(e) => handleInputChange('location', e.target.value)}
        />
        <div className="grid gap-4 sm:grid-cols-2">
          <Field
            label="Owner / Contact Person Name"
            placeholder="Rajesh Kumar"
            value={formData.ownerName}
            onChange={(e) => handleInputChange('ownerName', e.target.value)}
          />
          <Field
            label="Years of Experience"
            placeholder="5+ years"
            value={formData.experience}
            onChange={(e) => handleInputChange('experience', e.target.value)}
          />
        </div>
        <Field
          label="Website / Social Media (Optional)"
          placeholder="https://yourwebsite.com"
          value={formData.website}
          onChange={(e) => handleInputChange('website', e.target.value)}
        />

        <button
          type="submit"
          className="w-full rounded-2xl bg-gradient-to-r from-rose-500 to-orange-400 px-4 py-3 text-base font-semibold text-white shadow-lg shadow-rose-200/60 transition hover:opacity-95 dark:shadow-rose-900/40"
        >
          Continue to Services
        </button>
      </form>
    );
  }

  return (
    <form onSubmit={handleStep2Submit} className="space-y-5">
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-rose-500 text-xs font-semibold text-white">
            2
          </span>
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">Select Your Services</h2>
        </div>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Choose all services you offer. This helps couples find you easily.
        </p>
      </div>

      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <label className="text-sm font-semibold text-slate-700 dark:text-slate-200">
            Services ({selectedServices.size} selected)
          </label>
          {selectedServices.size > 0 && (
            <button
              type="button"
              onClick={() => setSelectedServices(new Set())}
              className="text-xs font-semibold text-rose-500 hover:text-rose-600"
            >
              Clear all
            </button>
          )}
        </div>
        <div className="max-h-[400px] space-y-2 overflow-y-auto rounded-2xl border border-slate-200/70 bg-slate-50/50 p-4 dark:border-slate-700 dark:bg-slate-900/30">
          {categories.map((category) => (
            <div
              key={category.id}
              className="rounded-xl border border-slate-200/70 bg-white/80 dark:border-slate-700 dark:bg-slate-900/50"
            >
              <button
                type="button"
                onClick={() => toggleCategory(category.id)}
                className="flex w-full items-center justify-between px-4 py-3 text-left"
              >
                <span className="text-sm font-semibold text-slate-800 dark:text-slate-100">{category.title}</span>
                <svg
                  className={`h-4 w-4 text-slate-500 transition-transform ${
                    expandedCategories.has(category.id) ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {expandedCategories.has(category.id) && (
                <div className="grid grid-cols-1 gap-2 border-t border-slate-200/70 p-4 dark:border-slate-700 sm:grid-cols-2">
                  {category.items.map((item) => (
                    <label
                      key={item.id}
                      className={`flex items-center gap-2 rounded-xl border px-3 py-2 text-xs transition ${
                        selectedServices.has(item.id)
                          ? 'border-rose-400 bg-rose-50 text-rose-700 dark:border-rose-500/60 dark:bg-rose-950/30 dark:text-rose-300'
                          : 'border-slate-200/70 bg-white text-slate-600 hover:border-rose-200 hover:text-rose-600 dark:border-slate-700 dark:bg-slate-800/50 dark:text-slate-300'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={selectedServices.has(item.id)}
                        onChange={() => toggleService(item.id)}
                        className="h-3.5 w-3.5 rounded border-slate-300 text-rose-500 focus:ring-rose-400"
                      />
                      <span className="flex-1">{item.label}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-semibold text-slate-700 dark:text-slate-200">
            Portfolio / Work Samples (Links)
          </label>
          <textarea
            rows={2}
            placeholder="Share links to your portfolio, Instagram, Facebook page, or website..."
            value={additionalInfo.portfolio}
            onChange={(e) => handleAdditionalChange('portfolio', e.target.value)}
            className="w-full rounded-2xl border border-slate-200/80 bg-white/90 px-4 py-3 text-sm text-slate-700 shadow-sm focus:border-rose-400 focus:outline-none focus:ring-2 focus:ring-rose-100 dark:border-slate-700 dark:bg-slate-900/60 dark:text-white dark:focus:border-rose-500"
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700 dark:text-slate-200">Pricing Range</label>
            <input
              type="text"
              placeholder="₹50K - ₹5L per event"
              value={additionalInfo.pricing}
              onChange={(e) => handleAdditionalChange('pricing', e.target.value)}
              className="w-full rounded-2xl border border-slate-200/80 bg-white/90 px-4 py-2.5 text-sm text-slate-700 shadow-sm focus:border-rose-400 focus:outline-none focus:ring-2 focus:ring-rose-100 dark:border-slate-700 dark:bg-slate-900/60 dark:text-white dark:focus:border-rose-500"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700 dark:text-slate-200">Team Size</label>
            <input
              type="text"
              placeholder="5-10 members"
              value={additionalInfo.teamSize}
              onChange={(e) => handleAdditionalChange('teamSize', e.target.value)}
              className="w-full rounded-2xl border border-slate-200/80 bg-white/90 px-4 py-2.5 text-sm text-slate-700 shadow-sm focus:border-rose-400 focus:outline-none focus:ring-2 focus:ring-rose-100 dark:border-slate-700 dark:bg-slate-900/60 dark:text-white dark:focus:border-rose-500"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-semibold text-slate-700 dark:text-slate-200">
            Specialties & Unique Selling Points
          </label>
          <textarea
            rows={3}
            placeholder="What makes you unique? Mention your specialties, awards, certifications, or any standout features..."
            value={additionalInfo.specialties}
            onChange={(e) => handleAdditionalChange('specialties', e.target.value)}
            className="w-full rounded-2xl border border-slate-200/80 bg-white/90 px-4 py-3 text-sm text-slate-700 shadow-sm focus:border-rose-400 focus:outline-none focus:ring-2 focus:ring-rose-100 dark:border-slate-700 dark:bg-slate-900/60 dark:text-white dark:focus:border-rose-500"
          />
        </div>
      </div>

      <div className="flex gap-3">
        <button
          type="button"
          onClick={() => setStep(1)}
          className="flex-1 rounded-2xl border border-slate-300 bg-white px-4 py-3 text-base font-semibold text-slate-700 transition hover:bg-slate-50 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
        >
          Back
        </button>
        <button
          type="submit"
          className="flex-1 rounded-2xl bg-gradient-to-r from-rose-500 to-orange-400 px-4 py-3 text-base font-semibold text-white shadow-lg shadow-rose-200/60 transition hover:opacity-95 dark:shadow-rose-900/40"
        >
          Submit Application
        </button>
      </div>
    </form>
  );
}

function Field({ label, type = 'text', placeholder, value, onChange }) {
  return (
    <label className="space-y-1 text-sm font-semibold text-slate-700 dark:text-slate-200">
      {label}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full rounded-2xl border border-slate-200/80 bg-white/90 px-4 py-2.5 text-sm text-slate-700 shadow-sm focus:border-rose-400 focus:outline-none focus:ring-2 focus:ring-rose-100 dark:border-slate-700 dark:bg-slate-900/60 dark:text-white dark:focus:border-rose-500"
      />
    </label>
  );
}
