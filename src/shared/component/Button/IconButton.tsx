import React from "react";

interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    variant?: "primary" | "secondary" | "accent" | "ghost" | "link" | "active"
    children: React.ReactNode
    className?: string
    icon?:React.ReactElement
  }

export default function IconButton({icon, variant ="primary", children, className, ...rest}:ButtonProps) {
  function changeFAColor (color:string):string {
    if(color === "primary") return `btn btn-primary`
    if(color === "secondary") return `btn btn-secondary`
    if(color === "accent") return `btn btn-accent`
    if(color === "ghost") return `btn btn-ghost`
    if(color === "link") return `btn btn-link`
    if(color === "active") return `btn btn-active`
    return "btn";
  }
  return (
    <button {...rest} className={changeFAColor(variant).concat(" ", className ?? "")}>
      {icon ?? (<svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>)}
      {children}
    </button>
  );
}
