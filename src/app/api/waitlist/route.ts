import { NextRequest, NextResponse } from 'next/server';
import WaitlistModel from '../../../models/User/WaitListUsers'; // Assuming the model path, adjust accordingly
import { dbConnect } from '@/lib/mongo';


export async function POST(req: NextRequest) {
    // Connect to MongoDB
  await dbConnect();

    try {
      const { email } =  await req.json();
      if (!email) {
        return NextResponse.json({ success: false, message: 'Email is required' });
      }

      // Check if email already exists in the waitlist
      const existingEmail = await WaitlistModel.findOne({ email });
      if (existingEmail) {
        return NextResponse.json({ success: false, message: 'Email already in waitlist' });
      }

      // Add email to the waitlist
      const waitlistEntry = new WaitlistModel({ email });
      await waitlistEntry.save();

      return NextResponse.json({ success: true, message: 'Email added to waitlist', data: waitlistEntry });
    } catch (error) {
      return NextResponse.json({ success: false, message: 'Server error' });
    }
}
