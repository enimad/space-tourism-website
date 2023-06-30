import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className='navigation'>
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
        </div>
    );
};

export default Navigation;