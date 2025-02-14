import React, { useState } from 'react';
import { Select, SelectTest } from './components/select';
import { PaginationTest } from './components/pagination';
import { StepsTest } from './components/steps';
import { CollapseTest } from './components/collapse';
import { PasswordReq } from './components/password-requirements/password-requirements';
import { Test } from './components/test';

// 1) Добавить лейбл label="Выберите тип обучения" - подпись к селекту
// 2) Выделять уже выбранный айтем
// 3) Стилизовать
// 4) Добавить стрелочку выпадающего меню (должна переворачиваться)

export const App = () => {
    const [password, setPassword] = useState('');
    return (
        <div>
            {/* <SelectTest /> */}
            {/*<PaginationTest />*/}
            {/* <StepsTest />*/}
            {/*<CollapseTest />*/}
            {/*<PasswordReq password={password} />*/}
            <Test />
            <input
                value={password}
                onChange={(event) => {
                    setPassword(event.target.value);
                }}
            />
        </div>
    );
};
