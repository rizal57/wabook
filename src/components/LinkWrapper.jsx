import clsx from 'clsx';
import React from 'react';
import { Link } from 'react-router-dom';

const LinkWrapper = (props) => {
  const { children, className = 'box-equel', url, padding = 'p-2' } = props;

  return (
    <Link
      {...props}
      to={url}
      className={clsx(
        padding,
        'block p-2 rounded-md hover:bg-gray-200 transition cursor-pointer'
      )}>
      <div className={clsx(className, 'gap-3')}>{children}</div>
    </Link>
  );
};

export default LinkWrapper;
