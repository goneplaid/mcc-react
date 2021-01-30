import PropTypes from 'prop-types';

const Avatar = ({ size, url, className }) => {
  const dimensions = {
    enormous: 'w-56 h-56',
    large: 'w-16 h-16',
    medium: 'w-12 h-12',
    small: 'w-8 h-8',
  };

  return (
    <div
      className={
        `bg-cover avatar ${dimensions[size]} rounded-full ${className}`
      }
      style={{
        backgroundImage: `url(${url})`
      }}
    >
    </div>
  );
}

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

export default Avatar;
