import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const vehicleId = searchParams.get('vehicleId');
    const vendorId = searchParams.get('vendorId');

    if (!vehicleId && !vendorId) {
        return NextResponse.json({ error: 'Missing vehicleId or vendorId' }, { status: 400 });
    }

    try {
        const bookings = await prisma.booking.findMany({
            where: {
                OR: [
                    { vehicleId: vehicleId || undefined },
                    { vendorId: vendorId || undefined }
                ],
                status: { not: 'CANCELLED' }
            },
            select: {
                startDate: true,
                endDate: true
            }
        });

        return NextResponse.json(bookings);
    } catch (error) {
        console.error('Error fetching availability:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
