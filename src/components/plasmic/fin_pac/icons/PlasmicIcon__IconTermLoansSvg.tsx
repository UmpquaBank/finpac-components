// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconTermLoansSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconTermLoansSvgIcon(props: IconTermLoansSvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      version={"1.1"}
      x={"0"}
      y={"0"}
      viewBox={"0 0 40 40"}
      xmlSpace={"preserve"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M9 5h22c2.2 0 4 1.8 4 4v22c0 2.2-1.8 4-4 4H9c-2.2 0-4-1.8-4-4V9c0-2.2 1.8-4 4-4z"
        }
        fill={"#fff"}
      ></path>

      <path
        d={
          "M35 29v2c0 2.2-1.8 4-4 4H9c-2.2 0-4-1.8-4-4v-2c0 2.2 1.8 4 4 4h22c2.2 0 4-1.8 4-4z"
        }
        fill={"#5f626b"}
      ></path>

      <path
        d={
          "M9 5h22c2.2 0 4 1.8 4 4v22c0 2.2-1.8 4-4 4H9c-2.2 0-4-1.8-4-4V9c0-2.2 1.8-4 4-4z"
        }
        fill={"none"}
        stroke={"#083954"}
        strokeMiterlimit={"10"}
      ></path>

      <path
        d={"M8.6 13.1h22.8M8.6 20h22.8"}
        fill={"none"}
        stroke={"#083954"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M28.8 16.5L17.3 28.7l-7.2 1.7 1.3-7.3 11.5-12.2c1.5-1.6 4.1-1.7 5.8-.2l.1.1c1.5 1.5 1.5 4.1 0 5.7z"
        }
        fill={"#fff"}
      ></path>

      <path fill={"#015486"} d={"M17.3 28.7l-7.2 1.7 1.3-7.3z"}></path>

      <path
        d={
          "M28.8 16.5L17.3 28.7l-7.2 1.7 1.3-7.3 11.5-12.2c1.5-1.6 4.1-1.7 5.8-.2l.1.1c1.5 1.5 1.5 4.1 0 5.7h0z"
        }
        fill={"none"}
        stroke={"#083954"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default IconTermLoansSvgIcon;
/* prettier-ignore-end */
