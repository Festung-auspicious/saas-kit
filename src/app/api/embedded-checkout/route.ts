'use server'
import { NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';
/**
 * Stripe API to handle payment sessions.
 * @param {NextRequest} request - The incoming request object.
 * @returns {NextResponse} - The response to the request.
 */
export async function POST(request: Request) {
    try {
        const { priceId, quantity } = await request.json();

        const session = await stripe.checkout.sessions.create({
            ui_mode: 'embedded',
            payment_method_types: ['card'],
            billing_address_collection: 'required',
            line_items: [
                {
                    price: priceId,
                    quantity
                },
            ],
            mode: 'payment',
            currency:'inr',
            //callback url for stripe session complete
            return_url: `${request.headers.get('origin')}/payment/status?session_id={CHECKOUT_SESSION_ID}`,
        });
        return NextResponse.json({ id: session.id, client_secret: session.client_secret });
    } catch (error: any) {
      console.error(error);
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}