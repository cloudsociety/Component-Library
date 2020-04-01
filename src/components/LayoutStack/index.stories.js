import React from "react";
// import { text } from "@storybook/addon-knobs";
import LayoutStack from "./";

import General from "./readme.mdx";

export default {
  title: "Atoms|Layout Stack",
  component: LayoutStack,
  parameters: {
    docs: {
      page: General
    }
  }
};

export const Default = () => (
  <LayoutStack spacing={3}>
    <div className="fpo"></div>
    <div className="fpo"></div>
    <div className="fpo"></div>
    <div className="fpo"></div>
  </LayoutStack>
);
