import React from 'react';
import { Outlet } from 'react-router-dom';

import Navigation from '@/Components/Navigation/Navigation';

const Layout = () => {
    return (
        <div className='layout'>
            <Navigation />
            <main>
                <Outlet />
            </main>

        </div>
    );
};

export default Layout;