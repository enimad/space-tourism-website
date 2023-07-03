import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav className='navbar'>
            <ul>
                <NavLink to="/home">
                    <li>
                        00 Home
                    </li>
                </NavLink>
                <NavLink to="/destination">
                    <li>
                        01 Destination
                    </li>
                </NavLink>
                <NavLink to="/crew">
                    <li>
                        02 Crew
                    </li>
                </NavLink>
                <NavLink to="/technology">
                    <li>
                        03 Technology
                    </li>
                </NavLink>
            </ul>
        </nav>
    );
};

export default Navigation;