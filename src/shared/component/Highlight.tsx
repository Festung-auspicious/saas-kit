import React from "react";
interface Highlight {
  children: React.ReactNode;
}

export default function Highlight({ children }: Highlight) {
  return (
    <div className="p-4 px-5 rounded-r-sm bg-accent/10 text-sm border-l-[3px] border-accent/20">
      {children}
    </div>
  );
}

export function HighlightTag({children}:any) {
  return (
    <code className="text-sm bg-neutral-700 w-fit font-mono rounded px-1.5 py-1 text-base-content select-all ">
      {children}
    </code>
  );
}
