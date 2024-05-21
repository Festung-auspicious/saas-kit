import React from 'react'

interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  variant?: "primary" | "secondary" | "accent" | "ghost" | "link" | "active"
  children: React.ReactNode
  className?: string
}


export default function Button({variant ="primary", children, className,...rest}:ButtonProps) {
  function changeFAColor (color:string):string {
    if(color === "primary") return `btn btn-primary`
    if(color === "secondary") return `btn btn-secondary`
    if(color === "accent") return `btn btn-accent`
    if(color === "ghost") return `btn btn-ghost`
    if(color === "link") return `btn btn-link`
    if(color === "active") return `btn btn-active`
    return "btn";
  };
  return (
    <button {...rest}  className={changeFAColor(variant).concat(" ", className ?? "")}>{children}</button>
  )
}