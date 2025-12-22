'use client';

import { useState, useEffect } from 'react';

export default function AvailabilityCalendar({ vehicleId, vendorId }) {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [bookedDates, setBookedDates] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchAvailability() {
            if (!vehicleId && !vendorId) return;

            try {
                const params = new URLSearchParams();
                if (vehicleId) params.append('vehicleId', vehicleId);
                if (vendorId) params.append('vendorId', vendorId);

                const res = await fetch(`/api/availability?${params.toString()}`);
                if (res.ok) {
                    const bookings = await res.json();
                    const dates = [];
                    bookings.forEach(booking => {
                        let start = new Date(booking.startDate);
                        const end = new Date(booking.endDate);

                        while (start <= end) {
                            dates.push(start.toISOString().split('T')[0]);
                            start.setDate(start.getDate() + 1);
                        }
                    });
                    setBookedDates(dates);
                }
            } catch (error) {
                console.error('Failed to fetch availability:', error);
            } finally {
                setLoading(false);
            }
        }

        fetchAvailability();
    }, [vehicleId, vendorId]);

    const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
    const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();

    const prevMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
    };

    const nextMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
    };

    const isBooked = (day) => {
        const dateStr = new Date(currentDate.getFullYear(), currentDate.getMonth(), day + 1).toISOString().split('T')[0];
        return bookedDates.includes(dateStr);
    };

    return (
        <div className="w-full max-w-md mx-auto bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 p-4">
            <div className="flex justify-between items-center mb-4">
                <button onClick={prevMonth} className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full">
                    ←
                </button>
                <h3 className="font-bold text-slate-900 dark:text-white">
                    {currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}
                </h3>
                <button onClick={nextMonth} className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full">
                    →
                </button>
            </div>

            <div className="grid grid-cols-7 gap-1 text-center text-sm mb-2">
                {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(d => (
                    <span key={d} className="text-slate-400 font-medium">{d}</span>
                ))}
            </div>

            <div className="grid grid-cols-7 gap-1">
                {[...Array(firstDayOfMonth)].map((_, i) => (
                    <div key={`empty-${i}`} />
                ))}
                {[...Array(daysInMonth)].map((_, i) => {
                    const day = i + 1;
                    const booked = isBooked(day);
                    return (
                        <div
                            key={day}
                            className={`
                aspect-square flex items-center justify-center rounded-lg text-sm font-medium
                ${booked
                                    ? 'bg-rose-100 text-rose-600 dark:bg-rose-900/30 dark:text-rose-400 cursor-not-allowed'
                                    : 'hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer text-slate-700 dark:text-slate-300'}
              `}
                            title={booked ? 'Booked' : 'Available'}
                        >
                            {day}
                        </div>
                    );
                })}
            </div>

            <div className="flex gap-4 mt-4 text-xs justify-center">
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded bg-rose-100 dark:bg-rose-900/30"></div>
                    <span className="text-slate-500">Booked</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded border border-slate-200 dark:border-slate-700"></div>
                    <span className="text-slate-500">Available</span>
                </div>
            </div>
        </div>
    );
}
