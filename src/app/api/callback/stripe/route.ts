import { NextResponse, NextRequest } from 'next/server';
import { stripe } from '@/lib/stripe';
import { signIn } from '@/lib/next-auth';
import User from '@/models/User/User';
import { dbConnect } from '@/lib/mongo';


/**
 * Stripe callback to handle payment status and update or create user accordingly.
 * @param {NextRequest} request - The incoming request object.
 * @returns {NextResponse} - The response to the request.
 */
export const GET = async (request: NextRequest) => {
  try {
    // Ensure the request is a POST request
    if (request.method !== 'GET') {
      return new NextResponse('Method Not Allowed', { status: 405 });
    }

    // Extract query parameters from the request URL
    const queryParams = new URL(request.url).searchParams;
    const session_id = queryParams.get('session_id');
    if (!session_id) {
      return new NextResponse('Session ID is required', { status: 400 });
    }
    // Parse the request body to get the event data
    const session = await stripe.checkout.sessions.retrieve(session_id);
    
    // Handle the status
    switch (session.status) {
      case 'complete':
        if(!session.customer_details) return NextResponse.json({erorr: "email not found!"});
        await dbConnect();
        //Upsert user if not exist
        await User.findOneAndUpdate({email:session.customer_details.email},{hasPlan:true},{upsert:true})
        // Send email to user
        signIn('sendgrid',{email:session.customer_details.email});
        break;
      // Handle other event types
      default:
        console.log(`Unhandled event type ${session.status}`);
    }

    // Return a response to acknowledge receipt of the event
    return NextResponse.json('Event received', { status: 200 });
  } catch (error) {
    console.error('Error in Stripe callback', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
};


