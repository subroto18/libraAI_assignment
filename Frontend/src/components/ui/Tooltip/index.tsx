import { Tooltip as AntTooltip } from "antd";

import type { TooltipProps } from "antd";

type Props = TooltipProps;

const Tooltip = ({ children, ...props }: Props) => {
  return <AntTooltip {...props}>{children}</AntTooltip>;
};

export default Tooltip;
