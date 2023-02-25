import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import FixedBottomCTA from "../../layouts/FixedBottomCTA";
import { Button } from "../../components/atom/Button";
import Icon from "../../components/atom/Icon";
import rightArrow from "../../assets/rightArrow.svg";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Layouts/FixedBottomCTA",
  component: FixedBottomCTA,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof FixedBottomCTA>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof FixedBottomCTA> = (args) => (
  <FixedBottomCTA {...args}>
    <Button className="ghost">버튼1</Button>
    <Button>
      <span>버튼2</span>
      <Icon url={rightArrow}/>
    </Button>
  </FixedBottomCTA>
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {};
