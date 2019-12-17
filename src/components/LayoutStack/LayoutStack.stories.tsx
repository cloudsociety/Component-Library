import React from 'react';
import {storiesOf} from '@storybook/react';
import LayoutStack from './';

let stories = storiesOf('Layouts|LayoutStack', module);

stories.add('Default', () => (
  <LayoutStack spacing={3}>
    <div className="fpo"></div>
    <div className="fpo"></div>
    <div className="fpo"></div>
  </LayoutStack>
));
