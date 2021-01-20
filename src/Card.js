import React from 'react';

const Card = (props) => {
  return (
    <div
      className="rounded overflow-hidden border-4 border-transparent bg-white cursor-pointer shadow hover:border-teal-400"
    >
      {props.children}
    </div>
  );
};

export default Card;
