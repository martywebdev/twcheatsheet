import Select from "../components/Select";
import SelectColors from "../components/SelectColors";
import Utilities from "../components/Utilities";
import { setTypography } from "../store/typographySlice";
import { setUtility } from "../store/utilitySlice";
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
        path: "layout",
        dispatch: setUtility,
        elements: [
          {
            component: Utilities,
            options: paddingVariants,
            label: 'Padding',
            tag: 'padding'
          },
          {
            component: Utilities,
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
        ],
      },
    ],
  },
  {
    title: "Layout",
    path: "/layout",
    sections: []
  },
];

// export const twValues = [
//   "0", // 0rem (0px)
//   "0.5", // 0.125rem (2px)
//   "1", // 0.25rem (4px)
//   "1.5", // 0.375rem (6px)
//   "2", // 0.5rem (8px)
//   "2.5", // 0.625rem (10px)
//   "3", // 0.75rem (12px)
//   "3.5", // 0.875rem (14px)
//   "4", // 1rem (16px)
//   "5", // 1.25rem (20px)
//   "6", // 1.5rem (24px)
//   "7", // 1.75rem (28px)
//   "8", // 2rem (32px)
//   "9", // 2.25rem (36px)
//   "10", // 2.5rem (40px)
//   "11", // 2.75rem (44px)
//   "12", // 3rem (48px)
//   "14", // 3.5rem (56px)
//   "16", // 4rem (64px)
//   "20", // 5rem (80px)
//   "24", // 6rem (96px)
//   "28", // 7rem (112px)
//   "32", // 8rem (128px)
//   "36", // 9rem (144px)
//   "40", // 10rem (160px)
//   "44", // 11rem (176px)
//   "48", // 12rem (192px)
//   "52", // 13rem (208px)
//   "56", // 14rem (224px)
//   "60", // 15rem (240px)
//   "64", // 16rem (256px)
//   "72", // 18rem (288px)
//   "80", // 20rem (320px)
//   "96", // 24rem (384px)
// ];

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
