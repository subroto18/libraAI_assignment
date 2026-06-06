import { Input as AntInput } from "antd";
import type { InputProps, TextAreaProps } from "antd/es/input";
import clsx from "clsx";

import {
  baseInputClass,
  baseTextAreaClass,
  sizeClasses,
  textAreaSizeClasses,
  variantClasses,
} from "./input.config";

import type { InputSize, InputUiVariant } from "./types";

interface Props extends Omit<InputProps, "size"> {
  className?: string;
  size?: InputSize;
  uiVariant?: InputUiVariant;
}

const Input = ({
  className,
  size = "sm",
  uiVariant = "default",
  ...props
}: Props) => {
  return (
    <AntInput
      {...props}
      className={clsx(
        baseInputClass,
        sizeClasses[size],
        variantClasses[uiVariant],
        className,
      )}
    />
  );
};

interface TextAreaCustomProps extends Omit<TextAreaProps, "size"> {
  className?: string;
  size?: InputSize;
  uiVariant?: InputUiVariant;
}

const TextArea = ({
  className,
  size = "sm",
  uiVariant = "default",
  ...props
}: TextAreaCustomProps) => {
  return (
    <AntInput.TextArea
      {...props}
      className={clsx(
        baseTextAreaClass,
        textAreaSizeClasses[size],
        variantClasses[uiVariant],
        className,
      )}
    />
  );
};

Input.TextArea = TextArea;

export default Input;
