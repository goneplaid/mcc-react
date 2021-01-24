import React from 'react';
import AvatarList from '../AvatarList';

const Footer = ({ heading, children }) => {
  return (
    <section className="p-4">
      <AvatarList
        heading={heading}
      >
        {children}
      </AvatarList>
    </section>
  );
};

export default Footer;
