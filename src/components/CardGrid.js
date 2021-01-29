import PropTypes from 'prop-types';
import clsx from 'clsx';

const CardGrid = ({ perRow, children }) => {
  return (
    <div
      className={clsx(
        'grid gap-4',
        `grid-cols-${perRow}`
      )}
    >
      {children}
    </div>
  );
};

CardGrid.propTypes = {
  perRow: PropTypes.number,
};

CardGrid.defaultProps = {
  perRow: 3,
};

export default CardGrid;
