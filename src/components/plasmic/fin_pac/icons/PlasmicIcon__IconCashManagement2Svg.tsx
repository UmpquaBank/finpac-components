// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconCashManagement2SvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconCashManagement2SvgIcon(
  props: IconCashManagement2SvgIconProps
) {
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
          "M33 22.5c-.6 7.7-7.2 13.8-15.2 13.4-7.3-.3-13.4-6.4-13.8-13.8-.4-8 5.7-14.6 13.4-15.2.6 0 1.1.4 1.1 1v12.5c0 .5.5 1 1 1H32c.7.1 1.1.6 1 1.1z"
        }
        fill={"#015486"}
      ></path>

      <path
        d={"M36 18.5H21.5V4c8 0 14.5 6.5 14.5 14.5z"}
        fill={"#5f626b"}
        stroke={"#083954"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default IconCashManagement2SvgIcon;
/* prettier-ignore-end */
