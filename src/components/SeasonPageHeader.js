import Avatar from '../components/Avatar';

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

export default SeasonPageHeader;
