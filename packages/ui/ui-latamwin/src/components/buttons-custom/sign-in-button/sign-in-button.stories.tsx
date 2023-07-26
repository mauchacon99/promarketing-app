import React from "react";
import { ArgTypes, Meta, StoryFn } from "@storybook/react";
import { SignInButtonProps } from "./sign-in-button.interface";
import SignInButton from "./sign-in-button";

const storyBookComponent = {
    title: "BUTTONS CUSTOM/SignInButton",
    component: SignInButton,
} as Meta<SignInButtonProps>;

/**
 * Template.
 *
 * @param props Props this component.
 * @returns JSX.Element.
 */
const Template: StoryFn<SignInButtonProps> = (props: SignInButtonProps) => {
    return <SignInButton {...props} />;
};

const argTypes: Partial<ArgTypes<SignInButtonProps>> = {
    label: { type: "string" },
};

export const SignInButtonComponent = Template.bind({});

SignInButtonComponent.argTypes = argTypes;
SignInButtonComponent.args = {
    label: "INICIAR SESIÓN",
};

export default storyBookComponent;
