import clsx from 'clsx';
import React from 'react';

const Line = (props) => {
  const { padding = 'px-2', margin = 'mt-[10px]' } = props;

  return (
    <div className={clsx(padding)}>
      <hr className={clsx(margin, 'border-gray-300')} />
    </div>
  );
};

export default Line;
