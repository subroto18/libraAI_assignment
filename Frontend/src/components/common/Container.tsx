import clsx from "clsx";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  maxWidth?: string;
};

const Container = ({
  children,
  className,
  maxWidth = "90%",
}: ContainerProps) => {
  return (
    <div
      className={clsx(
        "mx-auto w-full px-4 sm:px-6 lg:px-8 xl:px-10",
        className,
      )}
      style={{
        maxWidth,
        margin: "auto",
      }}
    >
      {children}
    </div>
  );
};

export default Container;
