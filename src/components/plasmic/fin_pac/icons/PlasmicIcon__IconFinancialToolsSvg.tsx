// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconFinancialToolsSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconFinancialToolsSvgIcon(
  props: IconFinancialToolsSvgIconProps
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
          "M21.4 6.7c0-1.5 1.4-2.6 2.7-2.2 5.6 1.5 10 5.9 11.4 11.4.4 1.4-.7 2.7-2.2 2.7h-.1c-1 0-1.9-.7-2.2-1.7-1.1-3.9-4.1-7-8.1-8.1-.8-.2-1.6-1.1-1.5-2.1z"
        }
        fill={"#015486"}
      ></path>

      <path
        d={
          "M6.7 18.6c-1.5 0-2.6-1.4-2.2-2.7 1.5-5.6 5.9-10 11.4-11.4 1.4-.4 2.7.7 2.7 2.2v.1c0 1-.7 1.9-1.7 2.2-3.9 1-6.9 4-8 7.9-.3 1-1.2 1.8-2.2 1.7z"
        }
        fill={"#5f626b"}
      ></path>

      <path
        d={
          "M15.9 35.5c-5.6-1.5-10-5.9-11.4-11.4-.4-1.4.7-2.7 2.2-2.7h.1c1 0 1.9.7 2.2 1.7 1.1 3.9 4.1 7 8.1 8.1 1 .3 1.7 1.1 1.7 2.2v.1c-.1 1.3-1.5 2.4-2.9 2z"
        }
        fill={"#015486"}
      ></path>

      <path
        d={
          "M33.3 21.4c1.5 0 2.6 1.4 2.2 2.7-1.5 5.6-5.9 10-11.4 11.4-1.4.4-2.7-.7-2.7-2.2v-.1c0-1 .7-1.9 1.7-2.2 3.9-1.1 7-4.1 8.1-8.1.2-.8 1.1-1.6 2.1-1.5z"
        }
        fill={"#5f626b"}
      ></path>

      <g strokeLinecap={"round"} strokeLinejoin={"round"}>
        <circle
          cx={"20"}
          cy={"20"}
          r={"8.8"}
          fill={"#fff"}
          stroke={"#083954"}
        ></circle>

        <path
          d={
            "M17.5 23.6h3.1c1 0 1.8-.8 1.8-1.8s-.7-1.8-1.7-1.8h-1.3c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8h3.1m-2.5 0v-2m0 11.2v-2"
          }
          fill={"none"}
          stroke={"#015486"}
        ></path>
      </g>
    </svg>
  );
}

export default IconFinancialToolsSvgIcon;
/* prettier-ignore-end */
