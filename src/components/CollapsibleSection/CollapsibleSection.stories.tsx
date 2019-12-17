import React from "react"
import { storiesOf } from "@storybook/react"
import CollapsibleSection from "./"
import Readme from "./CollapsibleSection.md"

let stories = storiesOf("Molecules|CollapsibleSection", module).addParameters({
  readme: {
    sidebar: Readme,
  },
})

stories.add("Default", () => (
  <CollapsibleSection heading="My Accordion Heading">
    <p>
      Ipsum sequi non earum dolores quos. Odit hic saepe nam eveniet error
      voluptatem saepe. Temporibus excepturi ipsam repellat recusandae a Harum
      deleniti quo esse quidem facilis velit! Voluptates voluptatum nesciunt
    </p>
  </CollapsibleSection>
))
