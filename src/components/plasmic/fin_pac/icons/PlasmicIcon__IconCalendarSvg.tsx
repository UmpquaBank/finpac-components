// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconCalendarSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconCalendarSvgIcon(props: IconCalendarSvgIconProps) {
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
          "M10 7.9h20c2.2 0 4 1.8 4 4v18.7c0 2.2-1.8 4-4 4H10c-2.2 0-4-1.8-4-4V11.9c0-2.2 1.8-4 4-4z"
        }
        fill={"#fff"}
      ></path>

      <path
        d={"M34 11.9v5H6v-5c0-2.2 1.8-4 4-4h20c2.2 0 4 1.8 4 4z"}
        fill={"#015486"}
      ></path>

      <path
        d={
          "M34 28.2v2.1c0 2.3-1.9 4.2-4.2 4.2H10.2c-2.3 0-4.2-1.9-4.2-4.2v-2.1c0 2.3 1.9 4.2 4.2 4.2h19.5c2.4.1 4.3-1.8 4.3-4.2z"
        }
        fill={"#5f626b"}
      ></path>

      <path
        d={
          "M10 7.9h20c2.2 0 4 1.8 4 4v18.7c0 2.2-1.8 4-4 4H10c-2.2 0-4-1.8-4-4V11.9c0-2.2 1.8-4 4-4z"
        }
        fill={"none"}
        stroke={"#083954"}
        strokeMiterlimit={"10"}
      ></path>

      <path
        d={"M13.3 7.9V5.4m13.4 2.5V5.4"}
        fill={"none"}
        stroke={"#083954"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <g fill={"#015486"}>
        <circle cx={"13.6"} cy={"21.2"} r={"1.9"}></circle>

        <circle cx={"26.4"} cy={"21.2"} r={"1.9"}></circle>

        <circle cx={"20"} cy={"21.2"} r={"1.9"}></circle>

        <circle cx={"13.6"} cy={"27.8"} r={"1.9"}></circle>

        <circle cx={"26.4"} cy={"27.8"} r={"1.9"}></circle>

        <circle cx={"20"} cy={"27.8"} r={"1.9"}></circle>
      </g>
    </svg>
  );
}

export default IconCalendarSvgIcon;
/* prettier-ignore-end */
