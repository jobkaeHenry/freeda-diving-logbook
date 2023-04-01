import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import TextInput from '@/components/atom/form/TextInput';



// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Atom/Form/TextInput',
  component: TextInput,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   children: { control: 'text' },
  // },
} as ComponentMeta<typeof TextInput>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TextInput> = (args) => <TextInput {...args} />;

export const AutoFocus = Template.bind({});
export const DefaultValue = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

AutoFocus.args = {
  autoFocus:true,
  placeholder:"입력해주세요"
};

DefaultValue.args = {
  defaultValue:"기본값이 입력된 인풋 입니다",
  autoFocus:true
};