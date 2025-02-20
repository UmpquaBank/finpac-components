// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconMapWithPinSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconMapWithPinSvgIcon(props: IconMapWithPinSvgIconProps) {
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
          "M32.3 29c0 1-.8 1.8-1.8 1.8H2.4l5.2-10.6c.4-.9 1.3-1.4 2.2-1.4H30c1 0 1.8.5 2.2 1.4l.7 1.4H11.8c-1.5 0-2.8 1.2-2.8 2.8s1.2 2.8 2.8 2.8h18.7c1 0 1.8.8 1.8 1.8z"
        }
        fill={"#015486"}
      ></path>

      <path
        d={
          "M36 35.8H4c-1.8 0-3.1-2-2.2-3.6l.2-.4h28.6c1.5 0 2.8-1.2 2.8-2.8s-1.2-2.8-2.8-2.8H11.8c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8h21.8l4.7 9.5c.8 1.7-.5 3.6-2.3 3.7z"
        }
        fill={"#015486"}
      ></path>

      <path
        d={
          "M29.1 12.8c0-4.7-3.8-8.5-8.5-8.5s-8.5 3.8-8.5 8.5c0 7.3 8.5 14.5 8.5 14.5s8.5-7.3 8.5-14.5z"
        }
        fill={"#fff"}
        stroke={"#083954"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <circle cx={"20.6"} cy={"13.3"} r={"3.5"} fill={"#5f626b"}></circle>
    </svg>
  );
}

export default IconMapWithPinSvgIcon;
/* prettier-ignore-end */
