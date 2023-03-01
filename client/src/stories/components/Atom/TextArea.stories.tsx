import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import TextArea from "@/components/atom/TextArea";
import { DefaultValue } from "./TextInput.stories";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Atom/TextArea",
  component: TextArea,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    children: { control: "text" },
    defaultValue: { control: "text" },
    autoFocus: { control: "boolean" },
  },
} as ComponentMeta<typeof TextArea>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TextArea> = (args) => (
  <>
    <TextArea {...args} />
  </>
);

export const Default = Template.bind({});
export const PlaceHolder = Template.bind({});
export const AutoFocus = Template.bind({});

// More on args: https://storybook.js.org/docs/react/writing-stories/args

Default.args = {
  defaultValue: "반갑습니다",
};

PlaceHolder.args = {
  placeholder: "반갑습니다",
};

AutoFocus.args = {
  autoFocus: true,
  placeholder:"오토포커스 입니다"
};
