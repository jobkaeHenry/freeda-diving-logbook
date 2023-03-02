import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Thermometer from "@/features/divelog/components/Thermometer";


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/DiveLogs/DiveLog/Thermometer",
  component: Thermometer,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    airTemp: { control: "number" },
    waterTemp: { control: "number" },
  },
} as ComponentMeta<typeof Thermometer>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Thermometer> = (args) => (

    <Thermometer {...args} />

);
const WrapperTemplate: ComponentStory<typeof Thermometer> = (args) => (
  <Thermometer {...args} />
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Default.args = {
  airTemp: 15,
  waterTemp: 25,
};
