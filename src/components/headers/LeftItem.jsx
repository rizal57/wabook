import React from 'react';
import { BsSearch } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Logo from '../../assets/wlogo.svg';

const LeftItem = () => {
  return (
    <nav className="box-equel gap-x-2 col-span-1">
      <Link to="#">
        <img src={Logo} alt="Logo" />
      </Link>

      <div className="relative">
        <div className="absolute left-[10px] inset-y-0 box-center">
          <BsSearch size={15} className="text-slate-500" />
        </div>
        <input
          type="text"
          className="bg-gray-100 py-2 px-4 pl-[35px] rounded-full focus:outline-none w-full"
          placeholder="Cari di wabook"
        />
      </div>
    </nav>
  );
};

export default LeftItem;
