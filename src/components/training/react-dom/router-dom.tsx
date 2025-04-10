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
                <Link to="/">Главная</Link>
                <a href="/">Главная 2</a>
                <Link to={nav.about}>О нас</Link>
                <Link to="/user/42">Пользователь 42</Link>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path={nav.about} element={<About />} />
                {/* 3 */}
                <Route path="/user/:id" element={<User />} />
                <Route element={<Layout />}>
                    <Route path="/a" element={<User />} />
                    <Route path="/b" element={<div>b</div>} />
                    <Route path="/c" element={<div>c</div>} />
                </Route>
            </Routes>
        </div>
    );
}

function Layout() {
    return (
        <div>
            <Header />
            <Outlet />
        </div>
    );
}

function Header() {
    const location = useLocation();

    const [searchParams, setSearchParams] = useSearchParams();

    return (
        <div>
            Header {location.pathname}
            <p>{searchParams.get('sort')}</p>
            {location.pathname !== '/a' && <button>Вернуться на А</button>}
            {location.pathname !== '/b' && <button>Вернуться на B</button>}
            {location.pathname !== '/c' && <button>Вернуться на C</button>}
            <button onClick={() => setSearchParams({ sort: 'asc' })}>
                Sort ascending
            </button>
            <button onClick={() => setSearchParams({ sort: 'desc' })}>
                Sort descending
            </button>
        </div>
    );
}
