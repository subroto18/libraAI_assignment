import { WarningOutlined, ReloadOutlined } from "@ant-design/icons";

import Button from "@/components/ui/Button";

interface ErrorStateProps {
  message?: string;
  onRetry?: () => void;
}

export const ErrorState = ({
  message = "Something went wrong",
  onRetry,
}: ErrorStateProps) => {
  return (
    <div
      className="
        flex
        min-h-[320px]
        flex-col
        items-center
        justify-center
        rounded-3xl
        border
        border-red-100
        bg-white
        p-10
        text-center
        shadow-sm
      "
    >
      <div
        className="
          flex
          h-20
          w-20
          items-center
          justify-center
          rounded-full
          bg-red-50
        "
      >
        <WarningOutlined className="text-4xl text-red-500" />
      </div>

      <h2 className="mt-6 text-2xl font-bold text-slate-900">
        Something went wrong
      </h2>

      <p className="mt-3 max-w-md text-sm leading-6 text-slate-500">
        {message}
      </p>

      {onRetry && (
        <Button
          type="primary"
          icon={<ReloadOutlined />}
          onClick={onRetry}
          className="mt-8"
        >
          Try Again
        </Button>
      )}
    </div>
  );
};
