// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconBusinessSavingsSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconBusinessSavingsSvgIcon(
  props: IconBusinessSavingsSvgIconProps
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
          "M25.5 8.7v19.8c0 1-1.4 1.9-3.6 2.5-1.9.5-4.4.8-7.1.8s-5.3-.3-7.2-.8C5.4 30.4 4 29.5 4 28.5V8.7c0-1.8 4.8-3.3 10.8-3.3s10.7 1.4 10.7 3.3z"
        }
        fill={"#fff"}
      ></path>

      <path
        d={
          "M25.5 26.4v2.1c0 1-1.4 1.9-3.6 2.5-1.9.5-4.4.8-7.1.8s-5.3-.3-7.2-.8C5.4 30.4 4 29.5 4 28.5v-2.1c0 1 1.4 1.9 3.6 2.5 1.9.5 4.4.8 7.1.8s5.2-.3 7.1-.8c2.3-.6 3.7-1.5 3.7-2.5z"
        }
        fill={"#5f626b"}
      ></path>

      <g
        fill={"none"}
        stroke={"#083954"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      >
        <path
          d={
            "M25.5 8.7v5c0 1-1.4 1.9-3.6 2.5-1.9.5-4.4.8-7.1.8s-5.2-.3-7.1-.8C5.4 15.5 4 14.6 4 13.6v-5C4 10.5 8.8 12 14.7 12s10.8-1.5 10.8-3.3z"
          }
        ></path>

        <path
          d={
            "M25.5 13.6v5c0 1-1.4 1.9-3.6 2.5-1.9.5-4.4.8-7.1.8s-5.3-.3-7.2-.9C5.4 20.5 4 19.6 4 18.6v-5c0 1.8 4.8 3.3 10.8 3.3s10.7-1.4 10.7-3.3z"
          }
        ></path>

        <path
          d={
            "M25.5 18.6v5c0 1-1.4 1.9-3.6 2.5-1.9.5-4.4.8-7.1.8s-5.3-.4-7.2-.9C5.4 25.4 4 24.5 4 23.5v-5c0 1.8 4.8 3.3 10.8 3.3s10.7-1.4 10.7-3.2z"
          }
        ></path>

        <path
          d={
            "M25.5 23.5v5c0 1-1.4 1.9-3.6 2.5-1.9.5-4.4.8-7.1.8s-5.3-.3-7.2-.8C5.4 30.4 4 29.5 4 28.5v-5c0 1.8 4.8 3.3 10.8 3.3s10.7-1.4 10.7-3.3zm0-14.8c0 1.8-4.8 3.3-10.7 3.3S4 10.5 4 8.7s4.8-3.3 10.8-3.3 10.7 1.4 10.7 3.3z"
          }
        ></path>
      </g>

      <g fill={"#015486"}>
        <circle cx={"25.5"} cy={"24.1"} r={"10.5"}></circle>

        <path
          d={
            "M22.5 28.5h3.8c1.2 0 2.2-1 2.2-2.2s-1-2.2-2.2-2.2h-1.6c-1.2 0-2.2-1-2.2-2.2s1-2.2 2.2-2.2h3.8m-3 .1v-2.4m0 13.5v-2.4"
          }
          stroke={"#fff"}
          strokeLinecap={"round"}
          strokeLinejoin={"round"}
        ></path>
      </g>
    </svg>
  );
}

export default IconBusinessSavingsSvgIcon;
/* prettier-ignore-end */
