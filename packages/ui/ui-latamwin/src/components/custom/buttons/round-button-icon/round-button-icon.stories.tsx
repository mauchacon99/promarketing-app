import React from "react";
import { ArgTypes, Meta, StoryFn } from "@storybook/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faSearch,
    faFilter,
    faCircleInfo,
} from "@fortawesome/free-solid-svg-icons";
import { RoundButtonIconProps } from "./round-button-icon.interface";
import RoundButtonIcon from "./round-button-icon";
import { IconFacebook } from "../../../../assets/icons/socialIcons";
import { argTypesShadow } from "../../../../cva/shared/shadow";

const storyBookComponent = {
    title: "BUTTONS CUSTOM/RoundButtonIcon",
    component: RoundButtonIcon,
} as Meta<RoundButtonIconProps>;

/**
 * Template.
 *
 * @param props Props this component.
 * @returns JSX.Element.
 */
const Template: StoryFn<RoundButtonIconProps> = (
    props: RoundButtonIconProps,
) => {
    return <RoundButtonIcon {...props} />;
};

const argTypes: Partial<ArgTypes<RoundButtonIconProps>> = {
    variety: {
        options: ["neutral", "primary", "accent", "secondary"],
        control: { type: "radio" },
    },
    shadow: argTypesShadow,
};

export const Neutral = Template.bind({});
Neutral.argTypes = argTypes;
Neutral.args = {
    variety: "neutral",
    children: (
        <FontAwesomeIcon
            icon={faSearch}
            className="h-3.5 w-3.5 sm:h-5 sm:w-5"
        />
    ),
};

export const Primary = Template.bind({});
Primary.argTypes = argTypes;
Primary.args = {
    variety: "primary",
    children: (
        <FontAwesomeIcon
            icon={faFilter}
            className="h-3.5 w-3.5 sm:h-5 sm:w-5"
        />
    ),
};

export const Accent = Template.bind({});
Accent.argTypes = argTypes;
Accent.args = {
    variety: "accent",
    children: (
        <FontAwesomeIcon
            icon={faCircleInfo}
            className="h-3.5 w-3.5 sm:h-5 sm:w-5"
        />
    ),
};

export const Secondary = Template.bind({});
Secondary.argTypes = argTypes;
Secondary.args = {
    variety: "secondary",
    children: <IconFacebook className=" h-5 w-5" />,
};

export default storyBookComponent;
