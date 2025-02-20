// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconScaleSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconScaleSvgIcon(props: IconScaleSvgIconProps) {
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
          "M26.9 30.3c-1.4 0-2.5-1.1-2.5-2.5V11c0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5v16.8c0 1.4-1.2 2.5-2.5 2.5zm-6.9 0c-1.4 0-2.5-1.1-2.5-2.5v-9.5c0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5v9.5c0 1.4-1.1 2.5-2.5 2.5zm-6.9 0c-1.4 0-2.5-1.1-2.5-2.5v-2.6c0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5v2.6c0 1.4-1.1 2.5-2.5 2.5z"
        }
        fill={"#015486"}
      ></path>
    </svg>
  );
}

export default IconScaleSvgIcon;
/* prettier-ignore-end */
