import Button from '../components/Button';
import PropTypes from 'prop-types';

Button.propTypes = {
  // Is this the principal call to action on the page?
  primary: PropTypes.bool,

  // Button contents
  label: PropTypes.string.isRequired,

  // Optional click handler
  onClick: PropTypes.func,
};

Button.defaultProps = {
  primary: false,
  onClick: undefined,
};

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
