import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MdPhotoLibrary } from 'react-icons/md';
import { TbDeviceComputerCamera } from 'react-icons/tb';
import Card from '../Card';
import Line from '../Line';
import PopupInput from './PopupInput';

const BoxInput = () => {
  const [openPopup, setOpenPopup] = useState(false);

  return (
    <Card>
      <Card.Body>
        {/* input */}
        <div className="box-equel gap-2">
          <Link to="/profile" className="flex-shrink-0 group">
            <img
              src="https://picsum.photos/200"
              alt="profileImage"
              className="object-cover w-[40px] h-[40px] rounded-full group-hover:brightness-[.9]"
            />
          </Link>
          <button
            onClick={() => setOpenPopup(true)}
            className="py-2 px-4 rounded-full w-full bg-gray-100 text-gray-500 hover:bg-gray-200 text-start">
            Apa yang Anda pikirkan, Rizal?
          </button>
        </div>
        {openPopup && (
          <div>
            <PopupInput close={() => setOpenPopup(false)} />
          </div>
        )}
      </Card.Body>
      <Line margin="mt-4" padding="px-0" />
      <Card.Footer>
        {/* buttons */}
        <div className="box-between gap-2 pt-2">
          <button className="box-center gap-2 text-gray-600 font-semibold py-3 px-4 w-full rounded-lg hover:bg-gray-200">
            <TbDeviceComputerCamera size={25} className="text-red-600" />
            Video siaran langsung
          </button>
          <button className="box-center gap-2 text-gray-600 font-semibold py-3 px-4 w-full rounded-lg hover:bg-gray-200">
            <MdPhotoLibrary size={25} className="text-green-500" />
            Foto/video
          </button>
        </div>
      </Card.Footer>
    </Card>
  );
};

export default BoxInput;
