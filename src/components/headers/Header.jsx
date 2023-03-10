import React from 'react';
import CenterItem from './CenterItem';
import LeftItem from './LeftItem';
import RightItem from './RightItem';

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 shadow-sm fixed inset-x-0 top-0 z-50">
      <div className="mx-auto pl-2 pr-4 grid grid-cols-4 gap-3 h-[56px]">
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
