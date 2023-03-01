import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import FileInput from "@/components/atom/FileInput";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Atom/FileInput",
  component: FileInput,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    label: { control: "text" },
  },
} as ComponentMeta<typeof FileInput>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof FileInput> = (args) => (
  <>
    <FileInput {...args} />
  </>
);

export const Default = Template.bind({});

// More on args: https://storybook.js.org/docs/react/writing-stories/args

Default.args = {
  label:"사진을 입력해주세요"
};
