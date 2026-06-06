import { useEffect } from "react";
import moment from "moment";
import Input from "@/components/ui/Input";
import { DatePicker, Form } from "antd";
import Modal from "@/components/ui/Modal";
import Select from "@/components/ui/Select";
import Button from "@/components/ui/Button";
import InputNumber from "@/components/ui/InputNumber";
const { TextArea } = Input;

const CATEGORY_OPTIONS = [
  { label: "Food", value: "Food" },
  { label: "Travel", value: "Travel" },
  { label: "Shopping", value: "Shopping" },
  { label: "Bills", value: "Bills" },
  { label: "Health", value: "Health" },
  { label: "Education", value: "Education" },
  { label: "Other", value: "Other" },
];

interface Expense {
  id: string;
  title: string;
  amount: number;
  category: string;
  description?: string;
  expenseDate: string;
}

interface ExpenseFormModalProps {
  open: boolean;
  expense?: Expense | null;
  loading?: boolean;
  onClose: () => void;
  onSubmit: (values: any) => Promise<void>;
  refetch: () => void;
}

export const ExpenseFormModal = ({
  open,
  expense,
  loading,
  onClose,
  refetch,
  onSubmit,
}: ExpenseFormModalProps) => {
  const [form] = Form.useForm();

  useEffect(() => {
    if (!open) return;
    if (expense) {
      form.setFieldsValue({
        title: expense.title,
        amount: expense.amount,
        category: expense.category,
        description: expense.description,
        expenseDate: moment(expense.expenseDate),
      });
    } else {
      form.resetFields();
    }
  }, [expense, open, form]);

  const handleFinish = async (values: any) => {
    try {
      await onSubmit({
        ...values,
        expenseDate: values.expenseDate.format("YYYY-MM-DD"),
      });
      onClose();
      form.resetFields();
      refetch();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal
      open={open}
      onCancel={onClose}
      footer={null}
      width={650}
      centered
      destroyOnClose
      title={
        <div>
          <h2 className="text-xl font-semibold">
            {expense ? "Edit Expense" : "Add Expense"}
          </h2>

          <p className="text-sm text-slate-500">
            {expense
              ? "Update your expense details"
              : "Track your spending efficiently"}
          </p>
        </div>
      }
    >
      <Form
        form={form}
        layout="vertical"
        onFinish={handleFinish}
        className="mt-6"
      >
        <Form.Item
          label="Title"
          name="title"
          rules={[
            {
              required: true,
              message: "Title is required",
            },
          ]}
        >
          <Input placeholder="Enter expense title" />
        </Form.Item>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <Form.Item
            label="Amount"
            name="amount"
            rules={[
              {
                required: true,
                message: "Amount is required",
              },
            ]}
          >
            <InputNumber
              className="!w-full"
              type="number"
              min={1}
              placeholder="Amount"
            />
          </Form.Item>

          <Form.Item
            label="Category"
            name="category"
            rules={[
              {
                required: true,
                message: "Category is required",
              },
            ]}
          >
            <Select
              size="lg"
              placeholder="Select category"
              options={CATEGORY_OPTIONS}
            />
          </Form.Item>
        </div>

        <Form.Item
          label="Expense Date"
          name="expenseDate"
          rules={[
            {
              required: true,
              message: "Expense date is required",
            },
          ]}
        >
          <DatePicker size="large" className="w-full" />
        </Form.Item>

        <Form.Item label="Description" name="description">
          <TextArea rows={4} placeholder="Optional description" />
        </Form.Item>

        <div className="flex justify-end gap-3">
          <Button onClick={onClose}>Cancel</Button>
          <Button type="primary" htmlType="submit" loading={loading}>
            {expense ? "Update Expense" : "Add Expense"}
          </Button>
        </div>
      </Form>
    </Modal>
  );
};
