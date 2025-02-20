// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconBalanceSheetSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconBalanceSheetSvgIcon(props: IconBalanceSheetSvgIconProps) {
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
          "M32.5 9.2v23c0 2.2-1.8 4-4 4h-17c-2.2 0-4-1.8-4-4v-23c0-2.2 1.8-4 4-4h2.8v1.5h11.5V5.2h2.8c2.1 0 3.9 1.8 3.9 4z"
        }
        fill={"#fff"}
      ></path>

      <path
        d={
          "M32.5 30.2v2c0 2.2-1.8 4-4 4h-17c-2.2 0-4-1.8-4-4v-2c0 2.2 1.8 4 4 4h17c2.2 0 4-1.7 4-4z"
        }
        fill={"#5f626b"}
      ></path>

      <path
        d={
          "M11.5 5.2h17c2.2 0 4 1.8 4 4v23c0 2.2-1.8 4-4 4h-17c-2.2 0-4-1.8-4-4v-23c0-2.2 1.8-4 4-4z"
        }
        fill={"none"}
        stroke={"#083954"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M14.3 3.8h11.3c.6 0 1 .4 1 1v1c0 .6-.4 1-1 1H14.3c-.6 0-1-.4-1-1v-1c0-.6.5-1 1-1z"
        }
        fill={"#015486"}
      ></path>

      <path
        fill={"none"}
        stroke={"#083954"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        d={"M11.7 29.1h16.6"}
      ></path>

      <path
        d={
          "M26.9 16l-9 9.6-5.6 1.3 1-5.7 9-9.5c1.2-1.3 3.2-1.4 4.5-.1l.1.1c1.1 1.1 1.1 3.1 0 4.3z"
        }
        fill={"#fff"}
      ></path>

      <path fill={"#015486"} d={"M17.9 25.6l-5.6 1.3 1-5.7z"}></path>

      <path
        d={
          "M26.9 16l-9 9.6-5.6 1.3 1-5.7 9-9.5c1.2-1.3 3.2-1.4 4.5-.1l.1.1c1.1 1.1 1.1 3.1 0 4.3h0z"
        }
        fill={"none"}
        stroke={"#083954"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default IconBalanceSheetSvgIcon;
/* prettier-ignore-end */
