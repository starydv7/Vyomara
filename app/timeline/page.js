'use client';

import { useState } from 'react';

const initialTasks = [
    {
        id: '12-months',
        period: '12 Months Before',
        items: [
            { id: 1, text: 'Determine budget', completed: true },
            { id: 2, text: 'Draft guest list', completed: true },
            { id: 3, text: 'Book venue', completed: false },
            { id: 4, text: 'Hire wedding planner', completed: false },
        ]
    },
    {
        id: '8-months',
        period: '8 Months Before',
        items: [
            { id: 5, text: 'Book photographer & videographer', completed: false },
            { id: 6, text: 'Book caterer', completed: false },
            { id: 7, text: 'Finalize guest list', completed: false },
            { id: 8, text: 'Start shopping for wedding dress', completed: false },
        ]
    },
    {
        id: '6-months',
        period: '6 Months Before',
        items: [
            { id: 9, text: 'Send save-the-dates', completed: false },
            { id: 10, text: 'Book florist', completed: false },
            { id: 11, text: 'Book entertainment (DJ/Band)', completed: false },
            { id: 12, text: 'Plan honeymoon', completed: false },
        ]
    },
    {
        id: '3-months',
        period: '3 Months Before',
        items: [
            { id: 13, text: 'Send invitations', completed: false },
            { id: 14, text: 'Finalize menu', completed: false },
            { id: 15, text: 'Book transportation', completed: false },
            { id: 16, text: 'Buy wedding rings', completed: false },
        ]
    }
];

export default function TimelinePage() {
    const [sections, setSections] = useState(initialTasks);

    const toggleTask = (sectionIndex, taskId) => {
        const newSections = [...sections];
        const section = newSections[sectionIndex];
        const task = section.items.find(t => t.id === taskId);
        task.completed = !task.completed;
        setSections(newSections);
    };

    const totalTasks = sections.reduce((acc, section) => acc + section.items.length, 0);
    const completedTasks = sections.reduce((acc, section) => acc + section.items.filter(t => t.completed).length, 0);
    const progress = Math.round((completedTasks / totalTasks) * 100);

    return (
        <main className="min-h-screen bg-slate-50 dark:bg-slate-950 py-12 px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Wedding Timeline</h1>
                    <p className="mt-2 text-slate-600 dark:text-slate-400">
                        Keep track of your wedding planning progress
                    </p>
                </div>

                {/* Progress Bar */}
                <div className="mb-12 rounded-2xl bg-white p-6 shadow-sm dark:bg-slate-900">
                    <div className="flex justify-between mb-2">
                        <span className="font-semibold text-slate-900 dark:text-white">Overall Progress</span>
                        <span className="font-bold text-rose-600">{progress}%</span>
                    </div>
                    <div className="h-4 w-full rounded-full bg-slate-100 dark:bg-slate-800">
                        <div
                            className="h-4 rounded-full bg-gradient-to-r from-rose-500 to-orange-400 transition-all duration-500"
                            style={{ width: `${progress}%` }}
                        ></div>
                    </div>
                    <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">
                        You have completed {completedTasks} out of {totalTasks} tasks. Keep it up!
                    </p>
                </div>

                {/* Timeline Items */}
                <div className="space-y-8">
                    {sections.map((section, sIdx) => (
                        <div key={section.id} className="relative pl-8 sm:pl-12">
                            {/* Vertical Line */}
                            {sIdx !== sections.length - 1 && (
                                <div className="absolute left-[11px] top-8 h-full w-0.5 bg-slate-200 dark:bg-slate-800 sm:left-[15px]"></div>
                            )}

                            {/* Dot */}
                            <div className="absolute left-0 top-1 h-6 w-6 rounded-full border-4 border-white bg-rose-500 shadow-sm dark:border-slate-950 sm:h-8 sm:w-8"></div>

                            <div className="rounded-2xl bg-white p-6 shadow-sm dark:bg-slate-900">
                                <h3 className="mb-4 text-xl font-bold text-slate-900 dark:text-white">{section.period}</h3>
                                <div className="space-y-3">
                                    {section.items.map((task) => (
                                        <label
                                            key={task.id}
                                            className={`flex cursor-pointer items-center gap-3 rounded-lg p-3 transition-colors hover:bg-slate-50 dark:hover:bg-slate-800 ${task.completed ? 'opacity-50' : ''}`}
                                        >
                                            <input
                                                type="checkbox"
                                                checked={task.completed}
                                                onChange={() => toggleTask(sIdx, task.id)}
                                                className="h-5 w-5 rounded border-slate-300 text-rose-600 focus:ring-rose-500"
                                            />
                                            <span className={`text-slate-700 dark:text-slate-300 ${task.completed ? 'line-through' : ''}`}>
                                                {task.text}
                                            </span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
