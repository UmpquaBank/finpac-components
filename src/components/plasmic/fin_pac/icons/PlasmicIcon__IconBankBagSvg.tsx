// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconBankBagSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconBankBagSvgIcon(props: IconBankBagSvgIconProps) {
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
          "M31.6 23.7c0-6.5-5.3-11.7-11.8-11.6s-11.4 5.7-11.4 12v6.8c0 2.2 1.8 4 4 4h15.2c2.2 0 4-1.8 4-4v-7.2z"
        }
        fill={"#fff"}
      ></path>

      <path
        d={
          "M31.6 29.4v2c0 2-1.6 3.6-3.6 3.6H12c-2 0-3.6-1.6-3.6-3.6v-2c0 2 1.6 3.6 3.6 3.6h16c2-.1 3.6-1.7 3.6-3.6z"
        }
        fill={"#5f626b"}
      ></path>

      <path
        d={
          "M31.6 23.7c0-6.5-5.3-11.7-11.8-11.6s-11.4 5.7-11.4 12v6.8c0 2.2 1.8 4 4 4h15.2c2.2 0 4-1.8 4-4v-7.2z"
        }
        fill={"none"}
        stroke={"#083954"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M24.9 7.6l-3.6 3.9c-.7.7-1.9.7-2.6 0l-3.6-3.9c-.9-1-.1-2.5 1.3-2.5h7.1c1.5 0 2.3 1.5 1.4 2.5h0z"
        }
        fill={"#fff"}
        stroke={"#083954"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        fill={"none"}
        stroke={"#015486"}
        strokeWidth={"5"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        d={"M14.2 12.1h11.6"}
      ></path>

      <path
        d={
          "M17 28.3h3.8c1.2 0 2.2-1 2.2-2.2s-1-2.2-2.2-2.2h-1.6c-1.2 0-2.2-1-2.2-2.2s1-2.2 2.2-2.2H23m-3 .1v-2.4m0 13.4v-2.3"
        }
        fill={"none"}
        stroke={"#015486"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default IconBankBagSvgIcon;
/* prettier-ignore-end */
