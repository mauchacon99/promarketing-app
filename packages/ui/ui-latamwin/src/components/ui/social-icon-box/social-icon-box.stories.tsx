import React from "react";
import { ArgTypes, Meta, StoryFn } from "@storybook/react";
import { SocialIconBoxProps } from "./social-icon-box.interface";
import SocialIconBox from "./social-icon-box";
import {
    IconGoogle,
    IconFacebook,
    IconTiktok,
    IconTwitter,
} from "../../../assets/icons/socialIcons/index";

const storyBookComponent = {
    title: "ElEMENTS/Social Icon Box",
    component: SocialIconBox,
} as Meta<SocialIconBoxProps>;

/**
 * Template.
 *
 * @param props Props this component.
 * @returns JSX.Element.
 */
const Template: StoryFn<SocialIconBoxProps> = (props: SocialIconBoxProps) => {
    return <SocialIconBox {...props} />;
};

const argTypes: Partial<ArgTypes<SocialIconBoxProps>> = {
    disabled: { type: "boolean" },
};

export const SocialIconGoogle = Template.bind({});

SocialIconGoogle.argTypes = argTypes;
SocialIconGoogle.args = {
    children: <IconGoogle className="h-12 w-12" />,
};

export const SocialIconFacebook = Template.bind({});

SocialIconFacebook.argTypes = argTypes;
SocialIconFacebook.args = {
    children: <IconFacebook className="h-12 w-12" />,
};

export const SocialIconTiktok = Template.bind({});

SocialIconTiktok.argTypes = argTypes;
SocialIconTiktok.args = {
    children: <IconTiktok className="h-[50px] w-[50px]" />,
};

export const SocialIconTwitter = Template.bind({});

SocialIconTwitter.argTypes = argTypes;
SocialIconTwitter.args = {
    children: <IconTwitter className="h-12 w-12" />,
};

export default storyBookComponent;
