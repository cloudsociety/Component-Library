import React from 'react';
import {storiesOf} from '@storybook/react';
import {text, boolean} from '@storybook/addon-knobs';
import Button from './';

import General from './Button.md';

let stories = storiesOf('Basics|Button', module);

stories.add(
  'Default',
  () => <Button>{text('Button Text', 'Some Text')}</Button>,
  {notes: {General}},
);
