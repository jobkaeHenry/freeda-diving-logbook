import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import  Text  from '../../components/Text'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Text',
  component: Text,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes

} as ComponentMeta<typeof Text>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const H1 = Template.bind({});
export const H2 = Template.bind({});
export const H3 = Template.bind({});
export const H4 = Template.bind({});
export const P = Template.bind({});
export const Sub = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
H1.args = {
  typography: "h1",
  children:"제목 텍스트입니다",
  bold: true,
};
H2.args = {
  typography: "h2",
  children:"제목 텍스트입니다",
  bold: true,
};
H3.args = {
  typography: "h3",
  children:"제목 텍스트입니다",
  bold: true,
};
H4.args = {
  typography: "h4",
  children:"제목 텍스트입니다",
  bold: true,
};
P.args = {
  typography: "p",
  children:"본문 텍스트입니다",
  bold: false,
};
Sub.args = {
  typography: "sub",
  children:"설명 텍스트입니다",
  bold: false,
  color:"var(--font-gray)"
};

