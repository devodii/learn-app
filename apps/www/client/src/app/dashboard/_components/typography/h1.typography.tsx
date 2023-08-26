import clsx from "clsx";
import React, { forwardRef, memo } from "react";

interface Props {
  value: string;
}

export const H1 = memo(
  forwardRef<
    HTMLHeadingElement,
    React.HTMLAttributes<HTMLHeadingElement> & Props
  >((props, ref) => {
    const { value, className, ...rest } = props;
    return (
      <h1
        {...rest}
        className={clsx("text-3xl lg:text-5xl font-bold", className)}
        ref={ref}
      >
        {value}
      </h1>
    );
  })
);
H1.displayName = "Typography--h1";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {};
export {};
