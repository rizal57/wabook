import React from 'react';
import { Helmet } from 'react-helmet';
import { AsideLeft, AsideRight, Story } from '../components';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 px-2">
      <Helmet>
        <title>Wabook</title>
      </Helmet>
      <div className="grid grid-cols-4 pt-[56px] top-0 w-full">
        {/* Aside Left */}
        <AsideLeft />
        {/* Main */}
        <div className="col-span-2 pt-8 px-16 w-full mx-auto">
          <div className="max-w-lg">
            <Story />
          </div>
        </div>
        {/* Aside Right */}
        <AsideRight />
      </div>
    </div>
  );
};

export default Home;
