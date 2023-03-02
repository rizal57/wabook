import clsx from 'clsx';
import React from 'react';

const ButtonCircle = (props) => {
  const {
    children,
    size = 'w-[40px] h-[40px]',
    background = 'bg-gray-200 hover:bg-gray-300'
  } = props;
  return (
    <button
      {...props}
      className={clsx(
        size,
        background,
        'rounded-full box-center overflow-hidden object-cover bg-cover'
      )}>
      {children}
    </button>
  );
};

export default ButtonCircle;
