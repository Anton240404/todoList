import React, { useState } from 'react';
import { Select, SelectTest } from './components/select';
import { PaginationTest } from './components/pagination';
import { StepsTest } from './components/steps';
import { CollapseTest } from './components/collapse';
import { PasswordReq } from './components/password-requirements/password-requirements';
import { MyInput } from './components/my-input/my-input';
import { Accordion, Spoiler } from './components/spoiler';
import { Breadcrumbs } from './Breadcrumbs/breadcrumbs';
import { AlertComponent } from './Alert-component/AlertComponent';
import { AvatarGroup } from './components/avatar-group/avatar-group';

// 1) Добавить лейбл label="Выберите тип обучения" - подпись к селекту
// 2) Выделять уже выбранный айтем
// 3) Стилизовать
// 4) Добавить стрелочку выпадающего меню (должна переворачиваться)

export const App = () => {
    const [password, setPassword] = useState('');
    const breadcrumbs = [
        { label: 'Главная', href: '/' },
        { label: 'Категории', href: '/categories' },
        { label: 'Электроника', href: '/categories/electronics' },
    ];
    return (
        <div>
            {/* <SelectTest /> */}
            {/*<PaginationTest />*/}
            {/* <StepsTest />*/}
            {/*<CollapseTest />*/}
            {/*<PasswordReq password={password} />*/}
            {/*<Test />*/}
            {/*<input
                value={password}
                onChange={(event) => {
                    // setPassword(event.target.value);
                }}
            />*/}
            {/*<MyInput
                value={password}
                onChange={(event) => {
                    console.log(event);
                }}
            />*/}
            {/*   <Accordion />*/}
            {/* <Breadcrumbs items={breadcrumbs} />*/}
            {/* <AlertComponent
                severity="success"
                text="This is a success Alert."
            /> */}
            <AvatarGroup
                items={[
                    { url: 'https//:example.com', firstName: '', lastName: '' },
                    { url: '', firstName: 'Иван', lastName: 'Иванов' },
                    { url: '', firstName: 'Иван', lastName: 'Иванов' },
                ]}
                visibleCount={6}
            />
        </div>
    );
};
