import { Story, Meta } from '@storybook/react';
import {  SignPage } from './SignPage';

export default {
  component: SignPage,
  title: ' SignPage',
} as Meta;

const Template: Story = args => < SignPage {...args} />;

export const Primary = Template.bind({});
Primary.args = {};