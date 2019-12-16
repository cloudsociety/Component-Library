import React from "react"
import { storiesOf } from "@storybook/react"
import { text, boolean } from "@storybook/addon-knobs"
import Button from "./"
import Readme from "./Button.md"

let stories = storiesOf("Atoms|Button", module).addParameters({
  readme: {
    sidebar: Readme,
  },
})

stories.add("Default", () => (
  <Button>{text("Button Text", "Some Text")}</Button>
))
