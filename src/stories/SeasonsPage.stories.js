import SeasonsPage from '../pages/Seasons';
import Avatar from '../components/Avatar';
import SeasonCard from '../components/SeasonCard';

const story = {
  title: 'Example/Page: Seasons',
  component: SeasonsPage,
};

const avatarBaseUrl = 'util/images';

const judges = [
  `${avatarBaseUrl}/judges/graham_elliot.png`,
  `${avatarBaseUrl}/judges/joe_bastianich.png`,
  `${avatarBaseUrl}/judges/gordon_ramsay.png`,
];

const footerArgs = {
  heading: 'Judges',
  children: judges.map(judge => {
    return <Avatar
      className="mr-2"
      size="small"
      url={judge}
    />;
  })
};

const seasons = [
  {
    seasonName: 'Season 1',
    episodeCount: 13,
    contestantName: 'Whitney Miller',
    avatar: `${avatarBaseUrl}/contestants/season_1/Whitney_Miller.jpg`,
  },
  {
    seasonName: 'Season 2',
    episodeCount: 20,
    contestantName: 'Jennifer Behm',
    avatar: `${avatarBaseUrl}/contestants/season_2/jennifer_behm.jpg`,
  },
  {
    seasonName: 'Season 3',
    episodeCount: 20,
    contestantName: 'Christine Hà',
    avatar: `${avatarBaseUrl}/contestants/season_3/christine_hà.jpg`,
  },
  {
    seasonName: 'Season 4',
    episodeCount: 25,
    contestantName: 'Luca Manfè',
    avatar: `${avatarBaseUrl}/contestants/season_4/luca_manfè.jpg`,
  },
  {
    seasonName: 'Season 5',
    episodeCount: 19,
    contestantName: 'Courtney Lapresi',
    avatar: `${avatarBaseUrl}/contestants/season_5/courtney_lapresi.jpg`,
  },
  {
    seasonName: 'Season 6',
    episodeCount: 20,
    contestantName: 'Claudia Sandoval',
    avatar: `${avatarBaseUrl}/contestants/season_6/claudia_sandoval.jpg`,
  },
];

const Template = (args) => <SeasonsPage {...args}>
  {seasons.map(season => {
    return <SeasonCard
      header={{
        seasonName: season.seasonName,
        episodeCount: season.episodeCount
      }}
      body={{
        avatarUrl: season.avatar,
        contestantName: season.contestantName
      }}
      footer={footerArgs}
    />;
  })}
</SeasonsPage>;

export default story;

export const Example = Template.bind({});
Example.args = {};
