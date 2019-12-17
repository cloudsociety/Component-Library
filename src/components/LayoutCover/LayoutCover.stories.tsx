import React from 'react';
import {storiesOf} from '@storybook/react';
import LayoutCover from './';

let stories = storiesOf('Layouts|LayoutCover', module);

stories.add('Default', () => (
  <div style={{minHeight: '100vh'}}>
    <LayoutCover>
      <div className="fpo"></div>
      <div className="fpo" data-position-center></div>
      <div className="fpo"></div>
    </LayoutCover>
  </div>
));
