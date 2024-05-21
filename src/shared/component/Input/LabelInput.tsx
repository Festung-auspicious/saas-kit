import React from "react";
interface InputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  variant?: "primary" | "secondary" | "accent" | "ghost" | "link" | 'none' | undefined;
  className?: string;
  title?:string;
  topRightLabel?: string;
  bottmRightLabel?: string; 
  bottomLeftLabel?: string;
}
export default function LabelInput({title, variant, topRightLabel, bottmRightLabel, bottomLeftLabel}:InputProps) {
  return (
    <label className="form-control w-full max-w-xs">
      <div className="label">
        {title && <span className="label-text">{title}</span>}
        {topRightLabel && <span className="label-text-alt">{topRightLabel}</span>}
      </div>
      <input
        type="text"
        placeholder="Type here"
        className={`input input-bordered input-${variant} w-full max-w-xs`}
      />
      <div className="label">
        {bottomLeftLabel && <span className="label-text-alt">{bottomLeftLabel}</span>}
        {bottmRightLabel && <span className="label-text-alt">{bottmRightLabel}</span>}
      </div>
    </label>
  );
}
