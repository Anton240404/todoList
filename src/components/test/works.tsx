import React from 'react';

type Props = {
    text: string;
};

type Props2 = {
    number: string;
};

type Props3 = {
    text: string;
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
    let countComma = 0;

    for (let i = 0; i < props.text.length; i++) {
        const char = props.text[i];

        if (char === ',') {
            countComma++;
        }
    }

    return (
        <div>
            <div>Количество запятых: {countComma}</div>
        </div>
    );
}

// **Часы в реальном времени**: Часы с обновлением времени каждую секунду.// через сетИнтервал
// json placeholder CRUD (read delete create update) через fetch

// Ответить на вопрос про спорт, что дало, а что нет.

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
            <div>{isValid ? 'Номер валиден' : 'Номер НЕ валиден'}</div>
        </div>
    );
}

export function Word(props: Props3) {
    const words = props.text.split(' ');

    let longest = '';

    for (let i = 0; i < words.length; i++) {
        if (words[i].length > longest.length) {
            longest = words[i];
        }
    }
    return <div>это слово длиннее: {longest}</div>;
}

export function ToTitleCase(props: Props3) {
    const words = props.text.split(' ');

    const upperCase = [];

    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        const formattedWord =
            word[0].toUpperCase() + word.slice(1).toLowerCase();
        upperCase.push(formattedWord);
    }

    return <div>{upperCase.join(' ')}</div>;
}

export function IsPalindrome(props: Props3) {
    const lowerCaseText = props.text.toLowerCase();

    let cleanedText = '';

    for (let i = 0; i < lowerCaseText.length; i++) {
        const char = lowerCaseText[i];
        if (
            (char >= 'а' && char <= 'я') ||
            (char >= 'a' && char <= 'z') ||
            (char >= '0' && char <= '9')
        ) {
            cleanedText += char;
        }
    }

    let isPal = true;
    for (let j = 0; j < cleanedText.length / 2; j++) {
        if (cleanedText[j] !== cleanedText[cleanedText.length - 1 - j]) {
            isPal = false;
            break;
        }
    }

    return (
        <div>
            {isPal
                ? `${props.text} - Это палиндром`
                : `${props.text} - Это не палиндром`}
        </div>
    );
}

export function CountWords(props: Props3) {
    const words = props.text.trim().split(' ');
    const count = words[0] === '' ? 0 : words.length;

    return <div>Слов в тексте: {count}</div>;
}

export function ExtractNumbers(props: Props3) {
    const numbers: number[] = [];
    let currentNumber = '';

    for (let i = 0; i < props.text.length; i++) {
        const char = props.text[i];

        if ('0123456789.'.includes(char)) {
            currentNumber += char;
        } else if (currentNumber) {
            numbers.push(parseFloat(currentNumber));
            currentNumber = '';
        }
    }

    if (currentNumber) {
        numbers.push(parseFloat(currentNumber));
    }

    return <div>Числа в строке: {numbers.join(', ')}</div>;
}

export function FormatPhoneNumber(props: Props2) {
    const phone = props.number;

    let cleanedPhone = '';

    // Удаляем все символы, кроме цифр и "+"
    for (let i = 0; i < phone.length; i++) {
        const char = phone[i];
        if ((char >= '0' && char <= '9') || char === '+') {
            cleanedPhone += char;
        }
    }

    // Проверяем, начинается ли номер с "+7"
    if (!cleanedPhone.startsWith('+7')) {
        return <div>Неверный номер</div>;
    }

    // Удаляем "+7" и проверяем количество оставшихся цифр
    const digits = cleanedPhone.slice(2);
    if (digits.length !== 10) {
        return <div>Неверный номер</div>;
    }

    // Форматируем номер
    const formattedNumber = `+7 (${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6, 8)}-${digits.slice(8)}`;

    return <div>{formattedNumber}</div>;
}
