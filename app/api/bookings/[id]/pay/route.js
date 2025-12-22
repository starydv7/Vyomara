import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { auth } from '@clerk/nextjs/server';

const prisma = new PrismaClient();

export async function POST(request, { params }) {
    try {
        const { userId } = auth();
        const { id } = params;

        if (!userId) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        // Simulate payment processing delay
        await new Promise(resolve => setTimeout(resolve, 1500));

        // Update booking status to CONFIRMED
        const updatedBooking = await prisma.booking.update({
            where: { id: id },
            data: {
                status: 'CONFIRMED',
                // In a real app, we'd store transaction ID, payment method, etc.
            }
        });

        return NextResponse.json({ success: true, booking: updatedBooking });
    } catch (error) {
        console.error('Error processing payment:', error);
        return NextResponse.json({ error: 'Payment Failed' }, { status: 500 });
    }
}
