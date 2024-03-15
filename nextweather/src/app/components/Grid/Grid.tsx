interface GridProps {
  children?: any;
  className?: string;
  container?: boolean;

  /****** Container Props ********/
  gridTemplateColumns?: string;
  gridTemplateRows?: string;
  gridColumnGap?: string;
  gridRowGap?: string;
  gridGap?: string;
  justifyContent?:
    | "start"
    | "end"
    | "center"
    | "stretch"
    | "space-around"
    | "space-between"
    | "space-evenly"
    | "initial"
    | "inherit";
  alignItems?:
    | "start"
    | "end"
    | "center"
    | "stretch"
    | "baseline"
    | "initial"
    | "inherit";
  alignContent?:
    | "start"
    | "end"
    | "center"
    | "stretch"
    | "space-around"
    | "space-between"
    | "space-evenly"
    | "initial"
    | "inherit";

  /****** Child Props ********/
  gridColumnStart?: string;
  gridColumnEnd?: string;
  gridRowStart?: string;
  gridRowEnd?: string;

  /****** Common Layout Props ********/
  padding?: string;
  margin?: string;
  width?: string;
  height?: string;
  maxWidth?: string;
  maxHeight?: string;
}

export const Grid = ({
  children,
  container,
  gridTemplateColumns,
  gridTemplateRows,
  gridColumnGap,
  gridRowGap,
  gridGap,
  justifyContent,
  alignItems,
  alignContent,
  gridColumnStart,
  gridColumnEnd,
  gridRowStart,
  gridRowEnd,
  padding,
  margin,
  width,
  height,
  maxWidth,
  maxHeight,
  className,
}: GridProps) => {
  const gridClasses = [
    container && "grid",
    gridTemplateColumns && `grid-cols-${gridTemplateColumns}`,
    gridTemplateRows && `grid-rows-${gridTemplateRows}`,
    gridColumnGap && `col-gap-${gridColumnGap}`,
    gridRowGap && `row-gap-${gridRowGap}`,
    gridGap && `gap-${gridGap}`,
    justifyContent && `justify-${justifyContent}`,
    alignItems && `items-${alignItems}`,
    alignContent && `content-${alignContent}`,
    gridColumnStart && `col-start-${gridColumnStart}`,
    gridColumnEnd && `col-end-${gridColumnEnd}`,
    gridRowStart && `row-start-${gridRowStart}`,
    gridRowEnd && `row-end-${gridRowEnd}`,
    padding && `p-${padding}`,
    margin && `m-${margin}`,
    width && `w-${width}`,
    height && `h-${height}`,
    maxWidth && `max-w-${maxWidth}`,
    maxHeight && `max-h-${maxHeight}`,
  ];

  return (
    <div className={gridClasses.filter(Boolean).join(" ")}>{children}</div>
  );
};
