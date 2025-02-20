// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconAwardSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconAwardSvgIcon(props: IconAwardSvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 40 40"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M22.46 6.03l2.89 5.83c.4.81 1.17 1.37 2.07 1.5l6.43.93c2.26.33 3.16 3.1 1.52 4.69l-4.64 4.5c-.65.63-.95 1.55-.79 2.44l1.1 6.37c.39 2.24-1.96 3.96-3.98 2.9l-5.78-3.03c-.8-.42-1.75-.42-2.54 0l-5.78 3.03c-2.02 1.05-4.36-.66-3.98-2.9l1.1-6.37c.15-.89-.14-1.81-.79-2.44l-4.64-4.5c-1.64-1.59-.74-4.37 1.52-4.69l6.43-.93c.89-.13 1.67-.69 2.07-1.5l2.89-5.83c1.01-2.04 3.91-2.04 4.92 0z"
        }
        fill={"#fff"}
      ></path>

      <path
        d={
          "M27.05 35.18l-5.78-3.02c-.8-.42-1.75-.42-2.54 0l-5.79 3.02c-2.01 1.06-4.36-.66-3.97-2.9l.11-.64c.51 1.5 2.29 2.37 3.86 1.54l5.79-3.02c.79-.42 1.74-.42 2.54 0l5.78 3.02c1.58.83 3.36-.04 3.87-1.53l.11.63c.39 2.24-1.96 3.96-3.98 2.9z"
        }
        fill={"#5f626b"}
      ></path>

      <path
        d={
          "M22.46 6.03l2.89 5.83c.4.81 1.17 1.37 2.07 1.5l6.43.93c2.26.33 3.16 3.1 1.52 4.69l-4.64 4.5c-.65.63-.95 1.55-.79 2.44l1.1 6.37c.39 2.24-1.96 3.96-3.98 2.9l-5.78-3.03c-.8-.42-1.75-.42-2.54 0l-5.78 3.03c-2.02 1.05-4.36-.66-3.98-2.9l1.1-6.37c.15-.89-.14-1.81-.79-2.44l-4.64-4.5c-1.64-1.59-.74-4.37 1.52-4.69l6.43-.93c.89-.13 1.67-.69 2.07-1.5l2.89-5.83c1.01-2.04 3.91-2.04 4.92 0z"
        }
        fill={"none"}
        stroke={"#083954"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default IconAwardSvgIcon;
/* prettier-ignore-end */
