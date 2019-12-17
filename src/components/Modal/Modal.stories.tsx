import React from "react";
import { storiesOf } from "@storybook/react";
import Modal from './';

let stories = storiesOf('Atoms|Modal', module);

stories.add('Default', () => (
<Modal />
));
