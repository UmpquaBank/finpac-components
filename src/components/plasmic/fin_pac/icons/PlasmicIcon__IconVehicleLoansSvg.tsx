// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconVehicleLoansSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconVehicleLoansSvgIcon(props: IconVehicleLoansSvgIconProps) {
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
          "M35.9 15.9c0 1.1-.9 1.9-1.9 1.9h-.9c0-.3-.1-.5-.2-.8l-1.4-3H34c1 0 1.9.9 1.9 1.9zM8.5 14l-1.3 3.1c-.1.2-.2.5-.2.8H6c-1.1 0-1.9-.9-1.9-1.9S5 14 6 14h2.5z"
        }
        fill={"#fff"}
        stroke={"#083954"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M8.2 24.3h4.5V30c0 .5-.4 1-1 1H9.2c-.6 0-1-.5-1-1v-5.7h0zm19.1 0h4.5V30c0 .5-.5 1-1 1h-2.5c-.5 0-1-.5-1-1v-5.7h0z"
        }
        fill={"#5f626b"}
        stroke={"#5f626b"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M33.1 18.7v5c0 1.2-.5 2.3-1.4 3-.7.6-1.6 1-2.6 1H10.9c-1 0-1.9-.4-2.7-1-.8-.7-1.3-1.8-1.3-3v-5c0-.3 0-.6.1-.8.1-.3.1-.5.2-.8l2.5-5.7c.6-1.5 2-2.4 3.6-2.4h13.3c1.6 0 3 .9 3.7 2.4l1.1 2.6 1.3 3.1c.1.2.2.5.2.8.2.2.2.5.2.8z"
        }
        fill={"#fff"}
      ></path>

      <path
        d={
          "M33.1 18.7v5c0 1.2-.5 2.3-1.4 3-.7.6-1.6 1-2.6 1H10.9c-1 0-1.9-.4-2.7-1-.8-.7-1.3-1.8-1.3-3v-5c0-.3 0-.6.1-.8.1-.3.1-.5.2-.8l2.5-5.7c.6-1.5 2-2.4 3.6-2.4h13.3c1.6 0 3 .9 3.7 2.4l1.1 2.6 1.3 3.1c.1.2.2.5.2.8.2.2.2.5.2.8h0z"
        }
        fill={"none"}
        stroke={"#083954"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M29.2 17.3H10.8c-.7 0-1.2-.7-.9-1.4l1.6-4c.3-.7 1-1.2 1.8-1.2h13.3c.8 0 1.5.5 1.8 1.2l1.6 4c.4.7-.1 1.4-.8 1.4z"
        }
        fill={"#015486"}
      ></path>

      <g fill={"#015486"}>
        <circle cx={"12"} cy={"22"} r={"1.9"}></circle>

        <circle cx={"28"} cy={"22"} r={"1.9"}></circle>
      </g>

      <path
        d={"M16.7 21h6.6m-6.6 2h6.6"}
        fill={"none"}
        stroke={"#083954"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default IconVehicleLoansSvgIcon;
/* prettier-ignore-end */
