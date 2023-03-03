import React from 'react';
import { BsPlus } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const CreateStory = (props) => {
  const { profileImage, url } = props;
  return (
    <>
      <Link
        to={url}
        className="h-[200px] rounded-lg overflow-hidden object-cover bg-cover cursor-pointer group relative shadow-md">
        {/* overlay */}
        <div className="bg-gray-900 absolute inset-x-0 inset-y-0 opacity-0 group-hover:opacity-10 z-40" />

        {/* profile image */}
        <div
          className="w-full h-full group-hover:scale-105 transition duration-300"
          style={{
            backgroundImage: `url(${profileImage})`
          }}
        />

        <div className="absolute bottom-0 inset-x-0 bg-white h-[50px]">
          <div className="w-[40px] h-[40px] rounded-full bg-blue-500 text-white text-xl absolute -top-4 left-[50%] -translate-x-[50%] box-center border-[4px] border-white">
            <BsPlus size={40} />
          </div>
        </div>
        <p className="absolute bottom-2 inset-x-0 font-semibold text-gray-900 text-center text-sm">
          Buat Cerita
        </p>
      </Link>
    </>
  );
};

export default CreateStory;
