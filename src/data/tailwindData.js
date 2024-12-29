import Select from "../components/Select";
import SelectColors from "../components/SelectColors";
import Utilities from "../components/Utilities";
import { setFlex } from "../store/flexSlice";
import { setFlexUtility } from "../store/flexUtilitySlice";
import { setTypography } from "../store/typographySlice";
import { setUtility } from "../store/utilitySlice";
import { twAlign, twFlex, twJustify } from "./layout";
import { twHeights, twWidths } from "./sizing";
import {
  fontFamilies,
  fontSizes,
  fontWeights,
  textAlignment,
} from "./typography";
import { marginVariants, paddingVariants, twValues } from "./utilities";
export const tailwindClasses = [
  {
    title: "Basic",
    path: "/",
    sections: [
      {
        category: "Typography",
        dispatch: setTypography,
        elements: [
          {
            component: Select,
            label: "Font Family",
            options: fontFamilies,
            tag: "fontFamily",
          },
          {
            component: Select,
            label: "Font Size",
            options: fontSizes,
            tag: "fontSize",
          },
          {
            component: Select,
            label: "Alignment",
            options: textAlignment,
            tag: "textAlign",
          },
          {
            component: Select,
            label: "Font Weight",
            options: fontWeights,
            tag: "fontWeight",
          },
          {
            component: SelectColors,
            label: "select text colors",
            tag: "textColors",
            type: "text",
            defaultColor: "black",
          },
          {
            component: SelectColors,
            label: "select hover text colors",
            tag: "textHover",
            type: "hover:text",
            defaultColor: "black",
          },
          {
            component: SelectColors,
            label: "select background colors",
            tag: "bgColors",
            type: "bg",
          },

          {
            component: SelectColors,
            label: "select hover colors",
            tag: "bgHover",
            type: "hover:bg",
          },
        ],
      },
      {
        category: "Utilities",
        dispatch: setUtility,
        elements: [
          {
            component: [Utilities, Utilities],
            options: paddingVariants,
            secondaryOptions: twValues,
            label: "Padding",
            tag: "padding",
          },
          {
            component: [Utilities, Utilities],
            options: marginVariants,
            secondaryOptions: twValues,
            label: "Margin",
            tag: "margin",
          },
          {
            component: Select,
            options: ["border-0", "border-2", "border-4", "border-8"],
            label: "border",
            tag: "border",
          },
          {
            component: SelectColors,
            label: "select border colors",
            tag: "borderColors",
            type: "border",
          },
          {
            component: Select,
            label: "Border Radius",
            options: ["rounded", "rounded-md", "rounded-lg", "rounded-full"],
            tag: "borderRadius",
          },
        ],
      },
      {
        category: "Sizing",
        dispatch: setUtility,
        elements: [
          {
            component: Select,
            label: "Width",
            options: twWidths,
            tag: "width",
          },
          {
            component: Select,
            label: "height",
            options: twHeights,
            tag: "height",
          },
        ],
      },
    ],
  },
  {
    title: "Background",
    path: "/background",
    sections: [
      {
        category: "Sizing",
        dispatch: setUtility,
        elements: [
          {
            component: Select,
            label: "Width",
            options: twWidths,
            tag: "width",
          },
          {
            component: Select,
            label: "height",
            options: twHeights,
            tag: "height",
          },
          {
            component: Select,
            options: ["border-0", "border-2", "border-4", "border-8"],
            label: "border",
            tag: "border",
          },
          {
            component: SelectColors,
            label: "select border colors",
            tag: "borderColors",
            type: "border",
          },
        ],
      },
    ],
  },
  {
    title: "Layout",
    path: "/layout",
    sections: [
      {
        category: "Flex",
        dispatch: setFlex,
        elements: [
          {
            component: Select,
            label: "flex",
            options: twFlex,
            tag: "flex",
          },
          // {
          //   component: Select,
          //   label: "flex wrap",
          //   options: twFlexWrap,
          //   tag: "flexwrap",
          // },
          {
            component: Select,
            label: "justify",
            options: twJustify,
            tag: "justify",
          },
          {
            component: Select,
            label: "align",
            options: twAlign,
            tag: "align",
          },
        ],
      },
      {
        category: "Utility",
        dispatch: setFlexUtility,
        elements: [
          {
            component: Select,
            label: "Width",
            options: twWidths,
            tag: "width",
          },
          {
            component: Select,
            label: "height",
            options: twHeights,
            tag: "height",
          },
          {
            component: Select,
            options: ["border-0", "border-2", "border-4", "border-8"],
            label: "border",
            tag: "border",
          },
          {
            component: SelectColors,
            label: "select border colors",
            tag: "borderColors",
            type: "border",
          },
        ],
      },
    ],
  },
  {
    title: "Filters",
    path: "/filters",
    sections: [],
  },
];
