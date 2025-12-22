import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(request, { params }) {
    const { id } = params;

    try {
        const vehicle = await prisma.vehicle.findUnique({
            where: { id: id }
        });

        if (!vehicle) {
            return NextResponse.json({ error: 'Vehicle not found' }, { status: 404 });
        }

        // Parse JSON fields
        const parsedVehicle = {
            ...vehicle,
            features: JSON.parse(vehicle.features || '[]'),
        };

        return NextResponse.json(parsedVehicle);
    } catch (error) {
        console.error('Error fetching vehicle:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
