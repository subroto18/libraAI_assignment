import type { SelectSize, SelectUiVariant } from "./types";

export const baseSelectClass = `w-full`;

export const sizeClasses: Record<SelectSize, string> = {
  sm: `
    [&_.ant-select-selector]:!h-10
    [&_.ant-select-selector]:!min-h-10
    [&_.ant-select-selector]:!items-center
  `,

  md: `
    [&_.ant-select-selector]:!h-12
    [&_.ant-select-selector]:!min-h-12
    [&_.ant-select-selector]:!items-center
  `,

  lg: `
    [&_.ant-select-selector]:!h-14
    [&_.ant-select-selector]:!min-h-14
    [&_.ant-select-selector]:!items-center
  `,
};

export const variantClasses: Record<SelectUiVariant, string> = {
  default: `
    [&_.ant-select-selector]:!border-slate-200
    [&_.ant-select-selector]:!bg-slate-50
    [&_.ant-select-selector:hover]:!border-primary
  `,
  success: "",
  error: `
    [&_.ant-select-selector]:!border-red-500
  `,
};
