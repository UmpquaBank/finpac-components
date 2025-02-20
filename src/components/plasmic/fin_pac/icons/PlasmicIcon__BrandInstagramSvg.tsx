// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BrandInstagramSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BrandInstagramSvgIcon(props: BrandInstagramSvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      stroke={"currentColor"}
      strokeWidth={"2"}
      strokeLinecap={"round"}
      strokeLinejoin={"round"}
      className={classNames(
        "plasmic-default__svg",
        className,
        "icon icon-tabler icons-tabler-outline icon-tabler-brand-instagram"
      )}
      viewBox={"0 0 24 24"}
      height={"1em"}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path d={"M0 0h24v24H0z"} fill={"none"} stroke={"none"}></path>

      <path
        d={"M4 8a4 4 0 014-4h8a4 4 0 014 4v8a4 4 0 01-4 4H8a4 4 0 01-4-4z"}
      ></path>

      <path d={"M9 12a3 3 0 106 0 3 3 0 10-6 0m7.5-4.5v.01"}></path>
    </svg>
  );
}

export default BrandInstagramSvgIcon;
/* prettier-ignore-end */
