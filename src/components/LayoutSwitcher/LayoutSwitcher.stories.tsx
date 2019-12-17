import React from 'react';
import {storiesOf} from '@storybook/react';
import LayoutSwitcher from './';

let stories = storiesOf('Layouts|LayoutSwitcher', module);

stories.add('Default', () => (
  <LayoutSwitcher>
    <div className="fpo"></div>
    <div className="fpo"></div>
    <div className="fpo"></div>
  </LayoutSwitcher>
));
