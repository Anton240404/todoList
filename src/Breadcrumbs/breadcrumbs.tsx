import React, { useState } from 'react';
import styls from './breadcrumbs.module.css';

type BreadcrumbItem = {
    label: string;
    href: string;
};

type BreadcrumbsProps = {
    items: BreadcrumbItem[];
};

export function Breadcrumbs({ items }: BreadcrumbsProps) {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    return (
        <nav className={'styls.breadcrumbs'}>
            {items.map((item, index) => {
                const isActive = activeIndex === index;

                return (
                    <span key={index} className={'styls.breadcrumbItem'}>
                        <a
                            href={item.href}
                            onClick={(e) => {
                                e.preventDefault();
                                setActiveIndex(index);
                            }}
                            className={isActive ? styls.active : ''}
                        >
                            {item.label}
                        </a>
                        {index !== items.length - 1 && (
                            <span className={'styls.separator'}>/</span>
                        )}
                    </span>
                );
            })}
        </nav>
    );
}
