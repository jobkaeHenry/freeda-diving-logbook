import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Skeleton from "@/components/atom/Skeleton";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Atom/Skeleton",
  component: Skeleton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    width: { control: "text" },
    height: { control: "text" },
  },
} as ComponentMeta<typeof Skeleton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Skeleton> = (args) => (
  <>
    <Skeleton {...args} />
  </>
);

export const Default = Template.bind({});

// More on args: https://storybook.js.org/docs/react/writing-stories/args

Default.args = {
  width: "300px",
  height: "200px",
};
