import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Components } from './components';

const Story: ComponentMeta<typeof Components> = {
  component: Components,
  title: 'Components',
};
export default Story;

const Template: ComponentStory<typeof Components> = (args) => (
  <Components {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
