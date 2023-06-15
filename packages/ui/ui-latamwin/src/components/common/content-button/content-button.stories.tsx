import React from "react";
import { ArgTypes, Meta, StoryFn } from "@storybook/react";
import { ContentButtonProps } from "./content-button.interface";
import ContentButton from "./content-button";

const storyBookComponent = {
    title: "ElEMENTS/Content Button",
    component: ContentButton,
} as Meta<ContentButtonProps>;

/**
 * Template.
 *
 * @param props Props this component.
 * @returns JSX.Element.
 */
const Template: StoryFn<ContentButtonProps> = (props: ContentButtonProps) => {
    return <ContentButton {...props} />;
};

const argTypes: Partial<ArgTypes<ContentButtonProps>> = {
    colorScheme: {
        options: ["primary", "error", "accent", "neutral"],
        control: { type: "radio" },
    },
    hasIcon: { type: "boolean" },
    iconPlacement: {
        options: ["left", "right"],
        control: { type: "radio" },
    },
};

export const Primary = Template.bind({});

Primary.argTypes = argTypes;
Primary.args = {
    colorScheme: "primary",
};

export const Error = Template.bind({});

Error.argTypes = argTypes;
Error.args = {
    colorScheme: "error",
};

export const Accent = Template.bind({});

Accent.argTypes = argTypes;
Accent.args = {
    colorScheme: "accent",
};

export const Neutral = Template.bind({});

Neutral.argTypes = argTypes;
Neutral.args = {
    colorScheme: "neutral",
};

export default storyBookComponent;
