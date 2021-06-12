import React from 'react';
import Button from './Button';

export default {
  title: 'Button',
  component : Button
}

export const Primary = () => <Button content="Primary" type='primary'></Button>
export const Secondary = () => <Button content="Secondary" type='secondary'>Secondary</Button>
