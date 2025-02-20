// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconOnlineBankingSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconOnlineBankingSvgIcon(props: IconOnlineBankingSvgIconProps) {
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
          "M3 29.9h34v2.2c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2v-2.2zM8.5 9.1h23c1.1 0 2 .9 2 2v18.8h-27V11.1c0-1.1.9-2 2-2z"
        }
        fill={"#fff"}
      ></path>

      <path
        d={"M37 32c0 1.1-.9 2.1-2 2.1H5c-1.1 0-2-.9-2-2.1h34z"}
        fill={"#5f626b"}
      ></path>

      <path
        d={
          "M3 29.9h34v2.2c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2v-2.2h0zM8.5 9.1h23c1.1 0 2 .9 2 2v18.8h-27V11.1c0-1.1.9-2 2-2z"
        }
        fill={"none"}
        stroke={"#083954"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M10.2 11.8h19.5c.6 0 1 .4 1 1v13.3c0 .6-.4 1-1 1H10.2c-.6 0-1-.4-1-1V12.8c0-.5.5-1 1-1z"
        }
        fill={"#015486"}
      ></path>

      <path
        d={
          "M17.7 22.9h2.9c.9 0 1.7-.8 1.7-1.7s-.8-1.7-1.7-1.7h-1.2c-.9 0-1.7-.8-1.7-1.7s.8-1.7 1.7-1.7h2.9m-2.3 0v-1.8m0 10.4v-1.8"
        }
        fill={"none"}
        stroke={"#fff"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default IconOnlineBankingSvgIcon;
/* prettier-ignore-end */
