import React from 'react';
import style from './avatar.module.css';

type Props = {
    items: Item[];
    title: string;
    visibleCount: number; // сколько кругов отрисовать
};

type Item = {
    url: string;
    firstName: string; // имя
    lastName: string; // фамилия
};

// Стейт нужен, если данные будут меняться, если нам необходимо,
// что то отрисовать без изменений данных, стейт не нужен.

const getInitials = (x: Item): string => {
    return `${x.firstName[0]}${x.lastName[0]}`;
};

function getInitials2(firstName: string, lastName: string): string {
    return `${firstName[0]}${lastName[0]}`;
}

const colors = ['#3498db', '#2ecc71', '#e74c3c', '#f39c12', '#95a5a6'];

export function AvatarGroup(props: Props) {
    const count =
        props.items.length > props.visibleCount
            ? props.items.length - props.visibleCount
            : 0;

    const renderItems = () => {
        return (
            <div>
                {/* переписать на return */}
                {props.items.slice(0, props.visibleCount).map((item, i) => (
                    <div
                        className={style.avatar}
                        key={i}
                        style={{ backgroundColor: colors[i % colors.length] }}
                    >
                        {item.url ? (
                            <img
                                src={item.url}
                                alt={`${item.firstName} ${item.lastName}`}
                                className={style.avatarImage}
                            />
                        ) : (
                            getInitials2(item.firstName, item.lastName)
                        )}
                    </div>
                ))}
            </div>
        );
    };

    return (
        <div className={style.root}>
            {renderItems()}
            {count > 0 && (
                <div
                    className={style.avatar}
                    style={{
                        backgroundColor:
                            colors[props.visibleCount % colors.length],
                    }}
                >
                    +{count}
                </div>
            )}
        </div>
    );
}

//Сделать заново все

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
