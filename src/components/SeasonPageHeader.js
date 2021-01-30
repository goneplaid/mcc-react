import Avatar from '../components/Avatar';
import PropTypes from 'prop-types';

const SeasonPageHeader = ({ avatarUrl, seasonWinner, seasonNumber }) => {
  return (
    <header className="bg-white text-black border-b p-10">
      <div className="flex flex-row">
        <Avatar
          className="mr-2"
          size="enormous"
          url={avatarUrl}
        />
        <h1 class="self-end ml-2 pb-4 font-label">
          <span class="text-lg text-gray-600 font-bold">Season {seasonNumber} Winner</span>, <span class="text-lg text-red-branded italic">Masterchef</span>
          <br />
          <span class="text-5xl text-gray-800 leading-none">{seasonWinner}</span>
        </h1>
      </div>
    </header>
  );
};

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

export default SeasonPageHeader;
