import { NextRequest, NextResponse } from "next/server";
import { Polar } from '@polar-sh/sdk'

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const userId = searchParams.get('userId')

    console.log('Checkout request initiated for userId:', userId);

    if (!userId) {
        return NextResponse.json({ error: 'userId is required' }, { status: 400 });
    }

    // Debug logging for environment variables
    console.log('Environment Configuration:', {
        hasAccessToken: !!process.env.POLAR_ACCESS_TOKEN,
        polarEnv: process.env.POLAR_ENV,
        hasStandardPlan: !!process.env.POLAR_STANDARD_PLAN,
        appUrl: process.env.NEXT_PUBLIC_APP_URL,
        nodeEnv: process.env.NODE_ENV
    });

    try {
        const polar = new Polar({
            server: process.env.POLAR_ENV === 'sandbox' ? 'sandbox' : 'production',
            accessToken: process.env.POLAR_ACCESS_TOKEN
        });

        if (!process.env.POLAR_STANDARD_PLAN || !process.env.NEXT_PUBLIC_APP_URL) {
            console.error('Critical: Missing configuration variables');
            return NextResponse.json({ error: 'Server configuration error: Missing env vars' }, { status: 500 });
        }

        console.log('Attempting to create checkout session with plan:', process.env.POLAR_STANDARD_PLAN);

        const session = await polar.checkouts.create({
            products: [process.env.POLAR_STANDARD_PLAN],
            successUrl: `${process.env.NEXT_PUBLIC_APP_URL}/billing/success`,
            metadata: {
                userId
            }
        })

        console.log('Checkout session created successfully:', session.url);
        return NextResponse.json({ url: session.url })
    } catch (error) {
        console.error('Polar Checkout Failed:', error);
        // Log more details if available
        if (typeof error === 'object' && error !== null) {
            console.error('Error details:', JSON.stringify(error, null, 2));
        }

        return NextResponse.json({
            error: 'Failed to create checkout session',
            details: error instanceof Error ? error.message : 'Unknown error'
        }, { status: 500 });
    }
}
