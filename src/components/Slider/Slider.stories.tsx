import React from "react";
import { storiesOf } from "@storybook/react";
import Slider from "./";

let stories = storiesOf("Interactions|Slider", module);

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

stories
  .add("Default", () => (
    <Slider>
      {myArr.map((item, index) => (
        <section key={index} style={{ minWidth: item.width }}>
          <div>
            <h1>{item.name}</h1>
          </div>
        </section>
      ))}
    </Slider>
  ))
  .add("Fixed Width", () => (
    <Slider>
      {myArr.map((item, index) => (
        <section key={index}>
          <div>
            <h1>{item.name}</h1>
          </div>
        </section>
      ))}
    </Slider>
  ));
