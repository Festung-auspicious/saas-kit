'use client'
import React from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

interface DataLayout{
    children:React.ReactNode,
}

 function DataLayout({children}:DataLayout){
    const {data:session, status} = useSession()
    const router = useRouter();
    if (status === 'loading') {
        return <div className='flex justify-center items-center h-screen w-screen'>loading....</div>;
      }
    
      if (status === 'unauthenticated') {
        router.push('/login');
        return;
      }
    return(
        <>{children}</>
    )
}
export default DataLayout;