import React from 'react';
import Card from './Card';
import SeasonCardHeader from './SeasonCard/Header';
import SeasonCardBody from './SeasonCard/Body';
import SeasonCardFooter from './SeasonCard/Footer';

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
