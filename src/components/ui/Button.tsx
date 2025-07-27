import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", disabled, children, ...props }, ref) => {
    const baseClasses =
      "w-full text-center font-semibold py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2";
    const variants = {
      primary:
        "bg-blue-600 text-white hover:bg-blue-700 disabled:bg-blue-400 dark:disabled:bg-blue-800",
      secondary:
        "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600",
    };
    return (
      <button
        ref={ref}
        className={cn(baseClasses, variants[variant], className)}
        disabled={disabled}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button"; 