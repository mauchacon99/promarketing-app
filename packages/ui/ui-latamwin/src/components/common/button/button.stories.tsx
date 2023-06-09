import React from "react";
import { ArgTypes, Meta, StoryFn } from "@storybook/react";
import { ButtonProps } from "./button.interface";
import Button from "./button";

const StoryBookComponent = {
    title: "ElEMENTS/Button",
    component: Button,
} as Meta<ButtonProps>;

/**
 * Template.
 *
 * @param props Props this component.
 * @returns JSX.Element.
 */
const Template: StoryFn<ButtonProps> = (props: ButtonProps) => {
    return <Button {...props} />;
};

const argTypes: Partial<ArgTypes<ButtonProps>> = {
    colorScheme: {
        options: ["primary", "secondary"],
        control: { type: "radio" },
        description: "Este es el button principal",
    },
    variety: {
        options: ["contained", "outlined", "text"],
        control: { type: "radio" },
    },
    size: {
        options: ["sm", "md", "lg"],
        control: { type: "radio" },
    },
    componentWidth: {
        options: ["default", "auto", "full"],
        control: { type: "radio" },
    },
    shadow: {
        defaultValue: "none",
        options: ["none", "sm", "md", "lg", "xl"],
        control: { type: "radio" },
    },
    disabled: { type: "boolean" },
};

export const Primary = Template.bind({});

Primary.argTypes = argTypes;
Primary.args = {
    colorScheme: "primary",
    variety: "contained",
};
export const Secondary = Template.bind({});
Secondary.args = {
    colorScheme: "secondary",
    variety: "contained",
};

Secondary.argTypes = argTypes;

export default StoryBookComponent;
