import type { InputSize, InputUiVariant } from "./types";

export const sizeClasses: Record<InputSize, string> = {
  sm: `
      !h-10
      [&_.ant-input]:!text-sm
    `,

  md: `
      !h-12
      [&_.ant-input]:!text-base
    `,

  lg: `
      !h-14
      [&_.ant-input]:!text-lg
    `,
};

export const textAreaSizeClasses: Record<InputSize, string> = {
  sm: `
      [&_textarea]:!text-sm
    `,
  md: `
      [&_textarea]:!text-base
    `,
  lg: `
      [&_textarea]:!text-lg
    `,
};

export const variantClasses = {
  default: `
      !border-slate-200
      !bg-slate-50
  
      hover:!border-primary
      focus-within:!border-primary
      focus-within:!shadow-[0_0_0_4px_rgba(4,122,251,0.12)]
  
      !text-slate-900
      placeholder:!text-slate-400
    `,

  auth: `
      !border-white/10
      !bg-white/[0.04]
      hover:!border-cyan-500/50
      focus-within:!border-cyan-400
      focus-within:!shadow-[0_0_0_4px_rgba(34,211,238,0.12)]
  
      !text-white
      placeholder:!text-white/60
    `,
};

export const baseInputClass = `
  !rounded-xl
  transition-all
  duration-200
  !bg-transparent
`;

export const baseTextAreaClass = `
  !rounded-xl
  transition-all
  duration-200
  !bg-transparent
`;
