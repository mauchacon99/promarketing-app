import React from "react";
import { ArgTypes, Meta, StoryFn } from "@storybook/react";
import { SwitchProps } from "./switch.interface";
import Switch from "./switch";

const storyBookComponent = {
    title: "ElEMENTS/Switch",
    component: Switch,
} as Meta<SwitchProps>;

/**
 * Template.
 *
 * @param props Props this component.
 * @returns JSX.Element.
 */
const Template: StoryFn<SwitchProps> = (props: SwitchProps) => {
    return <Switch {...props} />;
};

const argTypes: Partial<ArgTypes<SwitchProps>> = {
    defaultValue: { type: "boolean" },
    isDisabled: { type: "boolean" },
    size: {
        options: ["md"],
        control: { type: "radio" },
    },
};

export const On = Template.bind({});

On.argTypes = argTypes;
On.args = {
    defaultValue: true,
};

export const Off = Template.bind({});

Off.argTypes = argTypes;
Off.args = {
    defaultValue: false,
};
export default storyBookComponent;
