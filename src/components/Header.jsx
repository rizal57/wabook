import React from 'react';
import LeftItem from './header/LeftItem';
import CenterItem from './header/CenterItem';
import RightItem from './header/RightItem';

const Header = () => {
  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm fixed inset-x-0 top-0">
      <div className="container grid grid-cols-4 gap-3 h-[60px]">
        {/* left-item */}
        <LeftItem />
        {/* center-item */}
        <CenterItem />
        {/* right-item */}
        <RightItem />
      </div>
    </nav>
  );
};

export default Header;
