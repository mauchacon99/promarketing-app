import React from "react";
import { ArgTypes, Meta, StoryFn } from "@storybook/react";
import { SignUpButtonProps } from "./sign-up-button.interface";
import SignUpButton from "./sign-up-button";

const storyBookComponent = {
    title: "BUTTONS CUSTOM/SignUpButton",
    component: SignUpButton,
} as Meta<SignUpButtonProps>;

/**
 * Template.
 *
 * @param props Props this component.
 * @returns JSX.Element.
 */
const Template: StoryFn<SignUpButtonProps> = (props: SignUpButtonProps) => {
    return <SignUpButton {...props} />;
};

const argTypes: Partial<ArgTypes<SignUpButtonProps>> = {
    label: { type: "string" },
};

export const SignUpButtonComponent = Template.bind({});

SignUpButtonComponent.argTypes = argTypes;
SignUpButtonComponent.args = {
    label: "¡REGISTRATE AHORA!",
};

export default storyBookComponent;
