import React, { useState } from 'react';
import { BiArrowBack } from 'react-icons/bi';
import { BsSearch } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Logo from '../../assets/wlogo.svg';
import ButtonCircle from '../ButtonCircle';
import SearchHistory from './SearchHistory';

const LeftItem = () => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <nav className="box-equel gap-x-2 col-span-1 relative pl-2">
      {isFocused && <SearchHistory />}

      {!isFocused ? (
        <Link to="#">
          <img src={Logo} alt="Logo" />
        </Link>
      ) : (
        <ButtonCircle
          onClick={() => setIsFocused(false)}
          background={`bg-transparenta hover:bg-gray-100 z-50`}>
          <BiArrowBack size={20} />
        </ButtonCircle>
      )}

      <div className="relative">
        <div
          className={`absolute left-[10px] inset-y-0 box-center ${
            isFocused ? 'invisible' : 'visible'
          }`}>
          <BsSearch size={15} className="text-slate-500" />
        </div>
        <input
          type="text"
          className={`bg-gray-100 py-2 px-4 border-none outline-none ${
            !isFocused ? 'pl-[35px]' : ''
          } rounded-full focus:outline-none w-[240px] transition-all duration-200`}
          placeholder="Cari di wabook"
          onFocus={() => setIsFocused(true)}
        />
      </div>
    </nav>
  );
};

export default LeftItem;
