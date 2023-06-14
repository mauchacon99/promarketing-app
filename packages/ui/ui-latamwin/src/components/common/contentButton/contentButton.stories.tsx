import React from "react";
import { ArgTypes, Meta, StoryFn } from "@storybook/react";
import { ContentButtonProps } from "./contentButton.interface";
import ContentButton from "./contentButton";

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
        options: ["blue", "danger", "yellow", "gray"],
        control: { type: "radio" },
        description: "Este es el button principal",
    },
    hasIcon: { type: "boolean" },
    iconPlacement: {
        options: ["left", "right"],
        control: { type: "radio" },
    },
    disabled: { type: "boolean" },
};

export const Blue = Template.bind({});

Blue.argTypes = argTypes;
Blue.args = {
    colorScheme: "blue",
};

export const Danger = Template.bind({});

Danger.argTypes = argTypes;
Danger.args = {
    colorScheme: "danger",
};

export const Yellow = Template.bind({});

Yellow.argTypes = argTypes;
Yellow.args = {
    colorScheme: "yellow",
};

export const Gray = Template.bind({});

Gray.argTypes = argTypes;
Gray.args = {
    colorScheme: "gray",
};

export default storyBookComponent;
