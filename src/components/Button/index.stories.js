import React from "react";
import { text, boolean, select } from "@storybook/addon-knobs";
import Button from "./";

import General from "./readme.mdx";

export default {
  title: "Atoms|Button",
  component: Button,
  parameters: {
    docs: {
      page: General
    }
  }
};

const buttonStyles = {
  Normal: "normal",
  Hollow: "hollow",
  Link: "link"
};

export const Default = () => (
  <Button
    type="button"
    disabled={boolean("Disabled?", false)}
    secondary={boolean("Secondary colour?", false)}
    buttonStyle={select("Button Style", buttonStyles, "normal")}
  >
    {text("Button text", "Click me")}
  </Button>
);
