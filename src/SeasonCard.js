import React from 'react';
import Card from './Card';
import SeasonCardHeader from './SeasonCardHeader';
import SeasonCardBody from './SeasonCardBody';
import SeasonCardFooter from './SeasonCardFooter';

const SeasonCard = ({ header, body, footer, onClick }) => {
  return (
    <Card {... (onClick && { onClick })} >
      <SeasonCardHeader
        seasonName={header.seasonName}
        episodeCount={header.episodeCount}
      />
      <SeasonCardBody
        avatarUrl={body.avatarUrl}
        contestantName={body.contestantName}
      />
      <SeasonCardFooter
        header={footer.header}
      >
        {footer.children}
      </SeasonCardFooter>
    </Card >
  );
};

export default SeasonCard;
