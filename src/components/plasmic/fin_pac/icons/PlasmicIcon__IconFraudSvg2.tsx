// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconFraudSvg2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconFraudSvg2Icon(props: IconFraudSvg2IconProps) {
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
          "M32.9 8.2V20s0 11.9-12.9 15.5C7.1 31.9 7.1 20 7.1 20V8.2L20 4.5l12.9 3.7z"
        }
        fill={"#fff"}
      ></path>

      <path
        d={
          "M32.9 18v2s0 11.9-12.9 15.5C7.1 31.9 7.1 20 7.1 20v-2s0 11.9 12.9 15.5C32.9 29.9 32.9 18 32.9 18z"
        }
        fill={"#5f626b"}
      ></path>

      <path
        d={
          "M29 9.8c.2.1.4.3.4.5V19c0 .1-.1 8.5-9.2 11.8h-.4c-9-3.1-9.2-11.4-9.2-11.8v-8.8c0-.2.1-.4.4-.5l8.9-2.6h.3c-.1.1 8.8 2.7 8.8 2.7z"
        }
        fill={"#015486"}
      ></path>

      <path
        d={
          "M32.9 8.2V20s0 11.9-12.9 15.5C7.1 31.9 7.1 20 7.1 20V8.2L20 4.5l12.9 3.7z"
        }
        fill={"none"}
        stroke={"#043954"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M14.9 16.6c.6-.6 1.5-.6 2.1 0l2.1 2.1 4.6-4.6c.6-.6 1.5-.6 2.1 0 .6.6.6 1.5 0 2.1l-5.6 5.6c-.3.3-.7.4-1.1.4s-.8-.1-1-.4l-3.2-3.2c-.6-.5-.6-1.4 0-2"
        }
        fill={"#fff"}
      ></path>
    </svg>
  );
}

export default IconFraudSvg2Icon;
/* prettier-ignore-end */
