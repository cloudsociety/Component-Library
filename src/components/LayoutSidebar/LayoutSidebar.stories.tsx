import React from 'react';
import {storiesOf} from '@storybook/react';
import LayoutSidebar from './';

let stories = storiesOf('Layouts|LayoutSidebar', module);

stories.add('Default', () => (
  <LayoutSidebar>
    <div className="fpo"></div>
    <div className="fpo"></div>
  </LayoutSidebar>
));
