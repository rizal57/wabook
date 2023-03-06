import React from 'react';

const PersonSkeleton = () => {
  return (
    <div className="box-equel gap-3 font-semibold px-2 mb-2">
      <div className="relative">
        <div className="max-w-[30px] max-h-[30px] w-[30px] h-[30px] rounded-full bg-gray-200 animate-pulse" />
      </div>
      <div className="bg-gray-200 h-[12px] w-1/2 animate-pulse rounded-lg" />
    </div>
  );
};

export default PersonSkeleton;
