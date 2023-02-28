import React from 'react';
import { AiFillBell } from 'react-icons/ai';
import { BsFillGridFill } from 'react-icons/bs';
import { FaFacebookMessenger } from 'react-icons/fa';

const RightItem = () => {
  const icons = [
    {
      icon: BsFillGridFill
    },
    {
      icon: FaFacebookMessenger
    },
    {
      icon: AiFillBell
    }
  ];
  return (
    <nav className="box-end gap-4">
      <div className="box-center gap-2">
        {icons.map((icon) => (
          <button className="w-[40px] h-[40px] rounded-full bg-gray-200 hover:bg-gray-300 box-center">
            <icon.icon size={20} />
          </button>
        ))}
        <button className="w-[40px] h-[40px] rounded-full overflow-hidden bg-cover">
          <img
            src="https://picsum.photos/200"
            alt="profileImage"
            className="object-cover"
          />
        </button>
      </div>
    </nav>
  );
};

export default RightItem;
