// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconPhoneWithEnvelopeSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconPhoneWithEnvelopeSvgIcon(
  props: IconPhoneWithEnvelopeSvgIconProps
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
          "M11.1 4h17.8c2.2 0 4 1.8 4 4v24c0 2.2-1.8 4-4 4H11.1c-2.2 0-4-1.8-4-4V8c0-2.2 1.8-4 4-4z"
        }
        fill={"#fff"}
      ></path>

      <path
        d={
          "M32.9 30v2c0 2.2-1.8 4-4 4H11.1c-2.2 0-4-1.8-4-4v-2c0 2.2 1.8 4 4 4h17.8c2.2 0 4-1.8 4-4z"
        }
        fill={"#5f626b"}
      ></path>

      <path
        d={
          "M11.1 4h17.8c2.2 0 4 1.8 4 4v24c0 2.2-1.8 4-4 4H11.1c-2.2 0-4-1.8-4-4V8c0-2.2 1.8-4 4-4z"
        }
        fill={"none"}
        stroke={"#083954"}
        strokeMiterlimit={"10"}
      ></path>

      <g fill={"#015486"}>
        <path
          d={
            "M12.6 7.5h14.8c1.1 0 2 .9 2 2v13.4c0 1.1-.9 2-2 2H12.6c-1.1 0-2-.9-2-2V9.5c0-1.1.9-2 2-2z"
          }
        ></path>

        <circle cx={"20"} cy={"29.5"} r={"2.3"}></circle>
      </g>

      <g
        fill={"#fff"}
        stroke={"#015486"}
        strokeWidth={".5"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      >
        <path
          d={
            "M17.8 16.4L14.1 20c-.2-.2-.4-.6-.4-.9v-5.8c0-.1 0-.2.1-.4l4 3.5h0zm7.8 3.9c-.2.1-.5.2-.8.2h-9.5c-.3 0-.6-.1-.8-.2l3.6-3.6 1.2 1.1c.2.2.5.2.7.2s.5-.1.7-.3l1.2-1.1 3.7 3.7h0zm.6-7v5.8c0 .4-.1.7-.4.9l-3.6-3.6 3.9-3.5c.1.2.1.3.1.4h0z"
          }
        ></path>

        <path
          d={
            "M26 12.5l-4 3.6-.3.3-1.2 1.1c-.2.2-.6.2-.8 0l-1.2-1.1-.3-.3-4.2-3.6s0 0 0 0l.2-.2.1-.1h0l.1-.1c.1-.1.2-.1.2-.1.1 0 .1 0 .1-.1s.1 0 .1 0H25s.1 0 .1.1c0 0 .1 0 .1.1l.1.1.1.1.1.1c.4-.1.4 0 .5.1 0 0 0 0 0 0h0z"
          }
        ></path>
      </g>
    </svg>
  );
}

export default IconPhoneWithEnvelopeSvgIcon;
/* prettier-ignore-end */
