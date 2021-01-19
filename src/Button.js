import React from 'react';
import PropTypes from 'prop-types';

/**
 * Primary UI component for user interaction
 */
const Button = ({ primary, backgroundColor, label, ...props }) => {
  const mode = primary ?
    'bg-teal-400 text-white hover:border-teal-500' :
    'bg-transparent text-gray-800 hover:border-teal-400';

  return (
    <button
      type="button"
      className={
        `px-2 py-1 font-semibold text-md rounded border-4 border-transparent shadow ${mode}`
      }
      {...props}
    >
      {label}
    </button>
  );
};

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

export default Button;
