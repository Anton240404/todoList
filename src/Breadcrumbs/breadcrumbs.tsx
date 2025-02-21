import React, { useState } from 'react';

type BreadcrumbsProps = {
    items: { label: string; href: string }[];
};

export function Breadcrumbs({ items }: BreadcrumbsProps) {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    return (
        <nav style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            {items.map((item, index) => {
                const isActive = activeIndex === index;

                return (
                    <span
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
                            style={{
                                textDecoration: 'none',
                                color: isActive ? 'black' : 'blue', // Активный элемент черный, остальные синие
                                fontWeight: isActive ? 'bold' : 'normal', // Активный элемент жирный, остальные обычные
                                cursor: 'pointer',
                            }}
                        >
                            {item.label}
                        </a>
                        {index !== items.length - 1 && (
                            <span style={{ color: '#aaa' }}>/</span>
                        )}
                    </span>
                );
            })}
        </nav>
    );
}
