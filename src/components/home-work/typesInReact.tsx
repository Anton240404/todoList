import React from 'react';

const DisplayTypes = () => {
    const string = 'string';
    const number = 42;
    const booleanTrue = true;
    const booleanFalse = false;
    const array = [1, 2, 3];
    const object = { key: '123' };
    const null1 = null;
    const undefined1 = undefined;

    return (
        <div>
            <ul>
                <li>String: {string}</li>
                <li>Number: {number}</li>
                <li>Boolean (true): {booleanTrue}</li>
                <li>Boolean (false): {booleanFalse}</li>
                <li>Array: {array}</li>
                <li>Object: {JSON.stringify(object)}</li>
                <li>Null: {null1}</li>
                <li>Undefined: {undefined1}</li>
            </ul>
        </div>
    );
};

export default DisplayTypes;
