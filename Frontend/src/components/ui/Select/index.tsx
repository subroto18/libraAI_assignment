import { Select as AntSelect } from "antd";
import type { SelectProps } from "antd";
import clsx from "clsx";
import { baseSelectClass, variantClasses } from "./select.config";
import type { SelectOption, SelectSize, SelectUiVariant } from "./types.ts";
interface Props extends Omit<SelectProps, "size" | "options"> {
  className?: string;
  size?: SelectSize;
  uiVariant?: SelectUiVariant;
  options?: SelectOption[];
}

const antSizeMap = {
  sm: "middle",
  md: "large",
  lg: "large",
} as const;

const Select = ({
  className,
  size = "sm",
  uiVariant = "default",
  options,
  ...props
}: Props) => {
  return (
    <AntSelect
      options={options}
      {...props}
      size={antSizeMap[size]}
      className={clsx(baseSelectClass, variantClasses[uiVariant], className)}
    />
  );
};

export default Select;
