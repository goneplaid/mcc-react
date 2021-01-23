import PropTypes from 'prop-types';
import clsx from 'clsx';

const Card = ({ onClick, children }) => {
  const classNames = clsx(
    'overflow-hidden bg-white shadow',
    'border-4 border-transparent rounded', {
    'cursor-pointer hover:border-teal-400': onClick,
  });

  return (
    <div
      {...(onClick && { onClick })}
      className={classNames}
    >
      {children}
    </div>
  );
};

Card.propTypes = {
  // Optional click handler
  onClick: PropTypes.func,
};

Card.defaultProps = {
  onClick: undefined,
};

export default Card;
