import React from "react"
// import { text } from "@storybook/addon-knobs";
import LayoutCover from "./"

import General from "./readme.mdx"

export default {
  title: "Atoms|Layout Cover",
  component: LayoutCover,
  parameters: {
    docs: {
      page: General,
    },
  },
}

export const Default = () => (
  <div style={{ minHeight: "100vh" }}>
    <LayoutCover>
      <div className="fpo"></div>
      <div className="fpo" data-position-center></div>
      <div className="fpo"></div>
    </LayoutCover>
  </div>
)
