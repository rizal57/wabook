import React from 'react';
import Wrapper from './Wrapper';

const Sponsor = () => {
  return (
    <Wrapper url="/sponsor">
      <div className="max-w-[100px] max-h-[100px] overflow-hidden object-cover rounded-md">
        <img
          src="https://picsum.photos/300"
          alt="sponsorImage"
          className="flex-shrink-0 object-cover"
        />
      </div>
      <div className="flex flex-col">
        <h1 className="text-[14px] font-semibold">
          {`Transformasi Digital Perusahaan Anda bersama Digital Skolah`.slice(
            0,
            56
          )}
          ...
        </h1>
        <span className="text-sm text-gray-500">sponsor.com</span>
      </div>
    </Wrapper>
  );
};

export default Sponsor;
