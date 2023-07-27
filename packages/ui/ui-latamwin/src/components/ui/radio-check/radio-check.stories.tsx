import React from "react";
import { ArgTypes, Meta, StoryFn } from "@storybook/react";
import { RadioCheckProps } from "./radio-check.interface";
import RadioCheck from "./radio-check";

const storyBookComponent = {
    title: "ElEMENTS/RadioCheck",
    component: RadioCheck,
} as Meta<RadioCheckProps>;

/**
 * Template.
 *
 * @param props Props this component.
 * @returns JSX.Element.
 */
const Template: StoryFn<RadioCheckProps> = (props: RadioCheckProps) => {
    return <RadioCheck {...props} />;
};

const argTypes: Partial<ArgTypes<RadioCheckProps>> = {
    checked: { type: "boolean" },
    colorScheme: {
        options: ["accent"],
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
