import React from "react";

interface FlexProps {
  children: React.ReactNode;
  flexDirection?: "row" | "col";
  justifyContent?: "start" | "end" | "center" | "between" | "around" | "evenly";
  alignItems?: "start" | "end" | "center" | "baseline" | "stretch";
  flexWrap?: "wrap" | "nowrap" | "wrap-reverse";
  className?: string;
}

export const Flex: React.FC<FlexProps> = ({
  children,
  flexDirection = "row",
  justifyContent = "start",
  alignItems = "stretch",
  flexWrap = "nowrap",
  className = "",
}) => {
  const baseClass = "flex";
  const directionClass = flexDirection === "col" ? "flex-col" : "flex-row";
  const justifyContentClass = `justify-${justifyContent}`;
  const alignItemsClass = `items-${alignItems}`;
  const flexWrapClass = `flex-${flexWrap}`;

  const combinedClassNames = [
    baseClass,
    directionClass,
    justifyContentClass,
    alignItemsClass,
    flexWrapClass,
    className,
  ].join(" ");

  return <div className={combinedClassNames}>{children}</div>;
};
