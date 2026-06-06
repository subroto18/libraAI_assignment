import { InputNumber as AntInputNumber } from "antd";
import type { InputNumberProps } from "antd";

import clsx from "clsx";

import { baseInputNumberClass, sizeClasses } from "./inputNumber.config";

import type { InputNumberSize, InputNumberUiVariant } from "./types";

interface Props extends Omit<InputNumberProps, "size"> {
  className?: string;
  size?: InputNumberSize;
  uiVariant?: InputNumberUiVariant;
}

const InputNumber = ({
  className,
  size = "sm",
  uiVariant = "default",
  ...props
}: Props) => {
  return (
    <AntInputNumber
      {...props}
      className={clsx(baseInputNumberClass, sizeClasses[size], className)}
    />
  );
};

export default InputNumber;
