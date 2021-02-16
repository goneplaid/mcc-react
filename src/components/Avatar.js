const Avatar = ({ size, url, className }) => {
  const dimensions = {
    enormous: 'w-32 h-32',
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

export default Avatar;
