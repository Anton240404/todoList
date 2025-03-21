import React from 'react';

type Props = {
    text: string;
};

type Props2 = {
    number: string;
};

export function Strings(props: Props) {
    const vowels = 'аеёиоуыэюяAEIOUаеёиоуыэюяaeiou';
    const consonants = 'бвгджзйклмнпрстфхцчшщBCDFGHJKLMNPQRSTVWXYZ';

    let consonantCount = 0;
    let vowelsCount = 0;

    for (let i = 0; i < props.text.length; i++) {
        const char = props.text[i].toLowerCase();

        if (consonants.includes(char)) {
            consonantCount++;
        } else if (vowels.includes(char)) vowelsCount++;
    }

    return (
        <div>
            <div>Количество согласных: {consonantCount}</div>
            <div>Количество гласных: {vowelsCount}</div>
        </div>
    );
}

export function Strings2(props: Props) {
    const comma = ',';

    let countComma = 0;

    for (let i = 0; i < props.text.length; i++) {
        const char = props.text[i];

        if (comma.includes(char)) {
            countComma++;
        }
    }

    return (
        <div>
            <div>Количество запятых: {countComma}</div>
        </div>
    );
}

export function Phone(props: Props2) {
    const valid = '+7';

    let isValid = true;

    for (let i = 0; i < valid.length; i++) {
        if (props.number[i] !== valid[i]) {
            isValid = false;
            break;
        }
    }

    return (
        <div>
            <div>Номер телефона: {props.number}</div>
            <div>{isValid ? 'Номер валиден' : ' Номер НЕ валиден'}</div>
        </div>
    );
}
