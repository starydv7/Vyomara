import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
    try {
        const vehicles = await prisma.vehicle.findMany();

        const parsedVehicles = vehicles.map(vehicle => ({
            ...vehicle,
            features: JSON.parse(vehicle.features || '[]'),
        }));

        return NextResponse.json(parsedVehicles);
    } catch (error) {
        console.error('Error fetching vehicles:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
