import React from 'react';
import Card from '../Card';

const story = {
  title: 'Example/Card',
  component: Card,
};

const Template = (args) => <Card {...args}>
  <div className="p-5">
    Look at all the neat things you can put in here!
    <br />
    Some fancy text!
    <br />
    <span className="text-4xl">🧐</span>
  </div>
</Card>;

export default story;

export const Static = Template.bind({});
Static.args = {
  onClick: null,
}

export const Clickable = Template.bind({});
Clickable.args = {
  onClick: function () {
    alert('Howdy!');
  }
};

