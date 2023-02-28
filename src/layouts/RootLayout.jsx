import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../components';

const RootLayout = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
