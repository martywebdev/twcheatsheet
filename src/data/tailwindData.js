import Select from "../components/Select";
import SelectColors from "../components/SelectColors";
import Utilities from "../components/Utilities";
import { setFlex } from "../store/flexSlice";
import { setFlexUtility } from "../store/flexUtilitySlice";
import { setTypography } from "../store/typographySlice";
import { setUtility } from "../store/utilitySlice";
import { twAlign, twFlex, twFlexWrap, twJustify } from "./layout";
import { twHeights, twWidths } from "./sizing";
import {
  fontFamilies,
  fontSizes,
  fontWeights,
  textAlignment,
} from "./typography";
import { marginVariants, paddingVariants } from "./utilities";
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
            type: 'text',
            defaultColor: 'black'
          },
          {
            component: SelectColors,
            label: "select hover text colors",
            tag: "textHover",
            type: 'hover:text',
            defaultColor: 'black'
          },
          {
            component: SelectColors,
            label: "select background colors",
            tag: "bgColors",
            type: 'bg',
          },
          
          {
            component: SelectColors,
            label: "select hover colors",
            tag: "bgHover",
            type: 'hover:bg'
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
            label: 'Padding',
            tag: 'padding'
          },
          {
            component: [Utilities, Utilities],
            options: marginVariants,
            label: 'Margin',
            tag: 'margin'
          },
          {
            component: Select,
            options: ["border-0", "border-2", "border-4", "border-8"],
            label: 'border',
            tag: 'border'
          },
          {
            component: SelectColors,
            label: "select border colors",
            tag: "borderColors",
            type: 'border'
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
        category: 'Sizing',
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
        ]
      }
    ],
  },
  {
    title: 'Background',
    path: '/background',
    sections: [
      {
        category: 'Sizing',
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
            label: 'border',
            tag: 'border'
          },
          {
            component: SelectColors,
            label: "select border colors",
            tag: "borderColors",
            type: 'border'
          },
        ]
      }
    ]
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
        ]
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
            label: 'border',
            tag: 'border'
          },
          {
            component: SelectColors,
            label: "select border colors",
            tag: "borderColors",
            type: 'border'
          },
        ]
      },
    ]
  },
];

export const twValues = [
  { class: "0", css: "0rem", description: "0px" },
  { class: "0.5", css: "0.125rem", description: "2px" },
  { class: "1", css: "0.25rem", description: "4px" },
  { class: "1.5", css: "0.375rem", description: "6px" },
  { class: "2", css: "0.5rem", description: "8px" },
  { class: "2.5", css: "0.625rem", description: "10px" },
  { class: "3", css: "0.75rem", description: "12px" },
  { class: "3.5", css: "0.875rem", description: "14px" },
  { class: "4", css: "1rem", description: "16px" },
  { class: "5", css: "1.25rem", description: "20px" },
  { class: "6", css: "1.5rem", description: "24px" },
  { class: "7", css: "1.75rem", description: "28px" },
  { class: "8", css: "2rem", description: "32px" },
  { class: "9", css: "2.25rem", description: "36px" },
  { class: "10", css: "2.5rem", description: "40px" },
  { class: "11", css: "2.75rem", description: "44px" },
  { class: "12", css: "3rem", description: "48px" },
  { class: "14", css: "3.5rem", description: "56px" },
  { class: "16", css: "4rem", description: "64px" },
  { class: "20", css: "5rem", description: "80px" },
  { class: "24", css: "6rem", description: "96px" },
  { class: "28", css: "7rem", description: "112px" },
  { class: "32", css: "8rem", description: "128px" },
  { class: "36", css: "9rem", description: "144px" },
  { class: "40", css: "10rem", description: "160px" },
  { class: "44", css: "11rem", description: "176px" },
  { class: "48", css: "12rem", description: "192px" },
  { class: "52", css: "13rem", description: "208px" },
  { class: "56", css: "14rem", description: "224px" },
  { class: "60", css: "15rem", description: "240px" },
  { class: "64", css: "16rem", description: "256px" },
  { class: "72", css: "18rem", description: "288px" },
  { class: "80", css: "20rem", description: "320px" },
  { class: "96", css: "24rem", description: "384px" },
];
