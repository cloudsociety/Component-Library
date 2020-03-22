import React from "react"
// import { text } from "@storybook/addon-knobs";
import LayoutSidebar from "./"

import General from "./readme.mdx"

export default {
  title: "Atoms|Layout Sidebar",
  component: LayoutSidebar,
  parameters: {
    docs: {
      page: General,
    },
  },
}

export const Default = () => (
  <LayoutSidebar>
    <div className="fpo"></div>
    <div className="fpo"></div>
  </LayoutSidebar>
)
