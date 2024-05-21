import Link from "next/link";
import React from "react";
interface LinkButton
{
    variant?: "primary" | "secondary" | "accent" | "ghost" | "link" | "active";
    href:string;
    title:string;
    className?: string;
}
function changeFAColor (color:string):string {
    if(color === "primary") return `btn btn-primary`
    if(color === "secondary") return `btn btn-secondary`
    if(color === "accent") return `btn btn-accent`
    if(color === "ghost") return `btn btn-ghost`
    if(color === "link") return `btn btn-link`
    if(color === "active") return `btn btn-active`
    return "btn";
  }

export default function LinkButton({href, variant='primary', className, title}:LinkButton) {
  return (
    <div className="mx-2">
      <Link
        href={href}
        className={changeFAColor(variant).concat(" font-bold py-2 px-4 rounded ", className ?? "")}
      >
        {title}
      </Link>
    </div>
  );
}
