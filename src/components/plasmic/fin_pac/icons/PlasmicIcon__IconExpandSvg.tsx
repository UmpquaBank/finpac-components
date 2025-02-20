// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconExpandSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconExpandSvgIcon(props: IconExpandSvgIconProps) {
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
        fill={"none"}
        stroke={"#083954"}
        strokeMiterlimit={"10"}
        d={"M20 6.6v26.9M8.4 13.2l23.3 13.6m0-13.6L8.4 26.8"}
      ></path>

      <circle
        cx={"20"}
        cy={"20"}
        r={"5.8"}
        fill={"#fff"}
        stroke={"#083954"}
        strokeMiterlimit={"10"}
      ></circle>

      <circle cx={"20"} cy={"6.6"} r={"2.7"} fill={"#015486"}></circle>

      <circle cx={"20"} cy={"33.5"} r={"2.7"} fill={"#5f626b"}></circle>

      <circle cx={"31.7"} cy={"13.2"} r={"2.7"} fill={"#015486"}></circle>

      <circle cx={"8.4"} cy={"26.8"} r={"2.7"} fill={"#5f626b"}></circle>

      <circle cx={"31.7"} cy={"26.8"} r={"2.7"} fill={"#5f626b"}></circle>

      <circle cx={"8.4"} cy={"13.2"} r={"2.7"} fill={"#015486"}></circle>
    </svg>
  );
}

export default IconExpandSvgIcon;
/* prettier-ignore-end */
