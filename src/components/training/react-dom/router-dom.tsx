import {
    Link,
    Outlet,
    Route,
    Routes,
    useLocation,
    useSearchParams,
} from 'react-router-dom';
import { About } from './about';
import { Home } from './home';
import { User } from './user';
import React from 'react';
import { nav } from '../../router-users/Initial-value';

export function RouterDom() {
    return (
        <div>
            {/*1*/}
            <nav>
                <Link to={nav.base}>Главная</Link>
                <Link to={nav.about}>О нас</Link>
                <Link to={nav.user(42)}>Пользователь 42</Link>
            </nav>
            <Routes>
                <Route path={nav.base} element={<Home />} />
                <Route path={nav.about} element={<About />} />
                {/* 3 */}
                <Route path={nav.user(':id')} element={<User />} />
            </Routes>
        </div>
    );
}
