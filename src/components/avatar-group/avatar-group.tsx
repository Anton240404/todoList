import React, { useState } from 'react';
import style from './avatar.module.css';

type Props = {
    items: Item[];
};

type Item = {
    url: string;
    firstName: string; // имя
    lastName: string; // фамилия
};

// Стейт нужен, если данные будут меняться, если нам необходимо,
// что то отрисовать без изменений данных, стейт не нужен.

const x = 'test';
// x.slice(0, 1)
// x[0]

export function AvatarGroup(props: Props) {
    return (
        <div className={style.root}>
            {props.items.map((item) => (
                <div className={style.avatar}>
                    {item.url ? item.url : item.firstName}
                </div>
            ))}
        </div>
    );
}

// 1) Отрисовать все круги
// 1.1) Если firstName и lastName иначе <img src="url" /> или через bg-image
// 2) Отрисовать первые visibleCount кругов
// 3) Узнать, сколько не отрисовали (+6)
// 4) Нарисовать +6 (если неотрисованных > 0)

// <AvatarGroup
// items={[
//  {url: 'https://example.com', firstName: '', lastName: '' }
//  {url: '', firstName: 'Иван', lastName: 'Иванов' }
// ]}
//  visibleCount={6}
//  />
