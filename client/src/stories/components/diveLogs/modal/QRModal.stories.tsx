import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import QRModal from "@/features/divelog/components/modal/QRModal";
import FixedMap from "@/services/GoogleMap/FixedMap";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/DiveLogs/Modal/QRModal",
  component: QRModal,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    author: { control: "text" },
  },
} as ComponentMeta<typeof QRModal>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof QRModal> = (args) => (
  <>
    <QRModal {...args} />
  </>
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Default.args = {
  author:"프리다짱짱"
};
