import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import InputWithLabel from '@/components/form/InputWithLabel';



// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/form/InputWithLabel',
  component: InputWithLabel,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   children: { control: 'text' },
  // },
} as ComponentMeta<typeof InputWithLabel>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof InputWithLabel> = (args) => <InputWithLabel {...args} />;

export const Number = Template.bind({});
export const Time = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Number.args = {
  label: '온도',
  unit:"℃",
  type:"number",
};

Time.args = {
  label: '입수시간',
  type:"time"
};