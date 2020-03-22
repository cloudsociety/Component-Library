import React from "react";
// import { text } from "@storybook/addon-knobs";
import CollapsibleSection from "./";

import General from "./readme.mdx";

export default {
  title: "Molecules|Collapsible Section",
  component: CollapsibleSection,
  parameters: {
    docs: {
      page: General
    }
  }
};

export const Default = () => (
  <CollapsibleSection heading="My Accordion Heading">
    <p>
      Ipsum sequi non earum dolores quos. Odit hic saepe nam eveniet error
      voluptatem saepe. Temporibus excepturi ipsam repellat recusandae a Harum
      deleniti quo esse quidem facilis velit! Voluptates voluptatum nesciunt
    </p>
  </CollapsibleSection>
);
