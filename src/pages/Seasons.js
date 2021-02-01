import CardGrid from '../components/CardGrid';

const SeasonsPage = ({ seasons, isLoaded }) => {
  if (isLoaded) {
    return (
      <div>
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
