import React from "react";
import { ArgTypes, Meta, StoryFn } from "@storybook/react";
import { SignUpProps } from "./sign-up.interface";
import SignUp from "./sign-up";

const storyBookComponent = {
    title: "BUTTONS CUSTOM/SignUp",
    component: SignUp,
} as Meta<SignUpProps>;

/**
 * Template.
 *
 * @param props Props this component.
 * @returns JSX.Element.
 */
const Template: StoryFn<SignUpProps> = (props: SignUpProps) => {
    return <SignUp {...props} />;
};

const argTypes: Partial<ArgTypes<SignUpProps>> = {
    label: { type: "string" },
};

export const SignUpButton = Template.bind({});

SignUpButton.argTypes = argTypes;
SignUpButton.args = {
    label: "¡REGISTRATE AHORA!",
};

export default storyBookComponent;
