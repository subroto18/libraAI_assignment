import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import { PlusOutlined, SearchOutlined } from "@ant-design/icons";

interface ExpenseFiltersProps {
  search: string;
  category: string;
  onSearchChange: (value: string) => void;
  onCategoryChange: (value: string) => void;
  onAddExpense: () => void;
}

const categoryOptions = [
  {
    label: "All Categories",
    value: "",
  },
  {
    label: "Food",
    value: "Food",
  },
  {
    label: "Travel",
    value: "Travel",
  },
  {
    label: "Shopping",
    value: "Shopping",
  },
  {
    label: "Bills",
    value: "Bills",
  },
  {
    label: "Health",
    value: "Health",
  },
  {
    label: "Education",
    value: "Education",
  },
];

const ExpenseFilters = ({
  search,
  category,
  onSearchChange,
  onCategoryChange,
  onAddExpense,
}: ExpenseFiltersProps) => {
  return (
    <div
      className="
        rounded-2xl
        border
        border-slate-200
        bg-white
        p-4
        shadow-sm
      "
    >
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-col gap-3 md:flex-row">
          <Input
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search expenses..."
            prefix={<SearchOutlined />}
            className="w-full md:w-80"
          />

          <Select
            value={category}
            onChange={onCategoryChange}
            options={categoryOptions}
            className="w-full md:w-52"
            placeholder="Category"
          />
        </div>

        <Button type="primary" icon={<PlusOutlined />} onClick={onAddExpense}>
          Add Expense
        </Button>
      </div>
    </div>
  );
};

export default ExpenseFilters;
