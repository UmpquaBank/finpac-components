// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconBriefcaseSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconBriefcaseSvgIcon(props: IconBriefcaseSvgIconProps) {
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
        d={"M15.2 6.2h9.5c1.1 0 2 .9 2 2v8H13.2v-8c0-1 .9-2 2-2z"}
        fill={"none"}
        stroke={"#015486"}
        strokeWidth={"4"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M9 11.2h22c2.2 0 4 1.8 4 4v14.5c0 2.2-1.8 4-4 4H9c-2.2 0-4-1.8-4-4V15.2c0-2.2 1.8-4 4-4z"
        }
        fill={"#fff"}
      ></path>

      <path
        d={
          "M35 27.8v2c0 2.2-1.8 4-4 4H9c-2.2 0-4-1.8-4-4v-2c0 2.2 1.8 4 4 4h22c2.2 0 4-1.8 4-4z"
        }
        fill={"#5f626b"}
      ></path>

      <path
        fill={"#5f626b"}
        stroke={"#5f626b"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        d={"M16.5 22.5h7.1V26h-7.1z"}
      ></path>

      <path
        d={"M35 18.5c0 2.2-1.8 4-4 4H9c-2.2 0-4-1.8-4-4"}
        fill={"none"}
        stroke={"#083954"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M9 11.2h22c2.2 0 4 1.8 4 4v14.5c0 2.2-1.8 4-4 4H9c-2.2 0-4-1.8-4-4V15.2c0-2.2 1.8-4 4-4z"
        }
        fill={"none"}
        stroke={"#083954"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default IconBriefcaseSvgIcon;
/* prettier-ignore-end */
