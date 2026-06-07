import clsx from "clsx";

import { CATEGORY_COLORS } from "./categoryTag.config";

interface Props {
  category: string;
}

const CategoryTag = ({ category }: Props) => {
  return (
    <span
      className={clsx(
        "rounded-full px-3 py-1 text-xs font-semibold",
        CATEGORY_COLORS[category] || "bg-slate-100 text-slate-700",
      )}
    >
      {category}
    </span>
  );
};

export default CategoryTag;
