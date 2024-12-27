export const twFlex = [
  // {
  //   class: "flex",
  //   css: "display: flex;",
  //   description: "Enables flex container.",
  // },
  {

  },
  {
    class: "inline-flex",
    css: "display: inline-flex;",
    description: "Enables inline flex container.",
  },

  // Flex Direction
  {
    class: "flex-row",
    css: "flex-direction: row;",
    description: "Items in a row (default).",
  },
  {
    class: "flex-row-reverse",
    css: "flex-direction: row-reverse;",
    description: "Items in a reversed row.",
  },
  {
    class: "flex-col",
    css: "flex-direction: column;",
    description: "Items in a column.",
  },
  {
    class: "flex-col-reverse",
    css: "flex-direction: column-reverse;",
    description: "Items in a reversed column.",
  },

  // Flex Wrap
  {
    class: "flex-wrap",
    css: "flex-wrap: wrap;",
    description: "Wrap items to the next line.",
  },
  {
    class: "flex-wrap-reverse",
    css: "flex-wrap: wrap-reverse;",
    description: "Wrap items to the previous line.",
  },
  {
    class: "flex-nowrap",
    css: "flex-wrap: nowrap;",
    description: "Items won't wrap (default).",
  },

  // Flex Grow
  {
    class: "flex-grow-0",
    css: "flex-grow: 0;",
    description: "Item doesn't grow.",
  },
  {
    class: "flex-grow",
    css: "flex-grow: 1;",
    description: "Item can grow to fill space.",
  },

  // Flex Shrink
  {
    class: "flex-shrink-0",
    css: "flex-shrink: 0;",
    description: "Item won't shrink.",
  },
  {
    class: "flex-shrink",
    css: "flex-shrink: 1;",
    description: "Item can shrink (default).",
  },

  // Flex Basis
  {
    class: "basis-auto",
    css: "flex-basis: auto;",
    description: "Item size based on content.",
  },
  {
    class: "basis-0",
    css: "flex-basis: 0px;",
    description: "Item has no basis.",
  },
  {
    class: "basis-1/2",
    css: "flex-basis: 50%;",
    description: "Item takes up half the container.",
  },
  {
    class: "basis-1/3",
    css: "flex-basis: 33.333%;",
    description: "Item takes up one-third the container.",
  },
  {
    class: "basis-1/4",
    css: "flex-basis: 25%;",
    description: "Item takes up one-fourth the container.",
  },
  {
    class: "basis-full",
    css: "flex-basis: 100%;",
    description: "Item takes up the entire container.",
  },
];

export const twJustify = [
   // Justify Content
   { class: "justify-start", css: "justify-content: flex-start;", description: "Items are aligned to the start of the container." },
   { class: "justify-end", css: "justify-content: flex-end;", description: "Items are aligned to the end of the container." },
   { class: "justify-center", css: "justify-content: center;", description: "Items are centered in the container." },
   { class: "justify-between", css: "justify-content: space-between;", description: "Items are evenly spaced with the first and last item at the container edges." },
   { class: "justify-around", css: "justify-content: space-around;", description: "Items are evenly spaced with equal padding around each item." },
   { class: "justify-evenly", css: "justify-content: space-evenly;", description: "Items are evenly spaced with equal space between them." },
]

export const twAlign = [
   // Align Items
   { class: "items-start", css: "align-items: flex-start;", description: "Items are aligned to the start of the cross-axis." },
   { class: "items-end", css: "align-items: flex-end;", description: "Items are aligned to the end of the cross-axis." },
   { class: "items-center", css: "align-items: center;", description: "Items are aligned at the center of the cross-axis." },
   { class: "items-baseline", css: "align-items: baseline;", description: "Items are aligned at their baselines." },
   { class: "items-stretch", css: "align-items: stretch;", description: "Items stretch to fill the container (default)." },
 
]