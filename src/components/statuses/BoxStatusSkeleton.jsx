import React from 'react';
import Card from '../Card';
import Line from '../Line';

const BoxStatusSkeleton = () => {
  return (
    <Card>
      <Card.Title>
        {/* left item */}
        <div className="box-between w-full">
          <div className="flex gap-2">
            <div className="w-[40px] h-[40px] rounded-full bg-gray-200 animate-pulse" />
            <div className="flex justify-center flex-col w-[100px]">
              <div className="bg-gray-200 h-[10px] w-[150px] animate-pulse rounded-lg mb-2" />
              <div className="bg-gray-200 h-[10px] animate-pulse rounded-lg" />
            </div>
          </div>
          <div>
            <div className="bg-gray-200 w-[30px] h-[10px] rounded-full animate-pulse" />
          </div>
        </div>
      </Card.Title>
      <Card.Body>
        <div className="mt-2 rounded-lg bg-gray-200 h-[15px] w-1/2 animate-pulse" />
      </Card.Body>
      <Line padding="px-0" />
      <Card.Footer>
        <div className="box-between gap-2 pt-1">
          <div className="bg-gray-200 h-[30px] w-full rounded-lg animate-pulse" />
          <div className="bg-gray-200 h-[30px] w-full rounded-lg animate-pulse" />
          <div className="bg-gray-200 h-[30px] w-full rounded-lg animate-pulse" />
        </div>
      </Card.Footer>
    </Card>
  );
};

export default BoxStatusSkeleton;
