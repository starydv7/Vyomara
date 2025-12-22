import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
    try {
        const vendors = await prisma.vendor.findMany();

        const parsedVendors = vendors.map(vendor => ({
            ...vendor,
            categories: JSON.parse(vendor.categories || '[]'),
            features: JSON.parse(vendor.features || '{}'),
            searchData: JSON.parse(vendor.searchData || '{}'),
            gallery: JSON.parse(vendor.gallery || '[]'),
        }));

        return NextResponse.json(parsedVendors);
    } catch (error) {
        console.error('Error fetching vendors:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
