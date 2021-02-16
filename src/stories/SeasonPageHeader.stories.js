import SeasonPageHeader from '../components/SeasonPageHeader';
import PropTypes from 'prop-types';

SeasonPageHeader.propTypes = {
  // The URL of the avatar you would like to display
  avatarUrl: PropTypes.string,

  // The name of the winner
  seasonWinner: PropTypes.string,

  // Just a simple string, ie, "1"
  seasonNumber: PropTypes.string,
};

SeasonPageHeader.defaultProps = {
  avatarUrl: "/util/images/contestants/season_1/whitney_miller.jpg",
  seasonWinner: "Whitney Miller",
  seasonNumber: "1",
};

const story = {
  title: 'Example/Season Page Header',
  component: SeasonPageHeader,
};

const Template = (args) => (
  <div class="bg-gray-200 p-10">
    <SeasonPageHeader
      avatarUrl="/util/images/contestants/season_1/whitney_miller.jpg"
      seasonWinner="Whitney Miller"
      seasonNumber="1"
    />
  </div>
);

export default story;

export const Example = Template.bind({});
Example.args = {};
