import React from 'react';
import CenterItem from './header/CenterItem';
import LeftItem from './header/LeftItem';
import RightItem from './header/RightItem';

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 shadow-sm fixed inset-x-0 top-0 z-50">
      <div className="container grid grid-cols-4 gap-3 h-[56px]">
        {/* left-item */}
        <LeftItem />
        {/* center-item */}
        <CenterItem />
        {/* right-item */}
        <RightItem />
      </div>
    </header>
  );
};

export default Header;
