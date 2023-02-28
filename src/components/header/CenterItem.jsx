import React from 'react';
import { AiFillHome } from 'react-icons/ai';
import { BsShop } from 'react-icons/bs';
import { CgGames } from 'react-icons/cg';
import { HiUserGroup } from 'react-icons/hi';
import { NavLink } from 'react-router-dom';

const CenterItem = () => {
  const links = [
    {
      url: '/',
      icon: AiFillHome
    },
    {
      url: '/shop',
      icon: BsShop
    },
    {
      url: '/group',
      icon: HiUserGroup
    },
    {
      url: '/games',
      icon: CgGames
    }
  ];
  return (
    <nav className="box-center col-span-2 px-20">
      <div className="grid grid-cols-4 gap-x-2 w-full box-evenly">
        {links.map((link) => (
          <NavLink
            to={link.url}
            className="box-center py-3 text-slate-600 rounded-md hover:bg-gray-200 w-full">
            <link.icon size={25} />
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default CenterItem;
