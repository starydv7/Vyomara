const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const vendors = [
    {
        id: 'venue_hotel_select_siwan',
        slug: 'hotel-select-siwan',
        type: 'venue',
        status: 'active',
        verified: true,

        // Basic Info
        name: "Hotel Select – Marriage & Banquet Hall",
        displayName: "Hotel Select Siwan",
        brand: "Hotel Select",
        categories: JSON.stringify([
            "Marriage Hall",
            "Banquet Hall",
            "Wedding Venue",
            "Party Hall",
            "Conference Hall"
        ]),
        rating: 4.2,
        reviewsCount: 180,

        // Address
        fullAddress: "Laxhmipur Shiswan Dhala, Amlori, Siwan, Bihar 841226, India",
        street: "Laxhmipur Shiswan Dhala",
        locality: "Amlori",
        city: "Siwan",
        state: "Bihar",
        pincode: "841226",
        country: "India",

        // Geo
        latitude: 26.2249,
        longitude: 84.3576,
        googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=26.2249,84.3576",

        // Contact
        phonePrimary: "+91 87973 27330",
        email: "hotelselect2020@gmail.com",
        website: "https://hotelselectsiwan.in",

        // Capabilities (Mapped to features)
        features: JSON.stringify({
            event_types: [
                "Wedding", "Reception", "Engagement", "Sangeet",
                "Birthday Party", "Anniversary", "Corporate Event"
            ],
            facilities: [
                "Indoor Banquet Hall", "Decoration Support", "Lighting System",
                "Sound System", "Parking Facility", "Power Backup", "Professional Event Staff"
            ]
        }),

        // Search Engine (Mapped to searchData)
        searchData: JSON.stringify({
            text_search: {
                primary_keywords: [
                    "hotel select", "hotel select siwan", "marriage hall siwan",
                    "banquet hall siwan", "wedding hall siwan"
                ],
                aliases: ["Hotel Select Marriage Hall", "Select Banquet Hall"]
            },
            multilingual_search: {
                hindi: ["सीवान मैरिज हॉल", "सीवान शादी हॉल", "होटल सेलेक्ट सीवान"],
                hinglish: ["shaadi hall siwan", "marriage hall laxmi nagar"]
            },
            geo_search: { enabled: true, radius_km: [1, 2, 5, 10, 20] }
        }),

        // Images
        coverImage: "https://hotelselectsiwan.in/images/a1.jpg",
        gallery: JSON.stringify([
            "https://hotelselectsiwan.in/images/1%20%2819%29.jpeg",
            "https://hotelselectsiwan.in/images/1%20%282%29.jpeg"
        ]),

        priceRange: "₹2L - ₹5L",
        featured: true,
        badge: "Premium"
    },
    {
        id: 'royal-orchid',
        slug: 'royal-orchid',
        type: 'venue',
        name: "Royal Orchid Banquets",
        displayName: "Royal Orchid Banquets",
        categories: JSON.stringify(["Venue", "Banquet Hall"]),
        city: "Mumbai",
        state: "Maharashtra",
        fullAddress: "Mumbai, Maharashtra",
        rating: 4.9,
        reviewsCount: 1247,
        priceRange: "₹2L - ₹8L",
        verified: true,
        featured: true,
        badge: "Top Rated",
        coverImage: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=400&h=300&fit=crop"
    },
    {
        id: 'dream-lens',
        slug: 'dream-lens',
        type: 'vendor',
        name: "Dream Lens Photography",
        displayName: "Dream Lens Photography",
        categories: JSON.stringify(["Photography"]),
        city: "Delhi",
        state: "Delhi",
        fullAddress: "Delhi NCR",
        rating: 4.8,
        reviewsCount: 892,
        priceRange: "₹50K - ₹3L",
        verified: true,
        featured: true,
        badge: "Featured",
        coverImage: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=400&h=300&fit=crop"
    },
];

const vehicles = [
    {
        id: 'scorpio-classic',
        name: 'Mahindra Scorpio Classic',
        category: 'Baraat Special',
        type: 'SUV',
        capacity: 7,
        pricePerKm: 16,
        fullDayRate: 3500,
        driverAllowance: 500,
        image: 'https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?w=800&q=80',
        description: 'The classic choice for a grand Baraat entry. Spacious, rugged, and commanding presence.',
        features: JSON.stringify(['Sunroof', 'Decor Ready', 'Premium Sound', 'White Color']),
        rating: 4.8,
        reviewsCount: 124
    },
    {
        id: 'fortuner-legender',
        name: 'Toyota Fortuner Legender',
        category: 'Baraat Special',
        type: 'Luxury SUV',
        capacity: 7,
        pricePerKm: 25,
        fullDayRate: 5500,
        driverAllowance: 800,
        image: 'https://images.unsplash.com/photo-1626668893632-6f3a4466d22f?w=800&q=80',
        description: 'Make a statement with the Fortuner Legender. Ultimate luxury and dominance on the road.',
        features: JSON.stringify(['Panoramic Sunroof', 'Leather Seats', '4x4', 'Black Edition']),
        rating: 4.9,
        reviewsCount: 89
    }
];

async function main() {
    console.log('Seeding database...');

    // Seed Vendors
    for (const vendor of vendors) {
        await prisma.vendor.upsert({
            where: { id: vendor.id },
            update: {},
            create: {
                id: vendor.id,
                slug: vendor.slug,
                type: vendor.type,
                status: vendor.status,
                verified: vendor.verified,
                name: vendor.name,
                displayName: vendor.displayName,
                brand: vendor.brand,
                categories: vendor.categories,
                rating: vendor.rating,
                reviewsCount: vendor.reviewsCount,

                fullAddress: vendor.fullAddress,
                street: vendor.street,
                locality: vendor.locality,
                city: vendor.city,
                state: vendor.state,
                pincode: vendor.pincode,
                country: vendor.country || "India",

                latitude: vendor.latitude,
                longitude: vendor.longitude,
                googleMapsUrl: vendor.googleMapsUrl,

                phonePrimary: vendor.phonePrimary,
                email: vendor.email,
                website: vendor.website,

                features: vendor.features,
                searchData: vendor.searchData,

                coverImage: vendor.coverImage,
                gallery: vendor.gallery,

                priceRange: vendor.priceRange,
                featured: vendor.featured,
                badge: vendor.badge
            }
        });
    }

    // Seed Vehicles
    for (const vehicle of vehicles) {
        await prisma.vehicle.upsert({
            where: { id: vehicle.id },
            update: {},
            create: {
                id: vehicle.id,
                name: vehicle.name,
                category: vehicle.category,
                type: vehicle.type,
                capacity: vehicle.capacity,
                pricePerKm: vehicle.pricePerKm,
                fullDayRate: vehicle.fullDayRate,
                driverAllowance: vehicle.driverAllowance,
                image: vehicle.image,
                description: vehicle.description,
                features: vehicle.features,
                rating: vehicle.rating,
                reviewsCount: vehicle.reviewsCount
            }
        });
    }

    console.log('Seeding completed.');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
