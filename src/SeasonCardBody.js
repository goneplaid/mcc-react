import React from 'react';
import Avatar from './Avatar';

const SeasonCardBody = ({ avatarUrl, contestantName }) => {
  return (
    <section className="p-4 border-b border-grey-light flex flex-col items-center">
      <Avatar
        url={avatarUrl}
        size='enormous'
      />
      <strong class="font-thin text-red-branded mt-1">
        Masterchef
      </strong>
      <strong class="text-lg font-normal mt-1/2">
        {contestantName}
      </strong>

    </section>
  );
};

export default SeasonCardBody;
