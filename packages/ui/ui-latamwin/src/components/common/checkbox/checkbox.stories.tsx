import React from "react";
import { ArgTypes, Meta, StoryFn } from "@storybook/react";
import { CheckboxProps } from "./checkbox.interface";
import Checkbox from "./checkbox";

const storyBookComponent = {
    title: "ElEMENTS/Checkbox",
    component: Checkbox,
} as Meta<CheckboxProps>;

/**
 * Template.
 *
 * @param props Props this component.
 * @returns JSX.Element.
 */
const Template: StoryFn<CheckboxProps> = (props: CheckboxProps) => {
    return <Checkbox {...props} />;
};

const argTypes: Partial<ArgTypes<CheckboxProps>> = {
    checked: { type: "boolean" },
    colorScheme: {
        options: ["accent", "light"],
        control: { type: "radio" },
    },
    labelPlacement: {
        options: ["left", "right"],
        control: { type: "radio" },
    },
    disabled: { type: "boolean" },
};

export const On = Template.bind({});

On.argTypes = argTypes;
On.args = {
    checked: true,
    colorScheme: "accent",
};

export const Off = Template.bind({});

Off.argTypes = argTypes;
Off.args = {
    checked: false,
    colorScheme: "accent",
};
export default storyBookComponent;
