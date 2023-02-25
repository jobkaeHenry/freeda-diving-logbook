import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Radio from "../../components/Radio";
import MobileWrapper from "../../layouts/MobileWrapper";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Radio",
  component: Radio,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Radio>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Radio> = (args) => (
  <MobileWrapper>
    <Radio {...args}>
      <Radio.Option value={"옵션1"}>옵션1</Radio.Option>
      <Radio.Option value={"옵션2"}>옵션2</Radio.Option>
    </Radio>
  </MobileWrapper>
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  defaultValue: "옵션1",
};
