import React from 'react';
import {storiesOf} from '@storybook/react';
import Layout421 from './';

let stories = storiesOf('Layouts|Layout421', module);

stories.add('Default', () => (
  <Layout421>
    <ul>
      <li>
        <div className="fpo"></div>
      </li>
      <li>
        <div className="fpo"></div>
      </li>
      <li>
        <div className="fpo"></div>
      </li>
      <li>
        <div className="fpo"></div>
      </li>
    </ul>
  </Layout421>
));
