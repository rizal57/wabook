import React from 'react';
import { AiFillBell } from 'react-icons/ai';
import { BsFillGridFill } from 'react-icons/bs';
import { FaFacebookMessenger } from 'react-icons/fa';
import ButtonCircle from '../ButtonCircle';

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
          <ButtonCircle key={icon.icon}>
            <icon.icon size={20} />
          </ButtonCircle>
        ))}
        <ButtonCircle>
          <img
            src="https://picsum.photos/200"
            alt="profileImage"
            className="object-cover"
          />
        </ButtonCircle>
      </div>
    </nav>
  );
};

export default RightItem;
