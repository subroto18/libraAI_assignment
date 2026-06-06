import { Tag as AntTag } from "antd";

import type { TagProps } from "antd";
type Props = TagProps;
const Tag = ({ children, ...props }: Props) => {
  return <AntTag {...props}>{children}</AntTag>;
};

export default Tag;
