import React from 'react';

const Card = (props) => {
  const { children } = props;
  return (
    <div className="py-2 px-4 rounded-lg bg-white shadow-md w-full">
      {children}
    </div>
  );
};

const Title = (props) => {
  const { children } = props;
  return <div className="box-between gap-2">{children}</div>;
};

const Body = (props) => {
  const { children } = props;
  return <div>{children}</div>;
};

const Footer = (props) => {
  const { children } = props;
  return <div>{children}</div>;
};

Card.Title = Title;
Card.Body = Body;
Card.Footer = Footer;

export default Card;
