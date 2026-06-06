export const variantClasses = {
    default: `
      !border-slate-200
      !bg-slate-100
      !text-slate-900
      hover:!border-slate-300
      hover:!bg-slate-200
    `,
  
    primary: `
      !border-0
      !bg-cyan-500
      !text-white
      hover:!bg-cyan-400
      active:!bg-cyan-600
    `,
  
    auth: `
      !rounded-2xl
      !border-0
      !bg-cyan-500
      !text-white
      !font-semibold
      hover:!bg-cyan-400
    `,
  
    danger: `
      !border-0
      !bg-red-500
      !text-white
      hover:!bg-red-400
    `,
  
    ghost: `
      !border-white/10
      !bg-white/[0.04]
      !text-slate-200
      hover:!border-cyan-500/30
      hover:!bg-white/[0.08]
    `,
  
    icon: `
      !border-0
      !bg-transparent
      !shadow-none
      !p-0
      !text-slate-400
      hover:!text-primary
      hover:!bg-transparent
    `,
  } as const;