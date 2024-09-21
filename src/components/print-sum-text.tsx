import React from 'react';
import { CustomButtonProps } from './utils/type';

// type Obj = {
//     data: string
//     count: number
// }

export function Button({
    text,
    textColor = 'black',
    padding = '10px 20px',
    backgroundColor = 'white',
    borderRadius = '5px',
    border = '1px solid black',
}: CustomButtonProps) {
    return (
        <button
            style={{
                color: textColor,
                padding: padding,
                backgroundColor: backgroundColor,
                borderRadius: borderRadius,
                border: border,
            }}
        >
            {text}
        </button>
    );
}
