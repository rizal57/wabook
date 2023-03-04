import React from 'react';
import { MdPhotoLibrary } from 'react-icons/md';
import { TbDeviceComputerCamera } from 'react-icons/tb';

const BoxButtons = () => {
  return (
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
  );
};

export default BoxButtons;
