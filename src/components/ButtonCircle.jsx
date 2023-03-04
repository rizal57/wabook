import clsx from 'clsx';
import { forwardRef } from 'react';

const ButtonCircle = forwardRef((props, ref) => {
  const {
    children,
    size = 'w-[40px] h-[40px]',
    background = 'bg-gray-200 hover:bg-gray-300'
  } = props;
  return (
    <button
      ref={ref}
      {...props}
      className={clsx(
        size,
        background,
        'rounded-full box-center overflow-hidden object-cover bg-cover transition-all duration-200'
      )}>
      {children}
    </button>
  );
});

export default ButtonCircle;
