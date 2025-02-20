// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 25NMkq6j3WJSA86YLeNnNv
// Component: adzqt1M5uYQK

import * as React from "react";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import { RemixNavLink } from "~/components/RemixNavLink"; // plasmic-import: oQKYG6pB_vQ8/codeComponent

import {
  ThemeValue,
  useTheme
} from "../component_library/PlasmicGlobalVariant__Theme"; // plasmic-import: LpyY4FovdLdy/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_component_library_css from "../component_library/plasmic.module.css"; // plasmic-import: Fu9rYAdx7a38e3uUnu1ra/projectcss
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: 25NMkq6j3WJSA86YLeNnNv/projectcss
import sty from "./PlasmicSmallHeaderLink.module.css"; // plasmic-import: adzqt1M5uYQK/css

createPlasmicElementProxy;

export type PlasmicSmallHeaderLink__VariantMembers = {
  rightBorder: "rightBorder";
  textColor: "black" | "white";
};
export type PlasmicSmallHeaderLink__VariantsArgs = {
  rightBorder?: SingleBooleanChoiceArg<"rightBorder">;
  textColor?: SingleChoiceArg<"black" | "white">;
};
type VariantPropType = keyof PlasmicSmallHeaderLink__VariantsArgs;
export const PlasmicSmallHeaderLink__VariantProps = new Array<VariantPropType>(
  "rightBorder",
  "textColor"
);

export type PlasmicSmallHeaderLink__ArgsType = {
  href?: string;
  text?: string;
};
type ArgPropType = keyof PlasmicSmallHeaderLink__ArgsType;
export const PlasmicSmallHeaderLink__ArgProps = new Array<ArgPropType>(
  "href",
  "text"
);

export type PlasmicSmallHeaderLink__OverridesType = {
  root?: Flex__<"div">;
  remixNavLink?: Flex__<typeof RemixNavLink>;
  linkText?: Flex__<"div">;
};

export interface DefaultSmallHeaderLinkProps {
  href?: string;
  text?: string;
  rightBorder?: SingleBooleanChoiceArg<"rightBorder">;
  textColor?: SingleChoiceArg<"black" | "white">;
  className?: string;
}

const $$ = {};

function PlasmicSmallHeaderLink__RenderFunc(props: {
  variants: PlasmicSmallHeaderLink__VariantsArgs;
  args: PlasmicSmallHeaderLink__ArgsType;
  overrides: PlasmicSmallHeaderLink__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {
          href: "/",
          text: "Link"
        },
        Object.fromEntries(
          Object.entries(props.args).filter(([_, v]) => v !== undefined)
        )
      ),
    [props.args]
  );

  const $props = {
    ...args,
    ...variants
  };

  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "rightBorder",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.rightBorder
      },
      {
        path: "textColor",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.textColor
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });

  const globalVariants = ensureGlobalVariants({
    theme: useTheme()
  });

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_component_library_css.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        plasmic_plasmic_rich_components_css.plasmic_tokens,
        sty.root,
        {
          [plasmic_component_library_css.global_theme_finpac]: hasVariant(
            globalVariants,
            "theme",
            "finpac"
          ),
          [sty.rootrightBorder]: hasVariant(
            $state,
            "rightBorder",
            "rightBorder"
          ),
          [sty.rootrightBorder_textColor_white]:
            hasVariant($state, "rightBorder", "rightBorder") &&
            hasVariant($state, "textColor", "white"),
          [sty.roottextColor_white]: hasVariant($state, "textColor", "white")
        }
      )}
    >
      <RemixNavLink
        data-plasmic-name={"remixNavLink"}
        data-plasmic-override={overrides.remixNavLink}
        className={classNames("__wab_instance", sty.remixNavLink, {
          [sty.remixNavLinkrightBorder]: hasVariant(
            $state,
            "rightBorder",
            "rightBorder"
          ),
          [sty.remixNavLinkrightBorder_textColor_white]:
            hasVariant($state, "rightBorder", "rightBorder") &&
            hasVariant($state, "textColor", "white"),
          [sty.remixNavLinktextColor_white]: hasVariant(
            $state,
            "textColor",
            "white"
          )
        })}
        href={(() => {
          try {
            return $props.href;
          } catch (e) {
            if (
              e instanceof TypeError ||
              e?.plasmicType === "PlasmicUndefinedDataError"
            ) {
              return undefined;
            }
            throw e;
          }
        })()}
      >
        <div
          data-plasmic-name={"linkText"}
          data-plasmic-override={overrides.linkText}
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.linkText,
            {
              [sty.linkTextrightBorder]: hasVariant(
                $state,
                "rightBorder",
                "rightBorder"
              ),
              [sty.linkTexttextColor_white]: hasVariant(
                $state,
                "textColor",
                "white"
              )
            }
          )}
        >
          <React.Fragment>
            {(() => {
              try {
                return $props.text;
              } catch (e) {
                if (
                  e instanceof TypeError ||
                  e?.plasmicType === "PlasmicUndefinedDataError"
                ) {
                  return "Link";
                }
                throw e;
              }
            })()}
          </React.Fragment>
        </div>
      </RemixNavLink>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "remixNavLink", "linkText"],
  remixNavLink: ["remixNavLink", "linkText"],
  linkText: ["linkText"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  remixNavLink: typeof RemixNavLink;
  linkText: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicSmallHeaderLink__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicSmallHeaderLink__VariantsArgs;
    args?: PlasmicSmallHeaderLink__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicSmallHeaderLink__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicSmallHeaderLink__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicSmallHeaderLink__ArgProps,
          internalVariantPropNames: PlasmicSmallHeaderLink__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicSmallHeaderLink__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicSmallHeaderLink";
  } else {
    func.displayName = `PlasmicSmallHeaderLink.${nodeName}`;
  }
  return func;
}

export const PlasmicSmallHeaderLink = Object.assign(
  // Top-level PlasmicSmallHeaderLink renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    remixNavLink: makeNodeComponent("remixNavLink"),
    linkText: makeNodeComponent("linkText"),

    // Metadata about props expected for PlasmicSmallHeaderLink
    internalVariantProps: PlasmicSmallHeaderLink__VariantProps,
    internalArgProps: PlasmicSmallHeaderLink__ArgProps
  }
);

export default PlasmicSmallHeaderLink;
/* prettier-ignore-end */
