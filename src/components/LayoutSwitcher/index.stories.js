import React from "react"
// import { text } from "@storybook/addon-knobs";
import LayoutSwitcher from "./"

import General from "./readme.mdx"

export default {
  title: "Atoms|Layout Switcher",
  component: LayoutSwitcher,
  parameters: {
    docs: {
      page: General,
    },
  },
}

export const Default = () => (
  <LayoutSwitcher>
    <div className="fpo"></div>
    <div className="fpo"></div>
    <div className="fpo"></div>
  </LayoutSwitcher>
)
