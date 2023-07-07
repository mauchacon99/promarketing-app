import React from "react";
import { ArgTypes, Meta, StoryFn } from "@storybook/react";
import { LogoProps } from "./logo.interface";
import Logo from "./logo";

const storyBookComponent = {
    title: "ElEMENTS/Logo",
    component: Logo,
} as Meta<LogoProps>;

/**
 * Template.
 *
 * @param props Props this component.
 * @returns JSX.Element.
 */
const Template: StoryFn<LogoProps> = (props: LogoProps) => {
    return <Logo {...props} />;
};

import logoImg from "../../../assets/img/logo.png";

const argTypes: Partial<ArgTypes<LogoProps>> = {
    size: {
        options: ["sm", "md", "lg"],
        control: { type: "radio" },
    },
};

export const LogoSm = Template.bind({});

LogoSm.argTypes = argTypes;
LogoSm.args = {
    size: "sm",
    src: logoImg,
    alt: "logo",
};

export const LogoMd = Template.bind({});

LogoMd.argTypes = argTypes;
LogoMd.args = {
    size: "md",
    src: logoImg,
    alt: "logo",
};

export const LogoLg = Template.bind({});

LogoLg.argTypes = argTypes;
LogoLg.args = {
    size: "lg",
    src: logoImg,
    alt: "logo",
};

export default storyBookComponent;
