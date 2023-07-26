import React from "react";
import { ArgTypes, Meta, StoryFn } from "@storybook/react";
import { IconButtonProps } from "./icon-button.interface";
import IconButton from "./icon-button";

const storyBookComponent = {
    title: "ElEMENTS/IconButton",
    component: IconButton,
} as Meta<IconButtonProps>;

/**
 * Template.
 *
 * @param props Props this component.
 * @returns JSX.Element.
 */
const Template: StoryFn<IconButtonProps> = (props: IconButtonProps) => {
    return <IconButton {...props} />;
};

const argTypes: Partial<ArgTypes<IconButtonProps>> = {
    colorScheme: {
        options: ["primary", "accent", "light"],
        control: { type: "radio" },
    },
    shadow: {
        defaultValue: "md",
        options: ["none", "sm", "md", "lg", "xl"],
        control: { type: "radio" },
    },
    disabled: { type: "boolean" },
};

export const Primary = Template.bind({});

Primary.argTypes = argTypes;
Primary.args = {
    colorScheme: "primary",
};

export const Accent = Template.bind({});

Accent.argTypes = argTypes;
Accent.args = {
    colorScheme: "accent",
};

export const Light = Template.bind({});

Light.argTypes = argTypes;
Light.args = {
    colorScheme: "light",
};

export default storyBookComponent;
