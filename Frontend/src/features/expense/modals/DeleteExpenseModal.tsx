import Button from "@/components/ui/Button";
import Modal from "@/components/ui/Modal";
import { DeleteOutlined } from "@ant-design/icons";
import { Expense } from "../types/expense.types";

interface DeleteExpenseModalProps {
  open: boolean;
  expense: Expense | null;
  loading?: boolean;
  onClose: () => void;
  onConfirm: () => Promise<void>;
}

const DeleteExpenseModal = ({
  open,
  expense,
  loading,
  onClose,
  onConfirm,
}: DeleteExpenseModalProps) => {
  return (
    <Modal open={open} onCancel={onClose} footer={null} centered width={500}>
      <div className="py-4 text-center">
        <div
          className="
            mx-auto
            flex
            h-16
            w-16
            items-center
            justify-center
            rounded-full
            bg-red-100
            text-red-600
          "
        >
          <DeleteOutlined className="text-2xl" />
        </div>

        <h2 className="mt-5 text-xl font-semibold text-slate-900">
          Delete Expense
        </h2>

        <p className="mt-3 text-slate-500">
          Are you sure you want to delete
          <span className="mx-1 font-semibold text-slate-900">
            {expense?.title}
          </span>
          ?
        </p>

        <p className="mt-1 text-sm text-slate-400">
          This action cannot be undone.
        </p>

        <div className="mt-8 flex justify-center gap-3">
          <Button onClick={onClose}>Cancel</Button>
          <Button danger loading={loading} onClick={onConfirm}>
            Delete Expense
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default DeleteExpenseModal;
