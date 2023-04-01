import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Checkbox from "@/components/atom/form/Checkbox";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Atom/Form/Checkbox",
  component: Checkbox,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    label: { control: "text" },
    defaultChecked: { control: "boolean" },
  },
} as ComponentMeta<typeof Checkbox>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Checkbox> = (args) => (
  <Checkbox {...args} />
);

export const Checked = Template.bind({});
export const UnChecked = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Checked.args = {
  defaultChecked: true,
  label: "라벨입니다",
};

UnChecked.args = {
  defaultChecked: false,
  label: "라벨입니다",
};
