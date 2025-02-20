// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconMagnifyingPersonSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconMagnifyingPersonSvgIcon(
  props: IconMagnifyingPersonSvgIconProps
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

      <g stroke={"#083954"} strokeLinecap={"round"} strokeLinejoin={"round"}>
        <path
          d={
            "M26.7 22.9l8.5 8.5c1.1 1.1 1.1 2.8 0 3.8-.5.5-1.2.8-1.9.8s-1.4-.3-1.9-.8l-8.5-8.5"
          }
          fill={"#5f626b"}
        ></path>

        <circle cx={"16.8"} cy={"16.8"} r={"12.8"} fill={"#fff"}></circle>
      </g>

      <path
        d={
          "M23.1 10.4c-3.5-3.5-9.2-3.5-12.8 0s-3.5 9.2 0 12.8c.4.5.9.8 1.4 1.2v-1.8c0-2.7 2.2-4.9 4.9-4.9s5 2.2 5 4.9v1.8c.5-.3 1-.7 1.4-1.2 3.7-3.6 3.7-9.3.1-12.8zm-6.3 6.4c-1.6 0-2.9-1.3-2.9-2.9s1.3-2.9 2.9-2.9 2.9 1.3 2.9 2.9-1.4 2.9-2.9 2.9z"
        }
        fill={"#015486"}
      ></path>
    </svg>
  );
}

export default IconMagnifyingPersonSvgIcon;
/* prettier-ignore-end */
