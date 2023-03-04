import clsx from 'clsx';
import React from 'react';
import { Link } from 'react-router-dom';

const Wrapper = (props) => {
  const { children, className = 'box-equel', url } = props;

  return (
    <Link
      {...props}
      to={url}
      className="block p-2 rounded-md hover:bg-gray-200 transition  cursor-pointer">
      <div className={clsx(className, 'gap-3')}>{children}</div>
    </Link>
  );
};

export default Wrapper;
