// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconStarWithPersonSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconStarWithPersonSvgIcon(
  props: IconStarWithPersonSvgIconProps
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
          "M22.5 6l2.9 5.8c.4.8 1.2 1.4 2.1 1.5l6.4.9c2.3.3 3.2 3.1 1.5 4.7l-4.6 4.5c-.6.6-1 1.5-.8 2.4l1.1 6.4c.4 2.2-2 4-4 2.9l-5.8-3c-.8-.4-1.8-.4-2.5 0l-5.8 3c-2 1-4.4-.7-4-2.9l1.1-6.4c.1-.9-.1-1.8-.8-2.4L4.6 19c-1.6-1.6-.7-4.4 1.5-4.7l6.4-.9c.9-.1 1.7-.7 2.1-1.5l3-5.9c1-2 3.9-2 4.9 0z"
        }
        fill={"#fff"}
      ></path>

      <path
        d={
          "M27 35.2l-5.8-3c-.8-.4-1.8-.4-2.5 0l-5.8 3c-2 1.1-4.4-.7-4-2.9l.1-.6c.5 1.5 2.3 2.4 3.9 1.5l5.8-3c.8-.4 1.7-.4 2.5 0l5.8 3c1.6.8 3.4 0 3.9-1.5l.1.6c.4 2.2-1.9 3.9-4 2.9z"
        }
        fill={"#5f626b"}
      ></path>

      <path
        d={
          "M22.5 6l2.9 5.8c.4.8 1.2 1.4 2.1 1.5l6.4.9c2.3.3 3.2 3.1 1.5 4.7l-4.6 4.5c-.6.6-1 1.5-.8 2.4l1.1 6.4c.4 2.2-2 4-4 2.9l-5.8-3c-.8-.4-1.8-.4-2.5 0l-5.8 3c-2 1-4.4-.7-4-2.9l1.1-6.4c.1-.9-.1-1.8-.8-2.4L4.6 19c-1.6-1.6-.7-4.4 1.5-4.7l6.4-.9c.9-.1 1.7-.7 2.1-1.5l3-5.9c1-2 3.9-2 4.9 0h0z"
        }
        fill={"none"}
        stroke={"#083954"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <circle cx={"20"} cy={"15.4"} r={"3"} fill={"#015486"}></circle>

      <path
        d={
          "M15.3 27.3v-2.9c0-2.6 2.1-4.7 4.7-4.7h0c2.6 0 4.7 2.1 4.7 4.7v2.9h-9.4z"
        }
        fill={"#5f626b"}
        stroke={"#5f626b"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default IconStarWithPersonSvgIcon;
/* prettier-ignore-end */
