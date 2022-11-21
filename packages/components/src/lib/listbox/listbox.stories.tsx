import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Listbox } from './listbox';

const Story: ComponentMeta<typeof Listbox> = {
  component: Listbox,
  title: 'Listbox',
};
export default Story;

const Template: ComponentStory<typeof Listbox> = (args) => (
  <div className="space-y-4">
    <Listbox {...args} />
    <Listbox {...args} />
    <Listbox {...args} />
    <Listbox {...args} />
    <Listbox {...args} />
  </div>
);

export const Primary = Template.bind({});
Primary.args = {};
