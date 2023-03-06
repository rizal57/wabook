import React from 'react';
import Wrapper from '../LinkWrapper';

const Person = (props) => {
  const { name, id } = props;
  return (
    <Wrapper url={'/person'}>
      <div className="box-center gap-3 font-semibold">
        <div className="relative">
          <img
            src={`https://picsum.photos/100/100?random=${id}`}
            alt="profileImage"
            className="max-w-[30px] max-h-[30px] w-[30px] h-[30px] rounded-full"
          />
          {/* circle */}
          <div className="w-[10px] h-[10px] rounded-full bg-green-500 absolute bottom-0 right-0 border-[2px] border-gray-100"></div>
        </div>
        <p>{name}</p>
      </div>
    </Wrapper>
  );
};

export default Person;
