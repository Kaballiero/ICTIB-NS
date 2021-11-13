import { Story, Meta } from '@storybook/react';
import { MyButton } from './MyButton';
export default {
  component: MyButton,
  title: 'MyButton',
} as Meta;

const Template: Story = args => <MyButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
