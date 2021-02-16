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

export default CardGrid;
