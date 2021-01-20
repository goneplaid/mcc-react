import React from 'react';
import SeasonCard from '../SeasonCard';
import SeasonCardHeader from '../SeasonCardHeader';
import SeasonCardBody from '../SeasonCardBody';
import SeasonCardFooter from '../SeasonCardFooter';
import Avatar from '../Avatar';

const story = {
  title: 'Example/Season Card',
  component: SeasonCard,
};

export default story;

const CardTemplate = (args) => {
  return (
    <div class="sm:w-1/2 lg:1/4">
      <SeasonCard {...args} />
    </div>
  );
};

const headerArgs = {
  seasonName: 'Season 2',
  episodeCount: 12,
};

const bodyArgs = {
  avatarUrl: 'http://localhost:7000/assets/images/judges/gordon_ramsay.png',
  contestantName: 'Gordon Ramsay'
};

const footerArgs = {
  heading: 'Judges',
  children: [(
    <Avatar
      className="mr-2"
      size="small"
      url="http://localhost:7000/assets/images/judges/graham_elliot.png"
    />
  ), (
    <Avatar
      className="mr-2"
      size="small"
      url="http://localhost:7000/assets/images/judges/joe_bastianich.png"
    />
  ), (
    <Avatar
      className="mr-2"
      size="small"
      url="http://localhost:7000/assets/images/judges/gordon_ramsay.png"
    />
  )]
};

export const Card = CardTemplate.bind({});
Card.args = {
  header: headerArgs,
  body: bodyArgs,
  footer: footerArgs,
};

const HeaderTemplate = (args) => {
  return (
    <div class="sm:w-1/2 lg:1/4">
      <SeasonCardHeader {...args} />
    </div>
  );
};
export const Header = HeaderTemplate.bind({});
Header.args = headerArgs;

const BodyTemplate = (args) => {
  return (
    <div class="sm:w-1/2 lg:1/4">
      <SeasonCardBody {...args} />
    </div>
  );
};
export const Body = BodyTemplate.bind({});
Body.args = bodyArgs;

const FooterTemplate = (args) => {
  return (
    <div class="sm:w-1/2 lg:1/4">
      <SeasonCardFooter {...args} />
    </div>
  );
};
export const Footer = FooterTemplate.bind({});
Footer.args = footerArgs;

