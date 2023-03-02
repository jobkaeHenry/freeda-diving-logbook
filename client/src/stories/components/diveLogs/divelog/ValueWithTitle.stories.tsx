import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ValueWithTitle from "@/components/diveLogs/ValueWithTitle";
import { RowWrapper } from "@/layouts/Wrapper";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/DiveLogs/DiveLog/ValueWithTitle",
  component: ValueWithTitle,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    title: { control: "text" },
    children: { control: "text" },
  },
} as ComponentMeta<typeof ValueWithTitle>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ValueWithTitle> = (args) => (
  <ValueWithTitle {...args} />
);
const WrapperTemplate: ComponentStory<typeof ValueWithTitle> = (args: any) => (
  <RowWrapper>
    <ValueWithTitle {...args.first} />
    <ValueWithTitle {...args.second} />
  </RowWrapper>
);

export const Default = Template.bind({});
export const WithWrapper: any = WrapperTemplate.bind({});

// More on args: https://storybook.js.org/docs/react/writing-stories/args

Default.args = {
  title: "수트두께",
  children: "3mm",
};

WithWrapper.args = {
  first: { title: "수트두께", children: "3mm" },
  second: { title: "수트종류", children: "Wet" },
};
