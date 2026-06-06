import { Modal as AntModal, ModalProps } from "antd";
import clsx from "clsx";

interface Props extends ModalProps {
  className?: string;
}

const Modal = ({ children, className, ...props }: Props) => {
  return (
    <AntModal
      {...props}
      className={clsx("rounded-lg", className)}
      centered
      destroyOnClose
    >
      {children}
    </AntModal>
  );
};

export default Modal;
