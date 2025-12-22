import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request) {
    try {
        const body = await request.json();
        const { userId, vehicleId, vendorId, startDate, endDate, totalAmount, type } = body;

        // Basic validation
        if (!userId || (!vehicleId && !vendorId) || !startDate || !endDate) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        const start = new Date(startDate);
        const end = new Date(endDate);

        // Check for conflicts
        const conflict = await prisma.booking.findFirst({
            where: {
                OR: [
                    { vehicleId: vehicleId || undefined },
                    { vendorId: vendorId || undefined }
                ],
                AND: [
                    { startDate: { lte: end } },
                    { endDate: { gte: start } },
                    { status: { not: 'CANCELLED' } }
                ]
            }
        });

        if (conflict) {
            return NextResponse.json({ error: 'Selected dates are already booked' }, { status: 409 });
        }

        const booking = await prisma.booking.create({
            data: {
                userId,
                vehicleId,
                vendorId,
                startDate: start,
                endDate: end,
                totalAmount: parseFloat(totalAmount),
                type: type || 'RENTAL',
                status: 'CONFIRMED', // Auto-confirm for prototype
            },
        });

        return NextResponse.json(booking);
    } catch (error) {
        console.error('Error creating booking:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
