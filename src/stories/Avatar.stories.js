import Avatar from '../components/Avatar';
import PropTypes from 'prop-types';

Avatar.propTypes = {
  // What size of a button do you want?
  size: PropTypes.oneOf(['enormous', 'large', 'medium', 'small']),

  // Give us a URL to the underlying image for this avatar
  url: PropTypes.string.isRequired,
};

Avatar.defaultProps = {
  size: 'medium',
  url: 'util/images/judges/joe_bastianich.png',
};

const story = {
  title: 'Example/Avatar',
  component: Avatar,
};

const Template = (args) => <Avatar {...args} />;

export default story;

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
