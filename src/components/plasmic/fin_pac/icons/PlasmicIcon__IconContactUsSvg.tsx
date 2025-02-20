// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconContactUsSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconContactUsSvgIcon(props: IconContactUsSvgIconProps) {
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
          "M25.8 36H14.2c-2.2 0-4-1.8-4-4V8c0-2.2 1.8-4 4-4h11.6c2.2 0 4 1.8 4 4v24c0 2.2-1.8 4-4 4z"
        }
        fill={"#fff"}
      ></path>

      <path
        d={
          "M29.8 30v2c0 2.2-1.8 4-4 4H14.2c-2.2 0-4-1.8-4-4v-2c0 2.2 1.8 4 4 4h11.6c2.2 0 4-1.8 4-4z"
        }
        fill={"#5f626b"}
      ></path>

      <path
        d={
          "M25.8 36H14.2c-2.2 0-4-1.8-4-4V8c0-2.2 1.8-4 4-4h11.6c2.2 0 4 1.8 4 4v24c0 2.2-1.8 4-4 4z"
        }
        fill={"none"}
        stroke={"#083954"}
        strokeMiterlimit={"10"}
      ></path>

      <g fill={"#015486"}>
        <path
          d={
            "M24.4 24.9h-8.7c-1.1 0-2-.9-2-2V9.5c0-1.1.9-2 2-2h8.7c1.1 0 2 .9 2 2v13.4c0 1.1-.9 2-2 2z"
          }
        ></path>

        <circle cx={"20"} cy={"29.5"} r={"2.3"}></circle>
      </g>
    </svg>
  );
}

export default IconContactUsSvgIcon;
/* prettier-ignore-end */
