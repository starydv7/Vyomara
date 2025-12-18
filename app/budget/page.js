'use client';

import { useState } from 'react';

const initialExpenses = [
    { id: 1, category: 'Venue', estimated: 500000, actual: 450000, paid: 100000 },
    { id: 2, category: 'Catering', estimated: 300000, actual: 0, paid: 0 },
    { id: 3, category: 'Photography', estimated: 150000, actual: 140000, paid: 50000 },
    { id: 4, category: 'Decoration', estimated: 200000, actual: 0, paid: 0 },
    { id: 5, category: 'Attire', estimated: 100000, actual: 120000, paid: 120000 },
];

export default function BudgetPage() {
    const [totalBudget, setTotalBudget] = useState(1500000);
    const [expenses, setExpenses] = useState(initialExpenses);

    const totalEstimated = expenses.reduce((acc, curr) => acc + curr.estimated, 0);
    const totalActual = expenses.reduce((acc, curr) => acc + (curr.actual || 0), 0);
    const totalPaid = expenses.reduce((acc, curr) => acc + (curr.paid || 0), 0);

    const remainingBudget = totalBudget - totalActual;

    return (
        <main className="min-h-screen bg-slate-50 dark:bg-slate-950 py-12 px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-6xl">
                <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                    <div>
                        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Budget Planner</h1>
                        <p className="mt-2 text-slate-600 dark:text-slate-400">
                            Manage your wedding expenses efficiently
                        </p>
                    </div>
                    <div className="flex items-center gap-4 rounded-xl bg-white p-4 shadow-sm dark:bg-slate-900">
                        <span className="text-sm font-medium text-slate-600 dark:text-slate-400">Total Budget:</span>
                        <div className="flex items-center text-xl font-bold text-slate-900 dark:text-white">
                            ₹
                            <input
                                type="number"
                                value={totalBudget}
                                onChange={(e) => setTotalBudget(Number(e.target.value))}
                                className="w-32 bg-transparent border-none focus:ring-0 p-0 font-bold text-right"
                            />
                        </div>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="mb-8 grid gap-6 sm:grid-cols-3">
                    <div className="rounded-2xl bg-white p-6 shadow-sm dark:bg-slate-900">
                        <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Estimated Cost</p>
                        <p className="mt-2 text-3xl font-bold text-slate-900 dark:text-white">₹{totalEstimated.toLocaleString()}</p>
                    </div>
                    <div className="rounded-2xl bg-white p-6 shadow-sm dark:bg-slate-900">
                        <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Actual Cost</p>
                        <p className={`mt-2 text-3xl font-bold ${totalActual > totalBudget ? 'text-red-500' : 'text-green-500'}`}>
                            ₹{totalActual.toLocaleString()}
                        </p>
                    </div>
                    <div className="rounded-2xl bg-white p-6 shadow-sm dark:bg-slate-900">
                        <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Paid So Far</p>
                        <p className="mt-2 text-3xl font-bold text-rose-600">₹{totalPaid.toLocaleString()}</p>
                    </div>
                </div>

                {/* Expenses Table */}
                <div className="overflow-hidden rounded-2xl bg-white shadow-sm dark:bg-slate-900">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-sm">
                            <thead className="bg-slate-50 text-slate-500 dark:bg-slate-800 dark:text-slate-400">
                                <tr>
                                    <th className="px-6 py-4 font-semibold">Category</th>
                                    <th className="px-6 py-4 font-semibold">Estimated</th>
                                    <th className="px-6 py-4 font-semibold">Actual</th>
                                    <th className="px-6 py-4 font-semibold">Paid</th>
                                    <th className="px-6 py-4 font-semibold">Difference</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                                {expenses.map((expense) => (
                                    <tr key={expense.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                                        <td className="px-6 py-4 font-medium text-slate-900 dark:text-white">{expense.category}</td>
                                        <td className="px-6 py-4 text-slate-600 dark:text-slate-300">₹{expense.estimated.toLocaleString()}</td>
                                        <td className="px-6 py-4 text-slate-600 dark:text-slate-300">
                                            {expense.actual > 0 ? `₹${expense.actual.toLocaleString()}` : '-'}
                                        </td>
                                        <td className="px-6 py-4 text-slate-600 dark:text-slate-300">
                                            {expense.paid > 0 ? `₹${expense.paid.toLocaleString()}` : '-'}
                                        </td>
                                        <td className="px-6 py-4">
                                            {expense.actual > 0 ? (
                                                <span className={expense.actual > expense.estimated ? 'text-red-500' : 'text-green-500'}>
                                                    {expense.actual > expense.estimated ? '+' : ''}
                                                    ₹{(expense.actual - expense.estimated).toLocaleString()}
                                                </span>
                                            ) : (
                                                <span className="text-slate-400">-</span>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </main>
    );
}
