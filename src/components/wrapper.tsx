import { cn } from "@/lib/utils";

type WrapperProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLElement>,
  HTMLElement
>;

const Wrapper = ({ children, className, ...props }: WrapperProps) => {
  return (
    <main className={cn(["", className])} {...props}>
      {children}
    </main>
  );
};

export default Wrapper;
