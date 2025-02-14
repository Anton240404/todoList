import React from 'react';

type Props = {
    password: string;
};

export function PasswordReq(props: Props) {
    const plusOrMinus1: string = props.password.length < 8 ? '-' : '+';
    const plusOrMinus2: string = !hasUpperLetters(props.password) ? '-' : '+';

    return (
        <div>
            <p>Password: {props.password}</p>
            <p>
                {plusOrMinus1}
                <span>Минимум 8 символов</span>
            </p>

            <p>
                {plusOrMinus2}
                <span>Есть заглавная буква</span>
            </p>
        </div>
    );
}

function hasUpperLetters(text: string): boolean {
    // Домашка через forEach 2-ым способом

    return text.toLowerCase() !== text;
    // "abc" !== "abc" false
    // "abc" !== "aBc" true
}
