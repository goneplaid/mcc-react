import React from 'react';
import PropTypes from 'prop-types';
import './Avatar.css';

const Avatar = (props) => {
  return (
    <div
      className={
        `mt-10 avatar avatar--${props.size}`
      }
      style={{
        backgroundImage: `url(${props.url})`
      }}
    >
    </div>
  );
}

Avatar.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  url: PropTypes.string,
};

Avatar.defaultProps = {
  size: 'medium',
  url: 'http://localhost:7000/assets/images/judges/joe_bastianich.png',
};

export default Avatar;
