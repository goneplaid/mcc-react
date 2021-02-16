import Card from './Card';
import SeasonCardHeader from './SeasonCard/Header';
import SeasonCardBody from './SeasonCard/Body';
import SeasonCardFooter from './SeasonCard/Footer';

const SeasonCard = ({ header, body, footer, onClick }) => {
  const children = [];

  if (header) {
    children.push(<SeasonCardHeader
      seasonName={header.seasonName}
      episodeCount={header.episodeCount}
    />);
  }

  if (body) {
    children.push(<SeasonCardBody
      avatarUrl={body.avatarUrl}
      contestantName={body.contestantName}
    />);
  }

  if (footer) {
    children.push(<SeasonCardFooter
      header={footer.header}
    >
      {footer.children}
    </SeasonCardFooter>);
  }

  return (
    <Card {... (onClick && { onClick })}>
      {children}
    </Card>
  );
};

export default SeasonCard;
