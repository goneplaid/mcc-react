import CardGrid from '../components/CardGrid';

const SeasonsPage = ({ seasons, isLoading }) => {
  if (seasons.data) {
    debugger;

    return (
      <div>
        oh hello there!
        <div className="w-2/3 m-auto">
          <CardGrid perRow={3}>
          </CardGrid>
        </div>
      </div>
    );
  } else {
    return (
      <h3>Loading...</h3>
    )
  }
};

export default SeasonsPage;


/*
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
    onClick={() => alert('Howdy')}
  />;
*/
