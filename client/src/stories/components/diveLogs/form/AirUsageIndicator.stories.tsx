import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import AirUsageIndicator from "@/features/newlogs/components/AirUsageIndicator";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/DiveLogs/Form/AirUsageIndicator",
  component: AirUsageIndicator,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    airIn: { control: "number" },
    airOut: { control: "number" },
  },
} as ComponentMeta<typeof AirUsageIndicator>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof AirUsageIndicator> = (args) => (
  <AirUsageIndicator {...args} />
);
const WrapperTemplate: ComponentStory<typeof AirUsageIndicator> = (args) => (
  <AirUsageIndicator {...args} />
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Default.args = {
  airIn: 200,
  airOut: 40,
};
