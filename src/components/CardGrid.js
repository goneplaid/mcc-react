import PropTypes from 'prop-types';

const CardGrid = ({ perRow, children }) => {
  return (
    <div
      className="grid grid-cols-3 gap-4"
    >
      {children}
    </div>
  );
};

CardGrid.propTypes = {
};

CardGrid.defaultProps = {
};

export default CardGrid;
