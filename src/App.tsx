import './components/css/reset.css';
import './components/css/todo.css';
import { Table } from './components/table/table';
import React from 'react';
import { TableNumbers } from './components/lists/numbers-list';

export type Todo = {
    id: string;
    text: string;
    description: string;
};

export const App = () => {
    return <TableNumbers />;
    // return (
    //     <>
    //         {Test({ name: 'Антон', age: 27 })}
    //         <Test name={'Антон'} age={27} />
    //         <Table
    //             items={[
    //                 {
    //                     id: '1',
    //                     text: 'text 1',
    //                     description: 'description 1',
    //                 },
    //                 {
    //                     id: '2',
    //                     text: 'text 2',
    //                     description: 'description 2',
    //                 },
    //                 {
    //                     id: '3',
    //                     text: 'text 3',
    //                     description: 'description 3',
    //                 },
    //                 {
    //                     id: '4',
    //                     text: 'text 4',
    //                     description: 'description 4',
    //                 },
    //             ]}
    //         />
    //         {Table({ items: [] })}
    //     </>
    // );
};

function Test(props: any) {
    console.log(props);
    return (
        <p>
            {props.name} {props.age}
        </p>
    );
}
