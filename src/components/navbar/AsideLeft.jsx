import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserFriends, FaBusinessTime } from 'react-icons/fa';
import { HiUserGroup } from 'react-icons/hi';
import { BsShop } from 'react-icons/bs';
import { FiClock } from 'react-icons/fi';
import { BsFillBookmarkFill } from 'react-icons/bs';
import { MdOutlineSpaceDashboard } from 'react-icons/md';
import { AiFillFlag } from 'react-icons/ai';

const AsideLeft = () => {
  const year = new Date().getFullYear();
  const links = [
    {
      img: 'https://picsum.photos/200',
      text: 'M. Fahrur Rizal',
      url: '/fahrurrzl'
    },
    {
      icon: FaUserFriends,
      text: 'Teman',
      url: '/teman'
    },
    {
      icon: FaBusinessTime,
      text: 'Terbaru',
      url: '/terbaru'
    },
    {
      icon: HiUserGroup,
      text: 'Group',
      url: '/group'
    },
    {
      icon: BsShop,
      text: 'Marketplace',
      url: '/marketplace'
    },
    {
      icon: FiClock,
      text: 'Kenangan',
      url: '/kenangan'
    },
    {
      icon: BsFillBookmarkFill,
      text: 'Tersimpan',
      url: '/tersimpan'
    },
    {
      icon: MdOutlineSpaceDashboard,
      text: 'Dashboard Profesional',
      url: '/dashboard'
    },
    {
      icon: AiFillFlag,
      text: 'Halaman',
      url: '/halaman'
    }
  ];
  const footerLinks = [
    { url: 'privasi', text: 'Privasi' },
    { url: 'ketentuan', text: 'Ketentuan' },
    { url: 'iklan', text: 'Iklan' },
    { url: 'pilihan-iklan', text: 'Pilihan Iklan' },
    { url: 'cookie', text: 'Cookie' },
    { url: 'lainnya', text: 'Lainnya' }
  ];
  return (
    <aside className="pl-2 col-span-1 overflow-y-auto h-screen pt-4 sticky top-[56px] w-[300px]">
      <div className="flex flex-col h-full">
        {links.map((link) => (
          <Link to={link.url} key={link.url} className="box-equel aside-left">
            {link.img && (
              <img
                src={link.img}
                alt="profileImage"
                className="object-cover w-[24px] h-[24px] rounded-full overflow-hidden bg-cover flex-shrink-0"
              />
            )}
            {link.icon && <link.icon size={22} />}
            {link.text}
          </Link>
        ))}

        <div className="px-2">
          <hr className="mt-[10px] border-gray-300" />
        </div>

        {/* footer */}
        <div className="flex gap-2 justify-start flex-wrap text-sm text-gray-500 leading-[10px] mt-4 px-2">
          {footerLinks.map((link) => (
            <>
              <Link to={link.url} key={link.url}>
                {link.text}
              </Link>
              &middot;
            </>
          ))}
          {/* copy right */}
          <span>Joule &copy; {year}</span>
        </div>
      </div>
    </aside>
  );
};

export default AsideLeft;
