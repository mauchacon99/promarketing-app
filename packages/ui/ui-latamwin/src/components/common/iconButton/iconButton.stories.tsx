import React from "react";
import { ArgTypes, Meta, StoryFn } from "@storybook/react";
import { IconButtonProps } from "./iconButton.interface";
import IconButton from "./iconButton";

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
        options: ["primary", "secondary", "white"],
        control: { type: "radio" },
        description: "Este es el button principal",
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

export const Secondary = Template.bind({});

Secondary.argTypes = argTypes;
Secondary.args = {
    colorScheme: "secondary",
};

export const White = Template.bind({});

White.argTypes = argTypes;
White.args = {
    colorScheme: "white",
};

export default storyBookComponent;
