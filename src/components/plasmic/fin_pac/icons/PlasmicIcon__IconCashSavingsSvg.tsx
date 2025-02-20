// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconCashSavingsSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconCashSavingsSvgIcon(props: IconCashSavingsSvgIconProps) {
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
          "M37.8 17.5v5.4s-.2 1.1-1.4 1.5l-2.4.8c-1.1 1.9-2.6 3.5-4.6 4.5v2.1c0 1.7-1.4 3.1-3.1 3.1s-3.1-1.4-3.1-3.1V31h-8.6v.8c0 1.7-1.4 3.1-3.1 3.1s-3.1-1.4-3.1-3.1v-2.1C4.8 27.8 2.3 24 2.3 19.6c0-6.3 5.1-11.4 11.4-11.4H23l4.1-2.8s2.2-1.8 2.2 1v2.9c2.3 1.1 4.1 3 5.2 5.3l2.5.9c-.2.2.8.4.8 2z"
        }
        fill={"#fff"}
      ></path>

      <g fill={"#015486"}>
        <circle cx={"18.9"} cy={"18.9"} r={"7.4"}></circle>

        <path
          d={
            "M16.8 22h2.7c.9 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5h-1.1c-.9 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5H21m-2.1-.2v-1.7m0 9.5V22"
          }
          stroke={"#fff"}
          strokeLinecap={"round"}
          strokeLinejoin={"round"}
        ></path>
      </g>

      <path
        d={
          "M37.8 20.9v2s-.2 1.1-1.4 1.4l-2.4.9c-1 1.9-2.6 3.5-4.6 4.5v2.1c0 1.7-1.4 3.1-3.1 3.1s-3.1-1.4-3.1-3.1V31h-8.6v.8c0 1.7-1.4 3.1-3.1 3.1s-3.1-1.4-3.1-3.1v-2.1C4.8 27.8 2.3 24 2.3 19.6v-1c.3 4 2.7 7.3 6 9.1 0 0 2.1 1.3 6.3 1.3h8.6s3.3.2 6.3-1.3c1.9-1 3.5-2.6 4.6-4.5l2.4-.9c1.1-.3 1.3-1.4 1.3-1.4z"
        }
        fill={"#5f626b"}
      ></path>

      <path
        d={
          "M37.8 17.5v5.4s-.2 1.1-1.4 1.5l-2.4.8c-1.1 1.9-2.6 3.5-4.6 4.5v2.1c0 1.7-1.4 3.1-3.1 3.1s-3.1-1.4-3.1-3.1V31h-8.6v.8c0 1.7-1.4 3.1-3.1 3.1s-3.1-1.4-3.1-3.1v-2.1C4.8 27.8 2.3 24 2.3 19.6c0-6.3 5.1-11.4 11.4-11.4H23l4.1-2.8s2.2-1.8 2.2 1v2.9c2.3 1.1 4.1 3 5.2 5.3l2.5.9c-.2.2.8.4.8 2h0z"
        }
        fill={"none"}
        stroke={"#083954"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default IconCashSavingsSvgIcon;
/* prettier-ignore-end */
