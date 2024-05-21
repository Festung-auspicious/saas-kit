import Image from "next/image";
import React from "react";
import Button from "./Button";
interface Hero {
  img?: string;
  title: string;
  description: string;
  buttonTitle?: string;
  onClick?: React.MouseEventHandler | undefined;
}
   

export default function Hero({
  title,
  img,
  description,
  buttonTitle,
  onClick,
}: Hero) {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <Image
          alt="hero"
          height={"468"}
          width={"334"}
          src={
            img ??
            "https://images.unsplash.com/photo-1515734392280-e60c25eb9f01?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          className="max-w-sm object-contain rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">{title ?? "SHIPLY"}</h1>
          <p className="py-6">
            {description ??
               "Get started quickly on building your SaaS, AI tool or any other web app with our comprehensive NextJS starter kit, designed to help you start earning online revenue in no time"}
          </p>
          <Button onClick={onClick}>{buttonTitle ?? "Get Started"}</Button>
        </div>
      </div>
    </div>
  );
}
