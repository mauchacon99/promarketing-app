import React from "react";
import { ArgTypes, Meta, StoryFn } from "@storybook/react";
import { ButtonProps } from "./button.interface";
import Button from "./button";
import { argTypesShadow } from "../../../cva/shared/shadow";

const storyBookComponent = {
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
    children: { type: "string" },
    colorScheme: {
        options: ["primary", "accent", "secondary"],
        control: { type: "radio" },
    },
    variety: {
        options: ["contained", "outlined", "text"],
        control: { type: "radio" },
    },
    size: {
        options: ["sm", "md", "lg"],
        control: { type: "radio" },
    },
    w: {
        options: ["default", "auto", "full"],
        control: { type: "radio" },
    },
    shadow: argTypesShadow,
    disabled: { type: "boolean" },
};

export const Primary = Template.bind({});

Primary.argTypes = argTypes;
Primary.args = {
    colorScheme: "primary",
    variety: "contained",
};

export const Accent = Template.bind({});

Accent.argTypes = argTypes;
Accent.args = {
    colorScheme: "accent",
    variety: "contained",
};
export const Secondary = Template.bind({});

Secondary.argTypes = argTypes;
Secondary.args = {
    colorScheme: "secondary",
    variety: "contained",
};

export default storyBookComponent;
