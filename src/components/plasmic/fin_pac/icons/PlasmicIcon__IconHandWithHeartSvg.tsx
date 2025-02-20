// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconHandWithHeartSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconHandWithHeartSvgIcon(props: IconHandWithHeartSvgIconProps) {
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
          "M34.6 28.6L27 32c-3.5 1.4-7.5 3.8-11.4 2.6L4 31.2V25c4.2-1.1 6.2-3.5 10.6-2.1 3 .9 6.2.8 9.4.8 1.3 0 2.8.6 3.1 2 .1.4 0 .7 0 1l5.5-2.3c1.2-.5 3 .1 3.4 1.4.2 1-.3 2.3-1.4 2.8z"
        }
        fill={"#fff"}
      ></path>

      <path
        d={
          "M34.6 28.6L27 32c-3.5 1.4-7.5 3.8-11.4 2.6L4 31.2v-2l11.6 3.5c3.9 1.2 7.9-1.2 11.4-2.6 0 0 7.6-3.4 7.7-3.4.5-.2.9-.7 1.2-1.2.1.1.1.2.2.4.1.9-.4 2.2-1.5 2.7z"
        }
        fill={"#5f626b"}
      ></path>

      <path
        d={
          "M27 26.7l5.5-2.3c1.2-.5 3 .1 3.4 1.4.3 1.1-.2 2.4-1.3 2.8L26.9 32c-3.5 1.4-7.5 3.8-11.4 2.6L4 31.1V25c4.2-1.1 6.2-3.5 10.6-2.1 3 .9 6.2.8 9.4.8 1.3 0 2.8.6 3.1 2 .3 1.5-.9 2.5-2.4 2.6l-10.2-.2"
        }
        fill={"none"}
        stroke={"#083954"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M26.3 12.3l-6.1 6.6c0 .1-.1.1-.2.1s-.2 0-.2-.1l-6.1-6.6c-1.6-1.7-1.6-4.4 0-6.1.7-.8 1.7-1.2 2.8-1.2 1.1 0 2.1.4 2.8 1.3l.7.7.7-.7c.8-.9 1.8-1.3 2.8-1.3s2.1.4 2.8 1.3c1.6 1.6 1.6 4.3 0 6z"
        }
        fill={"#015486"}
      ></path>
    </svg>
  );
}

export default IconHandWithHeartSvgIcon;
/* prettier-ignore-end */
