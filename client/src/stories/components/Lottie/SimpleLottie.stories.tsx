import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import SimpleLottie from '@/components/atom/Lottie/SimpleLottie';
import confettie from '@/assets/lottie/confettie.json';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Atom/Lottie/SimpleLottie',
  component: SimpleLottie,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    data: { control: 'object' },
    width: { control: 'text' },
    loop:{control:'boolean'},
    autoplay:{control:'boolean'}
  },
} as ComponentMeta<typeof SimpleLottie>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SimpleLottie> = (args) => (
  <>
    <SimpleLottie {...args} />
  </>
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Default.args = {
  width: '400px',
  loop:true,
  autoplay:true,
  data: confettie,
};
