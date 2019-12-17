import React from "react";
import { storiesOf } from "@storybook/react";
import CollapsibleSection from "./";
import General from "./CollapsibleSection.md";

let stories = storiesOf("Interactions|CollapsibleSection", module);

stories.add(
  "Default",
  () => (
    <CollapsibleSection heading="My Accordion Heading">
      <p>
        Ipsum sequi non earum dolores quos. Odit hic saepe nam eveniet error
        voluptatem saepe. Temporibus excepturi ipsam repellat recusandae a Harum
        deleniti quo esse quidem facilis velit! Voluptates voluptatum nesciunt
      </p>
    </CollapsibleSection>
  ),
  { notes: { General } }
);
