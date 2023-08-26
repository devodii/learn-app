import clsx from "clsx";
import React, { forwardRef, memo } from "react";

interface Props {
  value: string;
}

export const H2 = memo(
  forwardRef<
    HTMLHeadingElement,
    React.HTMLAttributes<HTMLHeadingElement> & Props
  >((props, ref) => {
    const { value, className, ...rest } = props;
    return (
      <h2
        {...rest}
        className={clsx("text-2xl lg:text-3xl font-bold", className)}
        ref={ref}
      >
        {value}
      </h2>
    );
  })
);
H2.displayName = "Typography--h1";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {};
export {};
