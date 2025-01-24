import React, { useState } from 'react';
import { Select, SelectTest } from './components/select';
import { PaginationTest } from './components/pagination';

// 1) Добавить лейбл label="Выберите тип обучения" - подпись к селекту
// 2) Выделять уже выбранный айтем
// 3) Стилизовать
// 4) Добавить стрелочку выпадающего меню (должна переворачиваться)

export const App = () => {
    return (
        <div>
            {/* <SelectTest /> */}
            <PaginationTest />
        </div>
    );
};
