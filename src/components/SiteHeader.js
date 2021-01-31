const SiteHeader = ({ perRow, children }) => {
  return (
    <header className="h-16 pl-2 mb-4 shadow-md bg-white">
      <div className="content flex flex-row h-full">
        <figure className="w-14 no-underline text-black flex flex-row items-center">
          <img
            src="/assets/images/mc-logo.png"
            className="inline-block w-10 h-10 mr-2"
            alt="Master Chef Compendium"
          />
          <span class="inline-block text-xs font-black font-branded">
            Masterchef<br />
            Compendium
          </span>
        </figure>
      </div>
    </header>
  );
};

export default SiteHeader;
