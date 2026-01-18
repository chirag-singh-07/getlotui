import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const ButtonGroup = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    orientation?: "horizontal" | "vertical";
  }
>(({ className, orientation = "horizontal", children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "inline-flex rounded-md shadow-sm",
        orientation === "vertical" ? "flex-col" : "flex-row",
        className,
      )}
      role="group"
      {...props}
    >
      {React.Children.map(children, (child, index) => {
        if (!React.isValidElement(child)) return child;

        const childElement = child as React.ReactElement<any>;
        return React.cloneElement(childElement, {
          className: cn(
            childElement.props.className,
            // Reset borders and radius
            orientation === "vertical" ? "w-full" : "",

            // First child
            index === 0 &&
              orientation === "horizontal" &&
              "rounded-r-none border-r-0",
            index === 0 &&
              orientation === "vertical" &&
              "rounded-b-none border-b-0",

            // Middle children
            index > 0 &&
              index < React.Children.count(children) - 1 &&
              (orientation === "horizontal"
                ? "rounded-none border-r-0 border-l-0"
                : "rounded-none border-t-0 border-b-0"),

            // Last child
            index === React.Children.count(children) - 1 &&
              orientation === "horizontal" &&
              "rounded-l-none border-l-0",
            index === React.Children.count(children) - 1 &&
              orientation === "vertical" &&
              "rounded-t-none border-t-0",
          ),
        });
      })}
    </div>
  );
});
ButtonGroup.displayName = "ButtonGroup";

export { ButtonGroup, Button };
