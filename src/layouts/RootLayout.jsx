import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from '../components';

const RootLayout = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
