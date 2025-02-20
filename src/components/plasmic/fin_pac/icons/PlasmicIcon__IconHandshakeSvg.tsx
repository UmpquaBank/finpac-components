// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconHandshakeSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconHandshakeSvgIcon(props: IconHandshakeSvgIconProps) {
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
          "M33.9 12.7v11.7h-2.4l-.9-.9-8.7-9.5-4.8 3.8c-1.3.6-2.9 0-3.5-1.5-.6-1.5.1-3 1.4-3.8 1.3-.8 2.6-2.1 4-3.1.8-.6 1.6-1 2.5-1.2 4.6-1.1 8.1 3.6 12.4 4.5z"
        }
        fill={"#fff"}
      ></path>

      <path
        d={
          "M29.4 25.9c-1 .5-2.1-.1-2.9-.8.1.9-.4 1.8-1.1 2.3s-1.7.4-2.4-.1c.1.9-.3 1.8-1.1 2.3-.9.5-1.9.4-2.6-.1.2 1.1-.5 2-1.5 2.4-1.1.3-1.9 0-2.7-.7L8.3 25H6.1V12.7c1.1-.2 2.1-.9 3.1-1.4 1.5-.8 3-1.9 4.7-2.3 1.6-.4 3.5-.5 5 .4-1.4 1-2.7 2.3-4 3.1-1.3.8-1.9 2.3-1.4 3.8.6 1.5 2.2 2.1 3.5 1.5l4.8-3.8 8.7 9.5c.4 1-.3 2-1.1 2.4z"
        }
        fill={"#fff"}
      ></path>

      <path
        d={
          "M18 31.8c-.1 0-.1 0-.2.1-1.1.3-1.9 0-2.7-.7L8.3 25H6.1v-2h2.2l8.9 8.3c.3.1.6.3.8.5zM21.9 14l8.7 9.5.9 1h2.4v-2h-2.4l-.9-1-7.6-8.4z"
        }
        fill={"#5f626b"}
        stroke={"#5f626b"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <g
        fill={"none"}
        stroke={"#083954"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      >
        <path
          d={
            "M33.9 12.7v11.7h-2.4l-.9-.9-8.7-9.5-4.8 3.8c-1.3.6-2.9 0-3.5-1.5-.6-1.5.1-3 1.4-3.8 1.3-.8 2.6-2.1 4-3.1.8-.6 1.6-1 2.5-1.2 4.6-1.1 8.1 3.6 12.4 4.5z"
          }
        ></path>

        <path
          d={
            "M29.4 25.9c-1 .5-2.1-.1-2.9-.8.1.9-.4 1.8-1.1 2.3s-1.7.4-2.4-.1c.1.9-.3 1.8-1.1 2.3-.9.5-1.9.4-2.6-.1.2 1.1-.5 2-1.5 2.4-1.1.3-1.9 0-2.7-.7L8.3 25H6.1V12.7c1.1-.2 2.1-.9 3.1-1.4 1.5-.8 3-1.9 4.7-2.3 1.6-.4 3.5-.5 5 .4-1.4 1-2.7 2.3-4 3.1-1.3.8-1.9 2.3-1.4 3.8.6 1.5 2.2 2.1 3.5 1.5l4.8-3.8 8.7 9.5c.4 1-.3 2-1.1 2.4z"
          }
        ></path>
      </g>

      <path
        fill={"none"}
        stroke={"#083954"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        d={"M14.2 24.8l5.1 4.7m-1.5-6.9l5.1 4.7m-1.5-6.9l5.1 4.7"}
      ></path>

      <path
        d={
          "M35 26.7c-1.2 0-2.2-1-2.2-2.2V12.1c0-1.2 1-2.2 2.2-2.2s2.2 1 2.2 2.2v12.5c0 1.2-1 2.1-2.2 2.1zm-30 0c-1.2 0-2.2-1-2.2-2.2V12.1c0-1.2 1-2.2 2.2-2.2s2.2 1 2.2 2.2v12.5c-.1 1.2-1 2.1-2.2 2.1z"
        }
        fill={"#015486"}
      ></path>
    </svg>
  );
}

export default IconHandshakeSvgIcon;
/* prettier-ignore-end */
