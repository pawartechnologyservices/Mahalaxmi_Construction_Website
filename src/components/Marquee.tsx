import { ReactNode } from "react";

interface MarqueeProps {
  children: ReactNode;
  speed?: number;
}

export const Marquee = ({ children, speed = 30 }: MarqueeProps) => {
  return (
    <div className="relative overflow-hidden w-full">
      <div 
        className="flex gap-8 marquee"
        style={{ animation: `marquee ${speed}s linear infinite` }}
      >
        {children}
        {children}
      </div>
    </div>
  );
};
