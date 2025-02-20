// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconHomeLoansSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconHomeLoansSvgIcon(props: IconHomeLoansSvgIconProps) {
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
          "M34.7 18.4V31c0 2.2-1.8 4.1-4.1 4.1H9.3c-2.2 0-4.1-1.8-4.1-4.1V18.4c0-1.2.5-2.3 1.4-3.1l.8-.7V8.5c0-1.1.9-2 2-2h2.4c1.1 0 2 .9 2 2V9l3.4-3c1.5-1.3 3.8-1.3 5.3 0l10.7 9.3c1 .8 1.5 1.9 1.5 3.1z"
        }
        fill={"#fff"}
      ></path>

      <path
        d={
          "M34.7 28.9v2c0 2.2-1.8 4.1-4.1 4.1H9.4c-2.2 0-4.1-1.8-4.1-4.1v-2c0 2.2 1.8 4.1 4.1 4.1h21.3c2.2 0 4-1.8 4-4.1z"
        }
        fill={"#5f626b"}
      ></path>

      <path
        d={
          "M34.7 18.4H5.3c0-1 .4-2 1.1-2.8l.3-.3.8-.7V8.5c0-1.1.9-2 2-2h2.4c1.1 0 2 .9 2 2V9l3.4-3c.1-.1.2-.2.3-.2 1.4-1 3.3-1 4.8 0 .1.1.2.2.3.2l10.7 9.3.3.3c.6.8 1 1.7 1 2.8z"
        }
        fill={"#015486"}
        stroke={"#015486"}
        strokeMiterlimit={"10"}
      ></path>

      <path
        d={
          "M34.7 18.4V31c0 2.2-1.8 4.1-4.1 4.1H9.4c-2.2 0-4.1-1.8-4.1-4.1V18.4h29.4z"
        }
        fill={"none"}
        stroke={"#083954"}
        strokeMiterlimit={"10"}
      ></path>

      <circle cx={"20"} cy={"12.9"} r={"2.5"} fill={"#fff"}></circle>

      <path
        d={
          "M13.6 23.9c.7-.7 1.8-.7 2.5 0l2.5 2.5 5.3-5.3c.7-.7 1.8-.7 2.5 0s.7 1.8 0 2.5l-6.6 6.6c-.3.3-.8.5-1.2.5-.5 0-.9-.2-1.2-.5l-3.7-3.7c-.7-.8-.7-1.9-.1-2.6"
        }
        fill={"#5f626b"}
      ></path>
    </svg>
  );
}

export default IconHomeLoansSvgIcon;
/* prettier-ignore-end */
