import React from 'react';
import Line from '../Line';
import Sponsor from '../Sponsor';
import { BsCameraVideoFill, BsThreeDots } from 'react-icons/bs';
import { AiOutlineSearch } from 'react-icons/ai';
import Person from '../Person';
import ButtonCircle from '../ButtonCircle';

const AsideRight = () => {
  const icons = [
    { icon: BsCameraVideoFill },
    { icon: AiOutlineSearch },
    { icon: BsThreeDots }
  ];
  return (
    <aside className="px-2 col-span-1 overflow-y-auto h-screen pt-2 pb-16 sticky top-[56px]">
      <div className="pl-8 flex flex-col flex-wrap">
        <h5 className="font-semibold pt-3 text-[17px] mb-[6px] pl-2">
          Bersponsor
        </h5>
        <Sponsor />
        <Sponsor />
        <Line />

        <div className="box-between py-3">
          <div>
            <h1 className="font-semibold text-gray-500 px-2">Kontak</h1>
          </div>
          {/* icons */}
          <div className="box-center gap-2 text-gray-500">
            {icons.map((icon) => (
              <ButtonCircle
                size="w-[32px] h-[32px] p-2"
                background="bg-transparent hover:bg-gray-200">
                <icon.icon size={18} />
              </ButtonCircle>
            ))}
          </div>
        </div>

        {/* kontak */}
        <div>
          <Person />
          <Person />
          <Person />
          <Person />
          <Person />
          <Person />
        </div>
      </div>
    </aside>
  );
};

export default AsideRight;
