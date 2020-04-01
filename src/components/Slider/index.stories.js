import React from "react";
// import { text } from "@storybook/addon-knobs";
import Slider from "./";

import General from "./readme.mdx";

export default {
  title: "Molecules|Slider",
  component: Slider,
  parameters: {
    docs: {
      page: General
    }
  }
};

const myArr = [
  {
    name: "One",
    width: "50vw"
  },
  {
    name: "Two",
    width: "30vw"
  },
  {
    name: "Three",
    width: "40vw"
  },
  {
    name: "Four",
    width: "60vw"
  },
  {
    name: "Five",
    width: "40vw"
  }
];

export const Default = () => (
  <Slider>
    {myArr.map((item, index) => (
      <section key={index} style={{ minWidth: item.width }}>
        <div>
          <h1>{item.name}</h1>
        </div>
      </section>
    ))}
  </Slider>
);
