import clsx from 'clsx';

const Button = ({ primary, backgroundColor, label, ...props }) => {
  const mode = primary ?
    'bg-teal-400 text-white hover:border-teal-500' :
    'bg-transparent text-gray-800 hover:border-teal-400';

  return (
    <button
      type="button"
      className={clsx(
        mode,
        'px-2 py-1 shadow',
        'font-semibold text-md',
        'rounded border-4 border-transparent'
      )}
      {...props}
    >
      {label}
    </button>
  );
};

export default Button;
