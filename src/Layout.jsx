import React from 'react';
import { Outlet } from 'react-router-dom';
import Sitebar from './Components/Sitebar';

const Layout = () => {
    return (
        <div className='flex'>
            <Sitebar></Sitebar>
            <Outlet></Outlet>
        </div>
    );
};

export default Layout;