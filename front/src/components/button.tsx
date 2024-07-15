import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant: 'primary' | 'secondary'
}
export function Button({ children, variant, ...props }: ButtonProps) {
  return (
    <button
      className={` flex items-center justify-center w-full rounded-lg py-2 px-5 font-medium text-base gap-2  
        ${variant === 'primary' && 'bg-lime-300 text-lime-950 hover:bg-lime-400'} 
        ${variant === 'secondary' && 'hover:bg-zinc-700 bg-zinc-800 text-zinc-200'}`} {...props}
    >
      {children}
    </button>
  )
}