import React from 'react';

import Avatar from '../Avatar';

export default {
  title: 'Example/Avatar',
  component: Avatar,
};

const Template = (args) => <Avatar {...args} />;

export const Small = Template.bind({});
Small.args = {
  size: 'small',
};

export const Medium = Template.bind({});
Medium.args = {
  size: 'medium',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
};

export const Enormous = Template.bind({});
Enormous.args = {
  size: 'enormous',
};
