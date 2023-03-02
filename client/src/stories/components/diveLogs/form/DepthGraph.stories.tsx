import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import DepthGraph from "@/features/newlogs/components/DepthGraph";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/DiveLogs/Form/DepthGraph",
  component: DepthGraph,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    average: { control: "number" },
    max: { control: "number" },
  },
} as ComponentMeta<typeof DepthGraph>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof DepthGraph> = (args) => (
  <DepthGraph {...args} />
);
const WrapperTemplate: ComponentStory<typeof DepthGraph> = (args) => (
  <DepthGraph {...args} />
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Default.args = {
  average: 15,
  max: 25,
};
