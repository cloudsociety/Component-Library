import React from "react"
// import { text } from "@storybook/addon-knobs";
import ViewportPad from "./"

import General from "./readme.mdx"

export default {
  title: "Atoms|Viewport Pad",
  component: ViewportPad,
  parameters: {
    docs: {
      page: General,
    },
  },
}

export const Default = () => (
  <ViewportPad>
    <div className="fpo"></div>
  </ViewportPad>
)
