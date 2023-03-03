import React from 'react';
import { BsFillPlayFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const StoryItem = (props) => {
  const { text, state, storyUrl, profileImage } = props;
  return (
    <>
      <Link className="h-[200px] rounded-lg overflow-hidden object-cover bg-cover cursor-pointer group relative shadow-md">
        {/* overlay */}
        <div className="bg-gray-900 absolute inset-x-0 inset-y-0 opacity-0 group-hover:opacity-10 z-40" />
        {/* profile image */}
        {state === 'Cerita' ? (
          <>
            {/* circle */}
            <div className="w-[10px] h-[10px] rounded-full bg-green-500 absolute top-10 left-10 border-[2px] border-gray-100 z-50" />

            <img
              src={profileImage}
              alt="profileImage"
              className="w-[40px] h-[40px] rounded-full absolute top-3 left-3 z-40 border-blue-500 border-4"
            />
          </>
        ) : null}

        {state === 'Cerita' ? (
          <div
            className="w-full h-full group-hover:scale-105 transition duration-300"
            style={{
              backgroundImage: `url(${storyUrl})`
            }}
          />
        ) : (
          <div
            className="w-full h-full group-hover:scale-110 transition duration-300"
            style={{
              backgroundImage: `url(${storyUrl})`
            }}
          />
        )}
        <p className="absolute bottom-2 inset-x-2 font-semibold text-gray-50 text-sm text-shadow">
          {state === 'Cerita' ? (
            <>{text}</>
          ) : (
            <div className="box-equel gap-1">
              <BsFillPlayFill />
              {text}&nbsp;jt
            </div>
          )}
        </p>
      </Link>
    </>
  );
};

export default StoryItem;
