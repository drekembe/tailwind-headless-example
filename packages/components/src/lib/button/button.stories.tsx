import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from './button';

const Story: ComponentMeta<typeof Button> = {
  component: Button,
  title: 'Button',
};
export default Story;

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>Helo</Button>
);

export const Primary = Template.bind({});
Primary.args = {
  intent: 'primary',
  size: 'medium',
  fullWidth: false,
  outline: false,
};

export const Secondary = Template.bind({});
Secondary.args = {
  ...Primary.args,
  intent: 'secondary',
};
