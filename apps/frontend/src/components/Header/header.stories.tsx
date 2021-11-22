import { Story, Meta } from '@storybook/react';
import { Header } from './Header';

export default {
  component: Header,
  title: 'Header',
} as Meta;

const Template: Story = args => <Header {...args} />;

export const Admin = Template.bind({});
Admin.args = {
  color:"#B52E2A",
  role:"admin"
};

export const Teacher = Template.bind({});
Teacher.args = {
  color:"#3057C8",
  role:"teacher"
};
export const Mentor = Template.bind({});
Mentor.args = {
  color:"#F3CA3E",
  role:"Mentor"
};

export const Student = Template.bind({});
Student.args = {
  color:"#35C649",
  role:"Mentor"
};
