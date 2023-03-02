import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import AirUsageGraphic from "@/features/divelog/components/AirUsageGraphic";


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/DiveLogs/DiveLog/AirUsageGraphic",
  component: AirUsageGraphic,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    airIn: { control: "number" },
    airOut: { control: "number" },
  },
} as ComponentMeta<typeof AirUsageGraphic>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof AirUsageGraphic> = (args) => (
  <>
    <AirUsageGraphic {...args} />
  </>
);
const WrapperTemplate: ComponentStory<typeof AirUsageGraphic> = (args) => (
  <AirUsageGraphic {...args} />
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Default.args = {
  airIn: 200,
  airOut: 40,
};
