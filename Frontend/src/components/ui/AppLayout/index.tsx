import { Layout as AntLayout, LayoutProps } from "antd";
import clsx from "clsx";

interface Props extends LayoutProps {
  className?: string;
  children: React.ReactNode;
}

const AppLayout = ({ className, children, ...props }: Props) => {
  return (
    <AntLayout {...props} className={clsx(className)}>
      {children}
    </AntLayout>
  );
};

export default AppLayout;
