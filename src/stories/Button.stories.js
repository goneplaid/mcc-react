import React from 'react';
import Button from '../components/Button';

const story = {
  title: 'Example/Button',
  component: Button,
};

const Template = (args) => <Button {...args} />;

export default story;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};
