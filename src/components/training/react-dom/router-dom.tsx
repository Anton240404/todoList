import { Link, Route, Routes } from 'react-router-dom';
import { About } from './about';
import { Home } from './home';
import { User } from './user';
import React from 'react';

export function RouterDom() {
    return (
        <div>
            <nav>
                <Link to="/">Главная</Link>
                <Link to="/about">О нас</Link>
                <Link to="/user/42">Пользователь 42</Link>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/user/:id" element={<User />} />
            </Routes>
        </div>
    );
}
