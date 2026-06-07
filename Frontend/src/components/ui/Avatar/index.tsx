// components/ui/Avatar.tsx

import clsx from "clsx";

type Props = {
  name?: string;
  className?: string;
};

const Avatar = ({ name, className }: Props) => {
  return (
    <div
      className={clsx(
        "h-11 w-11 items-center flex justify-center rounded-full bg-cyan-500 text-sm font-semibold text-white shadow-sm",
        className,
      )}
    >
      {name?.charAt(0)?.toUpperCase() || "U"}
    </div>
  );
};

export default Avatar;
