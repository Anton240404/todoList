import React, { useState } from 'react';

type Props = {
    pages: number[];
    activePage: number;
    onSelectPage: (page: number) => void;
};

// 1) Добавить стрелочки

export function Pagination(props: Props) {
    return (
        <div style={{ display: 'flex', gap: '10px' }}>
            {props.pages.map((page) => (
                <div
                    onClick={() => {
                        props.onSelectPage(page);
                    }}
                    style={{
                        border: '1px solid #000',
                        background: page === props.activePage ? 'red' : '',
                    }}
                >
                    {page}
                </div>
            ))}
        </div>
    );
}

export function PaginationTest() {
    const [activePage, setActivePage] = useState(1);

    return (
        <div>
            <Pagination
                activePage={activePage}
                pages={[1, 2, 3]}
                onSelectPage={(page) => {
                    setActivePage(page);
                }}
            />
        </div>
    );
}
