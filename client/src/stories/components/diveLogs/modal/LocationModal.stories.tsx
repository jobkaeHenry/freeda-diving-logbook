import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import LocationModal from "@/features/newlogs/components/LocationModal";
import FixedMap from "@/services/GoogleMap/FixedMap";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/DiveLogs/Modal/LocationModal",
  component: LocationModal,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    currentValue: { control: "object" },
  },
} as ComponentMeta<typeof LocationModal>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof LocationModal> = (args) => (
  <>
    <FixedMap lng={0} lat={0}></FixedMap>
    <LocationModal {...args} />
  </>
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Default.args = {};
