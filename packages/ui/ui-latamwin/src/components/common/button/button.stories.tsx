import React from "react";
import { ArgTypes, Meta, StoryFn } from "@storybook/react";
import { ButtonProps } from "./button.interface";
import Button from "./button";
import IconChevronDown from "../../../assets/icons/iconChevronDown";

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
    w: {
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

Secondary.argTypes = argTypes;
Secondary.args = {
    colorScheme: "secondary",
    variety: "contained",
};

export const ChevronWhite = Template.bind({});

ChevronWhite.argTypes = argTypes;
ChevronWhite.args = {
    colorScheme: "secondary",
    variety: "contained",
    size: "md",
    w: "auto",
    className: "px-[32px] py-[14px] rounded-[14px]",
    children: (
        <IconChevronDown color="white" width={"20px"} height={"11.43px"} />
    ),
};

export default storyBookComponent;
