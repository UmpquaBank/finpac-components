// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconLikeSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconLikeSvgIcon(props: IconLikeSvgIconProps) {
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
          "M12.3 32.4l3.3 1.9c.3.2.6.3 1 .3h9.7c3.7 0 4.3-2.3 4.3-3.7 0-.5.2-1.1.5-1.4 1-1.1 1.2-3 1.2-3.8 0-.3.1-.5.2-.8.8-1.8.2-3.4-.2-4.2-.2-.4-.3-.8-.2-1.2.8-4.3-2.7-4.2-2.7-4.2h-5.2c-1.4 0-2.3-1.3-1.9-2.6l1.2-3.9v-.1c.4-3.2-4.1-4.4-5.4-1.4l-3.4 8.3c-.6 1.2-1.5 1.7-2.3 2s-1.3 1-1.3 1.9v11.2c.2.6.6 1.3 1.2 1.7z"
        }
        fill={"#fff"}
      ></path>

      <path
        d={
          "M12.3 32.4l3.3 1.9c.3.2.6.3 1 .3h9.7c3.7 0 4.3-2.3 4.3-3.7 0-.5.2-1.1.5-1.4 1-1.1 1.2-3 1.2-3.8 0-.3.1-.5.2-.8.8-1.8.2-3.4-.2-4.2-.2-.4-.3-.8-.2-1.2.8-4.3-2.7-4.2-2.7-4.2h-5.2c-1.4 0-2.3-1.3-1.9-2.6l1.2-3.9v-.1c.4-3.2-4.1-4.4-5.4-1.4l-3.4 8.3c-.6 1.2-1.5 1.7-2.3 2s-1.3 1-1.3 1.9v11.2c.2.6.6 1.3 1.2 1.7z"
        }
        fill={"#fff"}
      ></path>

      <path
        d={
          "M30.7 31.3c-.2 1.4-1 3.2-4.3 3.2h-9.7c-.4 0-.7-.1-1-.3l-3.3-1.9c-.6-.4-1-1-1-1.8v-2c0 .7.4 1.4 1 1.8l3.3 1.9c.3.2.6.3 1 .3h10.6c1.7 0 2.7-.5 3.4-1.2z"
        }
        fill={"#5f626b"}
      ></path>

      <path
        d={
          "M12.3 32.4l3.3 1.9c.3.2.6.3 1 .3h9.7c3.7 0 4.3-2.3 4.3-3.7 0-.5.2-1.1.5-1.4 1-1.1 1.2-3 1.2-3.8 0-.3.1-.5.2-.8.8-1.8.2-3.4-.2-4.2-.2-.4-.3-.8-.2-1.2.8-4.3-2.7-4.2-2.7-4.2h-5.2c-1.4 0-2.3-1.3-1.9-2.6l1.2-3.9v-.1c.4-3.2-4.1-4.4-5.4-1.4l-3.4 8.3c-.6 1.2-1.5 1.7-2.3 2s-1.3 1-1.3 1.9v11.2c.2.6.6 1.3 1.2 1.7h0z"
        }
        fill={"none"}
        stroke={"#083954"}
        strokeMiterlimit={"10"}
      ></path>

      <path
        d={
          "M9.6 16.2c1.5 0 2.7 1.2 2.7 2.6v13c0 1.5-1.2 2.6-2.7 2.6-1.5 0-2.6-1.2-2.6-2.6v-13c0-1.4 1.2-2.6 2.6-2.6z"
        }
        fill={"#015486"}
      ></path>
    </svg>
  );
}

export default IconLikeSvgIcon;
/* prettier-ignore-end */
