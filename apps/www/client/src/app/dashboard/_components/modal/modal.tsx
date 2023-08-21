import { Card } from "@/components/ui/card";
import { ReactNode, forwardRef, memo } from "react";

// default: create modal with <div>
interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
  callback?: (fn: any) => boolean;
}

export const Modal = memo(
  forwardRef<HTMLDivElement, Props>((props, ref) => {
    const { children, className, ...rest } = props;
    return (
      <Card className={className} ref={ref} {...rest}>
        {children}
      </Card>
    );
  })
);

Modal.displayName = "Modal Container";
