// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconPeopleNetworkSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconPeopleNetworkSvgIcon(props: IconPeopleNetworkSvgIconProps) {
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

      <circle cx={"20"} cy={"23"} r={"3.4"} fill={"#015486"}></circle>

      <path
        d={
          "M14.8 36.3v-3.2c0-2.9 2.3-5.2 5.2-5.2h0c2.9 0 5.2 2.3 5.2 5.2v3.2H14.8h0z"
        }
        fill={"#5f626b"}
        stroke={"#5f626b"}
        strokeLinejoin={"round"}
      ></path>

      <circle cx={"30.4"} cy={"7"} r={"3.4"} fill={"#015486"}></circle>

      <path
        d={
          "M25.2 20.3v-3.2c0-2.9 2.3-5.2 5.2-5.2h0c2.9 0 5.2 2.3 5.2 5.2v3.2H25.2h0z"
        }
        fill={"#5f626b"}
        stroke={"#5f626b"}
        strokeLinejoin={"round"}
      ></path>

      <circle cx={"9.6"} cy={"7"} r={"3.4"} fill={"#015486"}></circle>

      <path
        d={
          "M4.4 20.3v-3.2c0-2.9 2.3-5.2 5.2-5.2h0c2.9 0 5.2 2.3 5.2 5.2v3.2H4.4z"
        }
        fill={"#5f626b"}
        stroke={"#5f626b"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M32 22.5c-.3 3.5-2.1 6.6-4.8 8.5M8 22.5c.3 3.5 2.1 6.6 4.8 8.5m1.5-20.1c.9-.4 1.7-.8 2.7-1.1s1.9-.4 3-.4h0c1 0 2 .1 3 .4s1.9.6 2.7 1.1"
        }
        fill={"none"}
        stroke={"#083954"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default IconPeopleNetworkSvgIcon;
/* prettier-ignore-end */
