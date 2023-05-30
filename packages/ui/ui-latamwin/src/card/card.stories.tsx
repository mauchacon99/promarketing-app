import { ArgTypes, Meta, StoryFn } from '@storybook/react';
import Card from './card';
import React from 'react';

const StoryBookComponent = {
  title: 'UI-LATAMWIN/Card',
  component: Card,
} as Meta<{}>;

const Template: StoryFn<{}> = () => {
  return <Card />;
};

const argTypes: Partial<ArgTypes<{}>> = {};

export const CardDefault = Template.bind({});

CardDefault.argTypes = argTypes;

export default StoryBookComponent;
