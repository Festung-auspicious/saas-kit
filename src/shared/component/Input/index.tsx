import React from 'react'

interface InputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  variant?: "primary" | "secondary" | "accent" | "ghost" | "link" | 'none' | undefined
  className?: string
}


export default function Input({variant ="none", className,...rest}:InputProps) {
  return <input {...rest}  className={`input input-${variant} ${className}`}/>
}
