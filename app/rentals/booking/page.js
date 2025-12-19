'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import VehicleCard from '@/components/VehicleCard';
import WeddingLogistics from '@/components/WeddingLogistics';
import { vehicles } from '@/data/vehicles';

function BookingContent() {
    const searchParams = useSearchParams();
    const router = useRouter();

    // Trip Details from URL
    const [tripDetails, setTripDetails] = useState({
        from: '',
        to: '',
        date: '',
        distance: 0,
        tripType: 'round-trip'
    });

    // Booking State
    const [selectedVehicle, setSelectedVehicle] = useState(null);
    const [bookingFor, setBookingFor] = useState('guests');
    const [specialReqs, setSpecialReqs] = useState('');
    const [keepBuffer, setKeepBuffer] = useState(true);
    const [selectedCategory, setSelectedCategory] = useState('All');

    useEffect(() => {
        const from = searchParams.get('fromLocation') || '';
        const to = searchParams.get('toLocation') || '';
        const date = searchParams.get('date') || '';
        const distance = parseInt(searchParams.get('distance') || '0');
        const tripType = searchParams.get('tripType') || 'round-trip';
        const vehicleId = searchParams.get('vehicleId');

        setTripDetails({ from, to, date, distance, tripType });

        // Pre-select vehicle if ID is present
        if (vehicleId) {
            const preSelected = vehicles.find(v => v.id === vehicleId);
            if (preSelected) {
                // Calculate estimated price immediately for the pre-selected vehicle
                const estimatedPrice = preSelected.pricePerKm * distance * (tripType === 'round-trip' ? 2 : 1);
                setSelectedVehicle({ ...preSelected, estimatedPrice });
            }
        }
    }, [searchParams]);

    // Calculate estimated prices for all vehicles
    const vehiclesWithPrices = vehicles.map(v => ({
        ...v,
        estimatedPrice: v.pricePerKm * tripDetails.distance * (tripDetails.tripType === 'round-trip' ? 2 : 1)
    }));

    const handleBookNow = () => {
        console.log('Booking initiated', selectedVehicle);
        if (!selectedVehicle) {
            alert('Please select a vehicle first');
            return;
        }

        // Here you would typically send data to backend
        const bookingId = `BK-${Math.floor(Math.random() * 10000)}`;
        console.log('Redirecting to success page with ID:', bookingId);
        router.push(`/booking-success?id=${bookingId}`);
    };

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-12 px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Complete Your Booking</h1>
                    <p className="mt-2 text-slate-600 dark:text-slate-400">
                        {tripDetails.from} to {tripDetails.to} • {tripDetails.distance} km • {tripDetails.tripType === 'round-trip' ? 'Round Trip' : 'One Way'}
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Left Column: Vehicle Selection */}
                    <div className="lg:col-span-2 space-y-6">
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                            <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Select Vehicle</h2>

                            {/* Category Filter Tabs */}
                            <div className="flex flex-wrap gap-2">
                                {['All', 'Baraat Special', 'Family & Staff', 'Luxury', 'Baraati Bus', 'Vintage'].map((cat) => (
                                    <button
                                        key={cat}
                                        onClick={() => setSelectedCategory(cat)}
                                        className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${selectedCategory === cat
                                            ? 'bg-rose-500 text-white shadow-md'
                                            : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'
                                            }`}
                                    >
                                        {cat}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-4">
                            {vehiclesWithPrices
                                .filter(v => selectedCategory === 'All' || v.category === selectedCategory || (selectedCategory === 'Baraat Special' && (v.category === 'Dulha Special' || v.category === 'Swag Entry')))
                                .map((vehicle) => (
                                    <VehicleCard
                                        key={vehicle.id}
                                        vehicle={vehicle}
                                        isSelected={selectedVehicle?.id === vehicle.id}
                                        onSelect={setSelectedVehicle}
                                    />
                                ))}
                        </div>
                    </div>

                    {/* Right Column: Logistics & Summary */}
                    <div className="space-y-6">
                        <WeddingLogistics
                            bookingFor={bookingFor}
                            setBookingFor={setBookingFor}
                            specialReqs={specialReqs}
                            setSpecialReqs={setSpecialReqs}
                            keepBuffer={keepBuffer}
                            setKeepBuffer={setKeepBuffer}
                        />

                        {/* Price Summary */}
                        <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700 sticky top-6">
                            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Booking Summary</h3>

                            <div className="space-y-3 text-sm text-slate-600 dark:text-slate-400 pb-4 border-b border-slate-100 dark:border-slate-700">
                                <div className="flex justify-between">
                                    <span>Base Fare ({tripDetails.distance} km x {tripDetails.tripType === 'round-trip' ? 2 : 1})</span>
                                    <span className="font-medium text-slate-900 dark:text-white">
                                        {selectedVehicle ? `₹${selectedVehicle.estimatedPrice}` : '-'}
                                    </span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Driver Allowance</span>
                                    <span className="font-medium text-slate-900 dark:text-white">₹500</span>
                                </div>
                                {keepBuffer && (
                                    <div className="flex justify-between text-amber-600 dark:text-amber-500">
                                        <span>Buffer Time Charge</span>
                                        <span>₹1,000</span>
                                    </div>
                                )}
                            </div>

                            <div className="pt-4 flex justify-between items-center mb-6">
                                <span className="text-lg font-bold text-slate-900 dark:text-white">Total</span>
                                <span className="text-2xl font-bold text-rose-600">
                                    {selectedVehicle
                                        ? `₹${selectedVehicle.estimatedPrice + 500 + (keepBuffer ? 1000 : 0)}`
                                        : '-'
                                    }
                                </span>
                            </div>

                            <button
                                onClick={handleBookNow}
                                disabled={!selectedVehicle}
                                className="w-full rounded-xl bg-gradient-to-r from-rose-500 to-orange-400 py-4 text-sm font-bold text-white shadow-lg shadow-rose-200/50 transition hover:opacity-95 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed dark:shadow-none"
                            >
                                Confirm Booking
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function BookingPage() {
    return (
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
            <BookingContent />
        </Suspense>
    );
}
