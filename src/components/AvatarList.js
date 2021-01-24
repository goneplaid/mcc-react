import React from 'react';
import PropTypes from 'prop-types';

const AvatarList = ({ heading, children }) => {
  return (
    <div>
      <h3 className="mb-1/2 font-normal text-xs text-grey-dark">
        {heading}
      </h3>
      <section className="flex flex-row">
        {children}
      </section>
    </div>
  );
}

AvatarList.propTypes = {
  // Displays a heading, what shall it say?
  heading: PropTypes.string.isRequired,
};

AvatarList.defaultProps = {
  heading: 'Judges',
};

export default AvatarList;
