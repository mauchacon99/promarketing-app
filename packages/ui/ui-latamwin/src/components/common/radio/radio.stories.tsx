import React from "react";
import { ArgTypes, Meta, StoryFn } from "@storybook/react";
import { RadioProps } from "./radio.interface";
import Radio from "./radio";

const storyBookComponent = {
    title: "ElEMENTS/Radio",
    component: Radio,
} as Meta<RadioProps>;

/**
 * Template.
 *
 * @param props Props this component.
 * @returns JSX.Element.
 */
const Template: StoryFn<RadioProps> = (props: RadioProps) => {
    return <Radio {...props} />;
};

const argTypes: Partial<ArgTypes<RadioProps>> = {
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
