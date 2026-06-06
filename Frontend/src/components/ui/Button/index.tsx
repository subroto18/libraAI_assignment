import { Button as AntButton } from "antd";
import type { ButtonProps } from "antd";
import clsx from "clsx";

import { variantClasses } from "./button.config";

type ButtonSize = "sm" | "md" | "lg";

type ButtonVariant = keyof typeof variantClasses;

interface Props extends Omit<ButtonProps, "size"> {
  className?: string;

  size?: ButtonSize;

  uiVariant?: ButtonVariant;
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: "!h-9 !px-4 !text-sm",

  md: "!h-11 !px-5 !text-sm",

  lg: "!h-14 !px-6 !text-base",
};

const baseButtonClass = `
  !rounded-xl
  !font-medium
  shadow-sm
  transition-all
  duration-200
  disabled:opacity-50
  disabled:cursor-not-allowed
`;

const Button = ({
  children,
  className,
  size = "sm",
  uiVariant,
  htmlType = "button",
  ...props
}: Props) => {
  return (
    <AntButton
      {...props}
      htmlType={htmlType}
      className={clsx(
        baseButtonClass,

        sizeClasses[size],

        uiVariant && variantClasses[uiVariant],

        className,
      )}
    >
      <span className="text-inherit">{children}</span>
    </AntButton>
  );
};

export default Button;
