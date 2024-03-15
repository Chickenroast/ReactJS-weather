interface FlexProps {
  children?: any;
  className?: string;
  container?: boolean;
  /****** Container Props ********/
  flexDirection?: "row" | "column";
  justifyContent?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "initial"
    | "inherit";
  flexWrap?: "wrap" | "nowrap" | "wrap-reverse";
  alignItems?:
    | "stretch"
    | "center"
    | "flex-start"
    | "flex-end"
    | "baseline"
    | "initial"
    | "inherit";
  /****** Child Props ********/
  flexGrow?: number;
  flexShrink?: number;
  flexBasis?: number;
  flex?: string;
  /****** Common Layout Props ********/
  padding?: string;
  margin?: string;
  width?: string;
  height?: string;
  maxWidth?: string;
  maxHeight?: string;
}

export const Flex = ({
  children,
  container,
  flexDirection,
  justifyContent,
  flexWrap,
  alignItems,
  flexGrow,
  flexShrink,
  flexBasis,
  flex,
  padding,
  margin,
  width,
  height,
  maxWidth,
  maxHeight,
  className,
}: FlexProps) => {
  const flexClasses = [
    container && "flex",
    flexDirection && `flex-${flexDirection}`,
    justifyContent && `justify-${justifyContent}`,
    flexWrap && `flex-${flexWrap}`,
    alignItems && `items-${alignItems}`,
    flexGrow && `flex-grow-${flexGrow}`,
    flexShrink && `flex-shrink-${flexShrink}`,
    flexBasis && `flex-basis-${flexBasis}`,
    flex && `flex-${flex}`,
    padding && `p-${padding}`,
    margin && `m-${margin}`,
    width && `w-${width}`,
    height && `h-${height}`,
    maxWidth && `max-w-${maxWidth}`,
    maxHeight && `max-h-${maxHeight}`,
  ];

  return <div className={flexClasses.join(" ")}>{children}</div>;
};
