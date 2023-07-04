import React from "react";
import { ArgTypes, Meta, StoryFn } from "@storybook/react";
import { SignInProps } from "./sign-in.interface";
import SignIn from "./sign-in";

const storyBookComponent = {
    title: "BUTTONS CUSTOM/SignIn",
    component: SignIn,
} as Meta<SignInProps>;

/**
 * Template.
 *
 * @param props Props this component.
 * @returns JSX.Element.
 */
const Template: StoryFn<SignInProps> = (props: SignInProps) => {
    return <SignIn {...props} />;
};

const argTypes: Partial<ArgTypes<SignInProps>> = {
    label: { type: "string" },
};

export const SignInButton = Template.bind({});

SignInButton.argTypes = argTypes;
SignInButton.args = {
    label: "INICIAR SESIÓN",
};

export default storyBookComponent;
