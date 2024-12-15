import React from 'react';

type TableProps = {
    items: TableItem[];
};

type TableItem = {
    id: string;
    text: string;
    description: string;
};

function tableItemToJSXElement(tableItem: TableItem): React.JSX.Element {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'row',
                textAlign: 'center',
            }}
        >
            <div style={{ width: '33%', border: '1px solid' }}>
                {tableItem.id}
            </div>
            <div style={{ width: '33%', border: '1px solid' }}>
                {tableItem.text}
            </div>
            <div style={{ width: '33%', border: '1px solid' }}>
                {tableItem.description}
            </div>
        </div>
    );
}

// Какие типы данных может отрисовать реакт ? string, number, JSX.Element[]

export function Table(props: TableProps) {
    const array: React.JSX.Element[] = [];

    for (const item of props.items) {
        const jsx = tableItemToJSXElement(item);
        array.push(jsx);
    }

    return (
        <>
            <p>Text</p>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    textAlign: 'center',
                }}
            >
                <div style={{ width: '33%', border: '1px solid' }}>id</div>
                <div style={{ width: '33%', border: '1px solid' }}>text</div>
                <div style={{ width: '33%', border: '1px solid' }}>
                    description
                </div>
            </div>
            {array}
        </>
    );
}
