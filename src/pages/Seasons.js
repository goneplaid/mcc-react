import SiteHeader from '../components/SiteHeader';
import CardGrid from '../components/CardGrid';

const SeasonsPage = ({ children }) => {
  return (
    <div className="bg-gray-100">
      <SiteHeader />

      <div className="w-2/3 m-auto">
        <CardGrid perRow="3">
          {children}
        </CardGrid>
      </div>
    </div>
  );
};

export default SeasonsPage;
