import { ArgTypes, Meta, StoryFn } from "@storybook/react";
import Card from "./card";
import React from "react";

const StoryBookComponent = {
  title: "UI-LATAMWIN/Card",
  component: Card,
} as Meta<typeof Card>;

/**
 * Template.
 *
 * @returns JSX.Element.
 */
const Template: StoryFn<typeof Card> = () => {
  return <Card />;
};

const argTypes: Partial<ArgTypes<typeof Card>> = {};

export const CardDefault = Template.bind({});

CardDefault.argTypes = argTypes;

export default StoryBookComponent;
