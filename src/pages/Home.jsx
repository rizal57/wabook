import React from 'react';
import { Helmet } from 'react-helmet-async';
import {
  AsideLeft,
  AsideRight,
  BoxInput,
  BoxStatus,
  Stories
} from '../components';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Wabook</title>
      </Helmet>
      <div className="min-h-screen bg-gray-100 px-2">
        <div className="grid grid-cols-4 pt-[56px] top-0 w-full">
          {/* Aside Left */}
          <AsideLeft />
          {/* Center */}
          <div className="col-span-2 pt-8 px-16 w-full mx-auto">
            <div className="max-w-lg">
              {/* stories */}
              <Stories />
              {/* input status */}
              <BoxInput />
              {/* statuses */}
              <BoxStatus />
              <BoxStatus />
              <BoxStatus />
              <BoxStatus />
              <BoxStatus />
            </div>
          </div>
          {/* Aside Right */}
          <AsideRight />
        </div>
      </div>
    </>
  );
};

export default Home;
