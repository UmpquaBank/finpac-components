// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconChatSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconChatSvgIcon(props: IconChatSvgIconProps) {
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
          "M15.5 12.4h17.3c2.2 0 4 1.8 4 4V26c0 2.2-1.8 4-4 4H32v4l-4-4H15.5c-2.2 0-4-1.8-4-4v-9.5c0-2.2 1.8-4.1 4-4.1h0z"
        }
        fill={"#015486"}
        stroke={"#015486"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M29.7 6H7.1C4.9 6 3.2 7.8 3.2 9.9v13.2C3.2 25.3 5 27 7.1 27h1.8v4.8l4.8-4.8h16c2.2 0 3.9-1.8 3.9-3.9V9.9c0-2.2-1.7-3.9-3.9-3.9z"
        }
        fill={"#fff"}
        stroke={"#083954"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default IconChatSvgIcon;
/* prettier-ignore-end */
