import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(request, { params }) {
    const { id } = params;

    try {
        const vendor = await prisma.vendor.findFirst({
            where: {
                OR: [
                    { id: id },
                    { slug: id }
                ]
            }
        });

        if (!vendor) {
            return NextResponse.json({ error: 'Vendor not found' }, { status: 404 });
        }

        // Parse JSON fields
        const parsedVendor = {
            ...vendor,
            categories: JSON.parse(vendor.categories || '[]'),
            features: JSON.parse(vendor.features || '{}'),
            searchData: JSON.parse(vendor.searchData || '{}'),
            gallery: JSON.parse(vendor.gallery || '[]'),
        };

        return NextResponse.json(parsedVendor);
    } catch (error) {
        console.error('Error fetching vendor:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
