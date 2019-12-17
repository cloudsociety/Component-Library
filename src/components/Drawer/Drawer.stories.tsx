import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import Drawer from "./";

import General from "./Drawer.md";

let stories = storiesOf("Interactions|Drawer", module);

stories.add(
  "Default",
  () => {
    const [openDrawer, setOpenDrawer] = useState(false);
    return (
      <>
        <button onClick={() => setOpenDrawer(true)}>Open</button>
        <Drawer isOpen={openDrawer} onRequestClose={() => setOpenDrawer(false)}>
          <button onClick={() => setOpenDrawer(false)}>Close</button>
        </Drawer>
      </>
    );
  },
  {
    notes: { General }
  }
);
