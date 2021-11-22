import { Story, Meta } from '@storybook/react';
import {  AuthButton } from './AuthButton';
import Button from '@mui/material/Button';

export default {
  component: AuthButton,
  title: 'AuthButton',
} as Meta;

const Template: Story = args => <Button variant="contained">Войти</Button>;

export const Primary = Template.bind({});
Primary.args = {};