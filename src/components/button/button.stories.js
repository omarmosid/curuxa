import React from 'react';
import Button from './button'
import { action } from '@storybook/addon-actions';

export default {
  title: 'Button',
  component: Button,
};

export const Base = () => <Button onClick={action('button action click!!')}>Hello</Button>;