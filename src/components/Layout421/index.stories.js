import React from "react";
// import { text } from "@storybook/addon-knobs";
import Layout421 from "./";

import General from "./readme.mdx";

export default {
  title: "Atoms|Layout421",
  component: Layout421,
  parameters: {
    docs: {
      page: General
    }
  }
};

export const Default = () => (
  <Layout421>
    <ul>
      <li>
        <div className="fpo"></div>
      </li>
      <li>
        <div className="fpo"></div>
      </li>
      <li>
        <div className="fpo"></div>
      </li>
      <li>
        <div className="fpo"></div>
      </li>
    </ul>
  </Layout421>
);
