import React from 'react';
import { AiFillBell } from 'react-icons/ai';
import { BsFillGridFill } from 'react-icons/bs';
import { FaFacebookMessenger } from 'react-icons/fa';
import ButtonCircle from '../ButtonCircle';

const RightItem = () => {
  return (
    <nav className="box-end gap-4">
      <div className="box-center gap-2">
        <ButtonCircle>
          <BsFillGridFill size={20} />
        </ButtonCircle>
        <ButtonCircle overflow="overflow-visible">
          <div className="w-[20px] h-[20px] rounded-full bg-red-500 text-gray-50 absolute -top-[5px] -right-[5px] box-center text-xs">
            9
          </div>
          <FaFacebookMessenger size={20} />
        </ButtonCircle>
        <ButtonCircle overflow="overflow-visible">
          <div className="w-[20px] h-[20px] rounded-full bg-red-500 text-gray-50 absolute -top-[5px] -right-[5px] box-center text-xs">
            9
          </div>
          <AiFillBell size={20} />
        </ButtonCircle>

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
