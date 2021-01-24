import React from 'react';

const SeasonCardHeader = ({ seasonName, episodeCount }) => {
  return (
    <section className="p-4 border-b border-grey-light flex flex-row">
      <span className="w-1/2 font-bold text-lg text-gray-700">{seasonName}</span>
      <span className="w-1/2 text-right font-thin text-gray-500">{episodeCount} Episodes</span>
    </section>
  );
};

export default SeasonCardHeader;
