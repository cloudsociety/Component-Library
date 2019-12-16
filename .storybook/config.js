import {addParameters, addDecorator, configure} from '@storybook/react';
import versettTheme from './versettTheme';
import {withA11y} from '@storybook/addon-a11y';
import {withKnobs} from '@storybook/addon-knobs';
// import {action} from '@storybook/addon-actions';

addParameters({
  options: {
    theme: versettTheme, // theme storybook
    storySort: (a, b) =>
      a[1].kind === b[1].kind
        ? 0
        : a[1].id.localeCompare(b[1].id, {numeric: true}),
  },
});

addDecorator(withA11y);
addDecorator(withKnobs);

// automatically import all files ending in *.stories.js
configure(require.context('../src', true, /\.stories\.(t|j)sx?$/), module);
