import React from 'react';
import PropTypes from 'prop-types';

const Avatar = (props) => {
  const dimensions = {
    enormous: 'w-56 h-56',
    large: 'w-20 h-20',
    medium: 'w-12 h-12',
    small: 'w-4 h-4',
  };

  return (
    <div
      className={
        `bg-cover avatar ${dimensions[props.size]} rounded-full`
      }
      style={{
        backgroundImage: `url(${props.url})`
      }}
    >
    </div>
  );
}

Avatar.propTypes = {
  size: PropTypes.oneOf(['enormous', 'large', 'medium', 'small']),
  url: PropTypes.string,
};

Avatar.defaultProps = {
  size: 'medium',
  url: 'http://localhost:7000/assets/images/judges/joe_bastianich.png',
};

export default Avatar;
