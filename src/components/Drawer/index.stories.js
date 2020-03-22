import React, { useState } from "react";
// import { text } from "@storybook/addon-knobs";
import shortid from "shortid";
import Drawer from "./";

import General from "./readme.mdx";

export default {
  title: "Molecules|Drawer",
  component: Drawer,
  parameters: {
    docs: {
      page: General
    }
  }
};

export const Default = () => {
  const shortId = shortid.generate(); // Use this to generate unique ids
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>
      <button onClick={() => setOpenDrawer(true)}>Open</button>
      <Drawer
        isOpen={openDrawer}
        onRequestClose={() => setOpenDrawer(false)}
        aria={{
          labelledby: `modal-title-${shortId}`
        }}
      >
        <h2 id={`modal-title-${shortId}`}>
          First element in modal should be waypoint marker like a heading for AT
          users. It can be visibly hidden if desired.
        </h2>
        <button onClick={() => setOpenDrawer(false)}>Close</button>
      </Drawer>
    </>
  );
};
