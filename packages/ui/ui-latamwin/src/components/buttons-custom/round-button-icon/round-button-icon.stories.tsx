import React from "react";
import { ArgTypes, Meta, StoryFn } from "@storybook/react";
import { RoundButtonIconProps } from "./round-button-icon.interface";
import RoundButtonIcon from "./round-button-icon";
import { IconFacebook } from "../../../assets/icons/socialIcons/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faSearch,
    faFilter,
    faCircleInfo,
} from "@fortawesome/free-solid-svg-icons";

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
        options: ["standardLight", "standardDark", "outline", "filled"],
        control: { type: "radio" },
    },
};

export const StandardLight = Template.bind({});
StandardLight.argTypes = argTypes;
StandardLight.args = {
    variety: "standardLight",
    children: (
        <FontAwesomeIcon
            icon={faSearch}
            className="h-3.5 w-3.5 sm:h-5 sm:w-5"
        />
    ),
};

export const StandardDark = Template.bind({});
StandardDark.argTypes = argTypes;
StandardDark.args = {
    variety: "standardDark",
    children: (
        <FontAwesomeIcon
            icon={faFilter}
            className="h-3.5 w-3.5 sm:h-5 sm:w-5"
        />
    ),
};

export const Outline = Template.bind({});
Outline.argTypes = argTypes;
Outline.args = {
    variety: "outline",
    children: (
        <FontAwesomeIcon
            icon={faCircleInfo}
            className="h-3.5 w-3.5 sm:h-5 sm:w-5"
        />
    ),
};

export const Filled = Template.bind({});
Filled.argTypes = argTypes;
Filled.args = {
    variety: "filled",
    children: <IconFacebook className="round-button-icon-svg h-5 w-5" />,
};

export default storyBookComponent;
