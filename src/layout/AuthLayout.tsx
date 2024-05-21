"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";
interface AuthLayout {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: AuthLayout) {
  const { data: session, status } = useSession();

  const router = useRouter();
  if (status === "loading") {
    return (
      <div className="w-full h-screen flex justify-center">
        <span className="loading loading-ring loading-lg"></span>
      </div>
    );
  }

  if (status === "authenticated") {
    router.push("/dashboard");
    return;
  }

  return <>{children}</>;
}
