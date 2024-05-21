import Image from "next/image";
import Link from "next/link";
import React from "react";

interface HeaderProps {
  title?: string;
  navigation?: Array<{
    title: string;
    href?: string;
  }>;
}

export default function Header({ navigation, title }: HeaderProps) {
  return (
    <header className=" mx-auto px-8 py-5 flex items-center justify-center drawer">
      <div className="flex justify-center top-4 left-5 lg:absolute items-center">
        {/* Put your logo in public folder rename it icon.svg delete existing logo*/}
        <Image className="size-11" width={30} height={30} src={"/icon.svg"} alt="logo" />
        <text className="font-bold tracking-tight ml-1">{title}</text>
      </div>
      <div className=" flex-1 lg:flex hidden justify-center items-center gap-4 md:gap-12">
        {navigation?.map((value) => (
          <Link
            key={value.title}
            className="link link-hover capitalize"
            href={value.href ?? "#"}
          >
            {value.title}
          </Link>
        ))}
      </div>
    </header>
  );
}
