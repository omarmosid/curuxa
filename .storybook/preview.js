import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { GlobalStyle } from '../src/styles/global';

configure(require.context('../src/components', true, /\.stories\.js$/), module);

addDecorator(story => (
  <>
    <GlobalStyle />
    {story()}
  </>
));