import { ArgTypes, Meta, StoryFn } from '@storybook/react';
import Card from './card'
import React from 'react';
 
const StoryBookComponent = {
	title: 'UI-LATAMWIN/Card',
	component: Card,
} as Meta<{}>;

const Template: StoryFn<{}> = () => {
	return <Card />;
};

const argTypes: Partial<ArgTypes<{}>> = {
	onClick: { control: false },
	children: { control: false },
	buttonType: {
		options: ['primary', 'secondary'],
		control: { type: 'radio' },
	},
	buttonStyle: {
		options: ['default', 'shadow', 'outlined', 'text'],
		control: { type: 'radio' },
	},
	buttonSize: {
		options: ['large', 'medium', 'small'],
		control: { type: 'radio' },
	},
	loading: { type: 'boolean' },
	disabled: { type: 'boolean' },
};

export const CardDefault = Template.bind({});
 
CardDefault.argTypes = argTypes;
 

export default StoryBookComponent;
