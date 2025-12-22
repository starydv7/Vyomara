'use client';

import { useState } from 'react';

export default function AvailabilityCalendar() {
    const [currentDate, setCurrentDate] = useState(new Date());

    // Mock booked dates (randomly generate some for demo)
    const isDateBooked = (day) => {
        return (day % 5 === 0) || (day % 7 === 0);
    };

    const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
    const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();

    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const nextMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
    };

    const prevMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
    };

    return (
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-slate-800">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Availability Calendar</h3>

            <div className="flex items-center justify-between mb-4">
                <button onClick={prevMonth} className="p-2 hover:bg-slate-100 rounded-full dark:hover:bg-slate-800">
                    ←
                </button>
                <span className="font-semibold text-slate-700 dark:text-slate-300">
                    {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
                </span>
                <button onClick={nextMonth} className="p-2 hover:bg-slate-100 rounded-full dark:hover:bg-slate-800">
                    →
                </button>
            </div>

            <div className="grid grid-cols-7 gap-1 text-center mb-2">
                {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
                    <div key={day} className="text-xs font-medium text-slate-400 py-1">
                        {day}
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-7 gap-1">
                {[...Array(firstDayOfMonth)].map((_, i) => (
                    <div key={`empty-${i}`} className="aspect-square"></div>
                ))}

                {[...Array(daysInMonth)].map((_, i) => {
                    const day = i + 1;
                    const booked = isDateBooked(day);
                    return (
                        <div
                            key={day}
                            className={`aspect-square flex items-center justify-center rounded-lg text-sm font-medium transition-colors
                                ${booked
                                    ? 'bg-rose-100 text-rose-600 cursor-not-allowed dark:bg-rose-900/30 dark:text-rose-400'
                                    : 'bg-slate-50 text-slate-700 hover:bg-green-100 hover:text-green-700 cursor-pointer dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-green-900/30 dark:hover:text-green-400'
                                }`}
                            title={booked ? 'Booked' : 'Available'}
                        >
                            {day}
                        </div>
                    );
                })}
            </div>

            <div className="flex gap-4 mt-4 text-xs">
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded bg-rose-100 dark:bg-rose-900/30"></div>
                    <span className="text-slate-500">Booked</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded bg-slate-50 dark:bg-slate-800"></div>
                    <span className="text-slate-500">Available</span>
                </div>
            </div>
        </div>
    );
}
