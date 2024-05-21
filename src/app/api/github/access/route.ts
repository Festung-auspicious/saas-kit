import { auth } from '@/lib/next-auth';
import { NextRequest, NextResponse } from 'next/server';
interface ProtectedRoute extends NextRequest
{
    auth:any
}
/**Protected Rote using auth.js
 * @param {NextRequest} request - The incoming request object.
 * @returns {NextResponse} - The response to the request.
 */

export const PUT = auth(async (request: ProtectedRoute) => {
    const { searchParams } =  new URL(request.url);
    const username = searchParams.get('username')
    if(!request.auth){
            return NextResponse.json({error:"Unauthorized"},{status:401})
    }
    if(!request.auth.user.hasPlan){
            return NextResponse.json({error:"Forbidden"},{status:403})
    }
    
    if (!username) {
        return NextResponse.json({ error: 'Username is required' });
    }
    
    try {
        const repoOwner = process.env.GITHUB_REPO_OWNER;
        const repoName = process.env.GITHUB_REPO_NAME;
        ;
        const token = process.env.GITHUB_TOKEN;
        
        const url = `https://api.github.com/repos/${repoOwner}/${repoName}/collaborators/${username}`;
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Authorization': `token ${token}`,
                'Accept': 'application/vnd.github.v3+json'
            },
            body: JSON.stringify({
        permission: 'pull'
      })
    });
    
    if (response.ok) {
        return NextResponse.json({ message: 'Access granted successfully to the GitHub repository.' },{status:200});
    } else {
        const errorData = await response.json();
        console.log(errorData)
        return NextResponse.json({ error: errorData.message || 'Failed to grant access to the GitHub repository.' },{status:response.status});
    }
  } catch (error) {
      return NextResponse.json({ error: 'Internal server error' },{status: 500});
  }
}
) 