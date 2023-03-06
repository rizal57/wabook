import clsx from 'clsx';
import React from 'react';

const Card = (props) => {
  const { children, width = 'w-full' } = props;
  return (
    <div
      className={clsx(
        width,
        'py-3 rounded-lg bg-white shadow-lg mb-4 overflow-hidden'
      )}>
      {children}
    </div>
  );
};

const Title = (props) => {
  const { children } = props;
  return <div className="box-between gap-2 px-4 relative">{children}</div>;
};

const Body = (props) => {
  const { children } = props;
  return <div className="px-4 relative">{children}</div>;
};

const Footer = (props) => {
  const { children } = props;
  return <div className="px-4">{children}</div>;
};

Card.Title = Title;
Card.Body = Body;
Card.Footer = Footer;

export default Card;
