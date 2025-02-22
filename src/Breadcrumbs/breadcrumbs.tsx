import React, { useState } from 'react';

type BreadcrumbsProps = {
    // Вынести в отдельный тип
    items: { label: string; href: string }[];
};

export function Breadcrumbs({ items }: BreadcrumbsProps) {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    return (
        // Стили вынести в css
        <nav style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            {items.map((item, index) => {
                const isActive = activeIndex === index;

                // Где key ?
                return (
                    <span
                        // Стили вынести в css
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                        }}
                    >
                        <a
                            href={item.href}
                            onClick={(e) => {
                                e.preventDefault();
                                setActiveIndex(index);
                            }}
                            // Стили вынести в css
                            style={{
                                textDecoration: 'none',
                                color: isActive ? 'black' : 'blue', // Активный элемент черный, остальные синие
                                fontWeight: isActive ? 'bold' : 'normal', // Активный элемент жирный, остальные обычные
                                // Для чего ?
                                cursor: 'pointer',
                            }}
                        >
                            {item.label}
                        </a>
                        {index !== items.length - 1 && (
                            // Стили вынести в css
                            <span style={{ color: '#aaa' }}>/</span>
                        )}
                    </span>
                );
            })}
        </nav>
    );
}
