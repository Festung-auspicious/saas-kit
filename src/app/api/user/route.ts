'use server'
import { auth } from '@/lib/next-auth';
import { getUserByEmail } from '@/lib/services/userServices';
import { NextResponse, NextRequest } from 'next/server';
interface ProtectedRoute extends NextRequest
{
    auth:any
}
/**Protected Rote using auth.js
 * @param {NextRequest} request - The incoming request object.
 * @returns {NextResponse} - The response to the request.
 */
export const GET= auth(async (request: ProtectedRoute) => {
    try {
        if(request.auth) {
          let user = await getUserByEmail(`${request?.auth.user.email}`);
          return NextResponse.json({data:{email:user?.email, name:user?.name, verified:user?.verified}})
        }else{
          return NextResponse.redirect(new URL("/login", request.url))
        }

    } catch (error: any) {
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
})